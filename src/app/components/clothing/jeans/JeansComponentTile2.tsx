import JeansComponentTileRules from "./JeansComponentRules";

export default function JeansComponentTile2(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueLanglebigkeit: number;
  valueRegenerativität: number;
}) {
  return (
    <JeansComponentTileRules
      data={props.data}
      valueRecyclingfähigkeit={props.valueRecyclingfähigkeit}
      valueLanglebigkeit={props.valueLanglebigkeit}
      valueRegenerativität={props.valueRegenerativität}
    ></JeansComponentTileRules>
  );
}
