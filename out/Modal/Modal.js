import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ModalPrincipal } from './Modal.styles';
import ModalEmprestar from './ModalEmprestar';
import ModalHistorico from './ModalHistorico';
import ModalInativar from './ModalInativar';
import ModalLivro from './ModalLivro';
const Modal = ({ setModalAtivado, livro, index }) => {
    const [modalLivroAtivado, setModalLivroAtivado] = useState(true);
    const [emprestarAtivado, setEmprestarAtivado] = useState(false);
    const [inativarAtivado, setInativarAtivado] = useState(false);
    const [historicoAtivado, setHistoricoAtivado] = useState(false);
    function clicarFora(event) {
        if (event.target === event.currentTarget && setModalAtivado) {
            setModalAtivado(false);
        }
    }
    return (_jsxs(ModalPrincipal, { onClick: clicarFora, children: [modalLivroAtivado && _jsx(ModalLivro, { livro: livro, index: index, setModalLivroAtivado: setModalLivroAtivado, setModalAtivado: setModalAtivado, setEmprestarAtivado: setEmprestarAtivado, setInativarAtivado: setInativarAtivado, setHistoricoAtivado: setHistoricoAtivado }), emprestarAtivado && _jsx(ModalEmprestar, { livro: livro, index: index, setEmprestarAtivado: setEmprestarAtivado, setModalLivroAtivado: setModalLivroAtivado }), inativarAtivado && _jsx(ModalInativar, { livro: livro, index: index, setInativarAtivado: setInativarAtivado, setModalLivroAtivado: setModalLivroAtivado }), historicoAtivado && _jsx(ModalHistorico, { livro: livro, setHistoricoAtivado: setHistoricoAtivado, setModalLivroAtivado: setModalLivroAtivado })] }));
};
export default Modal;
