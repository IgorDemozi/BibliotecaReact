import Header from '../../Componentes/Header/Header';
import EditarForm from './EditarForm';
import { MainContainer } from '../pages.styles';
import { useLocation } from 'react-router-dom';
import { Livro } from 'types';

interface LocationProps {
   livro: Livro;
}

const Editar = () => {
   const state = useLocation().state as LocationProps;

   return (
      <MainContainer>
         <Header />
         <EditarForm livro={state.livro} />
      </MainContainer>
   )
}

export default Editar