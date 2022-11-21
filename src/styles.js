import styled from 'styled-components';
import SetaBaixo from './imagens/Poligono_4.svg';
import Filtro from './imagens/Caminho_147.svg';
import Icone from './imagens/auto_stories_FILL0_wght400_GRAD0_opsz48_1.svg';
import Input from './Componentes/Input';
import Select from './Componentes/Select';
import Button from './Componentes/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as Seta } from './imagens/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as Lupa } from './imagens/Caminho_263.svg';

export const MenuEmprestar = styled.section`
   background-color: white;
   width: 650px;
   display: flex;
   justify-content: flex-end;
   flex-wrap: wrap;
   padding: 2rem;
   gap: 2rem;

   input {
      width: 280px;
      height: 48px;
   }
`

export const EmprestarInputsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 1rem;
`

export const InfoBtSection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const DivFecharEmprestimo = styled.div`
   width: 100%;
   height: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

   h1 {
      font-weight: bold;
      font-size: 20px;
      font-family: Roboto;
      color: #3E4756;
      margin: 0;
   }

   img {
      cursor: pointer;
   }
`

export const DivFechar = styled.div`
   width: 100%;
   height: 1rem;
   display: flex;
   align-items: center;
   justify-content: flex-end;

   img {
      cursor: pointer;
   }
`

export const SinopseFormatada = styled.p`
   height: 57.2px;
   overflow-wrap: break-word;
   word-wrap: break-word;
   word-break: break-word;
   overflow-y: hidden;
`

export const BotoesSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.5em;
`

export const BotaoHistorico = styled(Button)`
   padding: 1.2em;
   border-radius: 5px;
   background-color: white;
   font-weight: bold;
   cursor: pointer;
   border: 1px solid #ADB5BD;
`

export const BotaoInativar = styled(Button)`
   padding: 1.2em;
   border-radius: 5px;
   background-color: white;
   font-weight: bold;
   cursor: pointer;
   border: 1px solid #ED5E5E;
   color: #ED5E5E;
`

export const BotaoEditar = styled(Button)`
   padding: 1.2em;
   border-radius: 5px;
   background-color: white;
   font-weight: bold;
   cursor: pointer;
   border: 1px solid #167CE2;
   color: #167CE2;
`

export const BotaoDevolver = styled(Button)`
   background-color: #F4F4F4;
   height: 3rem;
   width: 244px;
   border: 1px solid #ADB5BD;
   border-radius: 5px;
   background-image: url(${Icone});
   background-repeat: no-repeat;
   background-position: 34% 44%;
   background-size: 1.3em;
   padding-left: 2.5em;
   font-weight: bold;
   cursor: pointer;
`

export const BotaoEmprestar = styled(Button)`
   background-color: #FFC501;
   height: 3rem;
   width: 244px;
   border: 1px solid #ADB5BD;
   border-radius: 5px;
   background-image: url(${Icone});
   background-repeat: no-repeat;
   background-position: 34% 44%;
   background-size: 1.3em;
   padding-left: 2.5em;
   font-weight: bold;
   cursor: pointer;

   :disabled {
      background-color: #f3e0a0;
   }
`

export const Informacoes = styled.section`
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
`

export const CapaBotaoSection = styled.section`
   width: 244px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1rem;

   img {
      width: 100%;
      height: 350px;
   }
`

export const MenuLivro = styled.section`
   background-color: white;
   width: 700px;
   height: fit-content;
   padding: 1.5rem;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 0.8rem;
`

export const ModalPrincipal = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: rgba(0, 0, 0, 0.6);
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.8em;
   z-index: 100;
`

export const BibliotecaItensContainer = styled.div`
   width: 84%;
   margin: 2em auto 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 1rem;
   padding-bottom: 1.5rem;
`

export const BibliotecaItem = styled.div`
   width: 200px;
   height: 240px;
   background-color: #F4F4F4;
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

export const PesquisaContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   margin-top: 2rem;
   gap: 2rem;
   justify-content: center;
`

export const PesquisaSelect = styled(Select)`
   border: 1px solid #ADB5BD;
   height: 51px;
   width: 200px;
   padding: 0 1em;
   border-radius: 5px;
   font: normal normal normal 16px/21px Roboto;
   appearance: none;
   background-image: url(${SetaBaixo});
   background-repeat: no-repeat;
   background-position: 95%;
`

export const PesquisaButton = styled(Button)`
   border: none;
   background-color: #FFC501;
   border-radius: 5px;
   width: 82px;
   height: 37px;
   cursor: pointer;
`

export const PesquisaInput = styled(Input)`
   border: none;
   flex-grow: 2;

   :focus {
      outline: none;
   }
`

export const PesquisaForm = styled.form`
   display: flex;
   border: 1px solid #ADB5BD;
   border-radius: 5px;
   padding: 6px;
   width: 666px;
`

export const LupaImg = styled(Lupa)`
   margin: 0.6rem 1rem 0 1rem;
`

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