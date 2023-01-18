import styled from 'styled-components';

export const UserMenuDiv = styled.div`
   background-color: white;
   display: flex;
   align-items: center;
   height: 3.125rem;
   gap: 0.25rem;
   cursor: pointer;
`

export const UserMenuSair = styled.div`
   background-color: #e6e6e6;
   border-radius: 0.25rem;
   width: 7.5rem;
   height: 3.125rem;
   font: normal normal normal 1.125rem/1.125rem Roboto;
   color: #2A2A2A;
   cursor: pointer;
   margin-right: 0.375;
   transform: translate(13rem, 3rem);

   p {
      margin: 1rem 0 1rem 1rem;
   }
`

export const UserMenuSection = styled.section`
   display: flex;
   align-items: center;
`