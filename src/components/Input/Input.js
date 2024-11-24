import React from 'react'

function Input({ labelText, inputType, inputName, inputValue, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor='inputText' className="text-sm font-medium text-gray-700">
            {labelText}
        </label>
        <input 
        type={inputType}
        id={inputName}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
    </div>
  )
}

export default Input