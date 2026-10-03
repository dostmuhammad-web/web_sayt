import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Login(){
  const { login } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({email:'',password:'',role:'client'})
  const [err, setErr] = useState('')

  const submit = (e)=>{
    e.preventDefault()
    if(!form.email || !form.password) return setErr('Barcha maydonlarni to\'ldiring')
    login({email:form.email, name: form.email.split('@')[0], role: form.role})
    navigate('/')
  }

  return (
    <div style={{minHeight:'80vh',display:'grid',placeItems:'center',background:'#fafafa',padding:20}}>
      <form onSubmit={submit} style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:16,padding:32,maxWidth:420,width:'100%',boxShadow:'0 8px 30px rgba(0,0,0,.06)'}}>
        <div style={{textAlign:'center',marginBottom:20}}>
          <div style={{width:48,height:48,background:'#1dbf73',borderRadius:12,display:'grid',placeItems:'center',color:'#fff',fontSize:22,margin:'0 auto'}}>💼</div>
          <h1 style={{marginTop:12,fontSize:22}}>Xush kelibsiz!</h1>
          <p style={{color:'#74767e',fontSize:14,marginTop:4}}>Hisobingizga kiring</p>
        </div>

        {err && <div style={{background:'#ffe6e6',color:'#c0392b',padding:'10px 12px',borderRadius:8,fontSize:13,marginBottom:12}}>{err}</div>}

        <label style={{fontWeight:600,fontSize:13}}>Email</label>
        <input value={form.email} onChange={e=> setForm({...form, email:e.target.value})} placeholder="siz@example.com" style={{width:'100%',marginTop:6,marginBottom:12,padding:'12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14}}/>

        <label style={{fontWeight:600,fontSize:13}}>Parol</label>
        <input type="password" value={form.password} onChange={e=> setForm({...form, password:e.target.value})} placeholder="••••••••" style={{width:'100%',marginTop:6,marginBottom:12,padding:'12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14}}/>

        <label style={{fontWeight:600,fontSize:13}}>Rol</label>
        <div style={{display:'flex',gap:8,marginTop:6,marginBottom:16}}>
          {['client','freelancer'].map(r=>(
            <button key={r} type="button" onClick={()=> setForm({...form, role:r})} style={{flex:1,padding:'10px',borderRadius:8,border:'1px solid',borderColor: form.role===r?'#1dbf73':'#dadbdd',background: form.role===r?'#e8f8f0':'#fff',fontWeight:600,fontSize:13,textTransform:'capitalize'}}>{r==='client' ? 'Mijoz' : 'Freelancer'}</button>
          ))}
        </div>

        <button type="submit" className="btn btn-primary" style={{width:'100%',padding:'12px',borderRadius:8,fontSize:15}}>Kirish</button>

        <div style={{textAlign:'center',marginTop:16,fontSize:14,color:'#62646a'}}>
          Hisobingiz yo'qmi? <Link to="/register" style={{color:'#1dbf73',fontWeight:600}}>Ro'yxatdan o'tish</Link>
        </div>

        <div style={{marginTop:16,background:'#f5f5f5',borderRadius:8,padding:10,fontSize:12,color:'#74767e',textAlign:'center'}}>
          Demo: istalgan email/parol bilan kiring
        </div>
      </form>
    </div>
  )
}
