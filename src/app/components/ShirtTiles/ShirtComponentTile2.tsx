export default function ShirtComponentTile2(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueFestigkeit: number;
  valueStrapazierfähigkeit: number;
}) {
  return (
    <div>
      {props.valueRecyclingfähigkeit >= 1 && props.valueRecyclingfähigkeit <= 3
        ? props.data.case1.text
        : props.valueRecyclingfähigkeit > 3 &&
          props.valueStrapazierfähigkeit > 3
        ? props.data.case2.text
        : props.data.standardcase.text}
    </div>
  );
}
