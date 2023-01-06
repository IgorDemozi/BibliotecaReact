import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Fechar from '../assets/Caminho_265.svg';
import InativadoInfo from './InativadoInfo';
import EmprestadoInfo from './EmprestadoInfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BotaoDevolver, BotoesSection, CapaBotaoSection, DivFecharSimples, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada, BotaoEmprestar, BotaoOpcoesModal } from './ModalLivro.styles';
import axios from "axios";
const ModalLivro = ({ livro, index, setModalAtivado, setEmprestarAtivado, setModalLivroAtivado, setInativarAtivado, setHistoricoAtivado }) => {
    const [livroEmprestado, setLivroEmprestado] = useState(false);
    const [livroAtivado, setLivroAtivado] = useState(false);
    var novosStatus = livro.status;
    function abrirEmprestar() {
        if (setModalLivroAtivado && setEmprestarAtivado) {
            setModalLivroAtivado(false);
            setEmprestarAtivado(true);
        }
    }
    function abrirInativar() {
        if (setModalLivroAtivado && setInativarAtivado) {
            setModalLivroAtivado(false);
            setInativarAtivado(true);
        }
    }
    function abrirHistorico() {
        if (setModalLivroAtivado && setHistoricoAtivado) {
            setModalLivroAtivado(false);
            setHistoricoAtivado(true);
        }
    }
    function devolverLivro() {
        if (window.confirm('Confirmar devolução?')) {
            novosStatus.isRented = false;
            axios.put(`http://localhost:3000/books/${index}`, {
                title: livro.title,
                author: livro.author,
                genre: livro.genre,
                status: novosStatus,
                image: livro.image,
                systemEntryDate: livro.systemEntryDate,
                synopsis: livro.synopsis,
                rentHistory: livro.rentHistory
            }).then(resp => {
                alert('Informações salvas com sucesso!');
            }).catch(error => {
                console.log(error);
                alert('Algo deu errado...');
            });
        }
    }
    function ativarLivro() {
        if (window.confirm('Confirmar ativação?')) {
            novosStatus.isActive = true;
            novosStatus.description = '';
            axios.put(`http://localhost:3000/books/${index}`, {
                title: livro.title,
                author: livro.author,
                genre: livro.genre,
                status: novosStatus,
                image: livro.image,
                systemEntryDate: livro.systemEntryDate,
                synopsis: livro.synopsis,
                rentHistory: livro.rentHistory
            }).then(resp => {
                alert('Informações salvas com sucesso!');
            }).catch(error => {
                console.log(error);
                alert('Algo deu errado...');
            });
        }
    }
    React.useEffect(() => {
        if (livro.status.isActive === false) {
            setLivroAtivado(false);
        }
        else {
            setLivroAtivado(true);
        }
        if (livro.status.isRented === false) {
            setLivroEmprestado(false);
        }
        else {
            setLivroEmprestado(true);
        }
    }, [livro.status.isActive, livro.status.isRented]);
    return (_jsxs(MenuLivro, { children: [_jsx(DivFecharSimples, { children: _jsx("img", { onClick: () => { if (setModalAtivado)
                        setModalAtivado(false); }, src: Fechar, alt: 'Fechar' }) }), _jsxs(CapaBotaoSection, { children: [_jsx("img", { src: livro.image, alt: 'Capa do livro' }), livroEmprestado ?
                        _jsx(BotaoDevolver, { onClick: devolverLivro, children: "Devolver" })
                        :
                            _jsx(React.Fragment, { children: livroAtivado ?
                                    _jsx(BotaoEmprestar, { onClick: abrirEmprestar, children: "Emprestar" })
                                    :
                                        _jsx(BotaoEmprestar, { disabled: !livroAtivado, children: "Emprestar" }) })] }), _jsxs(InfoBtSection, { children: [_jsxs(Informacoes, { children: [_jsx("h1", { children: livro.title }), _jsxs("div", { children: [_jsx("h2", { children: "Sinopse" }), _jsx(SinopseFormatada, { children: livro.synopsis })] }), _jsxs("div", { children: [_jsx("h2", { children: "Autor" }), _jsx("p", { children: livro.author })] }), _jsxs("div", { children: [_jsx("h2", { children: "G\u00EAnero" }), _jsx("p", { children: livro.genre })] }), _jsxs("div", { children: [_jsx("h2", { children: "Data de entrada" }), _jsx("p", { children: livro.systemEntryDate })] })] }), _jsxs(BotoesSection, { children: [_jsx(Link, { to: '/editar', state: { livro: livro, index: index }, style: { textDecoration: 'none' }, children: _jsx(BotaoOpcoesModal, { sx: {
                                        border: '1px solid #167CE2',
                                        color: '#167CE2'
                                    }, children: "Editar" }) }), livroAtivado ?
                                _jsx(BotaoOpcoesModal, { onClick: abrirInativar, sx: {
                                        border: '1px solid #ED5E5E',
                                        color: '#ED5E5E',
                                        '&:hover': {
                                            backgroundColor: '#ffeeee'
                                        }
                                    }, children: "Inativar" })
                                :
                                    _jsx(BotaoOpcoesModal, { onClick: ativarLivro, sx: {
                                            border: '1px solid #49D749',
                                            color: '#49D749'
                                        }, children: "Ativar" }), _jsx(BotaoOpcoesModal, { onClick: abrirHistorico, sx: {
                                    border: '1px solid #ADB5BD',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: '#eeeeee'
                                    }
                                }, children: "Hist\u00F3rico" })] })] }), livroEmprestado && _jsx(EmprestadoInfo, { livro: livro }), !livroAtivado && _jsx(InativadoInfo, { livro: livro })] }));
};
export default ModalLivro;
