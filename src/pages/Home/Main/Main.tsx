import Card from './Card';
import ImgCadastro from 'assets/add_circle_FILL0_wght400_GRAD0_opsz48.svg';
import ImgBiblioteca from 'assets/import_contacts_FILL0_wght400_GRAD0_opsz48 (1).svg';
import ImgEmprestimos from 'assets/pending_actions_FILL0_wght400_GRAD0_opsz48.svg';
import { CardsDiv, ContainerMain } from './Main.styles';

const Main = () => {
   return (
      <ContainerMain data-testid={'Main'}>
         <CardsDiv>
            <Card
               dataTestId={'linkCadastro'}
               txt="Cadastrar novo Livro"
               rota="/home/cadastro"
               alt="cadastro"
               imagem={ImgCadastro}
            />
            <Card
               dataTestId={'linkBiblioteca'}
               txt="Biblioteca"
               rota="/home/biblioteca"
               alt="biblioteca"
               imagem={ImgBiblioteca}
            />
            <Card
               dataTestId={'linkHistorico'}
               txt="Histórico de Empréstimos"
               rota="/home/emprestimos"
               alt="emprestimos"
               imagem={ImgEmprestimos}
            />
         </CardsDiv>
      </ContainerMain>
   );
};

export default Main;
