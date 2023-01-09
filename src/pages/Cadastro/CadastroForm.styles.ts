import { TextField } from '@mui/material';
import styled from 'styled-components';

export const CadastroContainer = styled.form`
   width: 840px;
   margin-top: 12vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 1rem;

   @media screen and (max-width: 920px) {
      width: 623px;
      justify-content: center;
      margin-top: 6vh;
      padding-bottom: 1rem;
   }

   @media screen and (max-width: 720px) {
      width: 500px;
   }

   @media screen and (max-width: 610px) {
      width: 300px;
   }

   section {
      display: flex;
      gap: 1.4rem;

      @media screen and (max-width: 720px) {
         flex-direction: column;
      }
   }

   #container1 {
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 206px;
      gap: 1.4rem;
   }

   #container3 {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      margin-top: 1rem;
      gap: 1.4rem;

    #cadastro-botao-salvar {
         font: normal normal 600 16px/18px Roboto;
         width: 130px;
         height: 50px;
         text-transform: uppercase;
         border-radius: 5px;
         border: none;
         cursor: pointer;
         background-color: #FFC501;
         color: black;
      }

      #cadastro-botao-cancelar {
         font: normal normal 600 16px/18px Roboto;
         width: 130px;
         height: 50px;
         text-transform: uppercase;
         border-radius: 5px;
         border: none;
         cursor: pointer;
         box-shadow: 0px 0px 0px 1px #133052 inset;
         background-color: white;
         color: black;
      }

      @media screen and (max-width: 920px) {
         align-self: center;
      }
   }
`

export const InserirCapa = styled.label`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 3px dashed #FFC501;
   color: #FFC501;
   height: 200px;
   width: 172px;
   gap: 0.5rem;
   cursor: pointer;

   p {
      margin: 0;
      width: fit-content;
   }

   input {
      width: 1px;
      height: 1px;
      padding: 0;
      border: 0;
      opacity: 0;
      position: absolute;
   }

   #capaDoLivro {
      width: 100%;
      height: 100%;
   }
`

export const TextfieldCadastro = styled(TextField)({
   '& label.Mui-focused': {
      color: 'black',
   },
   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: '#133052'
      },
      '&.Mui-focused fieldset': {
         borderColor: 'black',
      }
   }
})