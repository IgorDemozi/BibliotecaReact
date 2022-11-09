import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Main.module.css'

const Card = ({ txt, children, rota }) => {
   return (
      <Link to={rota} className={styles.cardLink}>
         <div className={styles.card}>
            {children}
            <div><p>{txt}</p></div>
         </div>
      </Link>
   )
}

export default Card