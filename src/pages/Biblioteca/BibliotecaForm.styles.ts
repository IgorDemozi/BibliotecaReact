import styled from 'styled-components';
import { ReactComponent as Lupa } from '../../assets/Caminho_263.svg';

export const BibliotecaItem = styled.div`
   width: 200px;
   height: 240px;
   background-color: #e6e6e6;
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 1.5rem;
   cursor: pointer;

   p {
      text-align: center;
      margin: 0.5rem 0 0 0;
      font: normal normal medium 16px/21px Roboto;
      color: #3E4756;
   }

   img {
      height: 180px;
      width: 120px;
   }
`

export const BibliotecaItensContainer = styled.div`
   width: 84%;
   margin: 2em auto 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 1rem;
   padding-bottom: 1.5rem;

   #bibliotecaCarregandoInfo {
      font: normal normal 400 16px Roboto;
   }

   @media screen and (min-width: 1330px) {
      width: 1065px;
   }
`

export const LupaImg = styled(Lupa)`
   margin: 0.6rem 1rem;
`

export const PesquisaContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   margin-top: 2rem;
   gap: 2rem;
   justify-content: center;
`

export const PesquisaForm = styled.form`
   display: flex;
   align-items: center;
   border: 1px solid #ADB5BD;
   border-radius: 5px;
   padding: 6px 8px 6px 6px;
   width: 666px;
   height: 42px;

   #biblioteca-botao-pesquisar{
      background-color: #FFC501;
      width: 82px;
      height: 37px;
      font: normal normal 400 14px Roboto;
      color: black;
      text-transform: none;
   }

   #pesquisaInput {
      border: none;
      flex-grow: 2;

      :focus {
         outline: none;
      }
   }

   @media screen and (max-width: 780px) {
      width: 80%
   }
`