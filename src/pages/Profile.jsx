import { useApp } from '../context/AppContext.jsx'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile(){
  const { user, logout, orders, favorites } = useApp()
  const navigate = useNavigate()
  if(!user){
    return (
      <div className="container" style={{padding:'40px 24px',textAlign:'center'}}>
        <h2>Tizimga kiring</h2>
        <p style={{color:'#74767e',marginTop:6}}>Profilni ko'rish uchun login qiling.</p>
        <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:16}}>
          <Link to="/login" className="btn btn-primary">Kirish</Link>
          <Link to="/register" className="btn btn-outline">Ro'yxatdan o'tish</Link>
        </div>
      </div>
    )
  }

  const totalSpent = orders.reduce((s,o)=> s+o.price,0)

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'20px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:20,alignItems:'start'}}>
          <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:24,textAlign:'center',position:'sticky',top:90}}>
            <img src={user.avatar} alt={user.name} style={{width:90,height:90,borderRadius:'50%',margin:'0 auto'}}/>
            <h2 style={{marginTop:12,fontSize:18}}>{user.name}</h2>
            <p style={{color:'#62646a',fontSize:13}}>{user.email}</p>
            <span style={{display:'inline-block',marginTop:8,background: user.role==='freelancer' ? '#1dbf73':'#222325',color:'#fff',padding:'4px 10px',borderRadius:99,fontSize:11,fontWeight:700,textTransform:'uppercase'}}>{user.role}</span>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:16}}>
              <div style={{background:'#f5f5f5',borderRadius:8,padding:12}}><div style={{fontWeight:800}}>{orders.length}</div><div style={{fontSize:12,color:'#74767e'}}>Buyurtmalar</div></div>
              <div style={{background:'#f5f5f5',borderRadius:8,padding:12}}><div style={{fontWeight:800}}>{favorites.length}</div><div style={{fontSize:12,color:'#74767e'}}>Sevimlilar</div></div>
            </div>
            <button onClick={()=> {logout(); navigate('/')}} className="btn btn-outline" style={{width:'100%',marginTop:16}}>Chiqish</button>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {/* Switch role */}
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20}}>
              <h3>Dashboard</h3>
              <div style={{display:'flex',gap:10,marginTop:12,flexWrap:'wrap'}}>
                <Link to="/orders" className="btn btn-primary">My Orders →</Link>
                <Link to="/favorites" className="btn btn-outline">Sevimlilar ({favorites.length})</Link>
                <Link to="/services" className="btn btn-outline">Xizmat topish</Link>
              </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16}}>
                <div style={{color:'#74767e',fontSize:12}}>Jami sarflangan</div><div style={{fontSize:22,fontWeight:800,marginTop:4}}>${totalSpent}</div><div style={{color:'#1dbf73',fontSize:12,marginTop:4}}>✓ Xavfsiz to'lov</div>
              </div>
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16}}>
                <div style={{color:'#74767e',fontSize:12}}>Faol buyurtmalar</div><div style={{fontSize:22,fontWeight:800,marginTop:4}}>{orders.filter(o=> o.status==='In Progress').length}</div><div style={{color:'#74767e',fontSize:12,marginTop:4}}>Jarayonda</div>
              </div>
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16}}>
                <div style={{color:'#74767e',fontSize:12}}>Xabarlar</div><div style={{fontSize:22,fontWeight:800,marginTop:4}}>3 yangi</div><div style={{color:'#62646a',fontSize:12,marginTop:4}}>Inbox</div>
              </div>
              <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16}}>
                <div style={{color:'#74767e',fontSize:12}}>Daromad (agar freelancer)</div><div style={{fontSize:22,fontWeight:800,marginTop:4}}>$0</div><div style={{color:'#74767e',fontSize:12,marginTop:4}}>Yechib olish</div>
              </div>
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20}}>
              <h3>So'nggi buyurtmalar</h3>
              {orders.length===0 ? (
                <p style={{color:'#74767e',marginTop:8}}>Hali buyurtma yo'q. <Link to="/services" style={{color:'#1dbf73'}}>Xizmat tanlang</Link></p>
              ) : (
                <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:10}}>
                  {orders.slice(0,3).map(o=>(
                    <div key={o.id} style={{display:'flex',gap:12,alignItems:'center',border:'1px solid #f0f0f0',borderRadius:8,padding:10}}>
                      <img src={o.serviceImage} style={{width:60,height:44,objectFit:'cover',borderRadius:6}} alt=""/>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:600,fontSize:13}}>{o.serviceTitle.slice(0,60)}...</div>
                        <div style={{fontSize:12,color:'#74767e'}}>{o.date} • ${o.price} • {o.status}</div>
                      </div>
                    </div>
                  ))}
                  <Link to="/orders" style={{color:'#1dbf73',fontWeight:600,fontSize:14}}>Barchasini ko'rish →</Link>
                </div>
              )}
            </div>

            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20}}>
              <h3>Sozlamalar</h3>
              <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:12}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid #f0f0f0'}}>
                  <span style={{fontSize:14}}>Email bildirishnomalar</span><span style={{width:36,height:20,background:'#1dbf73',borderRadius:99,display:'inline-block',position:'relative'}}><span style={{position:'absolute',right:2,top:2,width:16,height:16,background:'#fff',borderRadius:'50%'}}></span></span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid #f0f0f0'}}>
                  <span style={{fontSize:14}}>Ikki bosqichli himoya</span><span style={{color:'#1dbf73',fontWeight:600,fontSize:13}}>Yoqilgan</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0'}}>
                  <span style={{fontSize:14}}>Til</span><span style={{fontWeight:600}}>O'zbek</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){div[style*="grid-template-columns:300px"]{grid-template-columns:1fr !important} div[style*="position:sticky"]{position:static !important}}`}</style>
    </div>
  )
}
