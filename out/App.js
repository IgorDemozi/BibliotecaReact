import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Biblioteca from './pages/Biblioteca/Biblioteca';
import Emprestimos from './pages/Emprestimos/Emprestimos';
import Editar from './pages/Cadastro/Editar';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Login, {}) }), _jsx(Route, { path: '/home', element: _jsx(Home, {}) }), _jsx(Route, { path: '/cadastro', element: _jsx(Cadastro, {}) }), _jsx(Route, { path: '/editar', element: _jsx(Editar, {}) }), _jsx(Route, { path: '/biblioteca', element: _jsx(Biblioteca, {}) }), _jsx(Route, { path: '/emprestimos', element: _jsx(Emprestimos, {}) })] }) }));
}
export default App;
