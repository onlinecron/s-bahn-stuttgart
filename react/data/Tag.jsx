import React from 'react';

export function Tag({onRemove,children,style,...rest}){
  return (
    <span className="sb-label-sm" style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',flex:'none',padding:'2px var(--space-2)',whiteSpace:'nowrap',border:'1px solid var(--border-hairline)',background:'var(--surface-inset)',color:'var(--text-primary)',...style}} {...rest}>
      {children}
      {onRemove&&<button onClick={onRemove} aria-label="Entfernen" style={{border:'none',background:'transparent',cursor:'pointer',padding:0,font:'700 12px var(--font-core)',color:'var(--text-muted)',lineHeight:1}}>×</button>}
    </span>
  );
}
