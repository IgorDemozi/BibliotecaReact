import React, { useState } from 'react'
import { ModalPrincipal } from './Modal.styles.js'
import ModalEmprestar from './ModalEmprestar';
import ModalHistorico from './ModalHistorico';
import ModalInativar from './ModalInativar';
import ModalLivro from './ModalLivro';

const Modal = ({ setModalAtivado, livro, index }) => {
   const [modalLivroAtivado, setModalLivroAtivado] = useState(true);
   const [emprestarAtivado, setEmprestarAtivado] = useState(false);
   const [inativarAtivado, setInativarAtivado] = useState(false);
   const [historicoAtivado, setHistoricoAtivado] = useState(false);

   function clicarFora(event) {
      if (event.target === event.currentTarget) {
         setModalAtivado(false);
      }
   }

   return (
      <ModalPrincipal onClick={clicarFora}>
         {modalLivroAtivado && <ModalLivro
            livro={livro}
            index={index}
            setModalLivroAtivado={setModalLivroAtivado}
            setModalAtivado={setModalAtivado}
            setEmprestarAtivado={setEmprestarAtivado}
            setInativarAtivado={setInativarAtivado}
            setHistoricoAtivado={setHistoricoAtivado} />
         }

         {emprestarAtivado && <ModalEmprestar
            livro={livro}
            index={index}
            setEmprestarAtivado={setEmprestarAtivado}
            setModalLivroAtivado={setModalLivroAtivado} />
         }

         {inativarAtivado && <ModalInativar
            livro={livro}
            index={index}
            setInativarAtivado={setInativarAtivado}
            setModalLivroAtivado={setModalLivroAtivado} />
         }

         {historicoAtivado && <ModalHistorico
            livro={livro}
            setHistoricoAtivado={setHistoricoAtivado}
            setModalLivroAtivado={setModalLivroAtivado} />
         }
      </ModalPrincipal>
   )
}

export default Modal