import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)
export const useApp = () => useContext(AppContext)

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('fm_user') || 'null') } catch { return null }
  })
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('fm_fav') || '[]') } catch { return [] }
  })
  const [orders, setOrders] = useState(() => {
    try { return JSON.parse(localStorage.getItem('fm_orders') || '[]') } catch { return [] }
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState(null)

  useEffect(()=> localStorage.setItem('fm_user', JSON.stringify(user)), [user])
  useEffect(()=> localStorage.setItem('fm_fav', JSON.stringify(favorites)), [favorites])
  useEffect(()=> localStorage.setItem('fm_orders', JSON.stringify(orders)), [orders])

  useEffect(()=>{
    if(toast){
      const t = setTimeout(()=> setToast(null), 2800)
      return ()=> clearTimeout(t)
    }
  },[toast])

  const showToast = (msg, type='success')=> setToast({msg,type})

  const login = (data)=>{
    const u = { id:'u-1', name: data.name || data.email.split('@')[0], email: data.email, avatar: `https://i.pravatar.cc/150?img=12`, role: data.role || 'client' }
    setUser(u)
    showToast(`Xush kelibsiz, ${u.name}!`)
    return u
  }
  const register = (data)=>{
    const u = { id:'u-'+Date.now(), name: data.name, email: data.email, avatar: `https://i.pravatar.cc/150?img=13`, role: data.role || 'client' }
    setUser(u)
    showToast(`Ro'yxatdan o'tdingiz, ${u.name}!`)
    return u
  }
  const logout = ()=> { setUser(null); showToast('Chiqdingiz','info') }

  const toggleFavorite = (serviceId)=>{
    setFavorites(prev=> prev.includes(serviceId) ? prev.filter(id=> id!==serviceId) : [...prev, serviceId])
    const isFav = favorites.includes(serviceId)
    showToast(isFav ? 'Sevimlilardan olib tashlandi' : 'Sevimlilarga qo\'shildi', isFav?'info':'success')
  }

  const placeOrder = (service, pkgKey, requirements)=>{
    const pkg = service.packages[pkgKey]
    const order = {
      id: 'o-'+Date.now(),
      serviceId: service.id,
      serviceTitle: service.title,
      serviceImage: service.image,
      freelancerName: service.freelancerName,
      package: pkgKey,
      packageName: pkg.name,
      price: pkg.price,
      delivery: pkg.delivery,
      requirements,
      status: 'In Progress',
      date: new Date().toISOString().slice(0,10),
      rating: null
    }
    setOrders(prev=> [order, ...prev])
    showToast('Buyurtma muvaffaqiyatli berildi! 🎉')
    return order
  }

  return (
    <AppContext.Provider value={{ user, login, register, logout, favorites, toggleFavorite, orders, placeOrder, searchQuery, setSearchQuery, showToast, toast }}>
      {children}
      {toast && (
        <div style={{
          position:'fixed',bottom:24,right:24,zIndex:9999,
          background: toast.type==='success' ? '#1dbf73' : toast.type==='info' ? '#222325' : '#e74c3c',
          color:'#fff',padding:'14px 20px',borderRadius:10,boxShadow:'0 8px 24px rgba(0,0,0,.2)',
          fontWeight:600,fontSize:14,animation:'fadeIn .3s',display:'flex',alignItems:'center',gap:10
        }}>
          <span>{toast.type==='success' ? '✓' : '•'}</span> {toast.msg}
        </div>
      )}
    </AppContext.Provider>
  )
}
