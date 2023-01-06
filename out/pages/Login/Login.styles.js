import styled from 'styled-components';
import Background from '../../assets/emil-widlund-xrbbXIXAWY0-unsplash.png';
import IconeEmail from '../../assets/Grupo_37.svg';
import IconeSenha from '../../assets/Grupo_36.svg';
import { Link } from 'react-router-dom';
export const EsqueceuSenha = styled(Link) `
color: black;
font: normal normal bold 14px/19px Roboto;
align-self: flex-start;
`;
export const LoginContainer = styled.section `
   margin: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(${Background});
   background-position-y: 65%;
   height: 100vh;

   #form{
      margin: 0;
      background-color: white;
      width: 370px;
      height: 385px;
      border-radius: 5px;
      margin: 12vh 0;
      padding: 2.5em;
      box-shadow: 0 0 0 1000px rgba(60, 60, 60, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }
`;
export const LoginForm = styled.form `
   margin: 0;
   background-color: white;
   width: 370px;
   height: 385px;
   border-radius: 5px;
   margin: 12vh 0;
   padding: 2.5em;
   box-shadow: 0 0 0 1000px rgba(60, 60, 60, 0.6);
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   #loginEmail {
      background-color: #e3e5e7;
      padding: 1.5em;
      border-radius: 5px;
      font: 14px Roboto;
      background-image: url(${IconeEmail});
      background-repeat: no-repeat;
      background-position: 94%;
   }

   #loginSenha {
      background-color: #e3e5e7;
      padding: 1.5em;
      border-radius: 5px;
      font: 14px Roboto;
      background-image: url(${IconeSenha});
      background-repeat: no-repeat;
      background-position: 94%;
   }

   .login-label {
      transform: translate(20px, 20px);
   }

   #loginBotao{
      padding: 1rem 2rem;
      border-radius: 5px;
      border: 0;
      background-color: #FFC501;
      color: black;
      text-transform: uppercase;
      font: normal normal bold 16px/21px Roboto;
      cursor: pointer;
   }

   #Logotipo{
      margin: 0 auto 2rem auto;
      transform: scale(1.3);
   }
`;
