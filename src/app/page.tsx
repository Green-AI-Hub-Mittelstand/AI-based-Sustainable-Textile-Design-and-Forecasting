"use client";

import { ChangeEvent, useEffect, useState } from "react";

import "bulma/css/bulma.min.css";
import Slider from "@mui/material/Slider";

import ShirtComponentTile1 from "./components/ShirtTiles/ShirtComponentTile1";
import ShirtComponentTile2 from "./components/ShirtTiles/ShirtComponentTile2";
import ShirtComponentTile3 from "./components/ShirtTiles/ShirtComponentTile3";
import ShirtComponentTile4 from "./components/ShirtTiles/ShirtComponentTile4";

import JacketComponentTile4 from "./components/JacketTiles/JacketComponentTile4";
import JacketComponentTile2 from "./components/JacketTiles/JacketComponentTile2";
import JacketComponentTile3 from "./components/JacketTiles/JacketComponentTile3";
import JacketComponentTile1 from "./components/JacketTiles/JacketComponentTile1";

export default function Homepage() {
  var data = require("./data/data.json");

  const [firstDropdown, setFirstDropdown] = useState<string>("T-Shirt");
  const [shirtContentVisible, setShirtContentVisible] =
    useState<boolean>(false);
  const [jacketContentVisible, setJacketContentVisible] =
    useState<boolean>(false);
  const [valueRecyclingfähigkeit, setValueRecyclingfähigkeit] =
    useState<number>(0);
  const [valueStrapazierfähigkeit, setValueStrapazierfähigkeit] =
    useState<number>(0);
  const [valueFestigkeit, setValueFestigkeit] = useState<number>(0);

  useEffect(() => {
    firstDropdown === "T-Shirt"
      ? setShirtContentVisible(true)
      : setShirtContentVisible(false);
    firstDropdown === "Jacke"
      ? setJacketContentVisible(true)
      : setJacketContentVisible(false);
    console.log(data);
  }, [firstDropdown]);

  const handleOnChangeFirstDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstDropdown(e.target.value);
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
    <div className="container is-fluid mt-3">
      <div className="tile is-ancestor mb-6">
        <div className="tile is-parent is-vertical is-7">
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth">
                  <select
                    value={firstDropdown}
                    onChange={handleOnChangeFirstDropdown}
                  >
                    <option>{"T-Shirt"}</option>
                    <option>{"Jacke"}</option>
                    <option>{"Option 3"}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor mb-6">
        <div className="tile is-parent is-vertical is-7">
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>{"Recyclingfähigkeit"}</option>
                    <option>{"Option 2"}</option>
                    <option>{"Option 3"}</option>
                  </select>
                </div>
              </div>
              <div className="column">
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
            </div>
          </div>
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>{"Strapazierfähigkeit"}</option>
                    <option>{"Option 2"}</option>
                    <option>{"Option 3"}</option>
                  </select>
                </div>
              </div>
              <div className="column">
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
            </div>
          </div>
          <div className="tile is-child">
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="select is-fullwidth mb-6">
                  <select>
                    <option>{"Festigkeit"}</option>
                    <option>{"Option 2"}</option>
                    <option>{"Option 3"}</option>
                  </select>
                </div>
              </div>
              <div className="column">
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
          </div>
        </div>

        <div className="tile is-parent is-5">
          <div className="tile is-child card has-background-grey has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
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
            </div>
          </div>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent mr-6">
          <div className="tile is-child card has-background-success has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
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
            </div>
          </div>
        </div>
        <div className="tile is-parent mr-6">
          <div className="tile is-child card has-background-danger has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 mr-6 ml-6">
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
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child card has-background-warning-dark has-text-white">
            <div className="card-content">
              <div className="content is-size-3 has-text-centered mt-6 mb-6 ml-6 mr-6">
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
        </div>
      </div>
    </div>
  );
}
