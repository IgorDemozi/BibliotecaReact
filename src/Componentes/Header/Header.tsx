import UserMenu from 'Componentes/Header/UserMenu'
import { ReactComponent as Logo } from 'assets/Logo.svg'
import { Cabecalho } from 'styles'

const Header = () => {
   return (
      <Cabecalho>
         <Logo alt='Logotipo da biblioteca' />
         <UserMenu/>
      </Cabecalho>
   )
}

export default Header