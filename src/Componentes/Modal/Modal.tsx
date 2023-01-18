import { MouseEvent, useState } from 'react'
import { ModalProps } from 'types';
import { ModalPrincipal } from './Modal.styles'
import ModalEmprestar from './ModalEmprestar';
import ModalHistorico from './ModalHistorico';
import ModalInativar from './ModalInativar';
import ModalLivro from './ModalLivro';

const Modal = ({ setModalAtivado, livro }: ModalProps) => {
   const [modalLivroAtivado, setModalLivroAtivado] = useState(true);
   const [emprestarAtivado, setEmprestarAtivado] = useState(false);
   const [inativarAtivado, setInativarAtivado] = useState(false);
   const [historicoAtivado, setHistoricoAtivado] = useState(false);

   function clicarFora(event: MouseEvent) {
      if (event.target === event.currentTarget && setModalAtivado) {
         setModalAtivado(false);
      }
   }

   return (
      <ModalPrincipal onClick={clicarFora}>
         {modalLivroAtivado && <ModalLivro
            livro={livro}
            setModalLivroAtivado={setModalLivroAtivado}
            setModalAtivado={setModalAtivado}
            setEmprestarAtivado={setEmprestarAtivado}
            setInativarAtivado={setInativarAtivado}
            setHistoricoAtivado={setHistoricoAtivado} />
         }

         {emprestarAtivado && <ModalEmprestar
            livro={livro}
            setEmprestarAtivado={setEmprestarAtivado}
            setModalLivroAtivado={setModalLivroAtivado} />
         }

         {inativarAtivado && <ModalInativar
            livro={livro}
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