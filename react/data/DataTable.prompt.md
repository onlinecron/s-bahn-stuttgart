The primary data surface: 1px rules between every cell, grey header band, optional zebra rows.

```jsx
<DataTable columns={[{key:'time',header:'Abfahrt',mono:true},{key:'line',header:'Linie'}]} rows={rows} />
```
Put it inside `<Card padded={false}>`. Use `mono` columns for times, IDs and cron; `dense` for >20 visible rows.
