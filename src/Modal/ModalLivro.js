import React, { useState } from 'react'
import { BotaoAtivar, BotaoDevolver, BotaoEditar, BotaoEmprestar, BotaoHistorico, BotaoInativar, BotoesSection, CapaBotaoSection, DivFecharSimples, InfoBtSection, Informacoes, MenuLivro, SinopseFormatada } from '../styles'
import Fechar from '../imagens/Caminho_265.svg'
import dados from '../data.json'
import InativadoInfo from './InativadoInfo'
import EmprestadoInfo from './EmprestadoInfo'
import { Link } from 'react-router-dom'

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
   }, [livro.status.isActive])

   return (
      <MenuLivro>
         <DivFecharSimples>
            <img onClick={() => { setModalAtivado(false) }} src={Fechar} alt='Fechar' />
         </DivFecharSimples>

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
               <Link to='/editar' state={{ livro: livro, index: index }}><BotaoEditar>Editar</BotaoEditar></Link>

               {livroAtivado ?
                  <BotaoInativar onClick={abrirInativar}>Inativar</BotaoInativar>
                  :
                  <BotaoAtivar onClick={ativarLivro}>Ativar</BotaoAtivar>
               }

               <BotaoHistorico onClick={abrirHistorico}>Histórico</BotaoHistorico>
            </BotoesSection>
         </InfoBtSection>

         {livroEmprestado && <EmprestadoInfo />}
         {!livroAtivado && <InativadoInfo livro={livro} />}
      </MenuLivro>
   )
}

export default ModalLivro