import React from 'react';

export function Card({title,meta,actions,padded=true,children,style,...rest}){
  return (
    <section style={{border:'1px solid var(--border-structural)',background:'var(--surface-card)',boxShadow:'none',borderRadius:0,...style}} {...rest}>
      {(title||actions)&&(
        <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)',background:'var(--surface-header)',borderBottom:'1px solid var(--border-structural)',padding:'var(--space-2) var(--space-3)'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:'var(--space-3)',minWidth:0}}>
            <h3 className="sb-label-bold" style={{color:'var(--text-strong)'}}>{title}</h3>
            {meta&&<span className="sb-mono" style={{color:'var(--text-muted)'}}>{meta}</span>}
          </div>
          {actions&&<div style={{display:'flex',gap:'var(--space-2)',flex:'none'}}>{actions}</div>}
        </header>
      )}
      <div style={{padding:padded?'var(--pad-section)':0}}>{children}</div>
    </section>
  );
}
