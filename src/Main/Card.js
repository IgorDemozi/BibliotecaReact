import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Main.module.css'

const Card = ({ txt, children }) => {
   return (
      <Link to='/' style={{ textDecoration: 'none' }}>
         <div className={styles.card}>
            {children}
            <div><p>{txt}</p></div>
         </div>
      </Link>
   )
}

export default Card