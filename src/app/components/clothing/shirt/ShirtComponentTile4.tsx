import ShirtComponentTileRules from "./ShirtComponentTileRules";

export default function ShirtComponentTile4(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueLanglebigkeit: number;
  valueRegenerativität: number;
}) {
  return (
    <ShirtComponentTileRules
      data={props.data}
      valueRecyclingfähigkeit={props.valueRecyclingfähigkeit}
      valueLanglebigkeit={props.valueLanglebigkeit}
      valueRegenerativität={props.valueRegenerativität}
    ></ShirtComponentTileRules>
  );
}
