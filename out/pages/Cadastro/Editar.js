import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Componentes/Header/Header';
import EditarForm from './EditarForm';
import { MainContainer } from '../pages.styles';
import { useLocation } from 'react-router-dom';
const Editar = () => {
    const state = useLocation().state;
    const livro = state.livro;
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsx(EditarForm, { livro: livro })] }));
};
export default Editar;
