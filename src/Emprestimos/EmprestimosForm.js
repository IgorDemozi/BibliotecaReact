import dados from '../data.json'
import React, { useState } from 'react'
import { ContainerGeral, LinkParaHome, SetaEsquerda, Tabela, VoltarPraHome, TabelaInput } from '../styles'

const EmprestimosForm = () => {

   const { books } = dados.data;
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [livro, setLivro] = useState('');
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
         case 'livro':
            setLivro(event.target.value)
            break;
         case 'retirada':
            setRetirada(event.target.value)
            break;
         case 'entrega':
            setEntrega(event.target.value)
            break;
      }
   }

   return (
      <ContainerGeral>
         <VoltarPraHome>
            <p>
               <LinkParaHome to='/home'>
                  <SetaEsquerda /> Home
               </LinkParaHome> / <b>Histórico de Empréstimos</b>
            </p>
         </VoltarPraHome>

         <Tabela>
            <thead>
               <tr>
                  <th>Aluno</th>
                  <th>Turma</th>
                  <th>Livro</th>
                  <th>Data da Retirada</th>
                  <th>Data da Entrega</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td><TabelaInput id="aluno" value={aluno} onChange={setValores} type="text" /></td>
                  <td><TabelaInput id="turma" value={turma} onChange={setValores} type="text" /></td>
                  <td><TabelaInput id="livro" value={livro} onChange={setValores} type="text" /></td>
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

               {books.map((item) => {
                  if (item.rentHistory.length > 0) {
                     var i = 0
                     return (
                        item.rentHistory.map((element) => {
                           i++;
                           return (
                              <React.Fragment key={i}>
                                 {element.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                                  element.class.toLowerCase().includes(turma.toLowerCase()) &&
                                  item.title.toLowerCase().includes(livro.toLowerCase()) &&
                                  element.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                                  element.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                                    <tr>
                                       <td><p>{element.studentName}</p></td>
                                       <td><p>{element.class}</p></td>
                                       <td><p>{item.title}</p></td>
                                       <td><p>{element.withdrawalDate}</p></td>
                                       <td><p>{element.deliveryDate}</p></td>
                                    </tr> 
                                 : null}
                              </React.Fragment>
                           )
                        })
                     )
                  }
               })}

            </tbody>

         </Tabela>
      </ContainerGeral>
   )
}

export default EmprestimosForm