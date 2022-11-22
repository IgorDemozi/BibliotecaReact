import React, { useState } from 'react'
import { BotaoInativar, DivFechar, MenuInativar } from '../styles'
import Fechar from '../imagens/Caminho_265.svg'
import dados from '../data.json'

const ModalInativar = ({ index, setInativarAtivado, setModalLivroAtivado }) => {

   const [motivo, setMotivo] = useState('');

   function voltar() {
      setInativarAtivado(false);
      setModalLivroAtivado(true);
   }

   function setValor(event) {
      setMotivo(event.target.value);
   }

   function salvar() {

      if (motivo === '') {
         alert('Preencha o campo');
         return;
      }

      dados.data.books[index].status.isActive = false;
      dados.data.books[index].status.description = motivo;

      var database = JSON.stringify(dados, null, '\t');

      const salvar = async () => {
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

         voltar();
      }
      salvar();
   }

   return (
      <MenuInativar>
         <DivFechar>
            <h1>Inativar livro</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <textarea value={motivo} onChange={setValor} />
         <BotaoInativar onClick={salvar}>Inativar</BotaoInativar>
      </MenuInativar>
   )
}

export default ModalInativar