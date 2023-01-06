import React, { useState } from 'react'
import { EmprestarInputsContainer, MenuEmprestar } from './ModalEmprestar.styles'
import { DivFechar } from './Modal.styles'
import { BotaoEmprestar } from './ModalLivro.styles'
import { TextfieldCadastro } from '../pages/Cadastro/CadastroForm.styles'
import Fechar from '../assets/Caminho_265.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from "axios"
import { ModalProps, rentHistory } from '../types'

const ModalEmprestar = ({ livro, index, setEmprestarAtivado, setModalLivroAtivado }: ModalProps) => {
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [retirada, setRetirada] = useState('');
   const [devolucao, setDevolucao] = useState('');
   const [shrinkAluno, setShrinkAluno] = useState(false);
   const [shrinkTurma, setShrinkTurma] = useState(false);

   var historicoDeEmprestimos: rentHistory[];
   var novosStatus = livro.status;

   livro.rentHistory.forEach(rent =>
      historicoDeEmprestimos.push(rent)
   )

   const validationSchema = yup.object({
      aluno: yup.string().required('Este campo é obrigatório'),
      turma: yup.string().required('Este campo é obrigatório'),
      retirada: yup.string().required('Este campo é obrigatório'),
      devolucao: yup.string().required('Este campo é obrigatório')
   });

   const formik = useFormik({
      initialValues: {
         aluno: '',
         turma: '',
         retirada: '',
         devolucao: ''
      },
      validationSchema: validationSchema,
      onSubmit: () => {
         salvar();
      }
   });

   function voltar() {
      if (setEmprestarAtivado && setModalLivroAtivado) {
         setEmprestarAtivado(false);
         setModalLivroAtivado(true);
      }
   }

   function salvar() {
      historicoDeEmprestimos.push({
         studentName: aluno,
         class: turma,
         withdrawalDate: retirada.split("-").reverse().join("/"),
         deliveryDate: devolucao.split("-").reverse().join("/")
      });

      novosStatus.isRented = true;

      axios.put(`http://localhost:3000/books/${index}`, {
         title: livro.title,
         author: livro.author,
         genre: livro.genre,
         status: novosStatus,
         image: livro.image,
         systemEntryDate: livro.systemEntryDate,
         synopsis: livro.synopsis,
         rentHistory: historicoDeEmprestimos
      }).then(resp => {
         alert('Informações salvas com sucesso!');
      }).catch(error => {
         console.log(error);
         alert('Algo deu errado...');
      });
   }

   return (
      <MenuEmprestar onSubmit={formik.handleSubmit}>
         <DivFechar>
            <h1>Informe os dados do aluno antes de continuar</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <EmprestarInputsContainer>
            <TextfieldCadastro
               value={aluno}
               type='text'
               name='aluno'
               label='Nome do aluno'
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{
                  shrink: shrinkAluno,
                  style: shrinkAluno ? undefined : { transform: 'translate(16px, 12px)' }
               }}
               onFocus={() => { setShrinkAluno(true) }}
               onBlur={() => { if (aluno.length === 0) setShrinkAluno(false) }}
               onChange={(aluno) => {
                  formik.handleChange(aluno);
                  setAluno(aluno.target.value);
               }}
               error={formik.touched.aluno && Boolean(formik.errors.aluno)}
               helperText={formik.touched.aluno && formik.errors.aluno}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(9.6rem, 2.8rem)'
                  }
               }}
            />

            <TextfieldCadastro
               value={turma}
               type='text'
               name='turma'
               label='Turma'
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{
                  shrink: shrinkTurma,
                  style: shrinkTurma ? undefined : { transform: 'translate(16px, 12px)' }
               }}
               onFocus={() => { setShrinkTurma(true) }}
               onBlur={() => { if (turma.length === 0) setShrinkTurma(false) }}
               onChange={(turma) => {
                  formik.handleChange(turma);
                  setTurma(turma.target.value);
               }}
               error={formik.touched.turma && Boolean(formik.errors.turma)}
               helperText={formik.touched.turma && formik.errors.turma}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(9.6rem, 2.8rem)'
                  }
               }}
            />

            <TextfieldCadastro
               value={retirada}
               type='date'
               name='retirada'
               label='Data de retirada'
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{ shrink: true }}
               onChange={(retirada) => {
                  formik.handleChange(retirada);
                  setRetirada(retirada.target.value);
               }}
               error={formik.touched.retirada && Boolean(formik.errors.retirada)}
               helperText={formik.touched.retirada && formik.errors.retirada}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(9.6rem, 2.8rem)'
                  }
               }}
            />

            <TextfieldCadastro
               value={devolucao}
               type='date'
               name='devolucao'
               label='Data de devolução'
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{ shrink: true }}
               onChange={(devolucao) => {
                  formik.handleChange(devolucao);
                  setDevolucao(devolucao.target.value);
               }}
               error={formik.touched.devolucao && Boolean(formik.errors.devolucao)}
               helperText={formik.touched.devolucao && formik.errors.devolucao}
               FormHelperTextProps={{
                  style: {
                     position: 'absolute',
                     transform: 'translate(9.6rem, 2.8rem)'
                  }
               }}
            />
         </EmprestarInputsContainer>

         <BotaoEmprestar type='submit'>Emprestar</BotaoEmprestar>
      </MenuEmprestar>
   )
}

export default ModalEmprestar