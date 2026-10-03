import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { useState } from 'react'

export default function Navbar(){
  const { user, logout, searchQuery, setSearchQuery, favorites, orders } = useApp()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const loc = useLocation()

  const onSearch = (e)=>{
    e.preventDefault()
    if(searchQuery.trim()){
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`)
      setMobileOpen(false)
    }
  }

  const isActive = (p)=> loc.pathname===p

  return (
    <>
    <header style={{position:'sticky',top:0,zIndex:50,background:'#fff',borderBottom:'1px solid #e4e5e7'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64,gap:16}}>
        <Link to="/" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800,fontSize:22,letterSpacing:-0.5}}>
          <span style={{width:36,height:36,background:'#1dbf73',borderRadius:8,display:'grid',placeItems:'center',color:'#fff',fontSize:18}}>💼</span>
          <span>Skill<span style={{color:'#1dbf73'}}>Hive</span></span>
        </Link>

        <form onSubmit={onSearch} className="nav-search" style={{flex:1,maxWidth:520,display:'flex',alignItems:'center'}}>
          <div style={{flex:1,display:'flex',alignItems:'center',border:'1px solid #dadbdd',borderRadius:'8px 0 0 8px',overflow:'hidden',background:'#fff'}}>
            <span style={{padding:'0 12px',color:'#74767e'}}>🔍</span>
            <input
              value={searchQuery}
              onChange={e=> setSearchQuery(e.target.value)}
              placeholder="Service yoki freelancer qidiring..."
              style={{flex:1,border:'none',outline:'none',padding:'10px 0',fontSize:14}}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{borderRadius:'0 8px 8px 0',padding:'10px 18px',fontSize:14}}>Qidirish</button>
        </form>

        <nav style={{display:'flex',alignItems:'center',gap:6}} className="desktop-nav">
          <Link to="/services" className="btn btn-ghost" style={{fontWeight: isActive('/services')?700:500, color: isActive('/services')?'#1dbf73':'#62646a'}}>Xizmatlar</Link>
          <Link to="/freelancers" className="btn btn-ghost" style={{fontWeight: isActive('/freelancers')?700:500, color: isActive('/freelancers')?'#1dbf73':'#62646a'}}>Freelancerlar</Link>
          <Link to="/orders" className="btn btn-ghost" style={{position:'relative'}}>Buyurtmalar {orders.length>0 && <span style={{background:'#1dbf73',color:'#fff',fontSize:10,padding:'2px 6px',borderRadius:99,marginLeft:6}}>{orders.length}</span>}</Link>
          <Link to="/favorites" className="btn btn-ghost" style={{position:'relative'}}>♡ {favorites.length>0 && <span style={{background:'#ff6b6b',color:'#fff',fontSize:10,padding:'2px 6px',borderRadius:99,marginLeft:4}}>{favorites.length}</span>}</Link>
          {user ? (
            <>
              <Link to="/profile" style={{display:'flex',alignItems:'center',gap:8,marginLeft:8}}>
                <img src={user.avatar} alt={user.name} style={{width:32,height:32,borderRadius:'50%',objectFit:'cover'}}/>
                <span style={{fontWeight:600,fontSize:14}}>{user.name}</span>
              </Link>
              <button onClick={logout} className="btn btn-outline btn-sm" style={{marginLeft:6}}>Chiqish</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">Kirish</Link>
              <Link to="/register" className="btn btn-primary">Ro'yxatdan o'tish</Link>
            </>
          )}
        </nav>

        <button onClick={()=> setMobileOpen(!mobileOpen)} style={{display:'none',background:'none',border:'none',fontSize:22}} className="mobile-toggle">☰</button>
      </div>

      {/* Category bar */}
      <div style={{borderTop:'1px solid #e4e5e7',background:'#fff',overflowX:'auto',whiteSpace:'nowrap'}}>
        <div className="container" style={{display:'flex',gap:20,padding:'10px 24px',fontSize:13.5}}>
          {[
            ['Web Development','web-development'],['React','react'],['JavaScript','javascript'],['UI/UX','ui-ux'],['Graphic Design','graphic-design'],['Video Editing','video-editing'],['Translation','translation'],['Writing','writing'],['SEO','seo'],['Marketing','marketing'],['Mobile','mobile-development']
          ].map(([label,id])=>(
            <Link key={id} to={`/services?category=${id}`} style={{color:'#62646a',fontWeight:500,padding:'2px 0',borderBottom:'2px solid transparent'}} onMouseEnter={e=> e.target.style.color='#1dbf73'} onMouseLeave={e=> e.target.style.color='#62646a'}>{label}</Link>
          ))}
        </div>
      </div>
    </header>

    <style>{`
      @media(max-width: 1100px){
        .desktop-nav{display:none !important}
        .mobile-toggle{display:block !important}
        .nav-search{max-width: 360px !important}
      }
      @media(max-width: 640px){
        .nav-search{display:none !important}
      }
    `}</style>

    {mobileOpen && (
      <div style={{position:'fixed',inset:0,zIndex:60,background:'rgba(0,0,0,.4)'}} onClick={()=> setMobileOpen(false)}>
        <div onClick={e=> e.stopPropagation()} style={{background:'#fff',width:300,height:'100%',padding:20,display:'flex',flexDirection:'column',gap:16,overflowY:'auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <strong>Menu</strong><button onClick={()=> setMobileOpen(false)} style={{background:'none',border:'none',fontSize:20}}>×</button>
          </div>
          <form onSubmit={onSearch} style={{display:'flex',gap:8}}>
            <input value={searchQuery} onChange={e=> setSearchQuery(e.target.value)} placeholder="Qidirish..." style={{flex:1,padding:'10px 12px',border:'1px solid #dadbdd',borderRadius:8}}/>
            <button className="btn btn-primary">Go</button>
          </form>
          <Link to="/services" onClick={()=> setMobileOpen(false)} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>Xizmatlar</Link>
          <Link to="/freelancers" onClick={()=> setMobileOpen(false)} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>Freelancerlar</Link>
          <Link to="/favorites" onClick={()=> setMobileOpen(false)} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>Sevimlilar ({favorites.length})</Link>
          <Link to="/orders" onClick={()=> setMobileOpen(false)} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>Buyurtmalar ({orders.length})</Link>
          <Link to="/profile" onClick={()=> setMobileOpen(false)} style={{padding:'10px 0',borderBottom:'1px solid #eee'}}>Profil</Link>
          {!user ? (
            <>
              <Link to="/login" onClick={()=> setMobileOpen(false)} className="btn btn-outline">Kirish</Link>
              <Link to="/register" onClick={()=> setMobileOpen(false)} className="btn btn-primary">Ro'yxatdan o'tish</Link>
            </>
          ):(
            <button onClick={()=> {logout(); setMobileOpen(false)}} className="btn btn-outline">Chiqish</button>
          )}
        </div>
      </div>
    )}
    </>
  )
}
