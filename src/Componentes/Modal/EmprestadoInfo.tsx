import { Livro } from 'types';
import { EmprestadoInfoSection } from './Modal.styles';

const EmprestadoInfo = ({ livro }: { livro: Livro }) => {
   const emprestimo = livro.rentHistory[Object.keys(livro.rentHistory).length - 1];

   return (
      <EmprestadoInfoSection>
         <h1>Dados do aluno</h1>

         <div id="container">
            <div>
               <h2>Nome do aluno</h2>
               <p>{emprestimo.studentName}</p>
            </div>

            <div>
               <h2>Turma</h2>
               <p>{emprestimo.class}</p>
            </div>

            <div>
               <h2>Data da retirada</h2>
               <p>{emprestimo.withdrawalDate}</p>
            </div>

            <div>
               <h2>Data de devolução</h2>
               <p>{emprestimo.deliveryDate}</p>
            </div>
         </div>
      </EmprestadoInfoSection>
   );
};

export default EmprestadoInfo;
