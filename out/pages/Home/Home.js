import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../../Componentes/Header/Header';
import Main from './Main/Main';
import { MainContainer } from '../pages.styles';
const Home = () => {
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsx(Main, {})] }));
};
export default Home;
