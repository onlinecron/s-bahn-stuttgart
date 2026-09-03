The system's only container. Use it for every panel; depth comes from the border and the grey header, never a shadow.

```jsx
<Card title="Störungen" meta="12:04:31" padded={false}><DataTable …/></Card>
```
Set `padded={false}` whenever a DataTable fills the body so cell borders meet the card border.
