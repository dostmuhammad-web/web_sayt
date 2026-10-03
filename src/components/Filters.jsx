export default function Filters({filters, setFilters, categories, onClear}){
  return (
    <div style={{background:'#fff',border:'1px solid #e4e5e7',borderRadius:12,padding:20,position:'sticky',top:118,alignSelf:'start'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <h3 style={{fontSize:16}}>Filtrlar</h3>
        <button onClick={onClear} style={{background:'none',border:'none',color:'#1dbf73',fontWeight:600,fontSize:13}}>Tozalash</button>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <div>
          <label style={{fontWeight:600,fontSize:13,marginBottom:8,display:'block'}}>Kategoriya</label>
          <select value={filters.category} onChange={e=> setFilters({...filters, category:e.target.value})} style={{width:'100%',padding:'10px 12px',border:'1px solid #dadbdd',borderRadius:8,fontSize:14,background:'#fff'}}>
            <option value="">Barchasi</option>
            {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <div>
          <label style={{fontWeight:600,fontSize:13,marginBottom:8,display:'block'}}>Narx: ${filters.price[0]} - ${filters.price[1]}</label>
          <div style={{display:'flex',gap:8}}>
            <input type="number" min="0" max="1000" value={filters.price[0]} onChange={e=> setFilters({...filters, price:[Number(e.target.value), filters.price[1]]})} style={{width:'50%',padding:'8px',border:'1px solid #dadbdd',borderRadius:8}} placeholder="Min"/>
            <input type="number" min="0" max="1000" value={filters.price[1]} onChange={e=> setFilters({...filters, price:[filters.price[0], Number(e.target.value)]})} style={{width:'50%',padding:'8px',border:'1px solid #dadbdd',borderRadius:8}} placeholder="Max"/>
          </div>
          <input type="range" min="0" max="500" value={filters.price[1]} onChange={e=> setFilters({...filters, price:[filters.price[0], Number(e.target.value)]})} style={{width:'100%',marginTop:8,accentColor:'#1dbf73'}}/>
        </div>

        <div>
          <label style={{fontWeight:600,fontSize:13,marginBottom:8,display:'block'}}>Reyting</label>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {[
              {label:'4.5+ yulduz', value:4.5},
              {label:'4.0+ yulduz', value:4},
              {label:'Barchasi', value:0},
            ].map(o=>(
              <label key={o.value} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,cursor:'pointer'}}>
                <input type="radio" name="rating" checked={filters.rating===o.value} onChange={()=> setFilters({...filters, rating:o.value})} style={{accentColor:'#1dbf73'}}/>
                {o.label} {o.value>=4 && <span style={{color:'#ffb33e'}}>★</span>}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label style={{fontWeight:600,fontSize:13,marginBottom:8,display:'block'}}>Yetkazish muddati</label>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {[
              {label:'1 kun',v:1},{label:'3 kungacha',v:3},{label:'7 kungacha',v:7},{label:'Har qanday',v:30}
            ].map(o=>(
              <label key={o.v} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,cursor:'pointer'}}>
                <input type="radio" name="delivery" checked={filters.delivery===o.v} onChange={()=> setFilters({...filters, delivery:o.v})} style={{accentColor:'#1dbf73'}}/>
                {o.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label style={{fontWeight:600,fontSize:13,marginBottom:8,display:'block'}}>Tajriba darajasi</label>
          <div style={{display:'flex',flexDirection:'column',gap:6}}>
            {[
              {label:'Barchasi',v:''},{label:'Top Rated',v:'Top Rated'},{label:'Level 2',v:'Level 2'},{label:'Level 1',v:'Level 1'}
            ].map(o=>(
              <label key={o.v||'all'} style={{display:'flex',alignItems:'center',gap:8,fontSize:14,cursor:'pointer'}}>
                <input type="radio" name="level" checked={filters.level===o.v} onChange={()=> setFilters({...filters, level:o.v})} style={{accentColor:'#1dbf73'}}/>
                {o.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
