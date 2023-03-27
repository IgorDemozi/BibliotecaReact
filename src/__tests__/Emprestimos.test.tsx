import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Emprestimos from '../pages/Emprestimos/Emprestimos';
import EmprestimosForm from '../pages/Emprestimos/EmprestimosForm';

const renderEmprestimos = () => {
   render(<Emprestimos />, { wrapper: BrowserRouter });
};
const renderEmprestimosForm = () => {
   render(<EmprestimosForm />, { wrapper: BrowserRouter });
};

describe('Emprestimos', () => {
   test('renderizar emprestimos', () => {
      renderEmprestimos();
      expect(screen.getByTestId('emprestimos')).toBeInTheDocument();
   }, 10000);

   test('renderizar inputs na pagina de emprestimos', () => {
      renderEmprestimosForm();
      const [aluno, turma, titulo, retirada, entrega] = screen.getAllByRole('textbox');
      expect(aluno).toBeInTheDocument();
      expect(turma).toBeInTheDocument();
      expect(titulo).toBeInTheDocument();
      expect(retirada).toBeInTheDocument();
      expect(entrega).toBeInTheDocument();
   }, 10000);
});
