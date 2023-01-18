import ButtonMUI from '@mui/material/Button'
import IconeAdicionar from 'assets/Caminho 261.svg'
import React, { ChangeEvent, useRef, useState } from 'react'
import { CadastroContainer, InserirCapa, TextfieldCadastro } from './CadastroForm.styles'
import { ContainerGeral, VoltarPraHome, LinkParaHome, SetaEsquerda } from 'pages/pages.styles'
import { useNavigate } from 'react-router-dom'
import { MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Livro } from 'types'
import { Api } from 'api'
import { isBefore } from 'date-fns'

const CadastroForm = () => {
   const navigate = useNavigate();
   const [books, setBooks] = useState<Livro[]>();
   const [base64, setBase64] = useState<string>('');
   const [imgNoInput, setImgNoInput] = useState(false);
   const diaHoje = useRef(new Date());
   let generos: string[] = [];

   React.useEffect(() => {
      Api.get('/books')
         .then(resp => {
            setBooks(resp.data);
         })
         .catch(error => {
            console.log(error);
         });

      let hoje = new Date();
      let dataHoje: string = (hoje.getMonth() + 1) + '/' + hoje.getDate() + '/' + hoje.getFullYear();
      let dia = new Date(dataHoje);
      diaHoje.current = dia;
   }, [])

   function inputDateHandleChange(event: ChangeEvent<HTMLInputElement>) {
      let anoMesDia = event.target.value.split('-').map(Number);
      let dataSelecionada = new Date(anoMesDia[0], anoMesDia[1] -1 , anoMesDia[2]);

      if (isBefore(dataSelecionada, diaHoje.current)) {
         alert('A data escolhida já passou');
      } else {
         formik.handleChange(event);
      }
   }

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
         formik.resetForm();
      }
   });

   function pegarBase64(event: any) {

      return new Promise(() => {
         var leitor = new FileReader();
         leitor.readAsDataURL(event.target.files[0]);

         leitor.onloadend = () => {
            if (leitor.result) {
               setBase64(leitor.result as string);
               setImgNoInput(true);
            }
         }
      })
   }

   function retornarParaHome() {
      if (window.confirm('Tem certeza de que quer cancelar? Você retornará à página principal.')) {
         navigate('/home');
      }
   }

   function salvar() {
      if (books) {
         var dataFormatada = formik.values.data.split("-").reverse().join("/");

         Api.post('books', {
            id: books.length,
            title: formik.values.titulo,
            author: formik.values.autor,
            genre: formik.values.genero,
            status: { isRented: false, isActive: true, description: '' },
            image: base64,
            systemEntryDate: dataFormatada,
            synopsis: formik.values.sinopse,
            rentHistory: []
         }).then(resp => {
            alert('Informações salvas com sucesso!');
         }).catch(error => {
            console.log(error);
            alert('Algo deu errado...');
         });
      }
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
                     <img id='capaDoLivro' src={base64} alt='capa do livro' />
                     <input type='file' onChange={pegarBase64} />
                  </React.Fragment>
                  :
                  <React.Fragment>
                     <input required type='file' onChange={pegarBase64} />
                     <img src={IconeAdicionar} alt='adicionar capa' />
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
                     value={formik.values.titulo}
                     onChange={formik.handleChange}
                     inputProps={{
                        style: {
                           height: "1.25rem"
                        }
                     }}
                     error={formik.touched.titulo && Boolean(formik.errors.titulo)}
                     helperText={formik.touched.titulo && formik.errors.titulo}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-0.75rem, 3.1rem)'
                        }
                     }}
                  />

                  <TextfieldCadastro
                     type='text'
                     name='sinopse'
                     label='Sinopse'
                     value={formik.values.sinopse}
                     onChange={formik.handleChange}
                     multiline
                     rows={4}
                     inputProps={{
                        style: {
                           height: "6.125rem"
                        }
                     }}
                     error={formik.touched.sinopse && Boolean(formik.errors.sinopse)}
                     helperText={formik.touched.sinopse && formik.errors.sinopse}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-0.75rem, 8rem)'
                        }
                     }}
                  />
               </div>

               <div id='container1'>
                  <TextfieldCadastro
                     type='text'
                     name='autor'
                     label='Autor'
                     value={formik.values.autor}
                     onChange={formik.handleChange}
                     error={formik.touched.autor && Boolean(formik.errors.autor)}
                     helperText={formik.touched.autor && formik.errors.autor}
                     inputProps={{
                        style: {
                           height: "1.25rem"
                        }
                     }}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-0.75rem, 3.1rem)'
                        }
                     }}
                  />

                  <TextfieldCadastro
                     select
                     name='genero'
                     label='Gênero'
                     value={formik.values.genero}
                     onChange={formik.handleChange}
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
                           transform: 'translate(-0.75rem, 3.1rem)'
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
                     inputProps={{
                        style: {
                           height: "1.375rem"
                        }
                     }}
                     InputLabelProps={{ shrink: true }}
                     value={formik.values.data}
                     onChange={inputDateHandleChange}
                     error={formik.touched.data && Boolean(formik.errors.data)}
                     helperText={formik.touched.data && formik.errors.data}
                     FormHelperTextProps={{
                        style: {
                           position: 'absolute',
                           transform: 'translate(-0.75rem, 3.1rem)'
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