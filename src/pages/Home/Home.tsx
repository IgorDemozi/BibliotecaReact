import Header from '../../Componentes/Header/Header'
import Main from './Main/Main'
import { MainContainer } from '../pages.styles'

const Home = () => {
   return (
      <MainContainer>
         <Header />
         <Main />
      </MainContainer>
   )
}

export default Home