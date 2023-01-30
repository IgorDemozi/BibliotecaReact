import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ButtonMUI from '@mui/material/Button';
import IconeAdicionar from 'assets/Caminho 261.svg';
import React, { useRef, useState } from 'react';
import { CadastroContainer, InserirCapa, TextfieldCadastro } from './CadastroForm.styles';
import { ContainerGeral, VoltarPraHome, LinkParaHome, SetaEsquerda } from 'pages/pages.styles';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Api } from 'api';
import { isBefore } from 'date-fns';
const CadastroForm = () => {
    const navigate = useNavigate();
    const [base64, setBase64] = useState('');
    const [imgNoInput, setImgNoInput] = useState(false);
    const [generos, setGeneros] = useState();
    const [arquivo, setArquivo] = useState();
    const diaHoje = useRef(new Date());
    React.useEffect(() => {
        Api.get('/books/generos')
            .then(resp => {
            setGeneros(resp.data);
        }).catch(error => {
            console.log(error);
        });
        let hoje = new Date();
        let dataHoje = (hoje.getMonth() + 1) + '/' + hoje.getDate() + '/' + hoje.getFullYear();
        let dia = new Date(dataHoje);
        diaHoje.current = dia;
    }, []);
    function inputDateHandleChange(event) {
        let anoMesDia = event.target.value.split('-').map(Number);
        let dataSelecionada = new Date(anoMesDia[0], anoMesDia[1] - 1, anoMesDia[2]);
        if (isBefore(dataSelecionada, diaHoje.current)) {
            alert('A data escolhida já passou');
        }
        else {
            formik.handleChange(event);
        }
    }
    const validationSchema = yup.object({
        titulo: yup.string().required('Este campo é obrigatório'),
        sinopse: yup.string().required('Este campo é obrigatório'),
        autor: yup.string().required('Este campo é obrigatório'),
        genero: yup.string().required('Este campo é obrigatório'),
        data: yup.string().required('Este campo é obrigatório')
    });
    const formik = useFormik({
        initialValues: {
            titulo: '',
            sinopse: '',
            autor: '',
            genero: '',
            data: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            salvar();
            formik.resetForm();
            setBase64('');
        }
    });
    function pegarBase64(event) {
        return new Promise(() => {
            let leitor = new FileReader();
            if (event.target.files) {
                setArquivo(event.target.files[0]);
                leitor.readAsDataURL(event.target.files[0]);
                leitor.onloadend = () => {
                    setBase64(leitor.result);
                    setImgNoInput(true);
                };
            }
        });
    }
    function retornarParaHome() {
        if (window.confirm('Tem certeza de que quer cancelar? Você retornará à página principal.')) {
            navigate('/home');
        }
    }
    function salvar() {
        let dataFormatada = formik.values.data.split("-").reverse().join("/");
        const formData = new FormData();
        let novoLivro = {
            title: formik.values.titulo,
            author: formik.values.autor,
            genre: formik.values.genero,
            status: { isRented: false, isActive: true, description: '' },
            image: base64,
            systemEntryDate: dataFormatada,
            synopsis: formik.values.sinopse,
            rentHistory: []
        };
        if (arquivo) {
            formData.append('image', arquivo);
            formData.append('novoLivro', JSON.stringify(novoLivro));
        }
        Api.post('books', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(resp => {
            alert('Informações salvas com sucesso!');
        }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
        });
    }
    return (_jsxs(ContainerGeral, { children: [_jsx(VoltarPraHome, { children: _jsxs("p", { children: [_jsxs(LinkParaHome, { to: '/home', children: [_jsx(SetaEsquerda, {}), " Home"] }), " / ", _jsx("b", { children: "Cadastrar novo livro" })] }) }), _jsxs(CadastroContainer, { onSubmit: formik.handleSubmit, children: [_jsx(InserirCapa, { children: imgNoInput ?
                            _jsxs(React.Fragment, { children: [_jsx("img", { id: 'capaDoLivro', src: base64, alt: 'capa do livro' }), _jsx("input", { type: 'file', onChange: pegarBase64 })] })
                            :
                                _jsxs(React.Fragment, { children: [_jsx("input", { required: true, type: 'file', onChange: pegarBase64 }), _jsx("img", { src: IconeAdicionar, alt: 'adicionar capa' }), _jsx("p", { children: "Capa" })] }) }), _jsxs("section", { children: [_jsxs("div", { id: 'container1', children: [_jsx(TextfieldCadastro, { type: 'text', name: 'titulo', label: 'T\u00EDtulo', value: formik.values.titulo, onChange: formik.handleChange, inputProps: {
                                            style: {
                                                height: "1.25rem"
                                            }
                                        }, error: formik.touched.titulo && Boolean(formik.errors.titulo), helperText: formik.touched.titulo && formik.errors.titulo, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-0.75rem, 3.1rem)'
                                            }
                                        } }), _jsx(TextfieldCadastro, { type: 'text', name: 'sinopse', label: 'Sinopse', value: formik.values.sinopse, onChange: formik.handleChange, multiline: true, rows: 4, inputProps: {
                                            style: {
                                                height: "6.125rem"
                                            }
                                        }, error: formik.touched.sinopse && Boolean(formik.errors.sinopse), helperText: formik.touched.sinopse && formik.errors.sinopse, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-0.75rem, 8rem)'
                                            }
                                        } })] }), _jsxs("div", { id: 'container1', children: [_jsx(TextfieldCadastro, { type: 'text', name: 'autor', label: 'Autor', value: formik.values.autor, onChange: formik.handleChange, error: formik.touched.autor && Boolean(formik.errors.autor), helperText: formik.touched.autor && formik.errors.autor, inputProps: {
                                            style: {
                                                height: "1.25rem"
                                            }
                                        }, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-0.75rem, 3.1rem)'
                                            }
                                        } }), _jsxs(TextfieldCadastro, { select: true, name: 'genero', label: 'G\u00EAnero', value: formik.values.genero, onChange: formik.handleChange, error: formik.touched.genero && Boolean(formik.errors.genero), helperText: formik.touched.genero && formik.errors.genero, sx: {
                                            "& .MuiInputBase-root": {
                                                height: 53
                                            }
                                        }, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-0.75rem, 3.1rem)'
                                            }
                                        }, children: [_jsx(MenuItem, { value: '', children: "---" }), generos && generos.map((option) => (_jsx(MenuItem, { value: option, children: option }, option)))] }), _jsx(TextfieldCadastro, { type: 'date', name: 'data', label: 'Data', inputProps: {
                                            style: {
                                                height: "1.375rem"
                                            }
                                        }, InputLabelProps: { shrink: true }, value: formik.values.data, onChange: inputDateHandleChange, error: formik.touched.data && Boolean(formik.errors.data), helperText: formik.touched.data && formik.errors.data, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-0.75rem, 3.1rem)'
                                            }
                                        } })] })] }), _jsxs("div", { id: 'container3', children: [_jsx(ButtonMUI, { id: 'cadastro-botao-salvar', type: 'submit', children: "salvar" }), _jsx(ButtonMUI, { id: 'cadastro-botao-cancelar', onClick: retornarParaHome, children: "cancelar" })] })] })] }));
};
export default CadastroForm;
