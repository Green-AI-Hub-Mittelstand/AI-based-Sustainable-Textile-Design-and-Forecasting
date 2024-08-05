export default function JeansComponentTile5(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueLanglebigkeit: number;
  valueRegenerativität: number;
}) {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      {props.valueRecyclingfähigkeit <= 2 &&
        props.valueLanglebigkeit <= 4 &&
        props.valueRegenerativität === 1
        ? props.data.case1.text
        : props.valueRecyclingfähigkeit === 3 &&
          props.valueLanglebigkeit <= 4 &&
          props.valueRegenerativität === 1
          ? props.data.case2.text
          : props.valueRecyclingfähigkeit === 1 &&
            props.valueLanglebigkeit <= 4 &&
            props.valueRegenerativität === 0
            ? props.data.case3.text
            : props.data.standardcase.text}
    </div>
  );
}
