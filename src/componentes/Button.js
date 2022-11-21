import React from 'react'

const Button = ({ children, className, onClick, disabled }) => {
   return (
      <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
   )
}

export default Button