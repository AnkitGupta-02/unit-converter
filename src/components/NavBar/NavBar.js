import React from "react";
import useUnitContext from "../../hooks/use-UnitContext.js";
import Button from "../Button/Button.js";

function NavBar() {
  const {
    activeTab,
    setActiveTab,
    setData,
    setFromSelection,
    setToSelection,
    setResult,
  } = useUnitContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setData("");
    setFromSelection("");
    setToSelection();
    setResult("");
  };

  const tabList = [
    { label: "Length", value: "length" },
    { label: "Weight", value: "weight" },
    { label: "Temperature", value: "temperature" },
  ];

  const renderTabList = tabList.map((item) => {
    return (
      <Button
       key={item.label}
        onClick={() => handleTabChange(item.value)}
        className={activeTab === item.value ? "text-teal-500 underline" : ""}
      >
        {item.label}
      </Button>
    );
  });

  return (
    <div className="p-2">
      <h2 className="text-3xl font-medium text-center">Unit Converter</h2>
      <nav className="flex items-center justify-between md:justify-evenly">
        {renderTabList}
      </nav>
    </div>
  );
}

export default NavBar;
