import React, { useState, ChangeEvent, useEffect, useReducer, useRef } from 'react'
import { LinkParaHome, VoltarPraHome, ContainerGeral, SetaEsquerda } from 'pages/pages.styles'
import { Livro, RentHistory } from 'types'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TabelaInput from 'Componentes/TabelaInput';
import { Api } from 'api';

const StyledTableCell = styled(TableCell)(() => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#FFC501',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 18,

      '&:nth-of-type(1)': {
         borderRadius: '0.25rem 0 0 0',
      },

      '&:last-of-type': {
         borderRadius: '0 0.25rem 0 0',
      }
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   height: '4.625rem',
   '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
   },
   '&:last-child td, &:last-child th': {
      border: 0,
      borderRadius: '0.25rem 0 0 0',
      boxShadow: '0'
   },
}));

const EmprestimosForm = () => {
   const [books, setBooks] = useState<Livro[]>();
   const [listaFinal, setListaFinal] = useState<RentHistory[]>([]);
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [titulo, setTitulo] = useState('');
   const [retirada, setRetirada] = useState('');
   const [entrega, setEntrega] = useState('');
   const [, forceUpdate] = useReducer(x => x + 1, 0);
   const asc = useRef(true);
   const identificador = useRef(0);

   useEffect(() => {
      Api.get('books')
         .then(resp => {
            let data: Livro[] = resp.data;
            let lista: RentHistory[] = [];
            setBooks(data);
            data.forEach(book => {
               book.rentHistory.forEach(rent => {
                  let emprestimo: RentHistory = {
                     title: book.title,
                     class: rent.class,
                     studentName: rent.studentName,
                     withdrawalDate: rent.withdrawalDate,
                     deliveryDate: rent.deliveryDate
                  };
                  lista.push(emprestimo)
               })
            })
            setListaFinal(lista);
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

   function ordenarLista(lista: RentHistory[], campo: string, id: number): void {
      if (id !== identificador.current) asc.current = true;
      let field = campo as keyof RentHistory

      if (asc.current && (field === 'withdrawalDate' || field === 'deliveryDate')) {
         lista.sort(function (a, b) {
            let anoMesDiaA = a[field]!.split('/').reverse().map(Number);
            let anoMesDiaB = b[field]!.split('/').reverse().map(Number);
            let dataA = new Date(anoMesDiaA[0], anoMesDiaA[1] - 1, anoMesDiaA[2]);
            let dataB = new Date(anoMesDiaB[0], anoMesDiaB[1] - 1, anoMesDiaB[2]);

            return dataA.valueOf() - dataB.valueOf();
         })
      } else if (field === 'withdrawalDate' || field === 'deliveryDate') {
         lista.sort((b, a) => {
            let anoMesDiaA = a[field]!.split('/').reverse().map(Number);
            let anoMesDiaB = b[field]!.split('/').reverse().map(Number);
            let dataA = new Date(anoMesDiaA[0], anoMesDiaA[1] - 1, anoMesDiaA[2]);
            let dataB = new Date(anoMesDiaB[0], anoMesDiaB[1] - 1, anoMesDiaB[2]);

            return dataA.valueOf() - dataB.valueOf();
         })
      } else if (asc.current) {
         lista.sort((a, b) => a[field]!.localeCompare(b[field]!))
      } else {
         lista.sort((b, a) => a[field]!.localeCompare(b[field]!))
      }

      setListaFinal(lista);
      asc.current = !asc.current
      identificador.current = id;
      forceUpdate();
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
                     <StyledTableCell>Turma</StyledTableCell>
                     <StyledTableCell>Livro</StyledTableCell>
                     <StyledTableCell>Data de retirada</StyledTableCell>
                     <StyledTableCell>Data de entrega</StyledTableCell>
                  </TableRow>
               </TableHead>

               <TableBody>
                  <StyledTableRow >
                     <StyledTableCell component="th" scope="row">
                        <TabelaInput
                           value={aluno}
                           onClick={() => { ordenarLista(listaFinal, 'studentName', 1); }}
                           onChange={
                              (aluno: ChangeEvent<HTMLInputElement>) => setAluno(aluno.target.value)
                           } />
                     </StyledTableCell>
                     <StyledTableCell>
                        <TabelaInput
                           value={turma}
                           onClick={() => { ordenarLista(listaFinal, 'class', 2) }}
                           onChange={
                              (turma: ChangeEvent<HTMLInputElement>) => setTurma(turma.target.value)
                           } />
                     </StyledTableCell>
                     <StyledTableCell>
                        <TabelaInput
                           value={titulo}
                           onClick={() => { ordenarLista(listaFinal, 'title', 3) }}
                           onChange={
                              (titulo: ChangeEvent<HTMLInputElement>) => setTitulo(titulo.target.value)
                           } />
                     </StyledTableCell>
                     <StyledTableCell>
                        <TabelaInput
                           value={retirada}
                           onClick={() => { ordenarLista(listaFinal, 'withdrawalDate', 4) }}
                           onChange={
                              (retirada: ChangeEvent<HTMLInputElement>) => setRetirada(retirada.target.value)
                           }
                           maxLength={10}
                        />
                     </StyledTableCell>
                     <StyledTableCell>
                        <TabelaInput
                           value={entrega}
                           onClick={() => { ordenarLista(listaFinal, 'deliveryDate', 5) }}
                           onChange={
                              (entrega: ChangeEvent<HTMLInputElement>) => setEntrega(entrega.target.value)
                           }
                           maxLength={10}
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
                     listaFinal && listaFinal.map((element, index) => {
                        return (
                           <React.Fragment key={index}>
                              {element.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                                 element.class.toLowerCase().includes(turma.toLowerCase()) &&
                                 element.title!.toLowerCase().includes(titulo.toLowerCase()) &&
                                 element.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                                 element.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                                 <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                       {element.studentName}
                                    </StyledTableCell>
                                    <StyledTableCell>{element.class}</StyledTableCell>
                                    <StyledTableCell>{element.title}</StyledTableCell>
                                    <StyledTableCell>{element.withdrawalDate}
                                    </StyledTableCell>
                                    <StyledTableCell>{element.deliveryDate}
                                    </StyledTableCell>
                                 </StyledTableRow>
                                 : null}
                           </React.Fragment>
                        )
                     })
                  }
               </TableBody>
            </Table>
         </TableContainer>
      </ContainerGeral >
   )
}

export default EmprestimosForm