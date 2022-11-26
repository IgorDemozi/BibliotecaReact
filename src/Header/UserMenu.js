import React, { useState } from 'react'
import { ReactComponent as Avatar } from '../imagens/person_black_24dp (1).svg'
import { ReactComponent as Seta } from '../imagens/Arrow.svg'
import { UserMenuDiv, UserMenuSair, UserMenuSection } from '../styles'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import '../App.css';

const UserMenu = () => {
   const [usuario, setUsuario] = useState('');
   const [ativado, setAtivado] = useState(false);
   const [style, setStyle] = useState({});
   const navigate = useNavigate();

   React.useEffect(() => {
      if (localStorage.getItem("atual-usuario") === "null") {
         navigate('/');
      } else {
         setUsuario(localStorage.getItem("atual-usuario"));
      }
   }, [navigate]);

   function logout() {
      localStorage.setItem('atual-usuario', null);
      setAtivado(false);
      navigate('/');
   }

   function exibir() {
      if (ativado) {
         setAtivado(false);
         setStyle({ transitionDuration: '0.2s', transitionTimingFunction: 'ease-in-out' });
      } else {
         setAtivado(true);
         setStyle({
            transform: 'rotate(450deg)', transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-in-out'
         });
      }
   }

   return (
      <UserMenuSection>
         <CSSTransition in={ativado} key={0} timeout={300} classNames="transition" unmountOnExit>
            <UserMenuSair onClick={logout}>
               <p>Sair</p>
            </UserMenuSair>
         </CSSTransition>

         <UserMenuDiv onClick={exibir} >
            <Avatar />
            <p>{usuario}</p>
            <Seta style={style} />
         </UserMenuDiv>
      </UserMenuSection>
   )
}

export default UserMenu