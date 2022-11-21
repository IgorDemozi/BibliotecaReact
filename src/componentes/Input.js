import React from 'react'

const Input = ({ id, className, type, value, placeholder, onChange, maxlength, onFocus, onBlur}) => {

   return (
      <>
         <input
            className={className} type={type} value={value} id={id} onFocus={onFocus} onBlur={onBlur}
            placeholder={placeholder} onChange={onChange} maxLength={maxlength}
         />
      </>
   )
}

export default Input