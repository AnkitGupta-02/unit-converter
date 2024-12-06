import React from 'react';
import classNames from 'classnames';

function Button({className,children, ...rest}) {
  const finalClassNames = classNames(className,"border p-2 font-semibold text-lg")
  return (
    <>
    <button className={finalClassNames} {...rest}>
       {children}
    </button> 
    </>
  )
}

export default Button;