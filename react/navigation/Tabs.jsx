import React from 'react';

export function Tabs({items=[],value,onChange,style,...rest}){
  return (
    <div role="tablist" style={{display:'flex',gap:0,borderBottom:'1px solid var(--border-structural)',...style}} {...rest}>
      {items.map(it=>{const id=typeof it==='string'?it:it.value;const label=typeof it==='string'?it:it.label;const active=id===value;
        return <button key={id} role="tab" aria-selected={active} onClick={()=>onChange&&onChange(id)} className="sb-label-bold" style={{padding:'var(--space-2) var(--space-4)',border:'1px solid var(--border-structural)',borderBottom:active?'2px solid var(--blue-signal)':'1px solid var(--border-structural)',marginBottom:'-1px',marginRight:'-1px',background:active?'var(--surface-card)':'var(--surface-header)',color:active?'var(--text-link)':'var(--text-muted)',cursor:'pointer'}}>{label}</button>;})}
    </div>
  );
}
