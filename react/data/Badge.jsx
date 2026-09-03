import React from 'react';

export function Badge({tone='neutral',children,style,...rest}){
  const tones={neutral:{background:'var(--surface-header)',color:'var(--text-strong)'},info:{background:'var(--blue-action)',color:'#fff'},attention:{background:'var(--yellow-signal)',color:'var(--charcoal-strong)'},ok:{background:'var(--green-ok)',color:'#fff'},error:{background:'var(--red-alarm)',color:'#fff'}};
  return <span className="sb-label-bold" style={{display:'inline-flex',alignItems:'center',whiteSpace:'nowrap',flex:'none',padding:'2px var(--space-2)',border:'1px solid var(--border-structural)',...tones[tone],...style}} {...rest}>{children}</span>;
}
