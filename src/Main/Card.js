import React from 'react'
import { CardLink } from '../styles'

const Card = ({ txt, children, rota }) => {
   return (
      <CardLink to={rota}>
         <div>
            {children}
            <div><p>{txt}</p></div>
         </div>
      </CardLink>
   )
}

export default Card