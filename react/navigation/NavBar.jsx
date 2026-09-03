import React from 'react';

export function NavBar({product='S-Bahn Stuttgart',items=[],value,onChange,right,style,...rest}){
  return (
    <nav style={{display:'flex',alignItems:'stretch',background:'var(--surface-card)',borderBottom:'2px solid var(--border-structural)',...style}} {...rest}>
      <div style={{display:'flex',alignItems:'center',padding:'0 var(--space-4)',background:'var(--blue-action)',color:'#fff',borderRight:'1px solid var(--border-structural)'}}>
        <span className="sb-label-bold" style={{letterSpacing:'0.08em',whiteSpace:'nowrap'}}>{product}</span>
      </div>
      <div style={{display:'flex',alignItems:'stretch'}}>
        {items.map(it=>{const id=typeof it==='string'?it:it.value;const label=typeof it==='string'?it:it.label;const active=id===value;
          return <button key={id} onClick={()=>onChange&&onChange(id)} className="sb-label-bold" style={{padding:'var(--space-3) var(--space-4)',border:'none',borderRight:'1px solid var(--border-hairline)',borderBottom:active?'2px solid var(--blue-signal)':'2px solid transparent',marginBottom:'-2px',background:active?'var(--surface-inset)':'transparent',color:active?'var(--text-link)':'var(--text-primary)',cursor:'pointer'}}>{label}</button>;})}
      </div>
      <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:'var(--space-3)',padding:'0 var(--space-4)'}}>{right}</div>
    </nav>
  );
}
