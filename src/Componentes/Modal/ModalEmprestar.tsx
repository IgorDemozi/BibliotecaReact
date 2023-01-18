import React, { ChangeEvent, useRef, useState } from 'react'
import { EmprestarInputsContainer, MenuEmprestar } from './ModalEmprestar.styles'
import { DivFechar } from './Modal.styles'
import { BotaoEmprestar } from './ModalLivro.styles'
import { TextfieldCadastro } from 'pages/Cadastro/CadastroForm.styles'
import Fechar from 'assets/Caminho_265.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ModalProps, RentHistory, Status } from 'types'
import { Api } from 'api'
import { isBefore } from 'date-fns'

const ModalEmprestar = ({ livro, setEmprestarAtivado, setModalLivroAtivado }: ModalProps) => {
   const [shrinkAluno, setShrinkAluno] = useState(false);
   const [shrinkTurma, setShrinkTurma] = useState(false);
   const diaHoje = useRef(new Date());

   React.useEffect(() => {
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
         voltar();
      }
   });

   function voltar() {
      if (setEmprestarAtivado && setModalLivroAtivado) {
         setEmprestarAtivado(false);
         setModalLivroAtivado(true);
      }
   }

   function salvar() {
      let historicoDeEmprestimos: RentHistory[] = livro.rentHistory;

      historicoDeEmprestimos.push({
         studentName: formik.values.aluno,
         class: formik.values.turma,
         withdrawalDate: formik.values.retirada.split("-").reverse().join("/"),
         deliveryDate: formik.values.devolucao.split("-").reverse().join("/")
      });

      let novoStatus: Status = livro.status;
      novoStatus.isRented = true;

      Api.patch(`books/${livro.id}`, {
         status: novoStatus,
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
                  style: shrinkAluno ? undefined : { transform: 'translate(1rem, 0.75rem)' }
               }}
               onFocus={() => { setShrinkAluno(true) }}
               onBlur={() => { if (formik.values.aluno.length === 0) setShrinkAluno(false) }}
               value={formik.values.aluno}
               onChange={formik.handleChange}
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
                  style: shrinkTurma ? undefined : { transform: 'translate(1rem, 0.75rem)' }
               }}
               onFocus={() => { setShrinkTurma(true) }}
               onBlur={() => { if (formik.values.turma.length === 0) setShrinkTurma(false) }}
               value={formik.values.turma}
               onChange={formik.handleChange}
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
               value={formik.values.retirada}
               onChange={inputDateHandleChange}
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
               value={formik.values.devolucao}
               onChange={inputDateHandleChange}
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