import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../imagens/Logo.svg'
import Button from '../componentes/Button'
import Input from '../componentes/Input'
import styles from './Login.module.css'
import dados from '../data.json'

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

      login.forEach(item => {
         if (email === item.email && senha === item.password) {
            localStorage.setItem('atual-usuario', item.email);
            navigate('/home');
         }
      });
   }

   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <Logo className={styles.logo} alt='Logotipo da biblioteca' />

         <Input
            className={`${styles.loginCampos} ${styles.campoEmail}`}
            type='email' placeholder='Email' value={email} onChange={teste}
         />

         <Input
            className={`${styles.loginCampos} ${styles.campoSenha}`}
            type='password' placeholder='Senha' value={senha} onChange={teste}
         />

         <Link className={styles.esqueceu} to='/'>Esqueci minha senha</Link>
         <Button className={styles.loginBotao}>Entrar</Button>
      </form>
   )
}

export default Login