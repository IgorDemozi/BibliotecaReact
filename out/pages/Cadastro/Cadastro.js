import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Header/Header';
import CadastroForm from './CadastroForm';
import { MainContainer } from '../pages.styles';
const Cadastro = () => {
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsx(CadastroForm, {})] }));
};
export default Cadastro;
