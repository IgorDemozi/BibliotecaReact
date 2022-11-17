import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SetaBaixo from './imagens/Poligono_4.svg';
import Filtro from './imagens/Caminho_147.svg';
import Input from './Componentes/Input';
import Select from './Componentes/Select';
import Button from './Componentes/Button';
import { ReactComponent as Seta } from './imagens/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';

export const TabelaInput = styled(Input)`
   border: none;
   border-bottom: 2px solid black;
   width: 110px;
   background-image: url(${Filtro});
   background-repeat: no-repeat;
   background-position: 2% 1%;
   background-size: 1.3em;
   padding-left: 2em;

   :focus {
      outline: none;
   }
`

export const Tabela = styled.table`
   border-collapse: collapse;
   width: 90%;
   margin: 1.5rem;

   th {
   background: #FFC501;
   height: 2em;
   text-align: left;
   padding-left: 2em;
   }

   tr th:nth-child(1) {
      border-radius: 5px 1px 1px 1px;
   }

   tr th:last-child {
      border-radius: 1px 5px 1px 1px;
   }

   td {
      border-bottom: 1px solid #CDCDCD;
      padding: 10px;
      text-align: left;
      padding-left: 2em;
   }

   tbody tr:last-child td {
      border-bottom: none;
   }

   p {
      margin: 0;
   }
`

export const Imagem = styled.img`
   width: 100%;
   height: 100%;
`

export const SetaEsquerda = styled(Seta)`
   transform: translate(-2px, 2px);
`

export const BotaoSalvar = styled(Button)`
   font: normal normal 600 16px/18px Roboto;
   width: 130px;
   height: 50px;
   text-transform: uppercase;
   border-radius: 5px;
   border: none;
   cursor: pointer;
   background-color: #FFC501;
`

export const BotaoCancelar = styled(Button)`
   font: normal normal 600 16px/18px Roboto;
   width: 130px;
   height: 50px;
   text-transform: uppercase;
   border-radius: 5px;
   border: none;
   cursor: pointer;
   box-shadow: 0px 0px 0px 1px #133052 inset;
   background-color: white;
`

export const SelectCadastro = styled(Select)`
   height: 3.5rem;
   padding: 0 1rem;
   border-radius: 5px;
   border: 1px solid #133052;
   font: normal normal normal 16px/21px Roboto;
   appearance: none;
   background-image: url(${SetaBaixo});
   background-repeat: no-repeat;
   background-position: 95%;
`

export const InputCadastro = styled(Input)`
   height: 3.5rem;
   padding: 0 1rem;
   border-radius: 5px;
   border: 1px solid #133052;
   font: normal normal normal 16px/21px Roboto;
`

export const LinkParaHome = styled(Link)`
   text-decoration: none;
   color: #6a7681;
`

export const MainContainer = styled.div` 
   background-color: #F4F4F4;
   font-family: 'Roboto', sans-serif;
   display: flex;
   flex-direction: column;
`

export const ContainerGeral = styled.div`
   background-color: white;
   margin: 1.5rem;
   min-height: 77vh;
   max-height: fit-content;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: column;
`

export const VoltarPraHome = styled.div`
   width: 100%;
   margin: 1rem 0 0 1rem;
   p{
      margin: 0;
   }
`

export const CadastroContainer = styled.div`
   width: 840px;
   margin-top: 12vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 1rem;

   form {
      width: 178px;
      height: 206px;
      
      label{
         display: flex;
         align-items: center;
         justify-content: center;
         border: 3px dashed #FFC501;
         color: #FFC501;
         height: 200px;
         width: 172px;
         gap: 0.5rem;
         cursor: pointer;
      }

      p{
         margin: 0;
         width: fit-content;
      }

      input {
         display: none;
      }
   }

   div {
      display: flex;
      gap: 1.4rem;
   }

   div > div {
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 206px;
      gap: 1.4rem;
   }

   div:nth-child(3){
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      margin-top: 1rem;
      gap: 1.4rem;
   }
`

export const Sinopse = styled.textarea`
   height: 6em;
   padding: 1em;
   border-radius: 5px;
   border: 1px solid #133052;
   font: normal normal normal 16px/21px Roboto;
   resize: none;
`