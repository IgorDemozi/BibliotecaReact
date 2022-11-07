import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../componentes/Button'
import Input from '../componentes/Input'
import styles from './Login.module.css'
import { ReactComponent as Logo } from '../imagens/Logo.svg'

const Login = () => {
   function handleSubmit(event) {
      event.preventDefault();
   }

   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <Logo className={styles.logo} alt='Logotipo da biblioteca'/>
         <Input className={`${styles.loginCampos} ${styles.campoEmail}`} type='email' placeholder='Email' />
         <Input className={`${styles.loginCampos} ${styles.campoSenha}`} type='password' placeholder='Senha' />
         <Link className={styles.esqueceu} to='/'>Esqueci minha senha</Link>
         <Button className={styles.loginBotao}>Entrar</Button>
      </form>
   )
}

export default Login