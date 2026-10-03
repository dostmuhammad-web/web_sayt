import { Link } from 'react-router-dom'

export default function FreelancerCard({ freelancer }){
  return (
    <Link to={`/freelancers/${freelancer.id}`} className="card" style={{padding:20,display:'flex',flexDirection:'column',gap:14,textAlign:'center'}}>
      <div style={{position:'relative',alignSelf:'center'}}>
        <img src={freelancer.avatar} alt={freelancer.name} style={{width:84,height:84,borderRadius:'50%',objectFit:'cover',border:'3px solid #e8f8f0'}}/>
        <span style={{position:'absolute',bottom:4,right:4,width:14,height:14,background:'#1dbf73',border:'2px solid #fff',borderRadius:'50%'}}></span>
      </div>
      <div>
        <div style={{fontWeight:700,fontSize:15}}>{freelancer.name}</div>
        <div style={{color:'#62646a',fontSize:13,marginTop:2}}>{freelancer.profession}</div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:6,marginTop:6,fontSize:13}}>
          <span style={{color:'#ffb33e'}}>★ {freelancer.rating.toFixed(1)}</span>
          <span style={{color:'#b5b6ba'}}>•</span>
          <span style={{color:'#74767e'}}>{freelancer.completedJobs} ish</span>
          {freelancer.level==='Top Rated' && <span style={{background:'#1dbf73',color:'#fff',fontSize:9,fontWeight:800,padding:'2px 6px',borderRadius:4}}>TOP RATED</span>}
        </div>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:6,justifyContent:'center'}}>
        {freelancer.skills.slice(0,4).map(s=> (
          <span key={s} style={{background:'#f5f5f5',border:'1px solid #e4e5e7',padding:'4px 8px',borderRadius:99,fontSize:11,fontWeight:500}}>{s}</span>
        ))}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid #e4e5e7',paddingTop:12,marginTop:4}}>
        <span style={{fontSize:12,color:'#74767e'}}>{freelancer.location.split(',')[0]}</span>
        <span style={{fontWeight:700,fontSize:14}}>${freelancer.hourlyRate}/soat</span>
      </div>
    </Link>
  )
}
