import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import useUnitContext from "../../hooks/use-UnitContext";

export default function Accordion({ list = [], getSelected }) {
  const {
    activeTab
  } = useUnitContext();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(list[0]);

  const handleClick = () => setIsOpen(!isOpen);

  const handleUnitSelect = (item) => {
    setValue(item);
    getSelected(value);
    setIsOpen(false);
  };

  function AccordionItem({ label, onClick }) {
    return (
      <div
        className="px-3 py-2 cursor-pointer hover:bg-neutral-200"
        onClick={onClick}
      >
        {label}
      </div>
    );
  }

  const renderList = list.map((item) => {
    return (
      <AccordionItem
        key={item.label}
        {...item}
        onClick={() => handleUnitSelect(item)}
      />
    );
  });
  useEffect(() => {
    setValue(list[0])
  }, [activeTab,list]);

  useEffect(() => {
    getSelected(value);
  }, [getSelected, value]);

  return (
    <div className="relative w-full select-none">
      <div
        onClick={handleClick}
        className="flex items-center w-full px-3 py-1 text-lg border rounded-md border-neutral-800"
      >
        <div className="w-full pr-2">{value.label}</div>
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="w-full bg-white top-4 absoulte">{renderList}</div>
      )}
    </div>
  );
}
