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
        className="px-4 py-2 text-gray-700 bg-white max-md:py-3 hover:bg-gray-100 max-md:border-b-2"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative md:w-56">
      <div
        className="flex justify-between w-full px-4 py-2 border border-teal-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="fixed z-50 text-xl bg-white border border-gray-300 rounded shadow-lg md:overflow-y-auto touch-pinch-zoom h-96 md:h-72 lg:h-fit lg:w-full md:top-7 md:text-base md:inset-x-72 inset-x-12 lg:inset-x-0 lg:top-10 top-10 w-80 md:w-96 lg:absolute focus:outline-none focus:ring-2 focus:ring-teal-500">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
