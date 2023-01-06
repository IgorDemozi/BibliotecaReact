import Header from '../../Header/Header';
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
   const index: number = state.index;

   return (
      <MainContainer>
         <Header />
         <EditarForm livro={livro} index={index} />
      </MainContainer>
   )
}

export default Editar