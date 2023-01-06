import React, { ChangeEvent, useState } from 'react'
import { DivFechar, MenuHistorico } from './Modal.styles'
import Fechar from '../assets/Caminho_265.svg'
import { ModalProps } from '../types'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

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

const ModalHistorico = ({ livro, setHistoricoAtivado, setModalLivroAtivado }: ModalProps) => {

   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [retirada, setRetirada] = useState('');
   const [entrega, setEntrega] = useState('');

   function voltar() {
      if (setHistoricoAtivado && setModalLivroAtivado) {
         setHistoricoAtivado(false);
         setModalLivroAtivado(true);
      }
   }

   return (
      <MenuHistorico>
         <DivFechar>
            <h1>Histórico de empréstimos do livro</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <TableContainer
            sx={{
               display: 'flex',
               alignItems: 'center',
               borderRadius: '0',
               boxShadow: '0'
            }}
            component={Paper}
         >
            <Table sx={{ marginTop: '1.5rem' }}>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>Aluno</StyledTableCell>
                     <StyledTableCell align="center">Turma</StyledTableCell>
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

                  {livro.rentHistory.map((emprestimo, index) => {
                     return (
                        <React.Fragment key={index}>
                           {emprestimo.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                              emprestimo.class.toLowerCase().includes(turma.toLowerCase()) &&
                              emprestimo.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                              emprestimo.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                              <StyledTableRow>
                                 <StyledTableCell component="th" scope="row">
                                    {emprestimo.studentName}
                                 </StyledTableCell>
                                 <StyledTableCell align="center">{emprestimo.class}</StyledTableCell>
                                 <StyledTableCell align="right">{emprestimo.withdrawalDate}
                                 </StyledTableCell>
                                 <StyledTableCell align="right">{emprestimo.deliveryDate}
                                 </StyledTableCell>
                              </StyledTableRow>
                              : null}
                        </React.Fragment>
                     )
                  })}
               </TableBody>
            </Table>
         </TableContainer>
      </MenuHistorico>
   )
}

export default ModalHistorico