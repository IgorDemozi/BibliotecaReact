import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../../assets/person_black_24dp (1).svg';
import Seta from '../../assets/Arrow.svg';

const UserMenuDiv = styled.div`
   background-color: white;
   display: flex;
   align-items: center;
   height: 3.125rem;
   gap: 0.25rem;
   cursor: pointer;
`;

const UserMenuSair = styled.div`
   background-color: #e6e6e6;
   border-radius: 0.25rem;
   width: 7.5rem;
   height: 3.125rem;
   font: normal normal normal 1.125rem/1.125rem Roboto;
   color: #2a2a2a;
   cursor: pointer;
   margin-right: 0.375;
   transform: translate(13rem, 3rem);

   p {
      margin: 1rem 0 1rem 1rem;
   }
`;

const UserMenuSection = styled.section`
   display: flex;
   align-items: center;
`;

const UserMenu = () => {
   const [usuario, setUsuario] = useState('');
   const [ativado, setAtivado] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem('atual-usuario') === null) {
         navigate('/');
      } else {
         setUsuario(localStorage.getItem('atual-usuario')!);
      }
   }, [navigate]);

   function logout() {
      localStorage.removeItem('atual-usuario');
      navigate('/');
   }

   function exibirBotaoSair() {
      if (ativado) {
         setAtivado(false);
      } else {
         setAtivado(true);
      }
   }

   return (
      <UserMenuSection>
         {ativado && (
            <UserMenuSair data-testid={'botaoLogout'} onClick={logout}>
               <p>Sair</p>
            </UserMenuSair>
         )}

         {/* data-testid={'menuDiv'} */}
         <UserMenuDiv data-testid={'menuDiv'} onClick={exibirBotaoSair}>
            <img src={Avatar} alt="" />
            <p>{usuario}</p>
            <img src={Seta} alt="" />
         </UserMenuDiv>
      </UserMenuSection>
   );
};

export default UserMenu;
