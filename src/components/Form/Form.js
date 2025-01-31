import { useEffect } from "react";
import Input from "../Input/Input";
import { convert } from "../../services/conversionService.js";
import useUnitContext from "../../hooks/use-UnitContext.js";
import options from "../../utils/DropdownList.js";
import Accordion from "../Accordion/Accordion.js";

function Form() {
  const {
    activeTab,
    setData,
    setFromSelection,
    setToSelection,
    setResult,
    result,
    data,
    fromSelection,
    toSelection,
  } = useUnitContext();

  const renderOptions = () => {
    const tabOptions = {
      length: options.length.units,
      weight: options.weight.units,
      temperature: options.temperature.units,
    };
    return tabOptions[activeTab];
  };

  useEffect(() => {
    if (data) {
      const convertedValue = convert(
        data,
        fromSelection.value,
        toSelection.value,
        activeTab
      );
      setResult(convertedValue);
    } else {
      setResult("");
    }
  }, [data, fromSelection, toSelection, activeTab, setResult]);

  return (
    <div className="">
      <div className="">
        <Input
          type="number"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter value to convert"
          className=""
        />
        <Input
          type="number"
          value={result}
          readOnly
          onChange={(e) => setResult(e.target.value)}
          placeholder="Converted value"
          className=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <label className="font-medium text-gray-700">
            Unit to Convert from
          </label>
          <Accordion
            list={renderOptions(activeTab)}
            getSelected={(value) => setFromSelection(value)}
          />
        </div>
        <div className="">
          <label className="font-medium text-gray-700">
            Unit to Convert to
          </label>
          <Accordion
            list={renderOptions(activeTab)}
            getSelected={(value) => setToSelection(value)}
          />
        </div>
      </div>
      <div className="p-4">
        <div className={result ? "visible" : "invisible"}>
          <span className="text-red-700">Result:</span>
          {data} {fromSelection?.symbol} = {result} {toSelection?.symbol}
        </div>
      </div>
    </div>
  );
}

export default Form;
