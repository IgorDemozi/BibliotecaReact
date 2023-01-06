import Card from './Card'
import ImgCadastro from '../../../assets/add_circle_FILL0_wght400_GRAD0_opsz48.svg'
import ImgBiblioteca from '../../../assets/import_contacts_FILL0_wght400_GRAD0_opsz48 (1).svg'
import ImgEmprestimos from '../../../assets/pending_actions_FILL0_wght400_GRAD0_opsz48.svg'
import { CardsDiv, ContainerMain } from './Main.styles'

const Main = () => {
   return (
      <ContainerMain>
         <CardsDiv>
            <Card txt='Cadastrar novo Livro' rota='/cadastro' alt='cadastro' imagem={ImgCadastro} />
            <Card txt='Biblioteca' rota='/biblioteca' alt='biblioteca' imagem={ImgBiblioteca} />
            <Card txt='Histórico de Empréstimos' rota='/emprestimos' alt='emprestimos' imagem={ImgEmprestimos}/>
         </CardsDiv>
      </ContainerMain>
   )
}

export default Main