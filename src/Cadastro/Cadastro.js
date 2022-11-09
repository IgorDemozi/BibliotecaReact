import React from 'react'
import Header from '../Header/Header'
import CadastroForm from './CadastroForm'
import { MainContainer } from '../styles'

const Cadastro = () => {
   return (
      <MainContainer>
         <Header />
         <CadastroForm />
      </MainContainer>
   )
}

export default Cadastro
