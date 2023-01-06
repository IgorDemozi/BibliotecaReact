import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconeAdicionar from '../../assets/Caminho 261.svg';
import ButtonMUI from '@mui/material/Button';
import React, { useState } from 'react';
import { CadastroContainer, InserirCapa, TextfieldCadastro } from './CadastroForm.styles';
import { ContainerGeral, VoltarPraHome, LinkParaHome, SetaEsquerda } from '../pages.styles';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
const EditarForm = ({ livro, index }) => {
    const [books, setBooks] = useState();
    const [titulo, setTitulo] = useState(livro.title);
    const [autor, setAutor] = useState(livro.author);
    const [genero, setGenero] = useState(livro.genre);
    const [base64, setBase64] = useState(livro.image);
    const [sinopse, setSinopse] = useState(livro.synopsis);
    const [data, setData] = useState(livro.systemEntryDate);
    const [imgNoInput, setImgNoInput] = useState(true);
    const navigate = useNavigate();
    var generos = [];
    React.useEffect(() => {
        setData(data.split("/").reverse().join("-"));
    }, [data]);
    React.useEffect(() => {
        axios.get('http://localhost:3000/books')
            .then(resp => {
            setBooks(resp.data);
        })
            .catch(error => {
            console.log(error);
        });
    }, []);
    const validationSchema = yup.object({
        titulo: yup.string().required('Este campo é obrigatório'),
        sinopse: yup.string().required('Este campo é obrigatório'),
        autor: yup.string().required('Este campo é obrigatório'),
        genero: yup.string().required('Este campo é obrigatório'),
        data: yup.string().required('Este campo é obrigatório')
    });
    const formik = useFormik({
        initialValues: {
            titulo: titulo,
            sinopse: sinopse,
            autor: autor,
            genero: genero,
            data: data
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            salvar();
        }
    });
    function pegarBase64(event) {
        return new Promise(() => {
            var leitor = new FileReader();
            if (event.target.files) {
                leitor.readAsDataURL(event.target.files[0]);
                leitor.onloadend = () => {
                    setBase64(leitor.result);
                    setImgNoInput(true);
                };
            }
        });
    }
    function retornarParaBiblioteca() {
        if (window.confirm('Tem certeza de que quer cancelar? Você retornará à biblioteca.')) {
            navigate('/biblioteca');
        }
    }
    function salvar() {
        var dataFormatada = data.split("-").reverse().join("/");
        axios.put(`http://localhost:3000/books/${index}`, {
            title: titulo,
            author: autor,
            genre: genero,
            status: livro.status,
            image: base64,
            systemEntryDate: dataFormatada,
            synopsis: sinopse,
            rentHistory: livro.rentHistory
        }).then(resp => {
            alert('Informações salvas com sucesso!');
        }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
        });
    }
    if (books) {
        books.forEach(item => {
            if (generos.includes(item.genre)) {
                return null;
            }
            else {
                generos.push(item.genre);
            }
        });
    }
    generos.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    return (_jsxs(ContainerGeral, { children: [_jsx(VoltarPraHome, { children: _jsxs("p", { children: [_jsxs(LinkParaHome, { to: '/biblioteca', children: [_jsx(SetaEsquerda, {}), " Biblioteca"] }), " / ", _jsx("b", { children: "Editar livro" })] }) }), _jsxs(CadastroContainer, { onSubmit: formik.handleSubmit, children: [_jsx(InserirCapa, { children: imgNoInput ?
                            _jsxs(React.Fragment, { children: [_jsx("img", { id: 'capaDoLivro', src: base64, alt: 'capa do livro' }), _jsx("input", { type: 'file', onChange: (event) => pegarBase64(event) })] })
                            :
                                _jsxs(React.Fragment, { children: [_jsx("input", { required: true, type: 'file', onChange: pegarBase64 }), _jsx("img", { src: IconeAdicionar, alt: 'adicionar capa' }), _jsx("p", { children: "Capa" })] }) }), _jsxs("section", { children: [_jsxs("div", { id: 'container1', children: [_jsx(TextfieldCadastro, { type: 'text', name: 'titulo', label: 'T\u00EDtulo', value: titulo, onChange: (titulo) => {
                                            formik.handleChange(titulo);
                                            setTitulo(titulo.target.value);
                                        }, inputProps: {
                                            style: {
                                                height: "20px"
                                            }
                                        }, error: formik.touched.titulo && Boolean(formik.errors.titulo), helperText: formik.touched.titulo && formik.errors.titulo, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-12px, 3.1rem)'
                                            }
                                        } }), _jsx(TextfieldCadastro, { type: 'text', name: 'sinopse', label: 'Sinopse', value: sinopse, onChange: (sinopse) => {
                                            formik.handleChange(sinopse);
                                            setSinopse(sinopse.target.value);
                                        }, multiline: true, rows: 4, inputProps: {
                                            style: {
                                                height: "98px"
                                            }
                                        }, error: formik.touched.sinopse && Boolean(formik.errors.sinopse), helperText: formik.touched.sinopse && formik.errors.sinopse, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-12px, 8rem)'
                                            }
                                        } })] }), _jsxs("div", { id: 'container1', children: [_jsx(TextfieldCadastro, { type: 'text', name: 'autor', label: 'Autor', value: autor, onChange: (autor) => {
                                            formik.handleChange(autor);
                                            setAutor(autor.target.value);
                                        }, error: formik.touched.autor && Boolean(formik.errors.autor), helperText: formik.touched.autor && formik.errors.autor, inputProps: {
                                            style: {
                                                height: "20px"
                                            }
                                        }, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-12px, 3.1rem)'
                                            }
                                        } }), _jsxs(TextfieldCadastro, { select: true, name: 'genero', label: 'G\u00EAnero', value: genero, onChange: (genero) => {
                                            formik.handleChange(genero);
                                            setGenero(genero.target.value);
                                        }, error: formik.touched.genero && Boolean(formik.errors.genero), helperText: formik.touched.genero && formik.errors.genero, sx: {
                                            "& .MuiInputBase-root": {
                                                height: 53
                                            }
                                        }, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-12px, 3.1rem)'
                                            }
                                        }, children: [_jsx(MenuItem, { value: '', children: "---" }), generos.map((option) => (_jsx(MenuItem, { value: option, children: option }, option)))] }), _jsx(TextfieldCadastro, { type: 'date', name: 'data', label: 'Data', value: data, inputProps: {
                                            style: {
                                                height: "20px"
                                            }
                                        }, InputLabelProps: { shrink: true }, onChange: (data) => {
                                            formik.handleChange(data);
                                            setData(data.target.value);
                                        }, error: formik.touched.data && Boolean(formik.errors.data), helperText: formik.touched.data && formik.errors.data, FormHelperTextProps: {
                                            style: {
                                                position: 'absolute',
                                                transform: 'translate(-12px, 3.1rem)'
                                            }
                                        } })] })] }), _jsxs("div", { id: 'container3', children: [_jsx(ButtonMUI, { id: 'cadastro-botao-salvar', type: 'submit', children: "salvar" }), _jsx(ButtonMUI, { id: 'cadastro-botao-cancelar', onClick: retornarParaBiblioteca, children: "cancelar" })] })] })] }));
};
export default EditarForm;
