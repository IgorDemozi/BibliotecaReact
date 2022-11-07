import React from 'react'

const Input = ({ className, type, value, placeholder }) => {

   return (
      <>
         <input className={className} type={type} value={value} placeholder={placeholder} />
      </>
   )
}

export default Input