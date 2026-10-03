import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function ServiceCard({ service }){
  const { favorites, toggleFavorite } = useApp()
  const isFav = favorites.includes(service.id)
  return (
    <div className="card" style={{display:'flex',flexDirection:'column'}}>
      <Link to={`/services/${service.id}`} style={{position:'relative',overflow:'hidden',display:'block'}}>
        <img src={service.image} alt={service.title} style={{width:'100%',height:180,objectFit:'cover',transition:'transform .4s'}} onMouseOver={e=> e.target.style.transform='scale(1.05)'} onMouseOut={e=> e.target.style.transform='scale(1)'} loading="lazy"/>
        <button
          onClick={(e)=> {e.preventDefault(); toggleFavorite(service.id)}}
          style={{
            position:'absolute',top:10,right:10,width:32,height:32,borderRadius:'50%',
            background: isFav ? '#ff6b6b' : 'rgba(255,255,255,.9)',border:'none',
            display:'grid',placeItems:'center',fontSize:16,color: isFav ? '#fff':'#62646a',
            boxShadow:'0 2px 8px rgba(0,0,0,.15)'
          }}
          title={isFav?'Sevimlidan olib tashlash':'Sevimliga qo‘shish'}
        >{isFav ? '♥' : '♡'}</button>
        <span style={{position:'absolute',bottom:10,left:10,background:'rgba(0,0,0,.7)',color:'#fff',fontSize:11,fontWeight:700,padding:'4px 8px',borderRadius:99}}>{service.categoryName}</span>
      </Link>

      <div style={{padding:'14px 14px 12px',flex:1,display:'flex',flexDirection:'column',gap:8}}>
        <Link to={`/freelancers/${service.freelancerId}`} style={{display:'flex',alignItems:'center',gap:8}}>
          <img src={service.freelancerAvatar} alt={service.freelancerName} style={{width:24,height:24,borderRadius:'50%'}}/>
          <span style={{fontSize:13,fontWeight:500,color:'#222325'}}>{service.freelancerName}</span>
          {service.freelancerLevel==='Top Rated' && <span style={{background:'#1dbf73',color:'#fff',fontSize:9,fontWeight:800,padding:'2px 6px',borderRadius:4}}>TOP RATED</span>}
          {service.freelancerLevel==='Level 2' && <span style={{background:'#ff6b6b',color:'#fff',fontSize:9,fontWeight:800,padding:'2px 6px',borderRadius:4}}>LEVEL 2</span>}
        </Link>

        <Link to={`/services/${service.id}`} style={{fontSize:14.5,fontWeight:500,lineHeight:1.4,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden',minHeight:41,color:'#222325'}}>
          {service.title}
        </Link>

        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13}}>
          <span style={{color:'#ffb33e'}}>★</span>
          <strong style={{color:'#ffb33e'}}>{service.rating.toFixed(1)}</strong>
          <span style={{color:'#74767e'}}>({service.reviewsCount})</span>
        </div>
      </div>

      <div style={{borderTop:'1px solid #e4e5e7',padding:'10px 14px',display:'flex',justifyContent:'space-between',alignItems:'center',background:'#fafafa'}}>
        <span style={{fontSize:11,color:'#74767e',textTransform:'uppercase',letterSpacing:.5,fontWeight:600}}>⏱ {service.deliveryTime} kunda yetkazish</span>
        <Link to={`/services/${service.id}`} style={{fontSize:15,fontWeight:700,color:'#222325'}}>dan <span style={{color:'#1dbf73'}}>${service.price}</span></Link>
      </div>
    </div>
  )
}
