import React from 'react'

const Input = ({ className, type, value, placeholder, onChange }) => {

   return (
      <>
         <input
            className={className} type={type} value={value}
            placeholder={placeholder} onChange={onChange}
         />
      </>
   )
}

export default Input