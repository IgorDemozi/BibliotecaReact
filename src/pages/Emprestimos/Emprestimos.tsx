import Header from 'Componentes/Header/Header'
import { MainContainer } from 'pages/pages.styles'
import EmprestimosForm from './EmprestimosForm'

const Emprestimos = () => {
   return (
      <MainContainer>
         <Header />
         <EmprestimosForm />
      </MainContainer>
   )
}

export default Emprestimos