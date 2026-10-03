import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, services } from '../data/mockData.js'
import ServiceCard from '../components/ServiceCard.jsx'
import Filters from '../components/Filters.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function Services(){
  const { searchQuery } = useApp()
  const [searchParams] = useSearchParams()
  const initialCat = searchParams.get('category') || ''
  const query = searchParams.get('q') || searchQuery

  const [filters, setFilters] = useState({
    category: initialCat,
    price: [0, 500],
    rating: 0,
    delivery: 30,
    level: '',
  })
  const [sort, setSort] = useState('recommended')
  const [page, setPage] = useState(1)
  const perPage = 12

  useEffect(()=>{ if(initialCat) setFilters(f=> ({...f, category: initialCat})) },[initialCat])
  useEffect(()=> setPage(1), [filters, query, sort])

  const filtered = useMemo(()=>{
    let list = [...services]
    if(query){
      const q = query.toLowerCase()
      list = list.filter(s=> s.title.toLowerCase().includes(q) || s.categoryName.toLowerCase().includes(q) || s.freelancerName.toLowerCase().includes(q) || s.skills.some(sk=> sk.toLowerCase().includes(q)))
    }
    if(filters.category) list = list.filter(s=> s.category===filters.category)
    list = list.filter(s=> s.price >= filters.price[0] && s.price <= filters.price[1])
    if(filters.rating) list = list.filter(s=> s.rating >= filters.rating)
    if(filters.delivery!==30) list = list.filter(s=> s.deliveryTime <= filters.delivery)
    if(filters.level) list = list.filter(s=> s.freelancerLevel===filters.level)

    if(sort==='price-low') list.sort((a,b)=> a.price-b.price)
    if(sort==='price-high') list.sort((a,b)=> b.price-a.price)
    if(sort==='rating') list.sort((a,b)=> b.rating - a.rating)
    if(sort==='newest') list.sort((a,b)=> b.reviewsCount - a.reviewsCount)
    return list
  },[filters, query, sort])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page-1)*perPage, page*perPage)

  const clear = ()=> setFilters({category:'',price:[0,500],rating:0,delivery:30,level:''})

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'16px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div>
            <h1 style={{fontSize:26,fontFamily:'Poppins'}}>{filters.category ? categories.find(c=> c.id===filters.category)?.name : 'Barcha xizmatlar'}</h1>
            <p style={{color:'#62646a',fontSize:14,marginTop:4}}>{filtered.length} ta xizmat topildi {query && <>• <strong>"{query}"</strong> uchun</>}</p>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <span style={{fontSize:13,color:'#62646a',fontWeight:600}}>Saralash:</span>
            <select value={sort} onChange={e=> setSort(e.target.value)} style={{padding:'10px 12px',border:'1px solid #dadbdd',borderRadius:8,background:'#fff',fontSize:14}}>
              <option value="recommended">Tavsiya etiladi</option>
              <option value="rating">Reyting bo'yicha</option>
              <option value="price-low">Arzon birinchi</option>
              <option value="price-high">Qimmat birinchi</option>
              <option value="newest">Mashhur</option>
            </select>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:20,marginTop:20,alignItems:'start'}}>
          <div className="filter-col">
            <Filters filters={filters} setFilters={setFilters} categories={categories} onClear={clear}/>
          </div>

          <div>
            {paginated.length===0 ? (
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:40,textAlign:'center'}}>
                <div style={{fontSize:40}}>🔍</div>
                <h3 style={{marginTop:12}}>Hech narsa topilmadi</h3>
                <p style={{color:'#74767e',marginTop:6}}>Filtrlarni o'zgartirib ko'ring yoki boshqa so'z qidiring.</p>
                <button onClick={clear} className="btn btn-primary" style={{marginTop:14}}>Filtrlarni tozalash</button>
              </div>
            ) : (
              <>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16}}>
                  {paginated.map(s=> <ServiceCard key={s.id} service={s}/>)}
                </div>

                {totalPages>1 && (
                  <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:24,flexWrap:'wrap'}}>
                    <button disabled={page===1} onClick={()=> setPage(p=> Math.max(1,p-1))} className="btn btn-outline" style={{opacity: page===1?.5:1}}>Oldingi</button>
                    {Array.from({length: Math.min(totalPages,7)}, (_,i)=>{
                      let p
                      if(totalPages<=7) p=i+1
                      else if(page<=4) p=i+1
                      else if(page>=totalPages-3) p= totalPages-6+i
                      else p= page-3+i
                      return (
                        <button key={p} onClick={()=> setPage(p)} style={{minWidth:40,height:40,borderRadius:8,border:'1px solid',borderColor: page===p?'#1dbf73':'#e4e5e7',background: page===p?'#1dbf73':'#fff',color: page===p?'#fff':'#222325',fontWeight:600}}>{p}</button>
                      )
                    })}
                    <button disabled={page===totalPages} onClick={()=> setPage(p=> Math.min(totalPages,p+1))} className="btn btn-outline">Keyingi</button>
                  </div>
                )}
                <div style={{textAlign:'center',color:'#74767e',fontSize:13,marginTop:10}}>{page} / {totalPages} sahifa • {filtered.length} xizmat</div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns:300px"]{grid-template-columns:1fr !important}
          .filter-col{position:static !important}
        }
      `}</style>
    </div>
  )
}
