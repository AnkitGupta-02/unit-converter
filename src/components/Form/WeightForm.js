import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import {weightConvert} from '../../services/conversionService.js';

function WeightForm({onSubmit}) {
  const [data, setData] = useState("");
  const [fromSelection, setFromSelection] = useState(null);
  const [toSelection, setToSelection] = useState(null);

      const options = [
        { label: "Milligram (mg)", value: "milligram", symbol: "mg" },
        { label: "Gram (g)", value: "gram", symbol: "g" },
        { label: "Kilogram (kg)", value: "kilogram", symbol: "kg" },
        { label: "Ounce (oz)", value: "ounce", symbol: "oz" },
        { label: "Pound (lb)", value: "pound", symbol: "lb" }
      ];
      

  const handleSubmit = (e) => {
    e.preventDefault();
  const result = weightConvert(data,fromSelection.value,toSelection.value);
  onSubmit(result,toSelection.symbol);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter value to convert"
          className="w-full p-2 mb-4 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="md:flex gap-x-4 ">
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

export default WeightForm;