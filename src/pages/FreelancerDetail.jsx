import { useParams, Link } from 'react-router-dom'
import { getFreelancerById, services } from '../data/mockData.js'
import ServiceCard from '../components/ServiceCard.jsx'

export default function FreelancerDetail(){
  const { id } = useParams()
  const f = getFreelancerById(id)
  if(!f) return <div className="container" style={{padding:40,textAlign:'center'}}><h2>Freelancer topilmadi</h2></div>
  const myServices = services.filter(s=> s.freelancerId===f.id).slice(0,8)

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'16px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'360px 1fr',gap:20,alignItems:'start'}}>
          {/* Left profile card */}
          <div style={{position:'sticky',top:90,display:'flex',flexDirection:'column',gap:16}}>
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24,textAlign:'center'}}>
              <img src={f.avatar} alt={f.name} style={{width:110,height:110,borderRadius:'50%',margin:'0 auto',border:'4px solid #e8f8f0'}}/>
              <h2 style={{marginTop:14,fontSize:20}}>{f.name}</h2>
              <p style={{color:'#62646a',fontSize:14}}>{f.profession}</p>
              <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:10,flexWrap:'wrap'}}>
                <span style={{background: f.level==='Top Rated' ? '#1dbf73':'#ff6b6b',color:'#fff',fontSize:11,fontWeight:800,padding:'4px 8px',borderRadius:4}}>{f.level.toUpperCase()}</span>
                <span style={{color:'#ffb33e',fontWeight:700}}>★ {f.rating} ({f.reviewsCount})</span>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:18,textAlign:'left',fontSize:13}}>
                <div><div style={{color:'#74767e'}}>Joylashuv</div><strong>{f.location}</strong></div>
                <div><div style={{color:'#74767e'}}>A'zo bo'lgan</div><strong>{f.memberSince}</strong></div>
                <div><div style={{color:'#74767e'}}>Oxirgi yetkazish</div><strong>2 soat oldin</strong></div>
                <div><div style={{color:'#74767e'}}>Javob vaqti</div><strong>1 soat</strong></div>
              </div>

              <div style={{borderTop:'1px solid #e4e5e7',marginTop:16,paddingTop:16,display:'flex',flexDirection:'column',gap:8}}>
                <button className="btn btn-primary" style={{width:'100%',borderRadius:8}}>Bog'lanish</button>
                <Link to={`/services?category=${f.category}`} className="btn btn-outline" style={{width:'100%'}}>Xizmatlarini ko'rish</Link>
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20}}>
              <h4>Tillar</h4>
              <p style={{color:'#62646a',fontSize:14,marginTop:6}}>{f.languages} — barchasi native darajada</p>
              <h4 style={{marginTop:16}}>Ko'nikmalar</h4>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:8}}>
                {f.skills.map(s=> <span key={s} style={{background:'#f5f5f5',border:'1px solid #e4e5e7',padding:'6px 10px',borderRadius:99,fontSize:12,fontWeight:500}}>{s}</span>)}
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3>Men haqimda</h3>
              <p style={{color:'#404145',lineHeight:1.7,marginTop:10}}>{f.about}</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:20,textAlign:'center',background:'#fafafa',borderRadius:10,padding:16}}>
                <div><div style={{fontSize:22,fontWeight:800}}>{f.completedJobs}</div><div style={{fontSize:12,color:'#74767e'}}>Yakunlangan ish</div></div>
                <div><div style={{fontSize:22,fontWeight:800}}>${f.hourlyRate}</div><div style={{fontSize:12,color:'#74767e'}}>Soatlik stavka</div></div>
                <div><div style={{fontSize:22,fontWeight:800}}>{f.rating}</div><div style={{fontSize:12,color:'#74767e'}}>Reyting</div></div>
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3>Portfolio</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginTop:14}}>
                {f.portfolio.map((img,i)=>(
                  <img key={i} src={img} alt={`portfolio ${i}`} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}}/>
                ))}
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3>Mening xizmatlarim ({myServices.length})</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:14,marginTop:14}}>
                {myServices.map(s=> <ServiceCard key={s.id} service={s}/>)}
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3>Sharhlar ({f.reviews.length})</h3>
              <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:16}}>
                {f.reviews.map(r=>(
                  <div key={r.id} style={{display:'flex',gap:12,borderBottom:'1px solid #f0f0f0',paddingBottom:16}}>
                    <img src={r.avatar} alt={r.author} style={{width:40,height:40,borderRadius:'50%'}}/>
                    <div>
                      <div style={{fontWeight:600}}>{r.author} <span style={{color:'#ffb33e',marginLeft:6}}>{'★'.repeat(r.rating)}</span> <span style={{color:'#74767e',fontSize:12,marginLeft:6}}>{r.date}</span></div>
                      <p style={{color:'#404145',fontSize:14,marginTop:6}}>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns:360px"]{grid-template-columns:1fr !important}
          div[style*="position:sticky"]{position:static !important}
          div[style*="repeat(3,1fr)"]{grid-template-columns:1fr 1fr !important}
        }
      `}</style>
    </div>
  )
}
