import dados from '../../data.json'
import ButtonMUI from '@mui/material/Button'
import IconeAdicionar from '../../assets/Caminho 261.svg';
import React, { useState } from 'react'
import { CadastroContainer, Imagem, InserirCapa, TextfieldCadastro } from './CadastroForm.styles.js'
import { ContainerGeral, VoltarPraHome, LinkParaHome, SetaEsquerda } from '../pages.styles.js'
import { MenuItem } from '@mui/material';

const CadastroForm = () => {
   const { books } = dados.data;
   const [base64, setBase64] = useState('');
   const [titulo, setTitulo] = useState('');
   const [sinopse, setSinopse] = useState('');
   const [autor, setAutor] = useState('');
   const [genero, setGenero] = useState('');
   const [data, setData] = useState('');
   const [imgNoInput, setImgNoInput] = useState(false);
   var generos = [];

   function pegarBase64(event) {

      return new Promise(() => {
         var leitor = new FileReader();
         leitor.readAsDataURL(event.target.files[0]);

         leitor.onloadend = () => {
            setBase64(leitor.result);
            setImgNoInput(true);
         }
      })
   }

   function zerarValores() {
      if (window.confirm('Tem certeza de que quer cancelar? Todos os campos serão apagados.')) {
         setBase64('');
         setTitulo('');
         setSinopse('');
         setAutor('');
         setGenero('');
         setData('');
         setImgNoInput(false);
      }
   }

   function salvar(event) {
      event.preventDefault();

      var dataFormatada = data.split("-").reverse().join("/");

      dados.data.books.push({
         title: titulo,
         author: autor,
         genre: genero,
         status: { isRented: false, isActive: true, description: '' },
         image: base64,
         systemEntryDate: dataFormatada,
         synopsis: sinopse,
         rentHistory: []
      })

      var database = JSON.stringify(dados, null, '\t');

      const salvar = async () => {
         const criar = await window.showSaveFilePicker({
            suggestedName: 'data.json',

            types: [{
               description: 'JSON',
               accept: { 'application/json': ['.json'], }
            }]
         });
         const escrever = await criar.createWritable();
         await escrever.write(database);
         await escrever.close();
      }
      salvar();
   }

   books.forEach(item => {
      if (generos.includes(item.genre)) {
         return null
      } else {
         generos.push(item.genre);
      }
   });

   generos.sort(function (a, b) {
      if (a < b) {
         return -1;
      }
      if (a > b) {
         return 1;
      }
      return 0;
   });

   return (
      <ContainerGeral>
         <VoltarPraHome>
            <p>
               <LinkParaHome to='/home'>
                  <SetaEsquerda /> Home
               </LinkParaHome> / <b>Cadastrar novo livro</b>
            </p>
         </VoltarPraHome>

         <CadastroContainer onSubmit={salvar}>
            <InserirCapa>
               {imgNoInput ?
                  <React.Fragment>
                     <Imagem src={base64} alt='' />
                     <input type='file' onChange={pegarBase64} />
                  </React.Fragment>
                  :
                  <React.Fragment>
                     <input required type='file' onChange={pegarBase64} />
                     <img src={IconeAdicionar} alt='' />
                     <p>Capa</p>
                  </React.Fragment>
               }
            </InserirCapa>

            <section>
               <div id='container1'>
                  <TextfieldCadastro
                     type='text'
                     label='Título'
                     value={titulo}
                     onChange={(titulo) => setTitulo(titulo.target.value)}
                     required
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                  />

                  <TextfieldCadastro
                     type='text'
                     label='Sinopse'
                     value={sinopse}
                     onChange={(sinopse) => setSinopse(sinopse.target.value)}
                     multiline
                     rows={4}
                     inputProps={{
                        style: {
                           height: "98px"
                        }
                     }}
                     required
                  />
               </div>

               <div id='container1'>
                  <TextfieldCadastro
                     type='text'
                     label='Autor'
                     value={autor}
                     onChange={(autor) => setAutor(autor.target.value)}
                     required
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                  />

                  <TextfieldCadastro
                     select
                     label='Gênero'
                     value={genero}
                     onChange={(genero) => setGenero(genero.target.value)}
                     required
                     sx={{
                        "& .MuiInputBase-root": {
                           height: 53
                        }
                     }}
                  >
                     <MenuItem value={''}>---</MenuItem>
                     {generos.map((option) => (
                        <MenuItem key={option} value={option}>
                           {option}
                        </MenuItem>
                     ))}
                  </TextfieldCadastro>

                  <TextfieldCadastro
                     type='date'
                     label='Data'
                     value={data}
                     onChange={(data) => setData(data.target.value)}
                     required
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                     InputLabelProps={{ shrink: true }}
                  />
               </div>
            </section>

            <div id='container3'>
               <ButtonMUI id='cadastro-botao-salvar' type='submit'>salvar</ButtonMUI>
               <ButtonMUI id='cadastro-botao-cancelar' onClick={zerarValores}>cancelar</ButtonMUI>
            </div>
         </CadastroContainer>
      </ContainerGeral>
   )
}

export default CadastroForm