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
        className="p-1 hover:bg-blue-100"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative w-48">
      <div className="flex justify-around p-2" onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown />
      </div>
      {isOpen && <div className="p-3 border">{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
