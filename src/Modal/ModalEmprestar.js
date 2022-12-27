import React, { useState } from 'react'
import { EmprestarInputsContainer, MenuEmprestar } from './ModalEmprestar.styles.js'
import { DivFechar } from './Modal.styles.js'
import { BotaoEmprestar } from './ModalLivro.styles.js'
import { TextfieldCadastro } from '../pages/Cadastro/CadastroForm.styles.js'
import Fechar from '../assets/Caminho_265.svg'
import dados from '../data.json'

const ModalEmprestar = ({ index, setEmprestarAtivado, setModalLivroAtivado }) => {
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [retirada, setRetirada] = useState('');
   const [devolucao, setDevolucao] = useState('');
   const [shrinkAluno, setShrinkAluno] = useState(false);
   const [shrinkTurma, setShrinkTurma] = useState(false);

   function voltar() {
      setEmprestarAtivado(false);
      setModalLivroAtivado(true);
   }

   function salvar(event) {
      event.preventDefault();

      dados.data.books[index].rentHistory.push({
         studentName: aluno,
         class: turma,
         withdrawalDate: retirada.split("-").reverse().join("/"),
         deliveryDate: devolucao.split("-").reverse().join("/")
      });

      dados.data.books[index].status.isRented = true;

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
      <MenuEmprestar onSubmit={salvar}>
         <DivFechar>
            <h1>Informe os dados do aluno antes de continuar</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFechar>

         <EmprestarInputsContainer>
            <TextfieldCadastro
               value={aluno}
               onChange={(aluno) => setAluno(aluno.target.value)}
               type='text'
               label='Nome do aluno'
               required
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
            />

            <TextfieldCadastro
               value={turma}
               onChange={(turma) => setTurma(turma.target.value)}
               type='text'
               label='Turma'
               required
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
            />

            <TextfieldCadastro
               value={retirada}
               onChange={(retirada) => setRetirada(retirada.target.value)}
               type='date'
               label='Data de retirada'
               required
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{ shrink: true }}
            />

            <TextfieldCadastro
               value={devolucao}
               onChange={(devolucao) => setDevolucao(devolucao.target.value)}
               type='date'
               label='Data de devolução'
               required
               inputProps={{
                  style: {
                     height: "1rem",
                     width: 285
                  }
               }}
               InputLabelProps={{ shrink: true }}
            />
         </EmprestarInputsContainer>

         <BotaoEmprestar type='submit'>Emprestar</BotaoEmprestar>
      </MenuEmprestar>
   )
}

export default ModalEmprestar