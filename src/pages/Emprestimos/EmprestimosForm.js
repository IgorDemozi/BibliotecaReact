import React, { useState } from 'react'
import { Tabela, TabelaInput } from '../../styles.js'
import { LinkParaHome, VoltarPraHome, ContainerGeral, SetaEsquerda } from '../pages.styles'
import axios from "axios"

const EmprestimosForm = () => {
   const [books, setBooks] = useState('');
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [livro, setLivro] = useState('');
   const [retirada, setRetirada] = useState('');
   const [entrega, setEntrega] = useState('');

   React.useEffect(() => {
      axios.get('http://localhost:3000/books')
         .then(resp => {
            var data = resp.data;
            setBooks(data);
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

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
                  <td>
                     <TabelaInput
                        type="text"
                        id="aluno"
                        value={aluno}
                        onChange={(aluno) => setAluno(aluno.target.value)}
                     />
                  </td>
                  <td>
                     <TabelaInput
                        type="text"
                        id="turma"
                        value={turma}
                        onChange={(turma) => setTurma(turma.target.value)}
                     />
                  </td>
                  <td>
                     <TabelaInput
                        type="text"
                        id="livro"
                        value={livro}
                        onChange={(livro) => setLivro(livro.target.value)}
                     />
                  </td>
                  <td>
                     <TabelaInput
                        type="text"
                        maxlength="10"
                        id="retirada"
                        value={retirada}
                        onChange={(retirada) => setRetirada(retirada.target.value)}
                     />
                  </td>
                  <td>
                     <TabelaInput
                        type="text"
                        maxlength="10"
                        id="entrega"
                        value={entrega}
                        onChange={(entrega) => setEntrega(entrega.target.value)}
                     />
                  </td>
               </tr>

               {!books ?
                  <tr>
                     <td></td>
                     <td></td>
                     <td id='carregandoInfo'><p>Carregando informações...</p></td>
                     <td></td>
                     <td></td>
                  </tr>
                  :
                  books.map((item) => {
                     if (item.rentHistory.length > 0) {
                        return (
                           item.rentHistory.map((element, index) => {
                              return (
                                 <React.Fragment key={index}>
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
                     return null;
                  })}
            </tbody>

         </Tabela>
      </ContainerGeral>
   )
}

export default EmprestimosForm