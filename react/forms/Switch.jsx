import React from 'react';

export function Switch({label,checked=false,onChange,disabled=false,style,...rest}){
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',cursor:disabled?'not-allowed':'pointer',...style}}>
      <span onClick={()=>!disabled&&onChange&&onChange(!checked)} role="switch" aria-checked={checked} style={{width:'40px',height:'20px',border:'1px solid var(--border-structural)',background:disabled?'var(--disabled-surface)':checked?'var(--blue-action)':'var(--surface-card)',display:'inline-flex',alignItems:'center',padding:'2px',justifyContent:checked?'flex-end':'flex-start',flex:'none'}} {...rest}>
        <span style={{width:'14px',height:'14px',background:checked?'#fff':'var(--charcoal)'}}></span>
      </span>
      <span className="sb-body-md" style={{color:disabled?'var(--disabled-text)':'var(--text-primary)'}}>{label}</span>
    </label>
  );
}
