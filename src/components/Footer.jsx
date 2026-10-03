import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer style={{background:'#fff',borderTop:'1px solid #e4e5e7',marginTop:48}}>
      <div className="container" style={{padding:'40px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:32}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:20,marginBottom:12}}>
              <span style={{width:32,height:32,background:'#1dbf73',borderRadius:8,display:'grid',placeItems:'center',color:'#fff'}}>💼</span>
              SkillHive
            </div>
            <p style={{color:'#74767e',fontSize:14,lineHeight:1.6}}>Professional freelance marketplace. Top talent, muvaffaqiyatli loyihalar, ishonchli hamkorlik.</p>
            <div style={{display:'flex',gap:10,marginTop:14}}>
              <span style={{width:32,height:32,background:'#f5f5f5',borderRadius:'50%',display:'grid',placeItems:'center'}}>𝕏</span>
              <span style={{width:32,height:32,background:'#f5f5f5',borderRadius:'50%',display:'grid',placeItems:'center'}}>▶</span>
              <span style={{width:32,height:32,background:'#f5f5f5',borderRadius:'50%',display:'grid',placeItems:'center'}}>in</span>
              <span style={{width:32,height:32,background:'#f5f5f5',borderRadius:'50%',display:'grid',placeItems:'center'}}>◉</span>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:14,marginBottom:12}}>Kategoriyalar</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8,fontSize:14,color:'#62646a'}}>
              <Link to="/services?category=web-development">Web Development</Link>
              <Link to="/services?category=react">React</Link>
              <Link to="/services?category=graphic-design">Graphic Design</Link>
              <Link to="/services?category=video-editing">Video Editing</Link>
              <Link to="/services?category=seo">SEO</Link>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:14,marginBottom:12}}>Kompaniya</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8,fontSize:14,color:'#62646a'}}>
              <a href="#">Biz haqimizda</a><a href="#">Karyera</a><a href="#">Press</a><a href="#">Hamkorlik</a><a href="#">Yordam</a>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:14,marginBottom:12}}>Qo'llab-quvvatlash</h4>
            <div style={{display:'flex',flexDirection:'column',gap:8,fontSize:14,color:'#62646a'}}>
              <a href="#">Yordam markazi</a><a href="#">Xavfsizlik</a><a href="#">Foydalanish shartlari</a><a href="#">Maxfiylik</a>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid #e4e5e7',marginTop:32,paddingTop:20,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:13,color:'#74767e'}}>
          <span>© 2026 SkillHive International Ltd. Barcha huquqlar himoyalangan.</span>
          <span>🌐 O'zbek • $ USD</span>
        </div>
      </div>
    </footer>
  )
}
