import React from 'react';

export function Radio({label,name,value,checked,defaultChecked,onChange,disabled=false,style,...rest}){
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',cursor:disabled?'not-allowed':'pointer',color:disabled?'var(--disabled-text)':'var(--text-primary)',...style}}>
      <span style={{position:'relative',width:'16px',height:'16px',flex:'none',border:'1px solid var(--border-structural)',background:'var(--surface-card)',display:'inline-block'}}>
        <span style={{position:'absolute',inset:'4px',background:(checked??defaultChecked)?'var(--blue-action)':'transparent',borderRadius:'50%'}}></span>
        <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}} {...rest}/>
      </span>
      <span className="sb-body-md">{label}</span>
    </label>
  );
}
