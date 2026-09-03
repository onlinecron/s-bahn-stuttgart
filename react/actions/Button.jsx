import React from 'react';

const base={font:'var(--type-label-bold-weight) var(--type-body-md-size)/1 var(--font-core)',letterSpacing:'0.02em',border:'1px solid var(--border-structural)',borderRadius:0,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--space-2)',boxShadow:'none',transition:'background var(--duration-fast) var(--easing-mechanical)',textDecoration:'none'};
const sizes={sm:{height:'var(--control-height-sm)',padding:'0 var(--space-2)',fontSize:'var(--type-label-sm-size)'},md:{height:'var(--control-height-md)',padding:'0 var(--space-3)'},lg:{height:'var(--control-height-lg)',padding:'0 var(--space-4)',fontSize:'var(--type-body-lg-size)'}};

export function Button({variant='primary',size='md',disabled=false,fullWidth=false,pressed=false,type='button',icon,children,style,...rest}){
  const tones={
    primary:{background:pressed?'var(--action-primary-pressed)':'var(--action-primary)',color:'var(--on-action-primary)'},
    secondary:{background:pressed?'var(--blue-tint)':'var(--action-secondary)',color:'var(--on-action-secondary)'},
    attention:{background:'var(--accent-attention)',color:'var(--on-accent-attention)'},
    danger:{background:'var(--red-alarm)',color:'#fff'},
    ghost:{background:'transparent',color:'var(--text-primary)',border:'1px solid transparent'}
  };
  const dis=disabled?{background:'var(--disabled-surface)',color:'var(--disabled-text)',borderColor:'var(--disabled-border)',cursor:'not-allowed'}:null;
  return <button type={type} disabled={disabled} style={{...base,...sizes[size],...tones[variant],...(fullWidth?{width:'100%'}:null),...dis,...style}} {...rest}>{icon}{children}</button>;
}
