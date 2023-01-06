import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { DivFechar, MenuHistorico } from './Modal.styles';
import Fechar from '../assets/Caminho_265.svg';
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
const ModalHistorico = ({ livro, setHistoricoAtivado, setModalLivroAtivado }) => {
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
    return (_jsxs(MenuHistorico, { children: [_jsxs(DivFechar, { children: [_jsx("h1", { children: "Hist\u00F3rico de empr\u00E9stimos do livro" }), _jsx("img", { onClick: voltar, src: Fechar, alt: 'Fechar' })] }), _jsx(TableContainer, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '0',
                    boxShadow: '0'
                }, component: Paper, children: _jsxs(Table, { sx: { marginTop: '1.5rem' }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Aluno" }), _jsx(StyledTableCell, { align: "center", children: "Turma" }), _jsx(StyledTableCell, { align: "right", children: "Data de retirada" }), _jsx(StyledTableCell, { align: "right", children: " Data de entrega" })] }) }), _jsxs(TableBody, { children: [_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx("input", { className: 'tabelaInput', type: "text", value: aluno, onChange: (aluno) => setAluno(aluno.target.value) }) }), _jsx(StyledTableCell, { children: _jsx("input", { className: 'tabelaInput', type: "text", value: turma, onChange: (turma) => setTurma(turma.target.value) }) }), _jsx(StyledTableCell, { children: _jsx("input", { className: 'tabelaInput', type: "text", value: retirada, onChange: (retirada) => setRetirada(retirada.target.value), maxLength: 10 }) }), _jsx(StyledTableCell, { children: _jsx("input", { className: 'tabelaInput', type: "text", maxLength: 10, value: entrega, onChange: (entrega) => setEntrega(entrega.target.value) }) })] }), livro.rentHistory.map((emprestimo, index) => {
                                    return (_jsx(React.Fragment, { children: emprestimo.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                                            emprestimo.class.toLowerCase().includes(turma.toLowerCase()) &&
                                            emprestimo.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                                            emprestimo.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                                            _jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: emprestimo.studentName }), _jsx(StyledTableCell, { align: "center", children: emprestimo.class }), _jsx(StyledTableCell, { align: "right", children: emprestimo.withdrawalDate }), _jsx(StyledTableCell, { align: "right", children: emprestimo.deliveryDate })] })
                                            : null }, index));
                                })] })] }) })] }));
};
export default ModalHistorico;
