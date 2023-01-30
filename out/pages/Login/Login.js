import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { EsqueceuSenha, LoginContainer, LoginForm } from './Login.styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from 'assets/Logo.svg';
import { Api } from 'api';
const Login = () => {
    const navigate = useNavigate();
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
            Api.post('/login', {
                email: formik.values.email,
                password: formik.values.password,
            }).then(resp => {
                if (resp.data.auth) {
                    localStorage.setItem('atual-usuario', formik.values.email);
                    navigate('/home');
                }
                else {
                    alert(resp.data.error);
                }
            }).catch(error => {
                console.log(error);
                alert(error.response.data.error);
            });
        }
    });
    return (_jsx(LoginContainer, { children: _jsxs(LoginForm, { onSubmit: formik.handleSubmit, children: [_jsx("img", { id: 'Logotipo', src: Logo, alt: 'Logotipo da biblioteca' }), _jsx(TextField, { type: 'email', name: 'email', id: 'loginEmail', label: 'Email', InputLabelProps: {
                        shrink: shrinkEmail,
                        className: shrinkEmail ? undefined : 'login-label'
                    }, value: formik.values.email, onChange: formik.handleChange, onFocus: () => { setShrinkEmail(true); }, onBlur: () => { if (formik.values.email.length === 0)
                        setShrinkEmail(false); }, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email, FormHelperTextProps: {
                        style: {
                            position: 'absolute',
                            transform: 'translate(-0.75rem, 3.7rem)'
                        }
                    } }), _jsx(TextField, { type: 'password', name: 'password', id: 'loginSenha', label: 'Senha', InputLabelProps: {
                        shrink: shrinkSenha,
                        className: shrinkSenha ? undefined : 'login-label'
                    }, value: formik.values.password, onChange: formik.handleChange, onFocus: () => { setShrinkSenha(true); }, onBlur: () => { if (formik.values.password.length === 0)
                        setShrinkSenha(false); }, error: formik.touched.password && Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password, FormHelperTextProps: {
                        style: {
                            position: 'absolute',
                            transform: 'translate(-0.75rem, 3.7rem)'
                        }
                    } }), _jsx(EsqueceuSenha, { to: '/home', children: "Esqueci minha senha" }), _jsx(Button, { id: 'loginBotao', type: 'submit', children: "Entrar" })] }) }));
};
export default Login;
