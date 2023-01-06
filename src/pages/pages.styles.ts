import styled from 'styled-components';
import Filtro from 'assets/Caminho_147.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Seta } from '../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';

export const LinkParaHome = styled(Link)`
text-decoration: none;
color: #6a7681;
`
export const VoltarPraHome = styled.div`
align-self: flex-start;
padding: 1rem 0 0 1rem;
`

export const MainContainer = styled.div` 
   background-color: #e6e6e6;
   font-family: 'Roboto', sans-serif;
   display: flex;
   flex-direction: column;
   min-height: 100%;
`

export const SetaEsquerda = styled(Seta)`
   transform: translate(-2px, 2px);
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
   flex-grow: 1;

   .tabelaInput{
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
`