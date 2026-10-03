import { useMemo, useState } from 'react'
import { freelancers, categories } from '../data/mockData.js'
import FreelancerCard from '../components/FreelancerCard.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function Freelancers(){
  const { searchQuery } = useApp()
  const [level, setLevel] = useState('')
  const [cat, setCat] = useState('')
  const [price, setPrice] = useState([0,100])
  const [rating, setRating] = useState(0)
  const [sort, setSort] = useState('rating')
  const [page, setPage] = useState(1)
  const perPage = 12

  const filtered = useMemo(()=>{
    let list=[...freelancers]
    if(searchQuery){
      const q=searchQuery.toLowerCase()
      list=list.filter(f=> f.name.toLowerCase().includes(q) || f.profession.toLowerCase().includes(q) || f.skills.some(s=> s.toLowerCase().includes(q)))
    }
    if(cat) list=list.filter(f=> f.category===cat || f.categories.includes(cat))
    if(level) list=list.filter(f=> f.level===level)
    if(rating) list=list.filter(f=> f.rating>=rating)
    list=list.filter(f=> f.hourlyRate>=price[0] && f.hourlyRate<=price[1])
    if(sort==='rating') list.sort((a,b)=> b.rating-a.rating)
    if(sort==='jobs') list.sort((a,b)=> b.completedJobs-a.completedJobs)
    if(sort==='price-low') list.sort((a,b)=> a.hourlyRate-b.hourlyRate)
    if(sort==='price-high') list.sort((a,b)=> b.hourlyRate-a.hourlyRate)
    return list
  },[searchQuery,cat,level,rating,price,sort])

  const paginated = filtered.slice((page-1)*perPage, page*perPage)
  const totalPages = Math.ceil(filtered.length/perPage)

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'16px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div>
            <h1 style={{fontSize:26,fontFamily:'Poppins'}}>Freelancerlar</h1>
            <p style={{color:'#62646a',fontSize:14,marginTop:4}}>{filtered.length} freelancer topildi</p>
          </div>
          <select value={sort} onChange={e=> setSort(e.target.value)} style={{padding:'10px 12px',border:'1px solid #dadbdd',borderRadius:8,background:'#fff'}}>
            <option value="rating">Reyting bo'yicha</option>
            <option value="jobs">Ishlar soni</option>
            <option value="price-low">Arzon birinchi</option>
            <option value="price-high">Qimmat birinchi</option>
          </select>
        </div>

        <div style={{display:'flex',gap:8,overflowX:'auto',padding:'12px 0',alignItems:'center'}}>
          <select value={cat} onChange={e=> setCat(e.target.value)} style={{padding:'8px 12px',border:'1px solid #dadbdd',borderRadius:99,background:'#fff',fontSize:13}}>
            <option value="">Barcha kategoriyalar</option>
            {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select value={level} onChange={e=> setLevel(e.target.value)} style={{padding:'8px 12px',border:'1px solid #dadbdd',borderRadius:99,background:'#fff',fontSize:13}}>
            <option value="">Barcha darajalar</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 1">Level 1</option>
          </select>
          <select value={rating} onChange={e=> setRating(Number(e.target.value))} style={{padding:'8px 12px',border:'1px solid #dadbdd',borderRadius:99,background:'#fff',fontSize:13}}>
            <option value={0}>Istalgan reyting</option>
            <option value={4.5}>4.5+ ★</option>
            <option value={4}>4.0+ ★</option>
          </select>
          <div style={{display:'flex',alignItems:'center',gap:6,background:'#fff',border:'1px solid #dadbdd',borderRadius:99,padding:'6px 12px',fontSize:13}}>
            <span>${price[0]}-${price[1]}/h</span>
            <input type="range" min="0" max="100" value={price[1]} onChange={e=> setPrice([price[0], Number(e.target.value)])} style={{accentColor:'#1dbf73',width:80}}/>
          </div>
          <button onClick={()=> {setCat('');setLevel('');setRating(0);setPrice([0,100])}} style={{background:'none',border:'none',color:'#1dbf73',fontWeight:600,fontSize:13,whiteSpace:'nowrap'}}>Tozalash</button>
        </div>

        {paginated.length===0 ? (
          <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:40,textAlign:'center',marginTop:16}}>
            <h3>Freelancer topilmadi</h3>
            <p style={{color:'#74767e',marginTop:6}}>Filtrlarni o'zgartiring.</p>
          </div>
        ) : (
          <>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16,marginTop:12}}>
              {paginated.map(f=> <FreelancerCard key={f.id} freelancer={f}/>)}
            </div>
            {totalPages>1 && (
              <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:20}}>
                <button disabled={page===1} onClick={()=> setPage(p=> p-1)} className="btn btn-outline">Oldingi</button>
                {Array.from({length:totalPages},(_,i)=> i+1).slice(0,7).map(p=>(
                  <button key={p} onClick={()=> setPage(p)} style={{minWidth:40,height:40,borderRadius:8,border:'1px solid',borderColor: page===p?'#1dbf73':'#e4e5e7',background: page===p?'#1dbf73':'#fff',color: page===p?'#fff':'#222325',fontWeight:600}}>{p}</button>
                ))}
                <button disabled={page===totalPages} onClick={()=> setPage(p=> p+1)} className="btn btn-outline">Keyingi</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
