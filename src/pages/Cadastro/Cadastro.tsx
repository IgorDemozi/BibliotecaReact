import Header from '../../Componentes/Header/Header';
import CadastroForm from './CadastroForm';
import { MainContainer } from '../pages.styles';
// import { vi } from 'vitest';

// const handleSubmitTest = vi.fn();

const Cadastro = () => {
   return (
      <MainContainer>
         <Header />
         {/* handleSubmitTest={handleSubmitTest} */}
         <CadastroForm />
      </MainContainer>
   );
};

export default Cadastro;
