import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // close dropdown
    setIsOpen(false);
    // selected option
    onChange(option);
    
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative w-48">
      <div className="flex justify-between w-full px-4 py-2 border border-teal-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown />
      </div>
      {isOpen && <div className="absolute z-10 w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
