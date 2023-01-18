import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { BibliotecaItem, BibliotecaItensContainer, LupaImg, PesquisaContainer, PesquisaForm } from './BibliotecaForm.styles';
import { ContainerGeral, LinkParaHome, SetaEsquerda, VoltarPraHome } from '../pages.styles';
import { Button, MenuItem, TextField } from '@mui/material';
import Modal from '../../Componentes/Modal/Modal';
import { Api } from 'api';
import { useLocation } from 'react-router-dom';
const BibliotecaForm = () => {
    const options = ['Título', 'Gênero', 'Autor', 'Data de entrada'];
    const [books, setBooks] = useState();
    const [livro, setLivro] = useState();
    const [opcao, setOpcao] = useState('');
    const [filtro, setFiltro] = useState('');
    const [pesquisa, setPesquisa] = useState('');
    const [texto, setTexto] = useState('');
    const [modalAtivado, setModalAtivado] = useState(false);
    const { state } = useLocation();
    React.useEffect(() => {
        Api.get('books?_sort=title&_order=asc')
            .then(resp => {
            setBooks(resp.data);
        })
            .catch(error => {
            console.log(error);
        });
    }, []);
    React.useEffect(() => {
        if (state) {
            setLivro(state);
            setModalAtivado(true);
        }
    }, [state]);
    function abrirModal(livro) {
        setLivro(livro);
        setModalAtivado(true);
    }
    function pesquisar(event) {
        event.preventDefault();
        setFiltro(opcao);
        setPesquisa(texto);
    }
    function criarElementoLivro(livro) {
        return (_jsxs(BibliotecaItem, { onClick: () => { abrirModal(livro); }, children: [_jsx("img", { src: livro.image, alt: '' }), _jsx("p", { children: livro.title })] }, livro.id));
    }
    return (_jsxs(ContainerGeral, { children: [_jsx(VoltarPraHome, { children: _jsxs("p", { children: [_jsxs(LinkParaHome, { to: '/home', children: [_jsx(SetaEsquerda, {}), " Home"] }), " / ", _jsx("b", { children: "Biblioteca" })] }) }), _jsxs(PesquisaContainer, { children: [_jsxs(PesquisaForm, { children: [_jsx(LupaImg, {}), _jsx("input", { id: 'pesquisaInput', value: texto, onChange: (texto) => setTexto(texto.target.value), placeholder: 'Pesquisar livro...' }), _jsx(Button, { onClick: pesquisar, id: 'biblioteca-botao-pesquisar', children: "Buscar" })] }), _jsxs(TextField, { select: true, label: 'Buscar por:', value: opcao, onChange: (opcao) => setOpcao(opcao.target.value), sx: {
                            "& .MuiInputBase-root": {
                                width: 200
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ADB5BD'
                                }
                            }
                        }, children: [_jsx(MenuItem, { value: '', children: "---" }), options.map((option) => (_jsx(MenuItem, { value: option, children: option }, option)))] })] }), _jsxs(BibliotecaItensContainer, { children: [modalAtivado && _jsx(Modal, { setModalAtivado: setModalAtivado, livro: livro }), !books ?
                        _jsx("p", { id: 'bibliotecaCarregandoInfo', children: "Carregando informa\u00E7\u00F5es..." })
                        :
                            books.map((livro) => {
                                switch (filtro) {
                                    case '':
                                        if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                                            return (criarElementoLivro(livro));
                                        }
                                        break;
                                    case 'Título':
                                        if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                                            return (criarElementoLivro(livro));
                                        }
                                        break;
                                    case 'Gênero':
                                        if (livro.genre.toLowerCase().includes(pesquisa.toLowerCase())) {
                                            return (criarElementoLivro(livro));
                                        }
                                        break;
                                    case 'Autor':
                                        if (livro.author.toLowerCase().includes(pesquisa.toLowerCase())) {
                                            return (criarElementoLivro(livro));
                                        }
                                        break;
                                    case 'Data de entrada':
                                        if (livro.systemEntryDate.includes(pesquisa)) {
                                            return (criarElementoLivro(livro));
                                        }
                                        break;
                                }
                                return null;
                            })] })] }));
};
export default BibliotecaForm;
