import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { Mock } from 'vitest';

import { EsqueceuSenha, LoginContainer, LoginForm } from './Login.styles';
import Logo from 'assets/Logo.svg';
import { Api } from '../../api';

// { handleSubmitTest }: { handleSubmitTest: Mock<any[], any> }

const Login = () => {
   const navigate = useNavigate();
   const [shrinkEmail, setShrinkEmail] = useState(false);
   const [shrinkSenha, setShrinkSenha] = useState(false);

   const [termTest, setTermTest] = useState('');

   const validationSchema = yup.object({
      email: yup.string().email('Digite um email válido').required('Este campo é obrigatório'),
      password: yup
         .string()
         .min(8, 'A senha precisa ter, no mínimo, 8 caracteres')
         .required('Este campo é obrigatório'),
   });

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: validationSchema,
      onSubmit: () => {
         Api.post('/login', {
            email: formik.values.email,
            password: formik.values.password,
         })
            .then(resp => {
               if (resp.data.auth) {
                  localStorage.setItem('atual-usuario', formik.values.email);
                  navigate('/home');
               } else {
                  alert(resp.data.error);
               }
            })
            .catch(error => {
               console.log(error);
               alert(error.response.data.error);
            });
      },
   });

   return (
      <LoginContainer>
         {/* onSubmit={formik.handleSubmit} */}
         {/* onSubmit={() => handleSubmitTest(termTest)} */}
         <LoginForm name="LoginForm" onSubmit={formik.handleSubmit}>
            <img id="Logotipo" src={Logo} alt="Logotipo da biblioteca" />

            <TextField
               type="email"
               name="email"
               id="loginEmail"
               label="Email"
               InputLabelProps={{
                  shrink: shrinkEmail,
                  className: shrinkEmail ? undefined : 'login-label',
               }}
               inputProps={{ 'data-testid': 'inputEmail' }}
               // value={termTest}
               // onChange={e => setTermTest(e.target.value)}
               value={formik.values.email}
               onChange={formik.handleChange}
               onFocus={() => {
                  setShrinkEmail(true);
               }}
               onBlur={() => {
                  if (formik.values.email.length === 0) setShrinkEmail(false);
               }}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(-0.75rem, 3.7rem)',
                  },
               }}
            />

            <TextField
               type="password"
               name="password"
               id="loginSenha"
               label="Senha"
               InputLabelProps={{
                  shrink: shrinkSenha,
                  className: shrinkSenha ? undefined : 'login-label',
               }}
               value={formik.values.password}
               onChange={formik.handleChange}
               onFocus={() => {
                  setShrinkSenha(true);
               }}
               onBlur={() => {
                  if (formik.values.password.length === 0) setShrinkSenha(false);
               }}
               error={formik.touched.password && Boolean(formik.errors.password)}
               helperText={formik.touched.password && formik.errors.password}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(-0.75rem, 3.7rem)',
                  },
               }}
            />

            <EsqueceuSenha to="/home">Esqueci minha senha</EsqueceuSenha>

            <Button id="loginBotao" type="submit">
               Entrar
            </Button>
         </LoginForm>
      </LoginContainer>
   );
};

export default Login;
