import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Header/Header';
import { MainContainer } from '../pages.styles';
import EmprestimosForm from './EmprestimosForm';
const Emprestimos = () => {
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsx(EmprestimosForm, {})] }));
};
export default Emprestimos;
