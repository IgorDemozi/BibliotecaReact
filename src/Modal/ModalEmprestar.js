import React, { useState } from 'react'
import { BotaoEmprestar, DivFecharEmprestimo, EmprestarInputsContainer, InputCadastro, MenuEmprestar } from '../styles'
import Fechar from '../imagens/Caminho_265.svg'
import dados from '../data.json'

const ModalEmprestar = ({ index, setEmprestarAtivado, setModalLivroAtivado }) => {
   const [aluno, setAluno] = useState('');
   const [turma, setTurma] = useState('');
   const [retirada, setRetirada] = useState('');
   const [devolucao, setDevolucao] = useState('');

   const [type1, setType1] = useState('text');
   const [type2, setType2] = useState('text');

   function setValores(event) {
      if (event.target.placeholder === 'Nome do aluno') {
         setAluno(event.target.value);
      }
      if (event.target.placeholder === 'Turma') {
         setTurma(event.target.value);
      }
      if (event.target.placeholder === 'Data de retirada') {
         setRetirada(event.target.value.split("-").reverse().join("/"));
         event.target.blur();
      }
      if (event.target.placeholder === 'Data de devolução') {
         setDevolucao(event.target.value.split("-").reverse().join("/"));
         event.target.blur();
      }
   }

   function voltar() {
      setModalLivroAtivado(true);
      setEmprestarAtivado(false);
   }

   function salvar() {

      if (aluno === '' || turma === '' || retirada === '' || devolucao === '') {
         alert('Preencha todos os campos');
         return;
      }

      dados.data.books[index].rentHistory.push({
         studentName: aluno,
         class: turma,
         withdrawalDate: retirada,
         deliveryDate: devolucao
      });

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
      }
      salvar();
      voltar();
   }

   return (
      <MenuEmprestar>
         <DivFecharEmprestimo>
            <h1>Informe os dados do aluno antes de continuar</h1>
            <img onClick={voltar} src={Fechar} alt='Fechar' />
         </DivFecharEmprestimo>

         <EmprestarInputsContainer>
            <InputCadastro
               value={aluno}
               onChange={setValores}
               type='text' placeholder='Nome do aluno'
            />

            <InputCadastro
               value={turma}
               onChange={setValores}
               type='text'
               placeholder='Turma'
            />

            <InputCadastro
               value={retirada}
               type={type1}
               onChange={setValores}
               placeholder='Data de retirada'
               onFocus={() => setType1('date')}
               onBlur={() => setType1('text')}
            />

            <InputCadastro
               value={devolucao}
               type={type2}
               onChange={setValores}
               placeholder='Data de devolução'
               onFocus={() => setType2('date')}
               onBlur={() => setType2('text')}
            />
         </EmprestarInputsContainer>

         <BotaoEmprestar onClick={salvar}>Emprestar</BotaoEmprestar>
      </MenuEmprestar>
   )
}

export default ModalEmprestar