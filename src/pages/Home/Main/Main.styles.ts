import styled from 'styled-components';

export const CardsDiv = styled.div` 
   width: 820px;
   flex-wrap: wrap;
   display: flex;
   align-items: center;
   gap: 2rem;

   @media screen and (max-width: 920px) {
      flex-direction: column;
   }
`

export const ContainerMain = styled.div`
   background-color: white;
   margin: 1.5rem;
   min-height: 77vh;
   max-height: fit-content;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-grow: 1;

   @media screen and (max-width: 920px) {
        padding: 1rem 0;
   }
`