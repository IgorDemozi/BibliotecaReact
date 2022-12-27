import styled from 'styled-components';
import Input from './Componentes/Input';
import Filtro from './assets/Caminho_147.svg';

export const Cabecalho = styled.header`
   background-color: white;
   height: 96px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 2rem;
`

export const Tabela = styled.table`
   border-collapse: collapse;
   width: 90%;
   margin: 1.5rem;

   th {
      background: #FFC501;
      height: 2em;
      text-align: left;
      padding-left: 2rem;
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
      padding-left: 2rem;
   }

   tbody tr:last-child td {
      border-bottom: none;
   }

   p {
      margin: 0;
   }
`

export const TabelaInput = styled(Input)`
   border: none;
   border-bottom: 2px solid black;
   width: 75%;
   background-image: url(${Filtro});
   background-repeat: no-repeat;
   background-position: 2% 1%;
   background-size: 1.3em;
   padding-left: 2em;

   :focus {
      outline: none;
   }
`