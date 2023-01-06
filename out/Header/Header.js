import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UserMenu from 'Header/UserMenu';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import { Cabecalho } from 'styles';
const Header = () => {
    return (_jsxs(Cabecalho, { children: [_jsx(Logo, { alt: 'Logotipo da biblioteca' }), _jsx(UserMenu, {})] }));
};
export default Header;
