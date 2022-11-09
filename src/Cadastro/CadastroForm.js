import React from 'react'
import { ContainerGeral, VoltarPraHome } from '../styles'
import { Link } from 'react-router-dom'
import { ReactComponent as Seta } from '../imagens/chevron_left_FILL0_wght400_GRAD0_opsz48.svg'
import Input from '../Componentes/Input'
import Button from '../Componentes/Button'
import styles from './CadastroForm.module.css'
import dados from '../data.json'
import Select from '../Componentes/Select'

const CadastroForm = () => {
   const { books } = dados.data;
   var generos = [];

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
            <Link to='/home' className={styles.cadastroLink}>
               <Seta className={styles.seta} /> Home
            </Link>
            / <b>Cadastrar novo livro</b>
         </VoltarPraHome>

         <div>
            <Input type='file' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Select generos={generos} />
            <Input type='date' />
            <Button>cancelar</Button>
            <Button>salvar</Button>
         </div>
      </ContainerGeral>
   )
}

export default CadastroForm