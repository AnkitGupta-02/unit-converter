import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import {lengthConvert} from '../../services/conversionService.js';

function LengthForm({onSubmit}) {
  const [data, setData] = useState("");
  const [fromSelection, setFromSelection] = useState(null);
  const [toSelection, setToSelection] = useState(null);

  const options = [
    { label: "Millimeter (mm)", value: "millimeter", symbol: "mm" },
    { label: "Centimeter (cm)", value: "centimeter", symbol: "cm" },
    { label: "Meter (m)", value: "meter", symbol: "m" },
    { label: "Kilometer (km)", value: "kilometer", symbol: "km" },
    { label: "Inch (in)", value: "inch", symbol: "in" },
    { label: "Foot (ft)", value: "foot", symbol: "ft" },
    { label: "Yard (yd)", value: "yard", symbol: "yd" },
    { label: "Mile (mi)", value: "mile", symbol: "mi" }
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
 const result =  lengthConvert(data,fromSelection.value,toSelection.value);
 onSubmit(result,toSelection.symbol);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter value to convert"
          className="w-full p-2 mb-4 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex gap-x-4 ">
        <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Unit to Convert from</label>
          <Dropdown
            options={options}
            value={fromSelection}
            onChange={(option) => setFromSelection(option)}
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">Unit to Convert to</label>
          <Dropdown
            options={options}
            value={toSelection}
            onChange={(option) => setToSelection(option)}
          />
        </div>
        </div>
        <Button type='submit' className="w-full py-2 text-white transition bg-teal-500 rounded-md hover:bg-teal-600">Convert</Button>
      </form>
    </div>
  );
}

export default LengthForm;
