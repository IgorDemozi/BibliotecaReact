import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import { vi } from 'vitest';

import Cadastro from '../pages/Cadastro/Cadastro';
import CadastroForm from '../pages/Cadastro/CadastroForm';

const handleSubmitTest = vi.fn();
const renderCadastro = () => {
   render(<Cadastro />, { wrapper: BrowserRouter });
};
const renderCadastroForm = () => {
   // handleSubmitTest={handleSubmitTest}
   render(<CadastroForm />, { wrapper: BrowserRouter });
};

describe('Cadastro', () => {
   test('botao de voltar deve navegar para pagina home', async () => {
      const history = createMemoryHistory();

      render(
         <Router location={history.location} navigator={history}>
            <Cadastro />
         </Router>
      );

      await fireEvent.click(screen.getByTestId('VoltarParaHome'));
      expect(history.location.pathname).toBe('/home');
   }, 10000);

   test('renderizar os campos', async () => {
      renderCadastro();
      expect(screen.getByTestId('InserirCapa')).toBeInTheDocument();
      expect(screen.getByLabelText('Título')).toBeInTheDocument();
      expect(screen.getByLabelText('Sinopse')).toBeInTheDocument();
      expect(screen.getByLabelText('Autor')).toBeInTheDocument();
      expect(screen.getByLabelText('Gênero')).toBeInTheDocument();
      expect(screen.getByLabelText('Data')).toBeInTheDocument();
   }, 10000);

   test('renderizar os botoes', async () => {
      renderCadastro();
      const buttonS = screen.getByTestId('botaoSalvar');
      const buttonC = screen.getByTestId('botaoCancelar');
      expect(buttonC).toBeInTheDocument();
      expect(buttonS).toBeInTheDocument();
   }, 10000);

   // test.only('should submit by the click of the button', async () => {
   //    renderCadastroForm();
   //    const buttonS = screen.getByTestId('botaoSalvar');
   //    await fireEvent.click(buttonS);
   //    expect(handleSubmitTest).toHaveBeenCalledTimes(1);
   // }, 10000);

   test('should submit', async () => {
      renderCadastroForm();
      const form = screen.getByRole('form');
      await fireEvent.submit(form);
      expect(handleSubmitTest).toHaveBeenCalledTimes(1);
   }, 10000);
});
