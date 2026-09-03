import React from 'react';

export function Checkbox({label,checked,defaultChecked,onChange,disabled=false,indeterminate=false,style,...rest}){
  const [internal,setInternal]=React.useState(!!defaultChecked);
  const on=checked!==undefined?checked:internal;
  const toggle=e=>{if(checked===undefined)setInternal(e.target.checked);onChange&&onChange(e);};
  return (
    <label style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',cursor:disabled?'not-allowed':'pointer',color:disabled?'var(--disabled-text)':'var(--text-primary)',...style}}>
      <span style={{position:'relative',width:'16px',height:'16px',flex:'none',border:'1px solid var(--border-structural)',background:disabled?'var(--disabled-surface)':'var(--surface-card)',display:'inline-block'}}>
        <span style={indeterminate?{position:'absolute',left:'3px',right:'3px',top:'7px',height:'2px',background:'var(--blue-action)'}:{position:'absolute',inset:'3px',background:on?'var(--blue-action)':'transparent'}}></span>
        <input type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}} {...rest}/>
      </span>
      {label&&<span className="sb-body-md">{label}</span>}
    </label>
  );
}
