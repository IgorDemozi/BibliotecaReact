import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EmprestadoInfoSection } from './Modal.styles';
const EmprestadoInfo = ({ livro }) => {
    const emprestimo = livro.rentHistory[Object.keys(livro.rentHistory).length - 1];
    return (_jsxs(EmprestadoInfoSection, { children: [_jsx("h1", { children: "Dados do aluno" }), _jsxs("div", { id: 'container', children: [_jsxs("div", { children: [_jsx("h2", { children: "Nome do aluno" }), _jsx("p", { children: emprestimo.studentName })] }), _jsxs("div", { children: [_jsx("h2", { children: "Turma" }), _jsx("p", { children: emprestimo.class })] }), _jsxs("div", { children: [_jsx("h2", { children: "Data da retirada" }), _jsx("p", { children: emprestimo.withdrawalDate })] }), _jsxs("div", { children: [_jsx("h2", { children: "Data de devolu\u00E7\u00E3o" }), _jsx("p", { children: emprestimo.deliveryDate })] })] })] }));
};
export default EmprestadoInfo;
