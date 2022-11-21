import React, { useState } from 'react'
import { BotaoDevolver, BotaoEditar, BotaoEmprestar, BotaoHistorico, BotaoInativar, BotoesSection, CapaBotaoSection, DivFechar, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada } from '../styles'
import Fechar from '../imagens/Caminho_265.svg'

const ModalLivro = ({ livro, setModalAtivado, setEmprestarAtivado, setModalLivroAtivado, setInativarAtivado, setHistoricoAtivado }) => {

   const [livroEmprestado, setLivroEmprestado] = useState(false);
   const [livroAtivado, setLivroAtivado] = useState(false);

   function abrirEmprestar() {
      setModalLivroAtivado(false);
      setEmprestarAtivado(true);
   }

   function abrirInativar() {
      setModalLivroAtivado(false);
      setInativarAtivado(true);
   }

   function abrirHistorico() {
      setModalLivroAtivado(false);
      setHistoricoAtivado(true);
   }

   React.useEffect(() => {
      if (livro.status.isActive === false) {
         setLivroAtivado(false);
      } else {
         setLivroAtivado(true);
      }
   }, [livro.status.isActive])

   return (
      <MenuLivro>
         <DivFechar><img onClick={() => { setModalAtivado(false) }} src={Fechar} alt='Fechar' /></DivFechar>

         <CapaBotaoSection>
            <img src={livro.image} alt='Capa do livro' />
            {livroEmprestado ?
               <BotaoDevolver >Devolver</BotaoDevolver>
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
               <BotaoEditar>Editar</BotaoEditar>
               <BotaoInativar onClick={abrirInativar}>Inativar</BotaoInativar>
               <BotaoHistorico onClick={abrirHistorico}>Histórico</BotaoHistorico>
            </BotoesSection>
         </InfoBtSection>
      </MenuLivro>
   )
}

export default ModalLivro