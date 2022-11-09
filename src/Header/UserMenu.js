import React, { useState } from 'react'
import { ReactComponent as Avatar } from '../imagens/person_black_24dp (1).svg'
import { ReactComponent as Seta } from '../imagens/Arrow.svg'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const UserMenu = () => {

   const [usuario, setUsuario] = useState('');
   const [ativado, setAtivado] = useState(false);
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
      if (ativado) setAtivado(false);
      else setAtivado(true);
   }

   return (
      <section className={styles.userSection}>
         {ativado &&
            <div className={styles.sair} onClick={logout}>
               <p>Sair</p>
            </div>
         }

         <div className={styles.userMenu} onClick={exibir}>
            <Avatar />
            <p>{usuario}</p>
            <Seta />
         </div>
      </section>
   )
}

export default UserMenu