import React from 'react'

const Input = ({ id, className, type, value, placeholder, onChange, maxlength }) => {

   return (
      <>
         <input
            className={className} type={type} value={value} id={id}
            placeholder={placeholder} onChange={onChange} maxLength={maxlength}
         />
      </>
   )
}

export default Input