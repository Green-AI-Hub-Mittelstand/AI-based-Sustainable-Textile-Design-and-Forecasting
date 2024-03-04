import { ChangeEvent, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { IconButton, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "bulma/css/bulma.min.css";

import ShirtComponentTile1 from "../clothing/shirt/ShirtComponentTile1";
import ShirtComponentTile2 from "../clothing/shirt/ShirtComponentTile2";
import ShirtComponentTile3 from "../clothing/shirt/ShirtComponentTile3";
import ShirtComponentTile4 from "../clothing/shirt/ShirtComponentTile4";

import JeansComponentTile1 from "../clothing/jeans/JeansComponentTile1";
import JeansComponentTile2 from "../clothing/jeans/JeansComponentTile2";
import JeansComponentTile3 from "../clothing/jeans/JeansComponentTile3";
import JeansComponentTile4 from "../clothing/jeans/JeansComponentTile4";

const MainContent = () => {
  // Daten aus der json-File importieren
  var data = require("../../data/data.json");
  // Variablen für diese Komponente definieren mit useState
  const [shirtContentVisible, setShirtContentVisible] =
    useState<boolean>(false);
  const [jeansContentVisible, setJeansContentVisible] =
    useState<boolean>(false);
  const [dropdownClothing, setDropDownClothing] = useState<string>("T-Shirt");
  const [valueRecyclingfähigkeit, setValueRecyclingfähigkeit] =
    useState<number>(1);
  const [valueLanglebigkeit, setValueLanglebigkeit] = useState<number>(1);
  const [valueRegenerativität, setValueRegenerativität] = useState<number>(1);

  useEffect(() => {
    // Inhalte der Seite anpassen, je nachdem welches Kleidungsstück im Dropdown ausgewählt wird (siehe auch unten bei Tile 1-4)
    dropdownClothing === "T-Shirt"
      ? setShirtContentVisible(true)
      : setShirtContentVisible(false);
    dropdownClothing === "Jeans"
      ? setJeansContentVisible(true)
      : setJeansContentVisible(false);
  }, [dropdownClothing]);

  // onChange-Methode, um den aktuellen Wert des Kleidungsstücks im Dropdown zu tracken
  const handleOnChangeDropdownClothing = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setDropDownClothing(e.target.value);
  };

  // onChange-Methoden, um immer den aktuellen Wert der Slider zu tracken
  const onChangeValueRecycling = (e: any) => {
    setValueRecyclingfähigkeit(e.target.value);
  };

  const onChangeValueLanglebigkeit = (e: any) => {
    setValueLanglebigkeit(e.target.value);
  };

  const onChangeValueRegenerativität = (e: any) => {
    setValueRegenerativität(e.target.value);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-md p-6 bg-gray-100">
        <div className="grid grid-cols-2 gap-8">
          {/* Dropdown Kleidungsstück */}
          <div className="select is-fullwidth is-info">
            <select
              value={dropdownClothing}
              onChange={handleOnChangeDropdownClothing}
            >
              <option>{"T-Shirt"}</option>
              <option>{"Jeans"}</option>
            </select>
          </div>
          <div></div>
          {/* Dropdown Recyclingfähigkeit mit Tooltip */}
          <div className="select is-fullwidth">
            <div className="flex flex-row">
              <div className="basis-1/12">
                <Tooltip
                  title={[
                    "1: Um ein neues Produkt herzustellen, kann nur ein kleiner Anteil recycelter Faser genutzt werden, oder die Faser eignet sich nicht für ein Faser-zu-Faser Recycling.",
                    <br />,
                    "2: Um ein neues Produkt herzustellen, kann nur ein Teil recycelter Faser bestehen, der Rest muss aus neuer Faser bestehen.",
                    <br />,
                    "3: Ein neu hergestelltes Kleidungsstück kann zu einem hohen Anteil oder komplett aus der recycelten Faser bestehen.",
                  ]}
                  placement="left"
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="basis-11/12">
                <select>
                  <option>{"Recyclingfähigkeit"}</option>
                </select>
              </div>
            </div>
          </div>
          {/* Slider für Recyclingfähigkeit */}
          <div className="mt-1">
            <Slider
              aria-label="Always visible"
              value={valueRecyclingfähigkeit}
              onChange={onChangeValueRecycling}
              step={1}
              min={1}
              max={3}
              marks={true}
              valueLabelDisplay="on"
            />
          </div>
          {/* Dropdown Langlebigkeit mit Tooltip */}
          <div className="select is-fullwidth">
            <div className="flex flex-row">
              <div className="basis-1/12">
                <Tooltip
                  title={[
                    "1: Niedrige Langlebigkeit: Die erwartete Langlebigkeit des Kleidungsstücks ist sehr kurz, d.h. das Kleidungsstück muss auch bei vorgesehener Nutzung schnell Abnutzungserscheinungen auf. Dies führt zu einem schnellen Austauschen des Produkts.",
                    <br />,
                    "2: Erhöhte Langlebigkeit: Das Kleidungsstück hat eine mittlere erwartete Langlebigkeit, d.h. bei vorgesehener Nutzung weist das Kleidungsstück nach einiger Zeit Abnutzungserscheinungen auf, welche zum Austauschen des Produkts führen.",
                    <br />,
                    "3: Hohe Langlebigkeit: Das erwartete Langlebigkeit des Kleidungsstücks ist hoch, jedoch ist zu erwarten, dass es nach vielen Jahren vorgesehener Nutzung ausgetauscht werden muss.",
                    <br />,
                    "4: Sehr hohe Langlebigkeit (Hält bei normalem Gebrauch ein Leben lang) Die erwartete Langlebigkeit des Kleidungsstücks ist sehr lang, da keine oder nur sehr wenige Abnutzungserscheinungen zu erwarten sind.",
                  ]}
                  placement="left"
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="basis-11/12">
                <select>
                  <option>{"Langlebigkeit"}</option>
                </select>
              </div>
            </div>
          </div>
          {/* Slider für Langlebigkeit */}
          <div className="mt-1">
            <Slider
              aria-label="Always visible"
              value={valueLanglebigkeit}
              onChange={onChangeValueLanglebigkeit}
              step={1}
              min={1}
              max={4}
              marks={true}
              valueLabelDisplay="on"
            />
          </div>
          {/* Dropdown Regenerativität mit Tooltip */}
          <div className="select is-fullwidth">
            <div className="flex flex-row">
              <div className="basis-1/12">
                <Tooltip
                  title={[
                    "1: Die Ressourcen, welche zur Herstellung des Kleidungsstücks genutzt wurden sind nicht regenerativ.",
                    <br />,
                    "2: Nur ein Teil der Ressourcen, die zur Herstellung des Kleidungsstücks genutzt wurden sind regenerativ.",
                    <br />,
                    "3: 100% der Ressourcen, die zur Herstellung des Kleidungsstücks genutzt wurden, sind regenerativ.",
                  ]}
                  placement="left"
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="basis-11/12">
                <select>
                  <option>{"Regenerativität"}</option>
                </select>
              </div>
            </div>
          </div>
          {/* Slider für Regenerativität */}
          <div className="mt-1">
            <Slider
              aria-label="Always visible"
              value={valueRegenerativität}
              onChange={onChangeValueRegenerativität}
              step={1}
              min={1}
              max={3}
              marks={true}
              valueLabelDisplay="on"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {/* Tile 1 für das ausgewählte Kleidungsstück*/}
        <div className="col-span-3 rounded-md bg-slate-200 py-28 p-8 text-center text-2xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile1
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile1
              }
            />
          )}
          {jeansContentVisible && (
            <JeansComponentTile1
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jeans"
                )[0].tile1
              }
            />
          )}
        </div>
        {/* Tile 2 für das ausgewählte Kleidungsstück*/}
        <div className="rounded-md bg-emerald-200 py-16 px-4 text-center text-xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile2
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile2
              }
            />
          )}
          {jeansContentVisible && (
            <JeansComponentTile2
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jeans"
                )[0].tile2
              }
            />
          )}
        </div>
        {/* Tile 3 für das ausgewählte Kleidungsstück*/}
        <div className="rounded-md bg-rose-300 py-16 px-4 text-center text-xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile3
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile3
              }
            />
          )}
          {jeansContentVisible && (
            <JeansComponentTile3
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jeans"
                )[0].tile3
              }
            />
          )}
        </div>
        {/* Tile 4 für das ausgewählte Kleidungsstück*/}
        <div className="rounded-md bg-amber-200 py-16 px-4 text-center text-xl font-semibold">
          {shirtContentVisible && (
            <ShirtComponentTile4
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "T-Shirt"
                )[0].tile4
              }
            />
          )}
          {jeansContentVisible && (
            <JeansComponentTile4
              valueRecyclingfähigkeit={valueRecyclingfähigkeit}
              valueLanglebigkeit={valueLanglebigkeit}
              valueRegenerativität={valueRegenerativität}
              data={
                data.filter(
                  (elem: { name: string }) => elem.name === "Jeans"
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
