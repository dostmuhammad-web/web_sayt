import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Register(){
  const { register } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({name:'',email:'',password:'',role:'client'})
  const [err, setErr] = useState('')

  const submit = (e)=>{
    e.preventDefault()
    if(!form.name || !form.email || !form.password) return setErr('Barcha maydonlarni to\'ldiring')
    register(form)
    navigate('/')
  }

  return (
    <div style={{minHeight:'80vh',display:'grid',placeItems:'center',background:'#fafafa',padding:20}}>
      <form onSubmit={submit} style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:16,padding:32,maxWidth:440,width:'100%',boxShadow:'0 8px 30px rgba(0,0,0,.06)'}}>
        <div style={{textAlign:'center',marginBottom:20}}>
          <div style={{width:48,height:48,background:'#1dbf73',borderRadius:12,display:'grid',placeItems:'center',color:'#fff',fontSize:22,margin:'0 auto'}}>💼</div>
          <h1 style={{marginTop:12,fontSize:22}}>Hisob yarating</h1>
          <p style={{color:'#74767e',fontSize:14,marginTop:4}}>Bir necha soniyada qo'shiling</p>
        </div>

        {err && <div style={{background:'#ffe6e6',color:'#c0392b',padding:'10px 12px',borderRadius:8,fontSize:13,marginBottom:12}}>{err}</div>}

        <label style={{fontWeight:600,fontSize:13}}>Ism</label>
        <input value={form.name} onChange={e=> setForm({...form, name:e.target.value})} placeholder="Ismingiz" style={{width:'100%',marginTop:6,marginBottom:12,padding:'12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14}}/>

        <label style={{fontWeight:600,fontSize:13}}>Email</label>
        <input value={form.email} onChange={e=> setForm({...form, email:e.target.value})} placeholder="siz@example.com" style={{width:'100%',marginTop:6,marginBottom:12,padding:'12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14}}/>

        <label style={{fontWeight:600,fontSize:13}}>Parol</label>
        <input type="password" value={form.password} onChange={e=> setForm({...form, password:e.target.value})} placeholder="Kamida 6 belgi" style={{width:'100%',marginTop:6,marginBottom:12,padding:'12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14}}/>

        <label style={{fontWeight:600,fontSize:13}}>Siz kimsiz?</label>
        <div style={{display:'flex',gap:8,marginTop:6,marginBottom:16}}>
          {[
            {id:'client', label:'Mijoz', desc:'Ish beraman'},
            {id:'freelancer', label:'Freelancer', desc:'Ish qilaman'},
          ].map(r=>(
            <button key={r.id} type="button" onClick={()=> setForm({...form, role:r.id})} style={{flex:1,padding:'12px',borderRadius:10,border:'1px solid',borderColor: form.role===r.id?'#1dbf73':'#dadbdd',background: form.role===r.id?'#e8f8f0':'#fff',textAlign:'left'}}>
              <div style={{fontWeight:700,fontSize:13}}>{r.label}</div><div style={{fontSize:11,color:'#74767e'}}>{r.desc}</div>
            </button>
          ))}
        </div>

        <label style={{display:'flex',gap:8,alignItems:'start',fontSize:13,color:'#62646a',marginBottom:16}}>
          <input type="checkbox" required style={{marginTop:3}}/> <span>Foydalanish shartlari va Maxfiylik siyosatiga roziman</span>
        </label>

        <button type="submit" className="btn btn-primary" style={{width:'100%',padding:'12px',borderRadius:8,fontSize:15}}>Ro'yxatdan o'tish</button>

        <div style={{textAlign:'center',marginTop:16,fontSize:14,color:'#62646a'}}>
          Hisobingiz bormi? <Link to="/login" style={{color:'#1dbf73',fontWeight:600}}>Kirish</Link>
        </div>
      </form>
    </div>
  )
}
