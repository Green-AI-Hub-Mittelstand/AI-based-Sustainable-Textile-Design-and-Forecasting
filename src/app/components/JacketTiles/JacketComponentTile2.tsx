export default function JacketComponentTile2(props: {
  data: any;
  valueRecyclingfähigkeit: number;
  valueFestigkeit: number;
  valueStrapazierfähigkeit: number;
}) {
  return (
    <div>
      {props.valueRecyclingfähigkeit > 1
        ? props.data.case1.text
        : props.valueStrapazierfähigkeit >= 3
        ? props.data.case2.text
        : props.data.standardcase.text}
    </div>
  );
}
