import React, { useState } from 'react'
import { ReactComponent as Avatar } from 'assets/person_black_24dp (1).svg'
import { ReactComponent as Seta } from 'assets/Arrow.svg'
import { UserMenuDiv, UserMenuSair, UserMenuSection } from 'Header/UserMenu.styles'
import { useNavigate } from 'react-router-dom'
import 'App.css';

const UserMenu = () => {
   const [usuario, setUsuario] = useState('');
   const [ativado, setAtivado] = useState(false);
   const navigate = useNavigate();

   React.useEffect(() => {
      if (localStorage.getItem("atual-usuario") === "null") {
         navigate('/');
      } else {
         setUsuario(localStorage.getItem("atual-usuario")!);
      }
   }, [navigate]);

   function logout() {
      localStorage.setItem('atual-usuario', 'null');
      setAtivado(false);
      navigate('/');
   }

   function exibir() {
      if (ativado) {
         setAtivado(false);
      } else {
         setAtivado(true);
      }
   }

   return (
      <UserMenuSection>
         {ativado && <UserMenuSair onClick={logout}>
            <p>Sair</p>
         </UserMenuSair>}

         <UserMenuDiv onClick={exibir} >
            <Avatar />
            <p>{usuario}</p>
            <Seta />
         </UserMenuDiv>
      </UserMenuSection>
   )
}

export default UserMenu