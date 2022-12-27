import React, { useState } from 'react'
import { DivFechar, MenuInativar } from './Modal.styles'
import Fechar from '../assets/Caminho_265.svg'
import dados from '../data.json'
import { BotaoOpcoesModal } from './ModalLivro.styles'
import { TextfieldCadastro } from '../pages/Cadastro/CadastroForm.styles'

const ModalInativar = ({ index, setInativarAtivado, setModalLivroAtivado }) => {
   const [motivo, setMotivo] = useState('');

   function voltar() {
      setInativarAtivado(false);
      setModalLivroAtivado(true);
   }

   function salvar() {
      dados.data.books[index].status.isActive = false;
      dados.data.books[index].status.description = motivo;

      var database = JSON.stringify(dados, null, '\t');

      const salvarDados = async () => {
         const criar = await window.showSaveFilePicker({
            suggestedName: 'data.json',

            types: [{
               description: 'JSON',
               accept: { 'application/json': ['.json'] }
            }]
         });
         const escrever = await criar.createWritable();
         await escrever.write(database);
         await escrever.close();

      }
      salvarDados();
      voltar();
   }

   return (
      <MenuInativar onSubmit={salvar}>
         <DivFechar>
            <h1>Inativar livro</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <TextfieldCadastro
            type='text'
            label='Motivo'
            value={motivo}
            onChange={(motivo) => setMotivo(motivo.target.value)}
            multiline
            rows={2}
            inputProps={{
               style: {
                  height: "100%",
                  border: 'none'
               }
            }}
            required
         />

         <BotaoOpcoesModal
            type='submit'
            sx={{
               border: '1px solid #ED5E5E',
               color: '#ED5E5E',
               '&:hover': {
                  backgroundColor: '#ffeeee'
               }
            }}>Inativar</BotaoOpcoesModal>
      </MenuInativar>
   )
}

export default ModalInativar