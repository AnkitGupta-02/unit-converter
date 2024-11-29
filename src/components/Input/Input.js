import React from 'react';
import classNames from 'classnames';

function Input({ type, value, onChange, placeholder,className }) {

  const finalClassNames = classNames(className,"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")
  return (
    <div className="">
        <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={finalClassNames}
        />
    </div>
  )
}

export default Input