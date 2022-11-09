import React from 'react'

const Select = ({ generos }) => {
   return (
      <select>
         <option value>Selecione um gênero</option>
         {generos.map((item) =>
            <option value={item}>{item}</option>
         )}
      </select>
   )
}

export default Select