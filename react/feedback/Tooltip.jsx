import React from 'react';

export function Tooltip({content,placement='top',children,style,...rest}){
  const [open,setOpen]=React.useState(false);
  const pos=placement==='bottom'?{top:'calc(100% + 4px)'}:{bottom:'calc(100% + 4px)'};
  return (
    <span style={{position:'relative',display:'inline-flex',...style}} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} onFocus={()=>setOpen(true)} onBlur={()=>setOpen(false)} {...rest}>
      {children}
      {open&&<span role="tooltip" className="sb-label-sm" style={{position:'absolute',left:0,...pos,whiteSpace:'nowrap',background:'var(--surface-inverse)',color:'var(--text-inverse)',border:'1px solid var(--border-inverse)',padding:'2px var(--space-2)',zIndex:50}}>{content}</span>}
    </span>
  );
}
