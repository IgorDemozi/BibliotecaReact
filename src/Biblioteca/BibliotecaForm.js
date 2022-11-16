import React from 'react'
import { ContainerGeral, LinkParaHome, SetaEsquerda, VoltarPraHome } from '../styles'

const BibliotecaForm = () => {
   return (
      <ContainerGeral>
         <VoltarPraHome>
            <p>
               <LinkParaHome to='/home'>
                  <SetaEsquerda /> Home
               </LinkParaHome> / <b>Biblioteca</b>
            </p>
         </VoltarPraHome>

         BibliotecaForm
      </ContainerGeral>
   )
}

export default BibliotecaForm