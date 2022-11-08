import React from 'react'
import { ReactComponent as Logo } from '../imagens/Logo.svg'
import UserMenu from '../Header/UserMenu'
import styles from './Header.module.css'

const Header = () => {
   return (
      <header className={styles.header}>
         <Logo className={styles.logo} alt='Logotipo da biblioteca' />
         <UserMenu/>
      </header>
   )
}

export default Header