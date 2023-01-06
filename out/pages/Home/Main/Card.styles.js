import styled from 'styled-components';
import { Link } from "react-router-dom";
export const CardLink = styled(Link) `
   text-decoration: none;

   p {
      margin: 0;
      padding: 1rem;
      height: 2rem;
      line-height: 2rem;
      color: #343A40;
      text-decoration: 'none';
      text-align: center;
      font-family: 'Roboto', sans-serif;
   }

   #div-do-paragrafo {
      padding: 0;
      margin-bottom: 4px;
   }
`;
