import { ChangeEvent, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import "bulma/css/bulma.min.css";

import ShirtComponentTile1 from "../clothing/shirt/ShirtComponentTile1";
import ShirtComponentTile2 from "../clothing/shirt/ShirtComponentTile2";
import ShirtComponentTile3 from "../clothing/shirt/ShirtComponentTile3";
import ShirtComponentTile4 from "../clothing/shirt/ShirtComponentTile4";

import JacketComponentTile4 from "../clothing/jacket/JacketComponentTile4";
import JacketComponentTile2 from "../clothing/jacket/JacketComponentTile2";
import JacketComponentTile3 from "../clothing/jacket/JacketComponentTile3";
import JacketComponentTile1 from "../clothing/jacket/JacketComponentTile1";

const MainContent = () => {
  var data = require("../../data/data.json");
  const [shirtContentVisible, setShirtContentVisible] =
    useState<boolean>(false);
  const [jacketContentVisible, setJacketContentVisible] =
    useState<boolean>(false);
  const [dropdownClothing, setDropDownClothing] = useState<string>("T-Shirt");
  const [valueRecyclingfähigkeit, setValueRecyclingfähigkeit] =
    useState<number>(0);
  const [valueStrapazierfähigkeit, setValueStrapazierfähigkeit] =
    useState<number>(0);
  const [valueFestigkeit, setValueFestigkeit] = useState<number>(0);

  useEffect(() => {
    dropdownClothing === "T-Shirt"
      ? setShirtContentVisible(true)
      : setShirtContentVisible(false);
    dropdownClothing === "Jacke"
      ? setJacketContentVisible(true)
      : setJacketContentVisible(false);
    console.log(data);
  }, [dropdownClothing]);

  const handleOnChangeDropdownClothing = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setDropDownClothing(e.target.value);
  };

  const onChangeValueRecycling = (e: any) => {
    setValueRecyclingfähigkeit(e.target.value);
  };

  const onChangeValueStrapazierfähigkeit = (e: any) => {
    setValueStrapazierfähigkeit(e.target.value);
  };

  const onChangeValueFestigkeit = (e: any) => {
    setValueFestigkeit(e.target.value);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="select is-fullwidth is-info">
          <select
            value={dropdownClothing}
            onChange={handleOnChangeDropdownClothing}
          >
            <option>{"T-Shirt"}</option>
            <option>{"Jacke"}</option>
            <option>{"Option 3"}</option>
          </select>
        </div>
        <div></div>

        <div className="select is-fullwidth">
          <select>
            <option>{"Recyclingfähigkeit"}</option>
            <option>{"Option 2"}</option>
            <option>{"Option 3"}</option>
          </select>
        </div>
        <div className="mt-1">
          <Slider
            aria-label="Always visible"
            value={valueRecyclingfähigkeit}
            onChange={onChangeValueRecycling}
            step={1}
            min={0}
            max={5}
            marks={true}
            valueLabelDisplay="on"
          />
        </div>

        <div className="select is-fullwidth">
          <select>
            <option>{"Strapazierfähigkeit"}</option>
            <option>{"Option 2"}</option>
            <option>{"Option 3"}</option>
          </select>
        </div>
        <div className="mt-1">
          <Slider
            aria-label="Always visible"
            value={valueStrapazierfähigkeit}
            onChange={onChangeValueStrapazierfähigkeit}
            step={1}
            min={0}
            max={5}
            marks={true}
            valueLabelDisplay="on"
          />
        </div>
        <div className="select is-fullwidth">
          <select>
            <option>{"Festigkeit"}</option>
            <option>{"Option 2"}</option>
            <option>{"Option 3"}</option>
          </select>
        </div>
        <div className="mt-1">
          <Slider
            aria-label="Always visible"
            value={valueFestigkeit}
            onChange={onChangeValueFestigkeit}
            step={1}
            min={0}
            max={5}
            marks={true}
            valueLabelDisplay="on"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-md bg-slate-200 p-16 text-center text-2xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile1
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile1
              }
            />
          )}
          {jacketContentVisible && (
            <JacketComponentTile1
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jacke"
                )[0].tile1
              }
            />
          )}
        </div>
        <div className="rounded-md bg-emerald-200 p-16 text-center text-2xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile2
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile2
              }
            />
          )}
          {jacketContentVisible && (
            <JacketComponentTile2
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jacke"
                )[0].tile2
              }
            />
          )}
        </div>
        <div className="rounded-md bg-rose-300 p-16 text-center text-2xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile3
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile3
              }
            />
          )}
          {jacketContentVisible && (
            <JacketComponentTile3
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jacke"
                )[0].tile3
              }
            />
          )}
        </div>
        <div className="rounded-md bg-amber-200 p-16 text-center text-2xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile4
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile4
              }
            />
          )}
          {jacketContentVisible && (
            <JacketComponentTile4
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueFestigkeit={valueFestigkeit}
              valueStrapazierfähigkeit={valueStrapazierfähigkeit}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jacke"
                )[0].tile4
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { MainContent };
