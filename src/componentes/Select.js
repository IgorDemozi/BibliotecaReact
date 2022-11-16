import React from 'react'

const Select = ({ genero, generos, onChange, className }) => {
   return (
      <select value={genero} onChange={onChange} className={className}>
         <option value={''} >Selecione um gênero</option>
         {generos.map((item) =>
            <option key={item} value={item}>{item}</option>
         )}
      </select>
   )
}

export default Select