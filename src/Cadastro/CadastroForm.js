import dados from '../data.json'
import React, { useState } from 'react'
import { ReactComponent as Adicionar } from '../imagens/Caminho 261.svg'
import { CadastroContainer, ContainerGeral, Sinopse, VoltarPraHome, LinkParaHome, InputCadastro, SelectCadastro, BotaoCancelar, BotaoSalvar, SetaEsquerda, Imagem } from '../styles'

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

   function setValores(event) {

      switch (event.target.placeholder) {
         case 'Título':
            setTitulo(event.target.value)
            break;
         case 'Autor':
            setAutor(event.target.value)
            break;
         case 'Sinopse':
            setSinopse(event.target.value)
            break;
      }

      if (event.target.type === 'date') {
         setData(event.target.value);
      }
   }

   function setValGenero(event) {
      setGenero(event.target.value);
   }

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

   function salvar() {

      if (titulo === '' || sinopse === '' || autor === '' || genero === '' || data === '') {
         alert('Preencha todos os campos');
         return;
      }

      var dataFormatada = data.split("-").reverse().join("/");

      dados.data.books.push({
         title: titulo,
         author: autor,
         genre: genero,
         status: { isActive: true, description: '' },
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

         <CadastroContainer>
            <form>
               <label>
                  {imgNoInput ? <Imagem src={base64} alt='' /> :
                     <>
                        <Adicionar />
                        <p>Capa</p>
                        <InputCadastro type='file' onChange={pegarBase64} />
                     </>
                  }
               </label>
            </form>

            <div>
               <div>
                  <InputCadastro type='text' placeholder='Título' value={titulo} onChange={setValores} />
                  <Sinopse placeholder='Sinopse' value={sinopse} onChange={setValores} />
               </div>

               <div>
                  <InputCadastro type='text' placeholder='Autor' value={autor} onChange={setValores} />
                  <SelectCadastro className='select' genero={genero} generos={generos} onChange={setValGenero} />
                  <InputCadastro type='date' value={data} onChange={setValores} />
               </div>
            </div>

            <div>
               <BotaoSalvar onClick={salvar}>salvar</BotaoSalvar>
               <BotaoCancelar onClick={zerarValores}>cancelar</BotaoCancelar>
            </div>
         </CadastroContainer>
      </ContainerGeral>
   )
}

export default CadastroForm