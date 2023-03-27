import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from 'react-router-dom';
import { vi } from 'vitest';

import Login from '../pages/Login/Login';

const handleSubmitTest = vi.fn();
const renderLogin = () => {
   render(<Login handleSubmitTest={handleSubmitTest} />, { wrapper: BrowserRouter });
};

describe('Login', () => {
   test('should render Login component', async () => {
      renderLogin();
      expect(screen.getByRole('form')).toBeInTheDocument();
   }, 6000);

   test('should render an input of email type', async () => {
      renderLogin();
      expect(screen.getByTestId('inputEmail')).toHaveProperty('type', 'email');
   }, 6000);

   test('should render an input of password type', async () => {
      renderLogin();
      expect(screen.getByLabelText('Senha')).toHaveProperty('type', 'password');
   }, 6000);

   test('should render the submit button', async () => {
      renderLogin();
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
   }, 6000);

   test('should submit by the click of the button', async () => {
      renderLogin();
      const button = screen.getByRole('button');
      await fireEvent.click(button);
      expect(handleSubmitTest).toHaveBeenCalledTimes(1);

      screen.debug(button);
   }, 6000);

   test('should submit', async () => {
      renderLogin();
      const form = screen.getByRole('form');
      await fireEvent.submit(form);
      expect(handleSubmitTest).toHaveBeenCalledTimes(2);
   }, 6000);

   test("should call props.handleSubmitTest() with the user's input", async () => {
      renderLogin();

      const inputText = 'texto de teste;';
      const form = screen.getByRole('form');
      const input = screen.getByRole('textbox');

      await userEvent.type(input, inputText);
      await fireEvent.submit(form);

      expect(handleSubmitTest).toHaveBeenCalledWith(inputText);
   }, 6000);

   test.only('logar e navegar pra tela inicial', async () => {
      const history = createMemoryHistory();

      render(
         <Router location={history.location} navigator={history}>
            <Login handleSubmitTest={handleSubmitTest} />
         </Router>
      );

      const email = 'admin@admin.com.br';
      const senha = 'admin123';
      const form = screen.getByRole('form');
      const inputEmail = screen.getByLabelText('Email');
      const inputSenha = screen.getByLabelText('Senha');

      await userEvent.type(inputEmail, email);
      await userEvent.type(inputSenha, senha);
      await fireEvent.submit(form);

      expect(history.location.pathname).toBe('/home');
   }, 6000);
});
