import React from 'react';

export function Select({label,options=[],hint,error,id,style,...rest}){
  const selId=id||`sel-${label?label.replace(/\W+/g,'-').toLowerCase():'field'}`;
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-1)',...style}}>
      {label&&<label htmlFor={selId} className="sb-label-bold" style={{color:'var(--text-strong)'}}>{label}</label>}
      <select id={selId} style={{appearance:'none',border:error?'2px solid var(--red-alarm)':'1px solid var(--border-structural)',borderRadius:0,background:'var(--surface-card)',padding:'var(--pad-control-y) var(--space-8) var(--pad-control-y) var(--pad-control-x)',font:'var(--type-body-md-weight) var(--type-body-md-size)/var(--type-body-md-line) var(--font-core)',color:'var(--text-primary)',backgroundImage:'linear-gradient(45deg,transparent 50%,var(--charcoal) 50%),linear-gradient(135deg,var(--charcoal) 50%,transparent 50%)',backgroundPosition:'calc(100% - 16px) 50%,calc(100% - 11px) 50%',backgroundSize:'5px 5px,5px 5px',backgroundRepeat:'no-repeat'}} {...rest}>
        {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
      </select>
      {(error||hint)&&<span className="sb-label-sm" style={{color:error?'var(--red-alarm)':'var(--text-muted)'}}>{error||hint}</span>}
    </div>
  );
}
