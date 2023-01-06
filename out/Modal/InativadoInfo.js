import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InativadoInfoSection } from './Modal.styles';
const InativadoInfo = ({ livro }) => {
    return (_jsxs(InativadoInfoSection, { children: [_jsx("h1", { children: "Informa\u00E7\u00F5es da inativa\u00E7\u00E3o" }), _jsxs("div", { children: [_jsx("h2", { children: "Motivo" }), _jsx("p", { children: livro.status.description })] })] }));
};
export default InativadoInfo;
