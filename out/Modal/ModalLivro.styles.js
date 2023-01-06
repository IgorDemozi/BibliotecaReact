import styled from 'styled-components';
import { Button as ButtonMUI } from '@mui/material';
import IconeEmprestar from '../assets/auto_stories_FILL0_wght400_GRAD0_opsz48_1.svg';
export const BotaoOpcoesModal = styled(ButtonMUI) `
   && {
      padding: 16px;
      border-radius: 5px;
      background-color: white;
      font-weight: bold;
      text-transform: none;
      line-height: 16px;
   }
`;
export const BotaoEmprestar = styled(ButtonMUI) `
   && {
      background-color: #FFC501;
      color: black;
      font-size: 14px;
      font-family: Roboto;
      text-transform: none;
      height: 3rem;
      width: 244px;
      border: 1px solid #ADB5BD;
      border-radius: 5px;
      background-image: url(${IconeEmprestar});
      background-repeat: no-repeat;
      background-position: 32% 44%;
      background-size: 1.3rem;
      padding-left: 2.5rem;
      font-weight: bold;
      cursor: pointer;

      :disabled {
         background-color: #f3e0a0;
      }

      :hover {
         background-color: #FFC501;
      }
   }
`;
export const BotaoDevolver = styled(ButtonMUI) `
   && {
      background-color: #e6e6e6;
      color: black;
      font-size: 14px;
      font-family: Roboto;
      text-transform: none;
      height: 3rem;
      width: 244px;
      border: 1px solid #ADB5BD;
      border-radius: 5px;
      background-image: url(${IconeEmprestar});
      background-repeat: no-repeat;
      background-position: 34% 44%;
      background-size: 1.3rem;
      padding-left: 2rem;
      font-weight: bold;
      cursor: pointer;

      :hover {
         background-color: #e6e6e6;
      }
   }
`;
export const DivFecharSimples = styled.div `
   width: 100%;
   height: 1rem;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   img {
      cursor: pointer;
   }
`;
export const SinopseFormatada = styled.p `
   height: 57.2px;
   overflow-wrap: break-word;
   word-wrap: break-word;
   word-break: break-word;
   overflow-y: hidden;
`;
export const BotoesSection = styled.section `
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.5em;
`;
export const CapaBotaoSection = styled.section `
   width: 244px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1rem;

   img {
      width: 100%;
      height: 350px;
   }
`;
export const MenuLivro = styled.section `
   background-color: white;
   width: 700px;
   height: fit-content;
   padding: 1.5rem;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 0.8rem;

   @media screen and (max-width: 730px) {
      transform: scale(0.6);
      justify-content: center;
   }
`;
export const Informacoes = styled.section `
   width: 400px;
   height: 350px;

   h1 {
      margin: 0 0 1rem 0;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      font-family: Roboto;
      color: #3E4756;
   }

   h2 {
      margin: 0;
      font-weight: bold;
      font-size: 16px;
      font-family: Roboto;
      color: #3E4756;
   }

   p {
      margin: 0.5em 0 1.5em 0;
      color: #3E4756;
   }
`;
export const InfoBtSection = styled.section `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;
