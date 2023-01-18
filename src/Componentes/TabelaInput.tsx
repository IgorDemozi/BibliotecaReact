import Filtro from 'assets/Caminho_147.svg';
import { InputProps } from 'types';
import Input from './Input';
import styled from 'styled-components';

const BotaoOrdenar = styled.img`
   position: absolute;
   z-index: 100;
   cursor: pointer;
   
`

const DivInputTabela = styled.div`
   #tbl-Inpt{
      border: none;
      border-bottom: 0.125rem solid black;
      width: 75%;
      padding-left: 2rem;
      transform: translateX(-0.2rem);

      :focus {
         outline: none;
      }
   }
`

const TabelaInput = ({ value, onChange, onClick, maxLength }: InputProps) => {
   return (
      <DivInputTabela>
         <BotaoOrdenar src={Filtro} onClick={onClick} />

         <Input
            id='tbl-Inpt'
            type='text'
            value={value}
            onChange={onChange}
            maxLength={maxLength}
         />
      </DivInputTabela>
   )
}

export default TabelaInput