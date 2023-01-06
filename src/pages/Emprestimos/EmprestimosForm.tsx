import React, { useState, ChangeEvent } from 'react'
import { LinkParaHome, VoltarPraHome, ContainerGeral, SetaEsquerda } from 'pages/pages.styles'
import axios from "axios"
import { Livro } from 'types'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(() => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FFC501',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 18,

      '&:nth-of-type(1)': {
         borderRadius: '5px 0 0 0',
      },

      '&:last-of-type': {
         borderRadius: '0 5px 0 0',
      }
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   height: '74px',
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
   },
   '&:last-child td, &:last-child th': {
      border: 0,
      borderRadius: '5px 0 0 0',
      boxShadow: '0'
   },
}));

const EmprestimosForm = () => {
   const [books, setBooks] = useState<Livro[]>();
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [livro, setLivro] = useState('');
   const [retirada, setRetirada] = useState('');
   const [entrega, setEntrega] = useState('');

   React.useEffect(() => {
      axios.get('http://localhost:3000/books')
         .then(resp => {
            var data: Livro[] = resp.data;
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

         <TableContainer
            sx={{
               display: 'flex',
               alignItems: 'center',
               borderRadius: '0',
               boxShadow: '0'
            }}
            component={Paper}
         >
            <Table sx={{ margin: '1.5rem 1.5rem 0 1.5rem' }}>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Aluno</StyledTableCell>
                     <StyledTableCell align="center">Turma</StyledTableCell>
                     <StyledTableCell align="center">Livro</StyledTableCell>
                     <StyledTableCell align="right">Data de retirada</StyledTableCell>
                     <StyledTableCell align="right"> Data de entrega</StyledTableCell>
                  </TableRow>
               </TableHead>

               <TableBody>
                  <StyledTableRow >
                     <StyledTableCell component="th" scope="row">
                        <input
                           className='tabelaInput'
                           type="text"
                           value={aluno}
                           onChange={
                              (aluno: ChangeEvent<HTMLInputElement>) => setAluno(aluno.target.value)
                           }
                        />
                     </StyledTableCell>
                     <StyledTableCell>
                        <input
                           className='tabelaInput'
                           type="text"
                           value={turma}
                           onChange={(turma: ChangeEvent<HTMLInputElement>) => setTurma(turma.target.value)}
                        />
                     </StyledTableCell>
                     <StyledTableCell>
                        <input
                           className='tabelaInput'
                           type="text"
                           value={livro}
                           onChange={(livro: ChangeEvent<HTMLInputElement>) => setLivro(livro.target.value)}
                        />
                     </StyledTableCell>
                     <StyledTableCell>
                        <input
                           className='tabelaInput'
                           type="text"
                           value={retirada}
                           onChange={
                              (retirada: ChangeEvent<HTMLInputElement>) => setRetirada(retirada.target.value)
                           }
                           maxLength={10}
                        />
                     </StyledTableCell>
                     <StyledTableCell>
                        <input
                           className='tabelaInput'
                           type="text"
                           maxLength={10}
                           value={entrega}
                           onChange={
                              (entrega: ChangeEvent<HTMLInputElement>) => setEntrega(entrega.target.value)
                           }
                        />
                     </StyledTableCell>
                  </StyledTableRow>

                  {!books ?
                     <StyledTableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">Carregando informações...</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                     </StyledTableRow>
                     :
                     books.map((item: Livro) => {
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
                                          <StyledTableRow>
                                             <StyledTableCell component="th" scope="row">
                                                {element.studentName}
                                             </StyledTableCell>
                                             <StyledTableCell align="center">{element.class}</StyledTableCell>
                                             <StyledTableCell align="left">{item.title}</StyledTableCell>
                                             <StyledTableCell align="right">{element.withdrawalDate}
                                             </StyledTableCell>
                                             <StyledTableCell align="right">{element.deliveryDate}
                                             </StyledTableCell>
                                          </StyledTableRow>
                                          : null}
                                    </React.Fragment>
                                 )
                              })
                           )
                        }
                        return null;
                     })
                  }
               </TableBody>
            </Table>
         </TableContainer>
      </ContainerGeral >
   )
}

export default EmprestimosForm