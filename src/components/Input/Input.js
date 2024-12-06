import React from 'react';
import classNames from 'classnames';

function Input({ type, value, onChange, placeholder,className, ...rest }) {

  const finalClassNames = classNames(className,"w-full p-2 mb-4 border border-teal-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500")
  return (
    <div className="">
        <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={finalClassNames}
        {...rest}
        />
    </div>
  )
}

export default Input