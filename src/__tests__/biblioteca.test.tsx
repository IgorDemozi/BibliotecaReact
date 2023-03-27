import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

import Biblioteca from '../pages/Biblioteca/Biblioteca';

const renderBiblioteca = () => {
   render(<Biblioteca />, { wrapper: BrowserRouter });
};

describe('Biblioteca', () => {
   test('renderizar biblioteca', async () => {
      renderBiblioteca();
      expect(screen.getByTestId('BibliotecaForm')).toBeInTheDocument();
   }, 6000);

   test('renderizar biblioteca', async () => {
      renderBiblioteca();
      expect(screen.getByTestId('BibliotecaInput')).toBeInTheDocument();
   }, 6000);

   test('botao de voltar deve navegar para pagina home', async () => {
      const history = createMemoryHistory();

      render(
         <Router location={history.location} navigator={history}>
            <Biblioteca />
         </Router>
      );

      await fireEvent.click(screen.getByTestId('VoltarParaHome'));
      expect(history.location.pathname).toBe('/home');
   }, 6000);
});
