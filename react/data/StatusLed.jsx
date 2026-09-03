import React from 'react';

const TONES={running:{c:'var(--status-running)',t:'Running'},pending:{c:'var(--status-pending)',t:'Pending'},inactive:{c:'var(--status-inactive)',t:'Inactive'},ok:{c:'var(--status-ok)',t:'OK'},error:{c:'var(--status-error)',t:'Error'}};

export function StatusLed({status='inactive',label,size=10,style,...rest}){
  const tone=TONES[status]||TONES.inactive;
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',...style}} {...rest}>
      <span aria-hidden="true" style={{width:size,height:size,background:tone.c,border:'1px solid var(--border-structural)',flex:'none'}}></span>
      {label!==false&&<span className="sb-label-bold" style={{color:'var(--text-primary)'}}>{label||tone.t}</span>}
    </span>
  );
}
