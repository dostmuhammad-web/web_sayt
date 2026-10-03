import { useApp } from '../context/AppContext.jsx'
import { Link } from 'react-router-dom'

export default function Orders(){
  const { orders } = useApp()

  const earnings = orders.reduce((sum,o)=> sum+o.price, 0)

  if(orders.length===0){
    return (
      <div className="container" style={{padding:'40px 24px',textAlign:'center'}}>
        <div style={{fontSize:48}}>📦</div>
        <h2 style={{marginTop:12}}>Hali buyurtmalar yo'q</h2>
        <p style={{color:'#74767e',marginTop:6}}>Xizmat tanlang va birinchi buyurtmangizni bering.</p>
        <Link to="/services" className="btn btn-primary" style={{marginTop:16}}>Xizmatlarni ko'rish</Link>
      </div>
    )
  }

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'20px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <h1 style={{fontSize:26,fontFamily:'Poppins'}}>Buyurtmalar</h1>
          <div style={{display:'flex',gap:12}}>
            <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:10,padding:'10px 16px',textAlign:'center'}}>
              <div style={{fontSize:12,color:'#74767e'}}>Jami buyurtma</div><strong style={{fontSize:18}}>{orders.length}</strong>
            </div>
            <div style={{background:'#1dbf73',color:'#fff',borderRadius:10,padding:'10px 16px',textAlign:'center'}}>
              <div style={{fontSize:12,opacity:.9}}>Jami to'lov</div><strong style={{fontSize:18}}>${earnings}</strong>
            </div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:20}}>
          {orders.map(o=>(
            <div key={o.id} style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:16,display:'flex',gap:16,alignItems:'center',flexWrap:'wrap'}}>
              <img src={o.serviceImage} alt={o.serviceTitle} style={{width:110,height:80,objectFit:'cover',borderRadius:8}}/>
              <div style={{flex:1,minWidth:220}}>
                <Link to={`/services/${o.serviceId}`} style={{fontWeight:600,fontSize:14,lineHeight:1.4}}>{o.serviceTitle}</Link>
                <div style={{color:'#62646a',fontSize:13,marginTop:4}}>Freelancer: {o.freelancerName} • Paket: {o.packageName} • {o.delivery} kun</div>
                <div style={{fontSize:12,background:'#f5f5f5',border:'1px solid #eee',borderRadius:6,padding:'8px 10px',marginTop:8,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>
                  <strong>Talablar:</strong> {o.requirements}
                </div>
              </div>
              <div style={{textAlign:'right',minWidth:140}}>
                <div style={{fontWeight:800,fontSize:18}}>${o.price}</div>
                <div style={{marginTop:6}}>
                  <span style={{background: o.status==='In Progress' ? '#fffbe6' : '#e8f8f0',color: o.status==='In Progress' ? '#b7791f':'#1dbf73',border:`1px solid ${o.status==='In Progress' ? '#ffe58f':'#b7eb8f'}`,padding:'4px 10px',borderRadius:99,fontSize:12,fontWeight:700}}>{o.status}</span>
                </div>
                <div style={{color:'#74767e',fontSize:12,marginTop:6}}>{o.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20,marginTop:20}}>
          <h3>Dashboard</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:14,marginTop:14}}>
            <div style={{background:'#fafafa',border:'1px solid #e4e5e7',borderRadius:10,padding:16}}>
              <div style={{color:'#74767e',fontSize:12}}>Yakunlangan</div><strong style={{fontSize:20}}>0</strong><div style={{color:'#62646a',fontSize:12}}>Jarayonda: {orders.length}</div>
            </div>
            <div style={{background:'#fafafa',border:'1px solid #e4e5e7',borderRadius:10,padding:16}}>
              <div style={{color:'#74767e',fontSize:12}}>O'rtacha reyting</div><strong style={{fontSize:20}}>—</strong><div style={{color:'#62646a',fontSize:12}}>Sharhlar so'ng</div>
            </div>
            <div style={{background:'#fafafa',border:'1px solid #e4e5e7',borderRadius:10,padding:16}}>
              <div style={{color:'#74767e',fontSize:12}}>Xabarlar</div><strong style={{fontSize:20}}>0 yangi</strong><div style={{color:'#62646a',fontSize:12}}><Link to="/profile" style={{color:'#1dbf73'}}>Profilga o'tish</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
