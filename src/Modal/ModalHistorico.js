import React, { useState } from 'react'
import { DivFechar, MenuHistorico, Tabela, TabelaInput } from '../styles'
import Fechar from '../imagens/Caminho_265.svg'

const ModalHistorico = ({ livro, setHistoricoAtivado, setModalLivroAtivado }) => {

   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [retirada, setRetirada] = useState('');
   const [entrega, setEntrega] = useState('');

   function setValores(event) {
      switch (event.target.id) {
         case 'aluno':
            setAluno(event.target.value)
            break;
         case 'turma':
            setTurma(event.target.value)
            break;
         case 'retirada':
            setRetirada(event.target.value)
            break;
         case 'entrega':
            setEntrega(event.target.value)
            break;
         default: break;
      }
   }

   function voltar() {
      setHistoricoAtivado(false);
      setModalLivroAtivado(true);
   }

   return (
      <MenuHistorico>
         <DivFechar>
            <h1>Histórico de empréstimos do livro</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <Tabela>
            <thead>
               <tr>
                  <th>Aluno</th>
                  <th>Turma</th>
                  <th>Data da Retirada</th>
                  <th>Data da Entrega</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td><TabelaInput id="aluno" value={aluno} onChange={setValores} type="text" /></td>
                  <td><TabelaInput id="turma" value={turma} onChange={setValores} type="text" /></td>
                  <td><TabelaInput
                     id="retirada" value={retirada}
                     onChange={setValores}
                     maxlength="10" type="text" />
                  </td>
                  <td><TabelaInput
                     id="entrega" value={entrega}
                     onChange={setValores}
                     maxlength="10" type="text" />
                  </td>
               </tr>

               {livro.rentHistory.map((emprestimo, index) => {
                  return (
                     <React.Fragment key={index}>
                        {emprestimo.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                           emprestimo.class.toLowerCase().includes(turma.toLowerCase()) &&
                           emprestimo.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                           emprestimo.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                           <tr>
                              <td><p>{emprestimo.studentName}</p></td>
                              <td><p>{emprestimo.class}</p></td>
                              <td><p>{emprestimo.withdrawalDate}</p></td>
                              <td><p>{emprestimo.deliveryDate}</p></td>
                           </tr>
                           : null}
                     </React.Fragment>
                  )
               })}
            </tbody>

         </Tabela>
      </MenuHistorico>
   )
}

export default ModalHistorico