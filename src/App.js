import React from 'react';
import { useState } from 'react';
import "./App.css";
// import Form from './components/Form/Form';
import Dropdown from './components/Dropdown/Dropdown';


function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }


    const options  = [
        { "label": "Millimeter", "value": "millimeter" },
        { "label": "Centimeter", "value": "centimeter" },
        { "label": "Meter", "value": "meter" },
        { "label": "Kilometer", "value": "kilometer" },
        { "label": "Inch", "value": "inch" },
        { "label": "Foot", "value": "foot" },
        { "label": "Yard", "value": "yard" },
        { "label": "Mile", "value": "mile" }
];

  return (
    <div >
    
    <Dropdown options={options} value={selection} onChange={handleSelect} />
    <Dropdown options={options} value={selection} onChange={handleSelect} />
    
    </div>
  )
}

export default App;