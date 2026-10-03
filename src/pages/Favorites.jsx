import { useApp } from '../context/AppContext.jsx'
import { services } from '../data/mockData.js'
import ServiceCard from '../components/ServiceCard.jsx'
import { Link } from 'react-router-dom'

export default function Favorites(){
  const { favorites } = useApp()
  const favServices = services.filter(s=> favorites.includes(s.id))

  if(favServices.length===0){
    return (
      <div className="container" style={{padding:'40px 24px',textAlign:'center'}}>
        <div style={{fontSize:48}}>♡</div>
        <h2 style={{marginTop:12}}>Sevimlilar bo'sh</h2>
        <p style={{color:'#74767e',marginTop:6}}>Yoqqan xizmatlarni yurakchani bosib saqlang.</p>
        <Link to="/services" className="btn btn-primary" style={{marginTop:16}}>Xizmatlarni ko'rish</Link>
      </div>
    )
  }

  return (
    <div style={{background:'#fafafa',minHeight:'80vh'}}>
      <div className="container" style={{padding:'20px 24px'}}>
        <h1 style={{fontSize:26,fontFamily:'Poppins'}}>Sevimlilar <span style={{color:'#74767e',fontWeight:400,fontSize:18}}>({favServices.length})</span></h1>
        <p style={{color:'#62646a',marginTop:4}}>Saqlangan xizmatlaringiz — istalgan vaqtda buyurtma berishingiz mumkin.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16,marginTop:16}}>
          {favServices.map(s=> <ServiceCard key={s.id} service={s}/>)}
        </div>
      </div>
    </div>
  )
}
