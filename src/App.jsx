import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Freelancers from './pages/Freelancers.jsx'
import FreelancerDetail from './pages/FreelancerDetail.jsx'
import Orders from './pages/Orders.jsx'
import Profile from './pages/Profile.jsx'
import Favorites from './pages/Favorites.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function ScrollToTop(){
  return null
}

export default function App(){
  return (
    <AppProvider>
      <BrowserRouter>
        <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
          <Navbar/>
          <main style={{flex:1}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/services/:id" element={<ServiceDetail/>}/>
              <Route path="/freelancers" element={<Freelancers/>}/>
              <Route path="/freelancers/:id" element={<FreelancerDetail/>}/>
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/favorites" element={<Favorites/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="*" element={<div className="container" style={{padding:60,textAlign:'center'}}><h1>404 — Sahifa topilmadi</h1><a href="/" style={{color:'#1dbf73',fontWeight:600}}>Bosh sahifaga qaytish</a></div>}/>
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}
