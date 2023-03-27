import { ChangeEvent, useEffect, useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Lupa from '../../assets/Caminho_263.svg';
import Modal from '../../Componentes/Modal/Modal';
import VoltarParaHome from '../../Componentes/VoltarParaHome';
import { Livro } from 'types';
import { Api } from '../../api';
import { ContainerGeral } from '../pages.styles';
import { BibliotecaItem, BibliotecaItensContainer, PesquisaContainer, PesquisaForm } from './BibliotecaForm.styles';

const BibliotecaForm = () => {
   const options = ['Título', 'Gênero', 'Autor', 'Data de entrada'];
   const [books, setBooks] = useState<Livro[]>();
   const [livroId, setLivroId] = useState<number | string>();
   const [opcao, setOpcao] = useState('');
   const [filtro, setFiltro] = useState('');
   const [pesquisa, setPesquisa] = useState('');
   const [texto, setTexto] = useState('');
   const [modalAtivado, setModalAtivado] = useState(false);
   const { state } = useLocation();

   useEffect(() => {
      Api.get('books')
         .then(resp => {
            setBooks(resp.data);
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   useEffect(() => {
      if (state) {
         setLivroId(state);
         setModalAtivado(true);
      }
   }, [state]);

   function abrirModal(livroId: number | string) {
      setLivroId(livroId);
      setModalAtivado(true);
   }

   function pesquisar(event: any) {
      event.preventDefault();
      setFiltro(opcao);
      setPesquisa(texto);
   }

   function criarElementoLivro(livro: Livro) {
      return (
         <BibliotecaItem
            onClick={() => {
               abrirModal(livro.id);
            }}
            key={livro.id}
         >
            <img src={`http://localhost:3000/upload/${livro.image}`} alt={`Capa do livro ${livro.title}`} />
            <p>{livro.title}</p>
         </BibliotecaItem>
      );
   }

   return (
      <ContainerGeral data-testid={'BibliotecaForm'}>
         <VoltarParaHome pagina={'Biblioteca'} />

         <PesquisaContainer>
            <PesquisaForm onSubmit={pesquisar}>
               <img src={Lupa} alt="" />
               <input
                  data-testid={'BibliotecaInput'}
                  id="pesquisaInput"
                  value={texto}
                  onChange={(texto: ChangeEvent<HTMLInputElement>) => setTexto(texto.target.value)}
                  placeholder="Pesquisar livro..."
               />
               <Button onClick={pesquisar} id="biblioteca-botao-pesquisar">
                  Buscar
               </Button>
            </PesquisaForm>

            <TextField
               select
               label="Buscar por:"
               value={opcao}
               onChange={opcao => setOpcao(opcao.target.value)}
               sx={{
                  '& .MuiInputBase-root': {
                     width: 200,
                  },
                  '& .MuiOutlinedInput-root': {
                     '& fieldset': {
                        borderColor: '#ADB5BD',
                     },
                  },
               }}
            >
               {options.map(option => (
                  <MenuItem key={option} value={option}>
                     {option}
                  </MenuItem>
               ))}
            </TextField>
         </PesquisaContainer>

         <BibliotecaItensContainer>
            {modalAtivado && <Modal setModalAtivado={setModalAtivado} livroId={livroId} />}
            {!books ? (
               <p id="bibliotecaCarregandoInfo">Carregando informações...</p>
            ) : (
               books.map(livro => {
                  switch (filtro) {
                     case '':
                        if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                           return criarElementoLivro(livro);
                        }
                        break;
                     case 'Título':
                        if (livro.title.toLowerCase().includes(pesquisa.toLowerCase())) {
                           return criarElementoLivro(livro);
                        }
                        break;
                     case 'Gênero':
                        if (livro.genre.toLowerCase().includes(pesquisa.toLowerCase())) {
                           return criarElementoLivro(livro);
                        }
                        break;
                     case 'Autor':
                        if (livro.author.toLowerCase().includes(pesquisa.toLowerCase())) {
                           return criarElementoLivro(livro);
                        }
                        break;
                     case 'Data de entrada':
                        if (livro.systemEntryDate.includes(pesquisa)) {
                           return criarElementoLivro(livro);
                        }
                        break;
                  }
                  return null;
               })
            )}
         </BibliotecaItensContainer>
      </ContainerGeral>
   );
};

export default BibliotecaForm;
