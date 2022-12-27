import dados from '../data.json'
import Fechar from '../assets/Caminho_265.svg'
import InativadoInfo from './InativadoInfo'
import EmprestadoInfo from './EmprestadoInfo'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BotaoDevolver, BotoesSection, CapaBotaoSection, DivFecharSimples, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada, BotaoEmprestar, BotaoOpcoesModal } from './ModalLivro.styles.js'

const ModalLivro = ({ livro, index, setModalAtivado, setEmprestarAtivado, setModalLivroAtivado, setInativarAtivado, setHistoricoAtivado }) => {

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

   function devolverLivro() {
      if (window.confirm('Confirmar devolução?')) {

         dados.data.books[index].status.isRented = false;
         var database = JSON.stringify(dados, null, '\t');

         const salvar = async () => {
            const criar = await window.showSaveFilePicker({
               suggestedName: 'data.json',

               types: [{
                  description: 'JSON',
                  accept: { 'application/json': ['.json'] }
               }]
            });
            const escrever = await criar.createWritable();
            await escrever.write(database);
            await escrever.close();
            setModalLivroAtivado(true);
         }
         salvar();
      }
   }

   function ativarLivro() {
      if (window.confirm('Confirmar ativação?')) {

         dados.data.books[index].status.isActive = true;
         dados.data.books[index].status.description = '';

         var database = JSON.stringify(dados, null, '\t');

         const salvar = async () => {
            const criar = await window.showSaveFilePicker({
               suggestedName: 'data.json',

               types: [{
                  description: 'JSON',
                  accept: { 'application/json': ['.json'] }
               }]
            });
            const escrever = await criar.createWritable();
            await escrever.write(database);
            await escrever.close();
         }
         salvar();
      }
   }

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

   return (
      <MenuLivro>
         <DivFecharSimples>
            <img onClick={() => { setModalAtivado(false) }} src={Fechar} alt='Fechar' />
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
               <Link to='/editar' state={{ livro: livro, index: index }} style={{ textDecoration: 'none' }}>
                  <BotaoOpcoesModal
                     sx={{
                        border: '1px solid #167CE2',
                        color: '#167CE2'
                     }}
                  >Editar</BotaoOpcoesModal>
               </Link>

               {livroAtivado ?
                  <BotaoOpcoesModal
                     onClick={abrirInativar}
                     sx={{
                        border: '1px solid #ED5E5E',
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
                        border: '1px solid #49D749',
                        color: '#49D749'
                     }}
                  >Ativar</BotaoOpcoesModal>
               }

               <BotaoOpcoesModal
                  onClick={abrirHistorico}
                  sx={{
                     border: '1px solid #ADB5BD',
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