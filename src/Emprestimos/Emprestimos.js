import React from 'react'
import Header from '../Header/Header'
import { MainContainer } from '../styles'
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