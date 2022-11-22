import dados from '../data.json'
import React, { useState } from 'react'
import { ReactComponent as Adicionar } from '../imagens/Caminho 261.svg'
import { CadastroContainer, ContainerGeral, Sinopse, VoltarPraHome, LinkParaHome, InputCadastro, SelectCadastro, BotaoCancelar, BotaoSalvar, SetaEsquerda, Imagem } from '../styles'
import { useNavigate } from 'react-router-dom'

const EditarForm = ({ livro, index }) => {

   const { books } = dados.data;
   const [base64, setBase64] = useState(livro.image);
   const [titulo, setTitulo] = useState(livro.title);
   const [sinopse, setSinopse] = useState(livro.synopsis);
   const [autor, setAutor] = useState(livro.author);
   const [genero, setGenero] = useState(livro.genre);
   const [data, setData] = useState(livro.systemEntryDate);
   const [imgNoInput, setImgNoInput] = useState(true);
   const navigate = useNavigate();
   var generos = [];

   React.useEffect(() => {
      setData(data.split("/").reverse().join("-")) ;
   }, []);

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

      dados.data.books[index].title = titulo;
      dados.data.books[index].author = autor;
      dados.data.books[index].genre = genero;
      dados.data.books[index].image = base64;
      dados.data.books[index].systemEntryDate = dataFormatada;
      dados.data.books[index].synopsis = sinopse;
               
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

         navigate('/biblioteca');
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
               <LinkParaHome to='/biblioteca'>
                  <SetaEsquerda /> Biblioteca
               </LinkParaHome> / <b>Editar livro</b>
            </p>
         </VoltarPraHome>

         <CadastroContainer>
            <form>
               <label>
                  {imgNoInput ?
                     <>
                        <Imagem src={base64} alt='' />
                     </>
                     :
                     <>
                        <Adicionar />
                        <p>Capa</p>
                     </>
                  }
                  <InputCadastro type='file' onChange={pegarBase64} />
               </label>
            </form>

            <div>
               <div>
                  <InputCadastro type='text' placeholder='Título' value={titulo} onChange={setValores} />
                  <Sinopse placeholder='Sinopse' value={sinopse} onChange={setValores} />
               </div>

               <div>
                  <InputCadastro type='text' placeholder='Autor' value={autor} onChange={setValores} />
                  <SelectCadastro opcaoNeutra='Selecione um gênero' className='select' value={genero} options={generos} onChange={setValGenero} />
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

export default EditarForm