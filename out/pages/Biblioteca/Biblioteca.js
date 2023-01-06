import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Header/Header';
import { MainContainer } from '../pages.styles';
import BibliotecaForm from './BibliotecaForm';
const Biblioteca = () => {
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsx(BibliotecaForm, {})] }));
};
export default Biblioteca;
