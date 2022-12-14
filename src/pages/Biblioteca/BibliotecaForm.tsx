import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { BibliotecaItem, BibliotecaItensContainer, LupaImg, PesquisaContainer, PesquisaForm } from './BibliotecaForm.styles'
import { ContainerGeral, LinkParaHome, SetaEsquerda, VoltarPraHome } from '../pages.styles'
import { Button, MenuItem, TextField } from '@mui/material';
import Modal from '../../Modal/Modal'
import axios from "axios"
import { Livro } from '../../types'

const BibliotecaForm = () => {
   const options = ['Título', 'Gênero', 'Autor', 'Data de entrada'];
   const [books, setBooks] = useState<Livro[]>();
   const [opcao, setOpcao] = useState('');
   const [filtro, setFiltro] = useState('');
   const [pesquisa, setPesquisa] = useState('');
   const [texto, setTexto] = useState('');
   const [modalAtivado, setModalAtivado] = useState(false);
   const [livro, setLivro] = useState<Livro>();
   const [index, setIndex] = useState(0);

   React.useEffect(() => {
      axios.get('http://localhost:3000/books?_sort=title&_order=asc')
         .then(resp => {
            setBooks(resp.data);
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

   function abrirModal(livro: Livro, index: number) {
      setIndex(index);
      setLivro(livro);
      setModalAtivado(true);
   }

   function pesquisar(event: MouseEvent) {
      event.preventDefault();
      setFiltro(opcao)
      setPesquisa(texto);
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
               <input
                  id='pesquisaInput'
                  value={texto}
                  onChange={(texto: ChangeEvent<HTMLInputElement>) => setTexto(texto.target.value)}
                  placeholder='Pesquisar livro...'
               />
               <Button onClick={pesquisar} id='biblioteca-botao-pesquisar'>Buscar</Button>
            </PesquisaForm>

            <TextField
               select
               label='Buscar por:'
               value={opcao}
               onChange={(opcao) => setOpcao(opcao.target.value)}
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
            {modalAtivado && <Modal setModalAtivado={setModalAtivado} livro={livro!} index={index} />}
            {!books ?
               <p id='bibliotecaCarregandoInfo'>Carregando informações...</p>
               :
               books.map((livro, index) => {
                  if (filtro === '') {
                     if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                        return (
                           <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                              <img src={livro.image} alt='' />
                              <p>{livro.title}</p>
                           </BibliotecaItem>
                        )
                     } else return null;
                  }
                  if (filtro === 'Título') {
                     if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                        return (
                           <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                              <img src={livro.image} alt='' />
                              <p>{livro.title}</p>
                           </BibliotecaItem>
                        )
                     } else return null;
                  }
                  if (filtro === 'Gênero') {
                     if (livro.genre.toLowerCase().includes(pesquisa.toLowerCase())) {
                        return (
                           <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                              <img src={livro.image} alt='' />
                              <p>{livro.title}</p>
                           </BibliotecaItem>
                        )
                     } else return null;
                  }
                  if (filtro === 'Autor') {
                     if (livro.author.toLowerCase().includes(pesquisa.toLowerCase())) {
                        return (
                           <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                              <img src={livro.image} alt='' />
                              <p>{livro.title}</p>
                           </BibliotecaItem>
                        )
                     } else return null;
                  }
                  if (filtro === 'Data de entrada') {
                     if (livro.systemEntryDate.includes(pesquisa)) {
                        return (
                           <BibliotecaItem onClick={() => { abrirModal(livro, index) }} key={index}>
                              <img src={livro.image} alt='' />
                              <p>{livro.title}</p>
                           </BibliotecaItem>
                        )
                     } else return null;
                  }

                  return null;
               })}
         </BibliotecaItensContainer>
      </ContainerGeral >
   )
}

export default BibliotecaForm