import React from 'react'
import Header from '../Header/Header'
import { MainContainer } from '../styles'
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