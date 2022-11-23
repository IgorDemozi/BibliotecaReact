import React from 'react'
import UserMenu from '../Header/UserMenu'
import { ReactComponent as Logo } from '../imagens/Logo.svg'
import { Cabecalho } from '../styles'

const Header = () => {
   return (
      <Cabecalho>
         <Logo alt='Logotipo da biblioteca' />
         <UserMenu/>
      </Cabecalho>
   )
}

export default Header