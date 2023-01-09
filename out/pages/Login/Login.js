import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { EsqueceuSenha, LoginContainer, LoginForm } from './Login.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Logo from '../../assets/Logo.svg';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [shrinkEmail, setShrinkEmail] = useState(false);
    const [shrinkSenha, setShrinkSenha] = useState(false);
    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Digite um email válido')
            .required('Este campo é obrigatório'),
        password: yup
            .string()
            .min(8, 'A senha precisa ter, no mínimo, 8 caracteres')
            .required('Este campo é obrigatório'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            axios.get(`http://localhost:3000/login?q=${email}`)
                .then(resp => {
                var usuario = resp.data[0];
                if (usuario.password === senha) {
                    localStorage.setItem('atual-usuario', usuario.email);
                    navigate('/home');
                }
                else {
                    alert('Usuário inválido ou senha inválida');
                }
            })
                .catch(error => {
                console.log(error);
            });
        }
    });
    return (_jsx(LoginContainer, { children: _jsxs(LoginForm, { onSubmit: formik.handleSubmit, children: [_jsx("img", { id: 'Logotipo', src: Logo, alt: 'Logotipo da biblioteca' }), _jsx(TextField, { type: 'email', name: 'email', id: 'loginEmail', label: 'Email', InputLabelProps: {
                        shrink: shrinkEmail,
                        className: shrinkEmail ? undefined : 'login-label'
                    }, value: formik.values.email, onChange: (email) => { formik.handleChange(email); setEmail(email.target.value); }, onFocus: () => { setShrinkEmail(true); }, onBlur: () => { if (email.length === 0)
                        setShrinkEmail(false); }, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email, FormHelperTextProps: {
                        style: {
                            position: 'absolute',
                            transform: 'translate(-12px, 3.7rem)'
                        }
                    } }), _jsx(TextField, { type: 'password', name: 'password', id: 'loginSenha', label: 'Senha', InputLabelProps: {
                        shrink: shrinkSenha,
                        className: shrinkSenha ? undefined : 'login-label'
                    }, value: senha, onChange: (senha) => { formik.handleChange(senha); setSenha(senha.target.value); }, onFocus: () => { setShrinkSenha(true); }, onBlur: () => { if (senha.length === 0)
                        setShrinkSenha(false); }, error: formik.touched.password && Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password, FormHelperTextProps: {
                        style: {
                            position: 'absolute',
                            transform: 'translate(-12px, 3.7rem)'
                        }
                    } }), _jsx(EsqueceuSenha, { to: '/home', children: "Esqueci minha senha" }), _jsx(Button, { id: 'loginBotao', type: 'submit', children: "Entrar" })] }) }));
};
export default Login;
