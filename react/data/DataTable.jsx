import React from 'react';

export function DataTable({columns=[],rows=[],zebra=true,dense=false,onRowClick,emptyText='Keine Daten',style,...rest}){
  const pad=dense?'4px var(--space-2)':'var(--space-2) var(--space-3)';
  return (
    <table style={{width:'100%',borderCollapse:'collapse',background:'var(--surface-card)',font:'var(--type-body-md-weight) var(--type-body-md-size)/var(--type-body-md-line) var(--font-core)',...style}} {...rest}>
      <thead>
        <tr>{columns.map(c=>(
          <th key={c.key} className="sb-label-bold" style={{textAlign:c.align||'left',padding:pad,background:'var(--surface-header)',borderBottom:'1px solid var(--border-structural)',borderRight:'1px solid var(--border-hairline)',color:'var(--text-strong)',width:c.width,whiteSpace:'nowrap'}}>{c.header}</th>
        ))}</tr>
      </thead>
      <tbody>
        {rows.length===0&&<tr><td colSpan={columns.length} className="sb-label-sm" style={{padding:'var(--space-6)',textAlign:'center',color:'var(--text-faint)'}}>{emptyText}</td></tr>}
        {rows.map((r,i)=>(
          <tr key={r.id||i} onClick={onRowClick?()=>onRowClick(r,i):undefined} style={{background:zebra&&i%2===1?'var(--surface-zebra)':'transparent',cursor:onRowClick?'pointer':'default'}}>
            {columns.map(c=>(
              <td key={c.key} style={{textAlign:c.align||'left',padding:pad,borderBottom:'1px solid var(--border-hairline)',borderRight:'1px solid var(--border-hairline)',fontFamily:c.mono?'var(--font-mono)':'inherit',fontSize:c.mono?'var(--type-mono-data-size)':'inherit',fontVariantNumeric:c.mono?'tabular-nums':'normal',whiteSpace:c.wrap?'normal':'nowrap'}}>
                {c.render?c.render(r,i):r[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
