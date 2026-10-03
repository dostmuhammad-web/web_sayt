import { useParams, Link, useNavigate } from 'react-router-dom'
import { getServiceById, getFreelancerById, services } from '../data/mockData.js'
import { useApp } from '../context/AppContext.jsx'
import { useState } from 'react'
import ServiceCard from '../components/ServiceCard.jsx'

export default function ServiceDetail(){
  const { id } = useParams()
  const service = getServiceById(id)
  const { favorites, toggleFavorite, placeOrder, showToast, user } = useApp()
  const navigate = useNavigate()
  const [activePkg, setActivePkg] = useState('standard')
  const [activeImg, setActiveImg] = useState(0)
  const [showOrder, setShowOrder] = useState(false)
  const [req, setReq] = useState('')
  const [ordering, setOrdering] = useState(false)

  if(!service) return <div className="container" style={{padding:40,textAlign:'center'}}><h2>Xizmat topilmadi</h2><Link to="/services" className="btn btn-primary" style={{marginTop:16}}>Xizmatlarga qaytish</Link></div>

  const freelancer = getFreelancerById(service.freelancerId)
  const isFav = favorites.includes(service.id)
  const pkg = service.packages[activePkg]
  const related = services.filter(s=> s.category===service.category && s.id!==service.id).slice(0,4)

  const handleOrder = ()=>{
    if(!user){
      showToast('Buyurtma uchun tizimga kiring','info')
      navigate('/login')
      return
    }
    if(!req.trim()){
      showToast('Iltimos, talablaringizni yozing','info')
      return
    }
    setOrdering(true)
    setTimeout(()=>{
      placeOrder(service, activePkg, req)
      setOrdering(false)
      setShowOrder(false)
      setReq('')
      navigate('/orders')
    },600)
  }

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'16px 24px'}}>
        <div style={{fontSize:13,color:'#74767e',display:'flex',gap:6,flexWrap:'wrap'}}>
          <Link to="/">Bosh sahifa</Link> <span>/</span> <Link to="/services">Xizmatlar</Link> <span>/</span> <Link to={`/services?category=${service.category}`}>{service.categoryName}</Link> <span>/</span> <span style={{color:'#222325',fontWeight:600}}>{service.title.slice(0,40)}...</span>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 380px',gap:24,marginTop:16,alignItems:'start'}}>
          {/* Left */}
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,overflow:'hidden'}}>
              <div style={{position:'relative'}}>
                <img src={service.images[activeImg]} alt={service.title} style={{width:'100%',height:420,objectFit:'cover'}}/>
                <button onClick={()=> toggleFavorite(service.id)} style={{position:'absolute',top:14,right:14,width:40,height:40,borderRadius:'50%',background: isFav ? '#ff6b6b':'#fff',color: isFav?'#fff':'#62646a',border:'none',display:'grid',placeItems:'center',fontSize:18,boxShadow:'0 2px 10px rgba(0,0,0,.15)'}}>{isFav?'♥':'♡'}</button>
              </div>
              <div style={{display:'flex',gap:8,padding:12,overflowX:'auto'}}>
                {service.images.map((img,i)=>(
                  <img key={i} src={img} onClick={()=> setActiveImg(i)} style={{width:80,height:60,objectFit:'cover',borderRadius:8,border: activeImg===i?'2px solid #1dbf73':'2px solid transparent',cursor:'pointer',opacity: activeImg===i?1:.7}} alt=""/>
                ))}
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h1 style={{fontSize:22,lineHeight:1.4}}>{service.title}</h1>
              <div style={{display:'flex',alignItems:'center',gap:12,marginTop:14,flexWrap:'wrap'}}>
                <Link to={`/freelancers/${service.freelancerId}`} style={{display:'flex',alignItems:'center',gap:10}}>
                  <img src={service.freelancerAvatar} alt={service.freelancerName} style={{width:36,height:36,borderRadius:'50%'}}/>
                  <span style={{fontWeight:600}}>{service.freelancerName}</span>
                  <span style={{background:'#222325',color:'#fff',fontSize:10,fontWeight:800,padding:'3px 6px',borderRadius:4}}>{service.freelancerLevel}</span>
                </Link>
                <span style={{width:1,height:20,background:'#e4e5e7'}}></span>
                <span style={{color:'#ffb33e',fontWeight:700}}>★ {service.rating.toFixed(1)} <span style={{color:'#74767e',fontWeight:400}}>({service.reviewsCount} sharh)</span></span>
              </div>
              <p style={{whiteSpace:'pre-wrap',color:'#404145',lineHeight:1.7,marginTop:18,fontSize:15}}>{service.description}</p>

              <div style={{marginTop:18,display:'flex',flexWrap:'wrap',gap:8}}>
                {service.skills.map(s=> <span key={s} style={{background:'#f5f5f5',border:'1px solid #e4e5e7',padding:'6px 12px',borderRadius:99,fontSize:13,fontWeight:500}}>{s}</span>)}
              </div>
            </div>

            {/* Freelancer about */}
            {freelancer && (
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
                <h3 style={{fontSize:18}}>Freelancer haqida</h3>
                <div style={{display:'flex',gap:16,marginTop:16,alignItems:'start'}}>
                  <img src={freelancer.avatar} alt={freelancer.name} style={{width:72,height:72,borderRadius:'50%'}}/>
                  <div style={{flex:1}}>
                    <Link to={`/freelancers/${freelancer.id}`} style={{fontWeight:700,fontSize:16}}>{freelancer.name}</Link>
                    <div style={{color:'#62646a',fontSize:14}}>{freelancer.profession} • {freelancer.location}</div>
                    <div style={{display:'flex',gap:12,marginTop:6,fontSize:13,flexWrap:'wrap'}}>
                      <span>★ {freelancer.rating} ({freelancer.reviewsCount})</span>
                      <span>• {freelancer.completedJobs} ish</span>
                      <span>• ${freelancer.hourlyRate}/soat</span>
                    </div>
                    <p style={{color:'#62646a',fontSize:14,marginTop:10,lineHeight:1.6}}>{freelancer.about.slice(0,180)}...</p>
                    <Link to={`/freelancers/${freelancer.id}`} className="btn btn-outline btn-sm" style={{marginTop:10}}>Profilni ko'rish</Link>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3 style={{fontSize:18}}>Sharhlar <span style={{color:'#74767e',fontWeight:400}}>({service.reviewsCount})</span></h3>
              <div style={{display:'flex',alignItems:'center',gap:12,marginTop:12}}>
                <span style={{fontSize:32,fontWeight:800}}>{service.rating.toFixed(1)}</span>
                <div><div style={{color:'#ffb33e',letterSpacing:2}}>★★★★★</div><div style={{fontSize:12,color:'#74767e'}}>{service.reviewsCount} sharh asosida</div></div>
              </div>
              <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:14}}>
                {freelancer?.reviews.slice(0,3).map(r=>(
                  <div key={r.id} style={{borderTop:'1px solid #f0f0f0',paddingTop:14,display:'flex',gap:12}}>
                    <img src={r.avatar} alt={r.author} style={{width:36,height:36,borderRadius:'50%'}}/>
                    <div>
                      <div style={{fontWeight:600,fontSize:14}}>{r.author} <span style={{color:'#ffb33e',marginLeft:6}}>{'★'.repeat(r.rating)}</span> <span style={{color:'#74767e',fontWeight:400,fontSize:12,marginLeft:6}}>{r.date}</span></div>
                      <p style={{color:'#404145',fontSize:14,marginTop:4}}>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24}}>
              <h3>FAQ</h3>
              <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
                {service.faqs.map((f,i)=>(
                  <details key={i} style={{border:'1px solid #e4e5e7',borderRadius:8,padding:12}}>
                    <summary style={{fontWeight:600,cursor:'pointer',fontSize:14}}>{f.q}</summary>
                    <p style={{color:'#62646a',marginTop:8,fontSize:14}}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Packages */}
          <div style={{position:'sticky',top:90,alignSelf:'start'}}>
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,overflow:'hidden'}}>
              <div style={{display:'flex',borderBottom:'1px solid #e4e5e7'}}>
                {Object.entries(service.packages).map(([key,p])=>(
                  <button key={key} onClick={()=> setActivePkg(key)} style={{flex:1,padding:'14px 8px',background: activePkg===key?'#fff':'#fafafa',border:'none',borderBottom: activePkg===key?'3px solid #1dbf73':'3px solid transparent',fontWeight: activePkg===key?700:500,color: activePkg===key?'#222325':'#74767e',fontSize:14,textTransform:'capitalize'}}>{p.name}</button>
                ))}
              </div>
              <div style={{padding:20}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <h3 style={{fontSize:16,textTransform:'capitalize'}}>{pkg.name}</h3>
                  <span style={{fontSize:24,fontWeight:800}}>${pkg.price}</span>
                </div>
                <p style={{color:'#62646a',fontSize:13,marginTop:6}}>Professional {service.categoryName.toLowerCase()} xizmati — tez va sifatli.</p>
                <div style={{display:'flex',gap:16,marginTop:14,fontSize:13,color:'#62646a',fontWeight:600}}>
                  <span>⏱ {pkg.delivery} kun</span><span>↻ {pkg.revisions} tahrir</span>
                </div>
                <ul style={{marginTop:14,display:'flex',flexDirection:'column',gap:8,fontSize:14}}>
                  {pkg.features.map(f=> <li key={f} style={{display:'flex',gap:8,alignItems:'center'}}><span style={{color:'#1dbf73'}}>✓</span> {f}</li>)}
                </ul>
                <button onClick={()=> setShowOrder(true)} className="btn btn-primary" style={{width:'100%',marginTop:18,padding:'12px',borderRadius:8,fontSize:15}}>Davom etish →</button>
                <button onClick={()=> toggleFavorite(service.id)} className="btn btn-outline" style={{width:'100%',marginTop:10}}>{isFav ? '♥ Sevimlida' : '♡ Sevimliga qo‘shish'}</button>
                <div style={{textAlign:'center',marginTop:10,fontSize:12,color:'#74767e'}}>Xavfsiz to'lov • Pul himoyalangan</div>
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16,marginTop:12,textAlign:'center'}}>
              <div style={{fontWeight:600,fontSize:14}}>Freelancerga savolingiz bormi?</div>
              <Link to={`/freelancers/${service.freelancerId}`} className="btn btn-outline" style={{width:'100%',marginTop:10}}>Bog'lanish</Link>
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{marginTop:32}}>
          <h2 style={{fontSize:20}}>O'xshash xizmatlar</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16,marginTop:14}}>
            {related.map(s=> <ServiceCard key={s.id} service={s}/>)}
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showOrder && (
        <div style={{position:'fixed',inset:0,zIndex:70,background:'rgba(0,0,0,.5)',display:'grid',placeItems:'center',padding:16}} onClick={()=> setShowOrder(false)}>
          <div onClick={e=> e.stopPropagation()} style={{background:'#fff',borderRadius:16,maxWidth:560,width:'100%',padding:24,maxHeight:'90vh',overflowY:'auto'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:16}}>
              <div>
                <h3 style={{fontSize:18}}>Buyurtmani tasdiqlang</h3>
                <p style={{color:'#62646a',fontSize:13,marginTop:4}}>{service.title}</p>
              </div>
              <button onClick={()=> setShowOrder(false)} style={{background:'#f5f5f5',border:'none',width:32,height:32,borderRadius:'50%',fontSize:18}}>×</button>
            </div>

            <div style={{background:'#f9fafb',border:'1px solid #e4e5e7',borderRadius:10,padding:14,marginTop:16,display:'flex',gap:12}}>
              <img src={service.image} style={{width:80,height:60,objectFit:'cover',borderRadius:8}} alt=""/>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:13,lineHeight:1.4}}>{service.title.slice(0,70)}...</div>
                <div style={{fontSize:12,color:'#62646a',marginTop:4}}>{pkg.name} • {pkg.delivery} kun • {pkg.revisions} tahrir</div>
              </div>
              <div style={{fontWeight:800,fontSize:18}}>${pkg.price}</div>
            </div>

            <div style={{display:'flex',gap:8,marginTop:14}}>
              {Object.entries(service.packages).map(([k,p])=>(
                <button key={k} onClick={()=> setActivePkg(k)} style={{flex:1,padding:'10px 8px',borderRadius:8,border:'1px solid',borderColor: activePkg===k?'#1dbf73':'#e4e5e7',background: activePkg===k?'#e8f8f0':'#fff',fontWeight:600,fontSize:13}}>{p.name} <br/> <span style={{color:'#1dbf73'}}>${p.price}</span></button>
              ))}
            </div>

            <label style={{display:'block',fontWeight:600,fontSize:14,marginTop:16}}>Talablaringizni yozing *</label>
            <textarea value={req} onChange={e=> setReq(e.target.value)} placeholder="Loyiha haqida batafsil yozing: maqsad, uslub, ranglar, reference linklar, maxsus talablar..." rows={5} style={{width:'100%',marginTop:8,padding:12,border:'1px solid #dadbdd',borderRadius:8,fontSize:14,resize:'vertical'}}/>
            <div style={{fontSize:12,color:'#74767e',marginTop:6}}>Freelancer sizning talablaringiz asosida ishni boshlaydi.</div>

            <div style={{background:'#fffbe6',border:'1px solid #ffe58f',borderRadius:8,padding:12,marginTop:14,fontSize:13,lineHeight:1.5}}>
              <strong>Xavfsiz to'lov:</strong> Pul freelancer ishni topshirib, siz tasdiqlaguningizcha ushlab turiladi.
            </div>

            <div style={{display:'flex',gap:10,marginTop:18}}>
              <button onClick={()=> setShowOrder(false)} className="btn btn-outline" style={{flex:1}}>Bekor qilish</button>
              <button onClick={handleOrder} disabled={ordering} className="btn btn-primary" style={{flex:2,opacity: ordering?.6:1}}>{ordering ? 'Yuborilmoqda...' : `Buyurtma berish — $${pkg.price}`}</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          div[style*="grid-template-columns:1fr 380px"]{grid-template-columns:1fr !important}
          div[style*="position:sticky"]{position:static !important}
        }
      `}</style>
    </div>
  )
}
