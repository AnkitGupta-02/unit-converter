import React from 'react';
import classNames from 'classnames';

function Button({className,children}) {
  const finalClassNames = classNames(className,"border py-2 px-6")
  return (
    <>
    <button className={finalClassNames}>
       {children}
    </button>
    </>
  )
}

export default Button;