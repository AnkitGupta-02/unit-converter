import {createContext, useState} from 'react';

const UnitContext = createContext();

function UnitProvider({children}) {
    const [activeTab, setActiveTab] = useState("length");
    const [data, setData] = useState("");
    const [fromSelection, setFromSelection] = useState(null);
    const [toSelection, setToSelection] = useState(null);
    const [result, setResult] = useState("");

  const shareData = {activeTab,setActiveTab,data,setData,fromSelection,setFromSelection,toSelection,setToSelection,result,setResult}
  return (
    <UnitContext.Provider value={shareData}>
        {children}
    </UnitContext.Provider>
  )
}

export {UnitProvider};
export default UnitContext;