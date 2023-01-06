import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { ReactComponent as Avatar } from 'assets/person_black_24dp (1).svg';
import { ReactComponent as Seta } from 'assets/Arrow.svg';
import { UserMenuDiv, UserMenuSair, UserMenuSection } from 'Header/UserMenu.styles';
import { useNavigate } from 'react-router-dom';
import 'App.css';
const UserMenu = () => {
    const [usuario, setUsuario] = useState('');
    const [ativado, setAtivado] = useState(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (localStorage.getItem("atual-usuario") === "null") {
            navigate('/');
        }
        else {
            setUsuario(localStorage.getItem("atual-usuario"));
        }
    }, [navigate]);
    function logout() {
        localStorage.setItem('atual-usuario', 'null');
        setAtivado(false);
        navigate('/');
    }
    function exibir() {
        if (ativado) {
            setAtivado(false);
        }
        else {
            setAtivado(true);
        }
    }
    return (_jsxs(UserMenuSection, { children: [ativado && _jsx(UserMenuSair, { onClick: logout, children: _jsx("p", { children: "Sair" }) }), _jsxs(UserMenuDiv, { onClick: exibir, children: [_jsx(Avatar, {}), _jsx("p", { children: usuario }), _jsx(Seta, {})] })] }));
};
export default UserMenu;
