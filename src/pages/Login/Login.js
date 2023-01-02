import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { EsqueceuSenha, LoginContainer, LoginForm, LogoImg } from './Login.styles.js'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const Login = () => {
   const navigate = useNavigate();
   const [login, setLogin] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [shrinkEmail, setShrinkEmail] = useState(false);
   const [shrinkSenha, setShrinkSenha] = useState(false);

   React.useEffect(() => {
      axios.get('http://localhost:3000/login')
         .then(resp => {
            setLogin(resp.data);
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

   const validationSchema = yup.object({
      email: yup
         .string('Digite seu email')
         .email('Digite um email válido')
         .required('Este campo é obrigatório'),
      password: yup
         .string('Digite sua senha')
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
         var i = 0;

         login.forEach(item => {
            if (email === item.email && senha === item.password) {
               i = 1;
               localStorage.setItem('atual-usuario', item.email);
               navigate('/home');
            }
         });

         if (i === 0) {
            alert('Usuário inválido ou senha inválida');
         }
      }
   });

   return (
      <LoginContainer>
         <LoginForm onSubmit={formik.handleSubmit}>
            <LogoImg alt='Logotipo da biblioteca' />

            <TextField
               type='email'
               name='email'
               id='loginEmail'
               label='Email'
               InputLabelProps={{
                  shrink: shrinkEmail,
                  className: shrinkEmail ? undefined : 'login-label'
               }}
               value={formik.values.email}
               onChange={(email) => { formik.handleChange(email); setEmail(email.target.value) }}
               onFocus={() => { setShrinkEmail(true) }}
               onBlur={() => { if (email.length === 0) setShrinkEmail(false) }}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(-12px, 3.7rem)'
                  }
               }}
            />

            <TextField
               type='password'
               name='password'
               id='loginSenha'
               label='Senha'
               InputLabelProps={{
                  shrink: shrinkSenha,
                  className: shrinkSenha ? undefined : 'login-label'
               }}
               value={senha}
               onChange={(senha) => { formik.handleChange(senha); setSenha(senha.target.value) }}
               onFocus={() => { setShrinkSenha(true) }}
               onBlur={() => { if (senha.length === 0) setShrinkSenha(false) }}
               error={formik.touched.password && Boolean(formik.errors.password)}
               helperText={formik.touched.password && formik.errors.password}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(-12px, 3.7rem)'
                  }
               }}
            />

            <EsqueceuSenha to='/home'>Esqueci minha senha</EsqueceuSenha>
            <Button id='loginBotao' type='submit'>Entrar</Button>
         </LoginForm>
      </LoginContainer>
   )
}

export default Login