import React from 'react'
import Header from '../../Header/Header'
import { MainContainer } from '../pages.styles.js'
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