import React, { useState } from 'react'
import { BibliotecaItem, BibliotecaItensContainer, ContainerGeral, LinkParaHome, LupaImg, PesquisaButton, PesquisaContainer, PesquisaForm, PesquisaInput, PesquisaSelect, SetaEsquerda, VoltarPraHome } from '../styles'
import dados from '../data.json'
import Modal from '../Modal/Modal';

const BibliotecaForm = () => {
   const { books } = dados.data;
   const options = ['Título', 'Gênero', 'Autor', 'Data de entrada'];
   const [filtro, setFiltro] = useState('');
   const [pesquisa, setPesquisa] = useState('^^');
   const [texto, setTexto] = useState('');
   const [modalAtivado, setModalAtivado] = useState(false);
   const [livro, setLivro] = useState([]);
   const [index, setIndex] = useState(0);

   function abrirModal(livro, index) {
      setIndex(index);
      setLivro(livro);
      setModalAtivado(true);
   }

   function selecionarFiltro(event) {
      setFiltro(event.target.value);
   }

   function escrever(event) {
      setTexto(event.target.value);
   }

   function pesquisar(event) {
      event.preventDefault();
      setPesquisa(texto);
   }

   function ordenar(filtro) {
      if (filtro === 'Título') {
         books.sort((a, b) => a.title.localeCompare(b.title));
      } else if (filtro === 'Gênero') {
         books.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (filtro === 'Autor') {
         books.sort((a, b) => a.author.localeCompare(b.author));
      } else if (filtro === 'Data de entrada') {
         books.sort(function (a, b) {
            var data1 = a.systemEntryDate.split("/").reverse().join("-");
            var data2 = b.systemEntryDate.split("/").reverse().join("-");
            return new Date(data1) - new Date(data2);
         });
      }
      else {
         return;
      }
   }

   return (
      <ContainerGeral>
         <VoltarPraHome>
            <p>
               <LinkParaHome to='/home'>
                  <SetaEsquerda /> Home
               </LinkParaHome> / <b>Biblioteca</b>
            </p>
         </VoltarPraHome>

         <PesquisaContainer>
            <PesquisaForm>
               <LupaImg />
               <PesquisaInput value={texto} onChange={escrever} placeholder='Pesquisar livro...' />
               <PesquisaButton onClick={pesquisar}>Buscar</PesquisaButton>
            </PesquisaForm>

            <PesquisaSelect opcaoNeutra='Selecione' className='select'
               value={filtro} options={options} onChange={selecionarFiltro} />
         </PesquisaContainer>

         <BibliotecaItensContainer>
            {modalAtivado && <Modal setModalAtivado={setModalAtivado} livro={livro} index={index} />}
            {ordenar(filtro)}
            {books.map((livro, index) => {
               if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                  return (
                     <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                        <img src={livro.image} alt='' />
                        <p>{livro.title}</p>
                     </BibliotecaItem>
                  )
               } else return null;
            })}
         </BibliotecaItensContainer>
      </ContainerGeral>
   )
}

export default BibliotecaForm