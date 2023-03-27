import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';

import Home from '../pages/Home/Home';
import UserMenu from '../Componentes/Header/UserMenu';

const renderHome = () => {
   render(<Home />, { wrapper: BrowserRouter });
};

describe('Home', () => {
   test('should render Home page', async () => {
      renderHome();
      expect(screen.getByTestId('Header')).toBeInTheDocument();
      expect(screen.getByTestId('Main')).toBeInTheDocument();
   }, 10000);

   test('renderizar links na home', () => {
      renderHome();
      expect(screen.getByTestId('linkCadastro')).toBeInTheDocument();
      expect(screen.getByTestId('linkBiblioteca')).toBeInTheDocument();
      expect(screen.getByTestId('linkHistorico')).toBeInTheDocument();
   }, 10000);

   test('botao de logout deve navegar para pagina de login', async () => {
      const history = createMemoryHistory();

      render(
         <Router location={history.location} navigator={history}>
            <UserMenu />
         </Router>
      );

      await fireEvent.click(screen.getByTestId('menuDiv'));
      await fireEvent.click(screen.getByTestId('botaoLogout'));
      expect(history.location.pathname).toBe('/');
   }, 10000);

   test('navegar para as outras paginas', async () => {
      const history = createMemoryHistory();

      render(
         <Router location={history.location} navigator={history}>
            <Home />
         </Router>
      );

      await fireEvent.click(screen.getByTestId('linkCadastro'));
      expect(history.location.pathname).toBe('/home/cadastro');

      await fireEvent.click(screen.getByTestId('linkBiblioteca'));
      expect(history.location.pathname).toBe('/home/biblioteca');

      await fireEvent.click(screen.getByTestId('linkHistorico'));
      expect(history.location.pathname).toBe('/home/emprestimos');
   });
});
