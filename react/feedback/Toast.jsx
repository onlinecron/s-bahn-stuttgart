import React from 'react';

export function Toast({tone='info',title,children,onClose,style,...rest}){
  const bar={info:'var(--blue-signal)',attention:'var(--yellow-signal)',ok:'var(--green-ok)',error:'var(--red-alarm)'}[tone];
  return (
    <div role="status" style={{display:'flex',alignItems:'stretch',border:'1px solid var(--border-structural)',background:'var(--surface-card)',minWidth:'280px',...style}} {...rest}>
      <span aria-hidden="true" style={{width:'8px',background:bar,flex:'none'}}></span>
      <div style={{padding:'var(--space-2) var(--space-3)',flex:1}}>
        {title&&<div className="sb-label-bold" style={{color:'var(--text-strong)'}}>{title}</div>}
        <div className="sb-body-md" style={{color:'var(--text-primary)'}}>{children}</div>
      </div>
      {onClose&&<button onClick={onClose} aria-label="Schliessen" style={{border:'none',borderLeft:'1px solid var(--border-hairline)',background:'var(--surface-inset)',width:'28px',cursor:'pointer',font:'700 12px var(--font-core)'}}>×</button>}
    </div>
  );
}
