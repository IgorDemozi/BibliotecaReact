import styled from 'styled-components';

export const MenuHistorico = styled.section`
background-color: white;
width: fit-content;
height: fit-content;
padding: 2em;
`

export const EmprestadoInfoSection = styled.section`
width: 100%; 

#container{
   background-color: #e6e6e6;
   height: fit-content;
   width: 670px;
   padding: 1rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

h1 {
   text-align: left;
   margin-bottom: 0.5rem;
}

p {
   margin-top: 0.3rem;
   font-size: 16px;
   font-family: Roboto;
   color: #3E4756;
}
`

export const InativadoInfoSection = styled.section`
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;

h1 {
   text-align: left;
   margin-bottom: 0.5rem;
}

p {
   margin-top: 0.3rem;
   font-size: 16px;
   font-family: Roboto;
   color: #3E4756;
}

div {
   background-color: #e6e6e6;
   height: 80px;
   padding: 0.5rem;
}
`

export const MenuInativar = styled.form`
background-color: white;
width: 580px;
height: 200px;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1rem;

textarea {
   height: 100px;
   border: 1px solid #133052;
   border-radius: 5px;
   padding: 0.8rem;
   resize: none;
   font: normal normal normal 16px/21px Roboto;
}

button {
   align-self: flex-end;
}
`

export const DivFechar = styled.div`
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
z-index: 1000;
`