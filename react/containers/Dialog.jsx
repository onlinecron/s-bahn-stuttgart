import React from 'react';

export function Dialog({open=true,title,children,footer,onClose,width=480,style,...rest}){
  if(!open)return null;
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(27,28,28,0.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100,...style}} {...rest}>
      <div role="dialog" aria-modal="true" style={{width,maxWidth:'92vw',background:'var(--surface-card)',border:'2px solid var(--border-structural)'}}>
        <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'var(--surface-header)',borderBottom:'1px solid var(--border-structural)',padding:'var(--space-2) var(--space-3)'}}>
          <h2 className="sb-label-bold" style={{color:'var(--text-strong)'}}>{title}</h2>
          <button onClick={onClose} aria-label="Schliessen" style={{border:'1px solid var(--border-structural)',background:'var(--surface-card)',width:'20px',height:'20px',lineHeight:1,cursor:'pointer',padding:0,font:'700 12px var(--font-core)'}}>×</button>
        </header>
        <div style={{padding:'var(--space-4)'}} className="sb-body-md">{children}</div>
        {footer&&<footer style={{display:'flex',justifyContent:'flex-end',gap:'var(--space-2)',padding:'var(--space-3)',borderTop:'1px solid var(--border-structural)',background:'var(--surface-inset)'}}>{footer}</footer>}
      </div>
    </div>
  );
}
