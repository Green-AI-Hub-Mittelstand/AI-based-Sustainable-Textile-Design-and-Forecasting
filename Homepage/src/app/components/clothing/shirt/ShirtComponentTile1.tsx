export default function ShirtComponentTile1(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueLanglebigkeit: number;
  valueRegenerativität: number;
  valueCase: number;
}) {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <h1 style={{ fontWeight: 'bold' }}>Vorgeschlagene Zusammensetzung:</h1>
      <p style={{ fontWeight: 'normal' }}>{props.data[`case${props.valueCase}`].text}</p>
    </div>
  );
}