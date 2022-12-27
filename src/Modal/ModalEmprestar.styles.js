import styled from 'styled-components';

export const EmprestarInputsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 1rem;
`

export const MenuEmprestar = styled.form`
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