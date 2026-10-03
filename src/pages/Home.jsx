import { Link } from 'react-router-dom'
import { categories, services, freelancers } from '../data/mockData.js'
import ServiceCard from '../components/ServiceCard.jsx'
import FreelancerCard from '../components/FreelancerCard.jsx'
import { useState } from 'react'

export default function Home(){
  const [activeCat, setActiveCat] = useState('all')
  const featured = services.slice(0,8)
  const topFreelancers = [...freelancers].sort((a,b)=> b.rating - a.rating).slice(0,4)
  const filtered = activeCat==='all' ? featured : services.filter(s=> s.category===activeCat).slice(0,8)

  return (
    <div>
      {/* Hero */}
      <section style={{background:'#0a0e1a',color:'#fff',overflow:'hidden',position:'relative'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:32,alignItems:'center',padding:'56px 24px',minHeight:480}}>
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',padding:'6px 14px',borderRadius:99,fontSize:13,marginBottom:16}}>
              <span style={{width:8,height:8,background:'#1dbf73',borderRadius:'50%'}}></span> #1 Freelance Marketplace O'zbekistonda
            </div>
            <h1 style={{fontFamily:'Poppins',fontSize:'46px',lineHeight:1.1,fontWeight:700,letterSpacing:-1}}>
              Top talentni <span style={{color:'#1dbf73'}}>toping</span>,<br/>biznesingizni o'stiring
            </h1>
            <p style={{color:'#b5b6ba',fontSize:17,marginTop:16,lineHeight:1.6}}>550+ professional xizmat, 90+ tasdiqlangan freelancer. Web, dizayn, marketing va yana ko'p — bir joyda.</p>

            <div style={{display:'flex',gap:14,marginTop:28,flexWrap:'wrap'}}>
              <Link to="/services" className="btn btn-primary btn-lg" style={{padding:'14px 28px',fontSize:16,borderRadius:10}}>Xizmatlarni ko'rish →</Link>
              <Link to="/freelancers" className="btn btn-lg" style={{background:'rgba(255,255,255,.1)',color:'#fff',border:'1px solid rgba(255,255,255,.2)',backdropFilter:'blur(6px)'}}>Freelancer topish</Link>
            </div>

            <div style={{display:'flex',gap:24,marginTop:28,alignItems:'center',flexWrap:'wrap'}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <div style={{display:'flex'}}>{[1,2,3,4].map(i=> <img key={i} src={`https://i.pravatar.cc/80?img=${10+i}`} style={{width:32,height:32,borderRadius:'50%',border:'2px solid #0a0e1a',marginLeft: i===1?0:-8}} alt=""/> )}</div>
                <div style={{fontSize:13,lineHeight:1.2}}><strong>12,400+</strong><br/><span style={{color:'#b5b6ba'}}>mamnun mijozlar</span></div>
              </div>
              <div style={{width:1,height:36,background:'rgba(255,255,255,.15)'}}></div>
              <div style={{fontSize:13}}><span style={{color:'#ffb33e'}}>★★★★★</span> <strong>4.8/5</strong> <span style={{color:'#b5b6ba'}}>(8,920 sharh)</span></div>
            </div>
          </div>

          <div style={{position:'relative',display:'grid',placeItems:'center'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(600px 300px at 50% 30%, rgba(29,191,115,.25), transparent 70%)'}}></div>
            <img src="https://picsum.photos/seed/hero-market/640/480" alt="hero" style={{width:'100%',maxWidth:520,borderRadius:18,boxShadow:'0 20px 60px rgba(0,0,0,.4)',border:'1px solid rgba(255,255,255,.1)',position:'relative'}}/>
            <div style={{position:'absolute',bottom:20,left:10,background:'#fff',color:'#222325',padding:'12px 16px',borderRadius:12,boxShadow:'0 8px 24px rgba(0,0,0,.2)',display:'flex',alignItems:'center',gap:12}}>
              <img src="https://i.pravatar.cc/100?img=15" style={{width:40,height:40,borderRadius:'50%'}} alt=""/>
              <div style={{fontSize:13}}><strong>Sarah Kim</strong><div style={{color:'#62646a',fontSize:12}}>Top Rated • UI/UX Designer</div></div>
              <span style={{background:'#1dbf73',color:'#fff',padding:'4px 8px',borderRadius:6,fontSize:12,fontWeight:700}}>$85/hr</span>
            </div>
            <div style={{position:'absolute',top:30,right:10,background:'#fff',color:'#222325',padding:'10px 14px',borderRadius:12,boxShadow:'0 8px 24px rgba(0,0,0,.2)',fontSize:13}}>
              <div style={{color:'#74767e',fontSize:11,textTransform:'uppercase',letterSpacing:.8}}>Buyurtma yakunlandi</div>
              <div style={{fontWeight:700,marginTop:2}}>✓ Website redesign - $1,200</div>
              <div style={{color:'#ffb33e',fontSize:12}}>★★★★★ 5.0 • 2 soat oldin</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{background:'#fafafa',borderBottom:'1px solid #e4e5e7'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 24px',flexWrap:'wrap',gap:16,fontSize:13,color:'#74767e',fontWeight:600}}>
          <span>Ishonchli hamkorlar:</span>
          <span style={{fontWeight:800,color:'#222325',letterSpacing:1}}>Google</span>
          <span style={{fontWeight:800,color:'#222325'}}>Meta</span>
          <span style={{fontWeight:800,color:'#222325'}}>Paypal</span>
          <span style={{fontWeight:800,color:'#222325'}}>NETFLIX</span>
          <span style={{fontWeight:800,color:'#222325'}}>Payoneer</span>
          <span style={{fontWeight:800,color:'#222325'}}>Uzum</span>
        </div>
      </section>

      {/* Categories */}
      <section className="container" style={{padding:'36px 24px 20px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',flexWrap:'wrap',gap:16}}>
          <div>
            <h2 style={{fontSize:26,fontFamily:'Poppins'}}>Ommabop kategoriyalar</h2>
            <p style={{color:'#62646a',marginTop:6}}>Har bir kategoriyada 50+ professional xizmat — tanlang va boshlang</p>
          </div>
          <Link to="/services" style={{color:'#1dbf73',fontWeight:600}}>Barchasini ko'rish →</Link>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:14,marginTop:20}}>
          {categories.map(c=>{
            const count = services.filter(s=> s.category===c.id).length
            return (
              <Link key={c.id} to={`/services?category=${c.id}`} style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:'18px 14px',textAlign:'center',transition:'all .2s'}} onMouseEnter={e=> e.currentTarget.style.borderColor='#1dbf73'} onMouseLeave={e=> e.currentTarget.style.borderColor='#e4e5e7'}>
                <div style={{fontSize:28,marginBottom:8}}>{c.icon}</div>
                <div style={{fontWeight:600,fontSize:13}}>{c.name}</div>
                <div style={{color:'#74767e',fontSize:12,marginTop:4}}>{count} xizmat</div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Popular services tabs */}
      <section className="container" style={{padding:'24px 24px'}}>
        <h2 style={{fontSize:22,fontFamily:'Poppins',marginBottom:14}}>Mashhur xizmatlar</h2>
        <div style={{display:'flex',gap:8,overflowX:'auto',paddingBottom:8}}>
          <button onClick={()=> setActiveCat('all')} style={{padding:'8px 16px',borderRadius:99,border:'1px solid',borderColor: activeCat==='all' ? '#222325' : '#e4e5e7',background: activeCat==='all' ? '#222325':'#fff',color: activeCat==='all'?'#fff':'#62646a',fontWeight:600,fontSize:13,whiteSpace:'nowrap'}}>Barchasi</button>
          {categories.slice(0,6).map(c=>(
            <button key={c.id} onClick={()=> setActiveCat(c.id)} style={{padding:'8px 16px',borderRadius:99,border:'1px solid',borderColor: activeCat===c.id ? '#222325' : '#e4e5e7',background: activeCat===c.id ? '#222325':'#fff',color: activeCat===c.id?'#fff':'#62646a',fontWeight:600,fontSize:13,whiteSpace:'nowrap'}}>{c.name}</button>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16,marginTop:16}}>
          {filtered.map(s=> <ServiceCard key={s.id} service={s}/>)}
        </div>
        <div style={{textAlign:'center',marginTop:20}}>
          <Link to="/services" className="btn btn-outline" style={{padding:'12px 24px',borderRadius:10}}>Barcha xizmatlarni ko'rish</Link>
        </div>
      </section>

      {/* How it works */}
      <section style={{background:'#f5f5f5',marginTop:24,padding:'40px 0'}}>
        <div className="container" style={{padding:'0 24px'}}>
          <h2 style={{fontSize:24,fontFamily:'Poppins',textAlign:'center'}}>Qanday ishlaydi?</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:20,marginTop:24}}>
            {[
              {n:'01', title:'Xizmat tanlang', desc:'550+ xizmat orasidan sizga mosini toping, portfolio va sharhlarni ko\'ring.'},
              {n:'02', title:'Buyurtma bering', desc:'Paket tanlang, talablaringizni yozing va xavfsiz to\'lov qiling.'},
              {n:'03', title:'Natijani oling', desc:'Freelancer ishni yetkazadi, tasdiqlang va sharh qoldiring. Pul himoyalangan.'},
            ].map(s=>(
              <div key={s.n} style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:14,padding:24}}>
                <div style={{width:44,height:44,background:'#e8f8f0',color:'#1dbf73',borderRadius:10,display:'grid',placeItems:'center',fontWeight:800}}>{s.n}</div>
                <h3 style={{marginTop:14,fontSize:16}}>{s.title}</h3>
                <p style={{color:'#62646a',fontSize:14,marginTop:6,lineHeight:1.6}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top freelancers */}
      <section className="container" style={{padding:'36px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{fontSize:22,fontFamily:'Poppins'}}>Top freelancerlar</h2>
          <Link to="/freelancers" style={{color:'#1dbf73',fontWeight:600}}>Barchasini ko'rish →</Link>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16,marginTop:16}}>
          {topFreelancers.map(f=> <FreelancerCard key={f.id} freelancer={f}/>)}
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'#1dbf73',color:'#fff',padding:'28px 0'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:16,textAlign:'center',padding:'0 24px'}}>
          <div><div style={{fontSize:28,fontWeight:800}}>550+</div><div style={{opacity:.9,fontSize:13}}>Faol xizmat</div></div>
          <div><div style={{fontSize:28,fontWeight:800}}>90+</div><div style={{opacity:.9,fontSize:13}}>Tasdiqlangan freelancer</div></div>
          <div><div style={{fontSize:28,fontWeight:800}}>12k+</div><div style={{opacity:.9,fontSize:13}}>Yakunlangan loyiha</div></div>
          <div><div style={{fontSize:28,fontWeight:800}}>4.8★</div><div style={{opacity:.9,fontSize:13}}>O'rtacha reyting</div></div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          section .container[style*="grid-template-columns:1.1fr"]{grid-template-columns:1fr !important}
        }
      `}</style>
    </div>
  )
}
