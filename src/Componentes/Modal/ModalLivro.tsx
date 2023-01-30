import Fechar from 'assets/Caminho_265.svg'
import InativadoInfo from './InativadoInfo'
import EmprestadoInfo from './EmprestadoInfo'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BotaoDevolver, BotoesSection, CapaBotaoSection, DivFecharSimples, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada, BotaoEmprestar, BotaoOpcoesModal } from './ModalLivro.styles'
import { Livro, ModalProps } from 'types'
import { Api, getBook } from 'api'

const ModalLivro = ({ livroId, setModalAtivado, setEmprestarAtivado, setModalLivroAtivado, setInativarAtivado, setHistoricoAtivado }: ModalProps) => {

   const [livro, setLivro] = useState<Livro>();

   useEffect(() => {
      if (livroId) {
         getBook(livroId, setLivro);
      }
   }, [livroId])

   function abrirEmprestar() {
      if (setModalLivroAtivado && setEmprestarAtivado) {
         setModalLivroAtivado(false);
         setEmprestarAtivado(true);
      }
   }

   function abrirInativar() {
      if (setModalLivroAtivado && setInativarAtivado) {
         setModalLivroAtivado(false);
         setInativarAtivado(true);
      }
   }

   function abrirHistorico() {
      if (setModalLivroAtivado && setHistoricoAtivado) {
         setModalLivroAtivado(false);
         setHistoricoAtivado(true);
      }
   }

   function devolverLivro() {
      if (window.confirm('Confirmar devolução?')) {
         Api.post(`/biblioteca/devolver/${livroId}`).then(resp => {
            alert('Informações salvas com sucesso!');
         }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
         });

         if (livroId) {
            getBook(livroId, setLivro);
         }
      }
   }

   function ativarLivro() {
      if (window.confirm('Confirmar ativação?')) {
         Api.patch(`/biblioteca/ativar/${livroId}`).then(resp => {
            alert('Informações salvas com sucesso!');
         }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
         });

         if (livroId) {
            getBook(livroId, setLivro);
         }
      }
   }

   return (
      <MenuLivro>
         <DivFecharSimples>
            <img onClick={() => { if (setModalAtivado) setModalAtivado(false) }} src={Fechar} alt='Fechar' />
         </DivFecharSimples>

         <CapaBotaoSection>
            {livro && <img src={`http://localhost:3000/upload/${livro.image}`} alt='Capa do livro' />}
            {livro && livro.status.isRented ?
               <BotaoDevolver onClick={devolverLivro}>Devolver</BotaoDevolver>
               :
               <React.Fragment>
                  {livro && livro.status.isActive ?
                     <BotaoEmprestar onClick={abrirEmprestar}>Emprestar</BotaoEmprestar>
                     :
                     <React.Fragment>
                        {livro && <BotaoEmprestar disabled={true}>Emprestar</BotaoEmprestar>}
                     </React.Fragment>
                  }
               </React.Fragment>
            }
         </CapaBotaoSection>

         <InfoBtSection>
            <Informacoes>
               {livro &&
                  <React.Fragment>
                     <h1>{livro.title}</h1>

                     <div>
                        <h2>Sinopse</h2>
                        <SinopseFormatada>{livro.synopsis}</SinopseFormatada>
                     </div>

                     <div>
                        <h2>Autor</h2>
                        <p>{livro.author}</p>
                     </div>

                     <div>
                        <h2>Gênero</h2>
                        <p>{livro.genre}</p>
                     </div>

                     <div>
                        <h2>Data de entrada</h2>
                        <p>{livro.systemEntryDate}</p>
                     </div>
                  </React.Fragment>
               }
            </Informacoes>

            <BotoesSection>
               <Link to='/editar' state={{ livro: livro }} style={{ textDecoration: 'none' }}>
                  <BotaoOpcoesModal
                     sx={{
                        border: '0.063rem solid #167CE2',
                        color: '#167CE2'
                     }}
                  >Editar</BotaoOpcoesModal>
               </Link>

               {livro && livro.status.isActive ?
                  <BotaoOpcoesModal
                     onClick={abrirInativar}
                     sx={{
                        border: '0.063rem solid #ED5E5E',
                        color: '#ED5E5E',
                        '&:hover': {
                           backgroundColor: '#ffeeee'
                        }
                     }}
                  >Inativar</BotaoOpcoesModal>
                  :
                  <BotaoOpcoesModal
                     onClick={ativarLivro}
                     sx={{
                        border: '0.063rem solid #49D749',
                        color: '#49D749'
                     }}
                  >Ativar</BotaoOpcoesModal>
               }

               <BotaoOpcoesModal
                  onClick={abrirHistorico}
                  sx={{
                     border: '0.063rem solid #ADB5BD',
                     color: 'black',
                     '&:hover': {
                        backgroundColor: '#eeeeee'
                     }
                  }}
               >Histórico</BotaoOpcoesModal>
            </BotoesSection>
         </InfoBtSection>

         {livro && livro.status.isRented && <EmprestadoInfo livro={livro} />}
         {livro && livro.status.isActive === false && <InativadoInfo livro={livro} />}
      </MenuLivro>
   )
}

export default ModalLivro