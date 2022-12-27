import React, { useState } from 'react'
import { BibliotecaItem, BibliotecaItensContainer, LupaImg, PesquisaContainer, PesquisaForm, PesquisaInput } from './BibliotecaForm.styles.js'
import { ContainerGeral, LinkParaHome, SetaEsquerda, VoltarPraHome } from '../pages.styles.js'
import dados from '../../data.json'
import Modal from '../../Modal/Modal';
import { Button, MenuItem, TextField } from '@mui/material';

const BibliotecaForm = () => {
   const { books } = dados.data;
   const options = ['Título', 'Gênero', 'Autor', 'Data de entrada'];
   const [filtro, setFiltro] = useState('');
   const [pesquisa, setPesquisa] = useState('');
   const [texto, setTexto] = useState('');
   const [modalAtivado, setModalAtivado] = useState(false);
   const [livro, setLivro] = useState([]);
   const [index, setIndex] = useState(0);

   function abrirModal(livro, index) {
      setIndex(index);
      setLivro(livro);
      setModalAtivado(true);
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
               <PesquisaInput
                  value={texto}
                  onChange={(texto) => setTexto(texto.target.value)}
                  placeholder='Pesquisar livro...' />
               <Button onClick={pesquisar} id='biblioteca-botao-pesquisar'>Buscar</Button>
            </PesquisaForm>

            <TextField
               select
               label='Ordenar lista'
               value={filtro}
               onChange={(filtro) => setFiltro(filtro.target.value)}
               sx={{
                  "& .MuiInputBase-root": {
                     width: 200
                  },
                  '& .MuiOutlinedInput-root': {
                     '& fieldset': {
                        borderColor: '#ADB5BD'
                     }
                  }
               }}
            >
               <MenuItem value={''}>---</MenuItem>
               {options.map((option) => (
                  <MenuItem key={option} value={option}>
                     {option}
                  </MenuItem>
               ))}
            </TextField>
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
      </ContainerGeral >
   )
}

export default BibliotecaForm