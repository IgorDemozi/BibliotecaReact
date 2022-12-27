// import React from 'react'
// import dados from '../../data.json'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import { useNavigate } from 'react-router-dom'
// import { EsqueceuSenha, LoginContainer, LoginForm, LogoImg } from '../../styles'

// const Login = () => {

//    const navigate = useNavigate();
//    const { login } = dados.data;
//    const [email, setEmail] = React.useState('');
//    const [senha, setSenha] = React.useState('');
//    const [shrinkEmail, setShrinkEmail] = React.useState(false);
//    const [shrinkSenha, setShrinkSenha] = React.useState(false);

//    function handleSubmit(event) {
//       event.preventDefault();
//       var i = 0;

//       login.forEach(item => {
//          if (email === item.email && senha === item.password) {
//             i = 1;
//             localStorage.setItem('atual-usuario', item.email);
//             navigate('/home');
//          }
//       });

//       if (i === 0) {
//          alert('Usuário inválido ou senha inválida');
//       }
//    }

//    return (
//       <LoginContainer>
//          <LoginForm onSubmit={handleSubmit}>
//             <LogoImg alt='Logotipo da biblioteca' />

//             <TextField
//                type='email'
//                id='loginEmail'
//                label='Email'
//                InputLabelProps={{
//                   shrink: shrinkEmail,
//                   className: shrinkEmail ? undefined : 'login-label'
//                }}
//                value={email}
//                onChange={(email) => setEmail(email.target.value)}
//                onFocus={() => { setShrinkEmail(true) }}
//                onBlur={() => { if (email.length === 0) setShrinkEmail(false) }}
//                required
//             />

//             <TextField
//                type='password'
//                id='loginSenha'
//                label='Senha'
//                InputLabelProps={{
//                   shrink: shrinkSenha,
//                   className: shrinkSenha ? undefined : 'login-label'
//                }}
//                value={senha}
//                onChange={(senha) => setSenha(senha.target.value)}
//                onFocus={() => { setShrinkSenha(true) }}
//                onBlur={() => { if (senha.length === 0) setShrinkSenha(false) }}
//                required
//             />

//             <EsqueceuSenha to='/home'>Esqueci minha senha</EsqueceuSenha>
//             <Button id='loginBotao' type='submit'>Entrar</Button>
//          </LoginForm>
//       </LoginContainer>
//    )
// }

// export default Login