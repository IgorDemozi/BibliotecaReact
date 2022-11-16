import React from 'react'
import { ContainerGeral, LinkParaHome, SetaEsquerda, VoltarPraHome } from '../styles'

const EmprestimosForm = () => {
   return (
      <ContainerGeral>
         <VoltarPraHome>
            <p>
               <LinkParaHome to='/home'>
                  <SetaEsquerda /> Home
               </LinkParaHome> / <b>Histórico de Empréstimos</b>
            </p>
         </VoltarPraHome>

         EmprestimosForm
      </ContainerGeral>
   )
}

export default EmprestimosForm