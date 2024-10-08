export default function ShirtComponentTileRules(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueLanglebigkeit: number;
  valueRegenerativität: number;
}) {
  return (
    <div style={{ whiteSpace: "pre-line" }}>
      {props.valueRecyclingfähigkeit === 1 &&
      props.valueLanglebigkeit === 1 &&
      props.valueRegenerativität === 0
        ? props.data.case1.text
        : props.valueRecyclingfähigkeit === 2 &&
          props.valueLanglebigkeit === 1 &&
          props.valueRegenerativität === 3
        ? props.data.case2.text
        : props.valueRecyclingfähigkeit === 3 &&
          props.valueLanglebigkeit === 4 &&
          props.valueRegenerativität === 1
        ? props.data.case3.text
        : props.valueRecyclingfähigkeit === 1 &&
          props.valueLanglebigkeit === 3 &&
          props.valueRegenerativität === 1
        ? props.data.case4.text
        : props.valueRecyclingfähigkeit === 2 &&
          props.valueLanglebigkeit === 4 &&
          props.valueRegenerativität === 1
        ? props.data.case5.text
        : props.valueRecyclingfähigkeit === 1 &&
          props.valueLanglebigkeit === 1 &&
          props.valueRegenerativität === 3
        ? props.data.case6.text
        : props.valueRecyclingfähigkeit === 1 &&
          props.valueLanglebigkeit === 2 &&
          props.valueRegenerativität === 3
        ? props.data.case7.text
        : props.valueRecyclingfähigkeit === 1 &&
          props.valueLanglebigkeit === 4 &&
          props.valueRegenerativität === 2
        ? props.data.case8.text
        : props.valueRecyclingfähigkeit === 2 &&
          props.valueLanglebigkeit === 3 &&
          props.valueRegenerativität === 3
        ? props.data.case9.text
        : props.valueRecyclingfähigkeit === 3 &&
          props.valueLanglebigkeit === 2 &&
          props.valueRegenerativität === 3
        ? props.data.case10.text
        : props.valueRecyclingfähigkeit === 3 &&
          props.valueLanglebigkeit === 3 &&
          props.valueRegenerativität === 3
        ? props.data.case11.text
        : props.data.standardcase.text}
    </div>
  );
}
