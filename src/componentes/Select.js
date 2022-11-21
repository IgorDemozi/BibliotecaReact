import React from 'react'

const Select = ({ value, options, onChange, className, opcaoNeutra }) => {
   return (
      <select value={value} onChange={onChange} className={className}>
         <option value={''} >{opcaoNeutra}</option>
         {options.map((item) =>
            <option key={item} value={item}>{item}</option>
         )}
      </select>
   )
}

export default Select