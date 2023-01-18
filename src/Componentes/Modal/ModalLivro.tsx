import Fechar from 'assets/Caminho_265.svg'
import InativadoInfo from './InativadoInfo'
import EmprestadoInfo from './EmprestadoInfo'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BotaoDevolver, BotoesSection, CapaBotaoSection, DivFecharSimples, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada, BotaoEmprestar, BotaoOpcoesModal } from './ModalLivro.styles'
import { ModalProps } from 'types'
import { Api } from 'api'

const ModalLivro = ({ livro, setModalAtivado, setEmprestarAtivado, setModalLivroAtivado, setInativarAtivado, setHistoricoAtivado }: ModalProps) => {

   const [livroEmprestado, setLivroEmprestado] = useState(false);
   const [livroAtivado, setLivroAtivado] = useState(false);
   var novoStatus = livro.status;

   React.useEffect(() => {
      if (livro.status.isActive === false) {
         setLivroAtivado(false);
      } else {
         setLivroAtivado(true);
      }

      if (livro.status.isRented === false) {
         setLivroEmprestado(false);
      } else {
         setLivroEmprestado(true);
      }
   }, [livro.status.isActive, livro.status.isRented])

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

         novoStatus.isRented = false;

         Api.patch(`books/${livro.id}`, {
            status: novoStatus,
         }).then(resp => {
            alert('Informações salvas com sucesso!');
         }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
         });

         setLivroEmprestado(false);
      }
   }

   function ativarLivro() {
      if (window.confirm('Confirmar ativação?')) {
         novoStatus.isActive = true;
         novoStatus.description = '';

         Api.patch(`books/${livro.id}`, {
            status: novoStatus
         }).then(resp => {
            alert('Informações salvas com sucesso!');
         }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
         });

         setLivroAtivado(true);
      }
   }



   return (
      <MenuLivro>
         <DivFecharSimples>
            <img onClick={() => { if (setModalAtivado) setModalAtivado(false) }} src={Fechar} alt='Fechar' />
         </DivFecharSimples>

         <CapaBotaoSection>
            <img src={livro.image} alt='Capa do livro' />
            {livroEmprestado ?
               <BotaoDevolver onClick={devolverLivro}>Devolver</BotaoDevolver>
               :
               <React.Fragment>
                  {livroAtivado ?
                     <BotaoEmprestar onClick={abrirEmprestar}>Emprestar</BotaoEmprestar>
                     :
                     <BotaoEmprestar disabled={!livroAtivado}>Emprestar</BotaoEmprestar>
                  }
               </React.Fragment>
            }
         </CapaBotaoSection>

         <InfoBtSection>
            <Informacoes>
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

               {livroAtivado ?
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

         {livroEmprestado && <EmprestadoInfo livro={livro} />}
         {!livroAtivado && <InativadoInfo livro={livro} />}
      </MenuLivro>
   )
}

export default ModalLivro