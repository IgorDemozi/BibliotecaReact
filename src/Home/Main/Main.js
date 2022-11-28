import React from 'react'
import Card from './Card'
import { ReactComponent as ImgCadastro } from '../../imagens/add_circle_FILL0_wght400_GRAD0_opsz48.svg'
import { ReactComponent as ImgBiblioteca } from '../../imagens/import_contacts_FILL0_wght400_GRAD0_opsz48 (1).svg'
import { ReactComponent as ImgEmprestimos } from '../../imagens/pending_actions_FILL0_wght400_GRAD0_opsz48.svg'
import { CardsDiv, ContainerMain } from '../../styles'

const Main = () => {
   return (
      <ContainerMain>
         <CardsDiv>
            <Card txt='Cadastrar novo Livro' rota='/cadastro'><ImgCadastro /></Card>
            <Card txt='Biblioteca' rota='/biblioteca'><ImgBiblioteca /></Card>
            <Card txt='Histórico de Empréstimos' rota='/emprestimos'><ImgEmprestimos /></Card>
         </CardsDiv>
      </ContainerMain>
   )
}

export default Main