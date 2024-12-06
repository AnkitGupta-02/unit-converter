import React from "react";
import useUnitContext from "../../hooks/use-UnitContext.js";
import Button from "../Button/Button.js";

function NavBar() {
  const { activeTab, setActiveTab,setData,setFromSelection,setToSelection,setResult } = useUnitContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setData("");
    setFromSelection(null);
    setToSelection(null);
    setResult("")

  };

  return (
    <div className="p-2 ">
      <h2 className="text-3xl font-medium text-center">Unit Converter</h2>
      <nav className="flex items-center justify-between md:justify-evenly">
        <Button
          onClick={() => handleTabChange("length")}
          className={activeTab === "length" ? "text-teal-500 underline" : ""}
        >
          Length
        </Button>
        <Button
          onClick={() => handleTabChange("weight")}
          className={activeTab === "weight" ? "text-teal-500 underline" : ""}
        >
          Weight
        </Button>
        <Button
          onClick={() => handleTabChange("temperature")}
          className={
            activeTab === "temperature" ? "text-teal-500 underline" : ""
          }
        >
          Temperature
        </Button>
      </nav>
    </div>
  );
}

export default NavBar;
