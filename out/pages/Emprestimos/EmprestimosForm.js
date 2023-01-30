import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useReducer, useRef } from 'react';
import { LinkParaHome, VoltarPraHome, ContainerGeral, SetaEsquerda } from 'pages/pages.styles';
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
    const [books, setBooks] = useState();
    const [listaFinal, setListaFinal] = useState([]);
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
            let data = resp.data;
            let lista = [];
            setBooks(data);
            data.forEach(book => {
                book.rentHistory.forEach(rent => {
                    let emprestimo = {
                        title: book.title,
                        class: rent.class,
                        studentName: rent.studentName,
                        withdrawalDate: rent.withdrawalDate,
                        deliveryDate: rent.deliveryDate
                    };
                    lista.push(emprestimo);
                });
            });
            setListaFinal(lista);
        })
            .catch(error => {
            console.log(error);
        });
    }, []);
    function ordenarLista(lista, campo, id) {
        if (id !== identificador.current)
            asc.current = true;
        let field = campo;
        if (asc.current && (field === 'withdrawalDate' || field === 'deliveryDate')) {
            lista.sort(function (a, b) {
                let anoMesDiaA = a[field].split('/').reverse().map(Number);
                let anoMesDiaB = b[field].split('/').reverse().map(Number);
                let dataA = new Date(anoMesDiaA[0], anoMesDiaA[1] - 1, anoMesDiaA[2]);
                let dataB = new Date(anoMesDiaB[0], anoMesDiaB[1] - 1, anoMesDiaB[2]);
                return dataA.valueOf() - dataB.valueOf();
            });
        }
        else if (field === 'withdrawalDate' || field === 'deliveryDate') {
            lista.sort((b, a) => {
                let anoMesDiaA = a[field].split('/').reverse().map(Number);
                let anoMesDiaB = b[field].split('/').reverse().map(Number);
                let dataA = new Date(anoMesDiaA[0], anoMesDiaA[1] - 1, anoMesDiaA[2]);
                let dataB = new Date(anoMesDiaB[0], anoMesDiaB[1] - 1, anoMesDiaB[2]);
                return dataA.valueOf() - dataB.valueOf();
            });
        }
        else if (asc.current) {
            lista.sort((a, b) => a[field].localeCompare(b[field]));
        }
        else {
            lista.sort((b, a) => a[field].localeCompare(b[field]));
        }
        setListaFinal(lista);
        asc.current = !asc.current;
        identificador.current = id;
        forceUpdate();
    }
    return (_jsxs(ContainerGeral, { children: [_jsx(VoltarPraHome, { children: _jsxs("p", { children: [_jsxs(LinkParaHome, { to: '/home', children: [_jsx(SetaEsquerda, {}), " Home"] }), " / ", _jsx("b", { children: "Hist\u00F3rico de Empr\u00E9stimos" })] }) }), _jsx(TableContainer, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '0',
                    boxShadow: '0'
                }, component: Paper, children: _jsxs(Table, { sx: { margin: '1.5rem 1.5rem 0 1.5rem' }, children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(StyledTableCell, { children: "Aluno" }), _jsx(StyledTableCell, { children: "Turma" }), _jsx(StyledTableCell, { children: "Livro" }), _jsx(StyledTableCell, { children: "Data de retirada" }), _jsx(StyledTableCell, { children: "Data de entrega" })] }) }), _jsxs(TableBody, { children: [_jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: _jsx(TabelaInput, { value: aluno, onClick: () => { ordenarLista(listaFinal, 'studentName', 1); }, onChange: (aluno) => setAluno(aluno.target.value) }) }), _jsx(StyledTableCell, { children: _jsx(TabelaInput, { value: turma, onClick: () => { ordenarLista(listaFinal, 'class', 2); }, onChange: (turma) => setTurma(turma.target.value) }) }), _jsx(StyledTableCell, { children: _jsx(TabelaInput, { value: titulo, onClick: () => { ordenarLista(listaFinal, 'title', 3); }, onChange: (titulo) => setTitulo(titulo.target.value) }) }), _jsx(StyledTableCell, { children: _jsx(TabelaInput, { value: retirada, onClick: () => { ordenarLista(listaFinal, 'withdrawalDate', 4); }, onChange: (retirada) => setRetirada(retirada.target.value), maxLength: 10 }) }), _jsx(StyledTableCell, { children: _jsx(TabelaInput, { value: entrega, onClick: () => { ordenarLista(listaFinal, 'deliveryDate', 5); }, onChange: (entrega) => setEntrega(entrega.target.value), maxLength: 10 }) })] }), !books ?
                                    _jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, {}), _jsx(StyledTableCell, {}), _jsx(StyledTableCell, { align: "center", children: "Carregando informa\u00E7\u00F5es..." }), _jsx(StyledTableCell, {}), _jsx(StyledTableCell, {})] })
                                    :
                                        listaFinal && listaFinal.map((element, index) => {
                                            return (_jsx(React.Fragment, { children: element.studentName.toLowerCase().includes(aluno.toLowerCase()) &&
                                                    element.class.toLowerCase().includes(turma.toLowerCase()) &&
                                                    element.title.toLowerCase().includes(titulo.toLowerCase()) &&
                                                    element.withdrawalDate.toLowerCase().includes(retirada.toLowerCase()) &&
                                                    element.deliveryDate.toLowerCase().includes(entrega.toLowerCase()) ?
                                                    _jsxs(StyledTableRow, { children: [_jsx(StyledTableCell, { component: "th", scope: "row", children: element.studentName }), _jsx(StyledTableCell, { children: element.class }), _jsx(StyledTableCell, { children: element.title }), _jsx(StyledTableCell, { children: element.withdrawalDate }), _jsx(StyledTableCell, { children: element.deliveryDate })] })
                                                    : null }, index));
                                        })] })] }) })] }));
};
export default EmprestimosForm;
