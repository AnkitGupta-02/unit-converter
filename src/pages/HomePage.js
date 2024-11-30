import React, {useState} from 'react'
import LengthForm from '../components/Form/LenghtForm.js';
import WeightForm from '../components/Form/WeightForm.js';
import TemperatureForm from '../components/Form/TemperatureForm.js';

function HomePage() {
  const [activeTab, setActiveTab] = useState("length");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [unit,setUnit] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowResult(false); // Reset to form view when switching tabs
  };

  const handleResult = (calculatedResult,conversionUnit) => {
    setResult(calculatedResult);
    setShowResult(true);
    setUnit(conversionUnit);
  };

  const renderForm = () => {
    if (activeTab === "length") {
      return <LengthForm onSubmit={handleResult} />;
    } else if (activeTab === "weight") {
      return <WeightForm onSubmit={handleResult} />;
    } else if (activeTab === "temperature") {
      return <TemperatureForm onSubmit={handleResult} />;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-teal-100">
      <h2 className="mb-4 text-3xl font-bold text-gray-800">Unit Converter</h2>
      <nav className="flex mb-4 text-xl font-medium text-center text-gray-800 gap-x-6">
        <button onClick={() => handleTabChange("length")} className='text-teal-500 hover:underline'>Length</button>
        <button onClick={() => handleTabChange("weight")} className='text-teal-500 hover:underline'>Weight</button>
        <button onClick={() => handleTabChange("temperature")} className='text-teal-500 hover:underline'>Temperature</button>
      </nav>
      <div>
        {showResult ? (
          <div className=''>
            <div className='flex gap-x-4'>
            <h2 className='mb-4 text-xl font-medium text-center text-gray-800'>Result:</h2>
            <p className='mb-4 text-lg text-center text-gray-800 '>{result} {unit}</p>
            </div>
            <button onClick={() => setShowResult(false)} className="w-full py-2 text-white transition bg-teal-500 rounded-md hover:bg-teal-600">Reset</button>
          </div>
        ) : (
          renderForm()
        )}
      </div>
    </div>
    </div>
  )
}

export default HomePage;