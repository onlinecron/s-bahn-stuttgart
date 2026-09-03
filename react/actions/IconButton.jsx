import React from 'react';

export function IconButton({label,size='md',variant='secondary',disabled=false,style,children,...rest}){
  const dim={sm:'var(--control-height-sm)',md:'var(--control-height-md)',lg:'var(--control-height-lg)'}[size];
  const tones={primary:{background:'var(--action-primary)',color:'var(--on-action-primary)'},secondary:{background:'var(--action-secondary)',color:'var(--on-action-secondary)'},ghost:{background:'transparent',color:'var(--text-primary)',border:'1px solid transparent'}};
  return <button type="button" aria-label={label} title={label} disabled={disabled} style={{width:dim,height:dim,display:'inline-flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border-structural)',borderRadius:0,cursor:disabled?'not-allowed':'pointer',padding:0,...tones[variant],...(disabled?{background:'var(--disabled-surface)',color:'var(--disabled-text)',borderColor:'var(--disabled-border)'}:null),...style}} {...rest}>{children}</button>;
}
