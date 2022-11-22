import React from 'react'
import Header from '../Header/Header';
import EditarForm from './EditarForm';
import { MainContainer } from '../styles';
import { useLocation } from 'react-router-dom';

const Editar = () => {
   const location = useLocation();

   return (
      <MainContainer>
         <Header />
         <EditarForm livro={location.state.livro} index={location.state.index}/>
      </MainContainer>
   )
}

export default Editar