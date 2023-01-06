import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DivFechar, MenuInativar } from './Modal.styles';
import Fechar from '../assets/Caminho_265.svg';
import { BotaoOpcoesModal } from './ModalLivro.styles';
import { TextfieldCadastro } from '../pages/Cadastro/CadastroForm.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
const ModalInativar = ({ livro, index, setInativarAtivado, setModalLivroAtivado }) => {
    const [motivo, setMotivo] = useState('');
    var novosStatus = livro.status;
    function voltar() {
        if (setInativarAtivado && setModalLivroAtivado) {
            setInativarAtivado(false);
            setModalLivroAtivado(true);
        }
    }
    function salvar() {
        novosStatus.isActive = false;
        novosStatus.description = motivo;
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
    const validationSchema = yup.object({
        motivo: yup.string()
            .min(10, 'O motivo precisa ter, no mínimo, 10 caracteres')
            .required('Este campo é obrigatório')
    });
    const formik = useFormik({
        initialValues: { motivo: '' },
        validationSchema: validationSchema,
        onSubmit: () => {
            salvar();
        }
    });
    return (_jsxs(MenuInativar, { onSubmit: formik.handleSubmit, children: [_jsxs(DivFechar, { children: [_jsx("h1", { children: "Inativar livro" }), _jsx("img", { onClick: voltar, src: Fechar, alt: 'Fechar' })] }), _jsx(TextfieldCadastro, { type: 'text', name: 'motivo', label: 'Motivo', value: formik.values.motivo, onChange: (motivo) => { formik.handleChange(motivo); setMotivo(motivo.target.value); }, multiline: true, rows: 3, inputProps: {
                    style: {
                        height: "100%",
                        border: 'none',
                        padding: 0
                    }
                }, FormHelperTextProps: {
                    style: {
                        position: 'absolute',
                        transform: 'translate(-12px, 6rem)'
                    }
                }, error: formik.touched.motivo && Boolean(formik.errors.motivo), helperText: formik.touched.motivo && formik.errors.motivo }), _jsx(BotaoOpcoesModal, { type: 'submit', id: 'inativar', sx: {
                    border: '1px solid #ED5E5E',
                    color: '#ED5E5E',
                    '&:hover': {
                        backgroundColor: '#ffeeee'
                    }
                }, children: "Inativar" })] }));
};
export default ModalInativar;
