import Header from '../../Componentes/Header/Header';
import EditarForm from './EditarForm';
import { MainContainer } from '../pages.styles';
import { useLocation } from 'react-router-dom';
import { Livro } from '../../types';

interface LocationProps {
   livro: Livro;
   index: number
}

const Editar = () => {
   const state = useLocation().state as LocationProps;
   const livro: Livro = state.livro;

   return (
      <MainContainer>
         <Header />
         <EditarForm livro={livro} />
      </MainContainer>
   )
}

export default Editar