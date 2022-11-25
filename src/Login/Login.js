import React from 'react'
import dados from '../data.json'
import { useNavigate } from 'react-router-dom'
import { EsqueceuSenha, LoginBotao, LoginContainer, LoginEmail, LoginForm, LoginSenha, LogoImg } from '../styles'

const Login = () => {

   const navigate = useNavigate();
   const { login } = dados.data;
   const [email, setEmail] = React.useState('');
   const [senha, setSenha] = React.useState('');

   function teste(event) {
      if (event.target.placeholder === 'Email') {
         setEmail(event.target.value);
      }
      if (event.target.placeholder === 'Senha') {
         setSenha(event.target.value);
      }
   }

   function handleSubmit(event) {
      event.preventDefault();
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

   return (
      <LoginContainer>
         <LoginForm onSubmit={handleSubmit}>
            <LogoImg alt='Logotipo da biblioteca' />

            <LoginEmail
               type='email' placeholder='Email' value={email} onChange={teste} required
            />

            <LoginSenha
               type='password' placeholder='Senha' value={senha} onChange={teste} required
            />

            <EsqueceuSenha to='/home'>Esqueci minha senha</EsqueceuSenha>
            <LoginBotao>Entrar</LoginBotao>
         </LoginForm>
      </LoginContainer>
   )
}

export default Login