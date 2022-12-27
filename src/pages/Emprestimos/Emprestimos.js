import React from 'react'
import Header from '../../Header/Header.js'
import { MainContainer } from '../pages.styles.js'
import EmprestimosForm from './EmprestimosForm.js'

const Emprestimos = () => {
   return (
      <MainContainer>
         <Header />
         <EmprestimosForm />
      </MainContainer>
   )
}

export default Emprestimos