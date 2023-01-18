import { DivFechar, MenuInativar } from './Modal.styles'
import Fechar from 'assets/Caminho_265.svg'
import { BotaoOpcoesModal } from './ModalLivro.styles'
import { TextfieldCadastro } from 'pages/Cadastro/CadastroForm.styles'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { ModalProps } from 'types'
import { Api } from 'api'

const ModalInativar = ({ livro, setInativarAtivado, setModalLivroAtivado }: ModalProps) => {
   let novoStatus = livro.status;

   function voltar() {
      if (setInativarAtivado && setModalLivroAtivado) {
         setInativarAtivado(false);
         setModalLivroAtivado(true);
      }
   }

   function salvar() {
      novoStatus.isActive = false;
      novoStatus.description = formik.values.motivo;

      Api.patch(`books/${livro.id}`, {
         status: novoStatus
      }).then(resp => {
         alert('Informações salvas com sucesso!');
      }).catch(error => {
         console.log(error);
         alert('Algo deu errado...');
      });
   }

   const validationSchema = yup.object({
      motivo: yup.string()
         .min(10, 'O motivo precisa ter, no mínimo, 10 caracteres')
         .required('Este campo é obrigatório')
   });

   const formik = useFormik({
      initialValues: { motivo: '' },
      validationSchema: validationSchema,
      onSubmit: () => {
         salvar();
         voltar();
      }
   });

   return (
      <MenuInativar onSubmit={formik.handleSubmit}>
         <DivFechar>
            <h1>Inativar livro</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <TextfieldCadastro
            type='text'
            name='motivo'
            label='Motivo'
            value={formik.values.motivo}
            onChange={formik.handleChange}
            multiline
            rows={3}
            inputProps={{
               style: {
                  height: "100%",
                  border: 'none',
                  padding: 0
               }
            }}
            FormHelperTextProps={{
               style: {
                  position: 'absolute',
                  transform: 'translate(-0.75rem, 6rem)'
               }
            }}
            error={formik.touched.motivo && Boolean(formik.errors.motivo)}
            helperText={formik.touched.motivo && formik.errors.motivo}
         />

         <BotaoOpcoesModal
            type='submit'
            id='inativar'
            sx={{
               border: '0.063rem solid #ED5E5E',
               color: '#ED5E5E',
               '&:hover': {
                  backgroundColor: '#ffeeee'
               }
            }}>Inativar</BotaoOpcoesModal>
      </MenuInativar>
   )
}

export default ModalInativar