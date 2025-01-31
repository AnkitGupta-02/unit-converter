import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import useUnitContext from "../../hooks/use-UnitContext";
import Modal from "../Modal";


export default function Accordion({ list = [], getSelected }) {
  const {
    activeTab
  } = useUnitContext();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(list[0]);
  // const divEl = useRef();

  // useEffect(() => {
  //   const handler = (event) => {
  //     if (divEl.current && !divEl.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handler, true);

  //   return () => {
  //     document.removeEventListener("click", handler);
  //   };
  // }, []);

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
     <div className="relative select-none w-72">
      
      <div
        onClick={()=>setIsOpen(true)}
        className="flex items-center justify-end w-full px-3 py-2 text-lg border rounded-md "
      >
        <div className="w-full">{value.label}</div>
        <GoChevronDown />
      </div>
      {isOpen && (
        <Modal onClose={handleClick} className="">{renderList}</Modal>
      )}
    </div>
   
  );
}
