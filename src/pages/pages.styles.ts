import styled from 'styled-components';
import Filtro from 'assets/Caminho_147.svg';

export const MainContainer = styled.div`
   background-color: #e6e6e6;
   font-family: 'Roboto', sans-serif;
   display: flex;
   flex-direction: column;
   min-height: 100%;
`;

export const ContainerGeral = styled.div`
   background-color: white;
   margin: 1.5rem;
   min-height: 77vh;
   max-height: fit-content;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: column;
   flex-grow: 1;

   .tabelaInput {
      border: none;
      border-bottom: 2px solid black;
      width: 80%;
      background-image: url(${Filtro});
      background-repeat: no-repeat;
      background-position: 2% 1%;
      background-size: 1.3em;
      padding-left: 2em;

      :focus {
         outline: none;
      }
   }
`;
