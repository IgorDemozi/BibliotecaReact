import Header from 'Componentes/Header/Header'
import { MainContainer } from 'pages/pages.styles'
import BibliotecaForm from './BibliotecaForm'

const Biblioteca = () => {
   return (
      <MainContainer>
         <Header />
         <BibliotecaForm />
      </MainContainer>
   )
}

export default Biblioteca