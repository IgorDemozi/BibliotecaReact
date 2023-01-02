import ButtonMUI from '@mui/material/Button'
import IconeAdicionar from '../../assets/Caminho 261.svg';
import React, { useState } from 'react'
import { CadastroContainer, Imagem, InserirCapa, TextfieldCadastro } from './CadastroForm.styles.js'
import { ContainerGeral, VoltarPraHome, LinkParaHome, SetaEsquerda } from '../pages.styles.js'
import { useNavigate } from 'react-router-dom'
import { MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from "axios"

const CadastroForm = () => {
   const [books, setBooks] = useState('');
   const [base64, setBase64] = useState('');
   const [titulo, setTitulo] = useState('');
   const [sinopse, setSinopse] = useState('');
   const [autor, setAutor] = useState('');
   const [genero, setGenero] = useState('');
   const [data, setData] = useState('');
   const [imgNoInput, setImgNoInput] = useState(false);
   const navigate = useNavigate();
   var generos = [];

   React.useEffect(() => {
      axios.get('http://localhost:3000/books')
         .then(resp => {
            setBooks(resp.data);
         })
         .catch(error => {
            console.log(error);
         });
   }, [])

   const validationSchema = yup.object({
      titulo: yup.string().required('Este campo é obrigatório'),
      sinopse: yup.string().required('Este campo é obrigatório'),
      autor: yup.string().required('Este campo é obrigatório'),
      genero: yup.string().required('Este campo é obrigatório'),
      data: yup.string().required('Este campo é obrigatório')
   });

   const formik = useFormik({
      initialValues: {
         titulo: '',
         sinopse: '',
         autor: '',
         genero: '',
         data: ''
      },
      validationSchema: validationSchema,
      onSubmit: () => {
         salvar();
      }
   });

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

   function retornarParaHome() {
      if (window.confirm('Tem certeza de que quer cancelar? Você retornará à página principal.')) {
         navigate('/home');
      }
   }

   function salvar() {
      var dataFormatada = data.split("-").reverse().join("/");

      axios.post('http://localhost:3000/books', {
         id: books.length,
         title: titulo,
         author: autor,
         genre: genero,
         status: { isRented: false, isActive: true, description: '' },
         image: base64,
         systemEntryDate: dataFormatada,
         synopsis: sinopse,
         rentHistory: []
      }).then(resp => {
         alert('Informações salvas com sucesso!');
      }).catch(error => {
         console.log(error);
         alert('Algo deu errado...');
      });
   }

   if (books) {
      books.forEach(item => {
         if (generos.includes(item.genre)) {
            return null
         } else {
            generos.push(item.genre);
         }
      });
   }

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

         <CadastroContainer onSubmit={formik.handleSubmit}>
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
                     name='titulo'
                     label='Título'
                     value={titulo}
                     onChange={(titulo) => {
                        formik.handleChange(titulo);
                        setTitulo(titulo.target.value);
                     }}
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                     error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                     helperText={formik.touched.titulo && formik.errors.titulo}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-12px, 3.1rem)'
                        }
                     }}
                  />

                  <TextfieldCadastro
                     type='text'
                     name='sinopse'
                     label='Sinopse'
                     value={sinopse}
                     onChange={(sinopse) => {
                        formik.handleChange(sinopse);
                        setSinopse(sinopse.target.value)
                     }}
                     multiline
                     rows={4}
                     inputProps={{
                        style: {
                           height: "98px"
                        }
                     }}
                     error={formik.touched.sinopse && Boolean(formik.errors.sinopse)}
                     helperText={formik.touched.sinopse && formik.errors.sinopse}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-12px, 8rem)'
                        }
                     }}
                  />
               </div>

               <div id='container1'>
                  <TextfieldCadastro
                     type='text'
                     name='autor'
                     label='Autor'
                     value={autor}
                     onChange={(autor) => {
                        formik.handleChange(autor);
                        setAutor(autor.target.value)
                     }}
                     error={formik.touched.autor && Boolean(formik.errors.autor)}
                     helperText={formik.touched.autor && formik.errors.autor}
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-12px, 3.1rem)'
                        }
                     }}
                  />

                  <TextfieldCadastro
                     select
                     name='genero'
                     label='Gênero'
                     value={genero}
                     onChange={(genero) => {
                        formik.handleChange(genero);
                        setGenero(genero.target.value);
                     }}
                     error={formik.touched.genero && Boolean(formik.errors.genero)}
                     helperText={formik.touched.genero && formik.errors.genero}
                     sx={{
                        "& .MuiInputBase-root": {
                           height: 53
                        }
                     }}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-12px, 3.1rem)'
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
                     name='data'
                     label='Data'
                     value={data}
                     inputProps={{
                        style: {
                           height: "20px"
                        }
                     }}
                     InputLabelProps={{ shrink: true }}
                     onChange={(data) => {
                        formik.handleChange(data);
                        setData(data.target.value);
                     }}
                     error={formik.touched.data && Boolean(formik.errors.data)}
                     helperText={formik.touched.data && formik.errors.data}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-12px, 3.1rem)'
                        }
                     }}
                  />
               </div>
            </section>

            <div id='container3'>
               <ButtonMUI id='cadastro-botao-salvar' type='submit'>salvar</ButtonMUI>
               <ButtonMUI id='cadastro-botao-cancelar' onClick={retornarParaHome}>cancelar</ButtonMUI>
            </div>
         </CadastroContainer>
      </ContainerGeral>
   )
}

export default CadastroForm