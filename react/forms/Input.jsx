import React from 'react';

export function Input({label,hint,error,prefix,suffix,mono=false,id,style,...rest}){
  const inputId=id||`in-${label?label.replace(/\W+/g,'-').toLowerCase():'field'}`;
  const [focus,setFocus]=React.useState(false);
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'var(--space-1)',...style}}>
      {label&&<label htmlFor={inputId} className="sb-label-bold" style={{color:'var(--text-strong)'}}>{label}</label>}
      <div style={{display:'flex',alignItems:'stretch',border:error?'2px solid var(--red-alarm)':focus?'2px solid var(--focus-ring)':'1px solid var(--border-structural)',background:'var(--surface-card)'}}>
        {prefix&&<span className="sb-label-sm" style={{display:'flex',alignItems:'center',padding:'0 var(--space-2)',background:'var(--surface-header)',borderRight:'1px solid var(--border-structural)'}}>{prefix}</span>}
        <input id={inputId} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} style={{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',padding:'var(--pad-control-y) var(--pad-control-x)',color:'var(--text-primary)',font:mono?'var(--type-mono-data-weight) var(--type-mono-data-size)/var(--type-mono-data-line) var(--font-mono)':'var(--type-body-md-weight) var(--type-body-md-size)/var(--type-body-md-line) var(--font-core)'}} {...rest}/>
        {suffix&&<span className="sb-label-sm" style={{display:'flex',alignItems:'center',padding:'0 var(--space-2)',background:'var(--surface-header)',borderLeft:'1px solid var(--border-structural)'}}>{suffix}</span>}
      </div>
      {(error||hint)&&<span className="sb-label-sm" style={{color:error?'var(--red-alarm)':'var(--text-muted)'}}>{error||hint}</span>}
    </div>
  );
}
