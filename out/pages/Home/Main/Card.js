import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardLink } from './Card.styles';
const Card = ({ txt, rota, alt, imagem }) => {
    return (_jsx(CardLink, { to: rota, children: _jsxs(CardMUI, { sx: {
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#e6e6e6',
                '&:hover': {
                    backgroundColor: "#FFC501"
                }
            }, children: [_jsx(CardContent, { component: 'div', sx: {
                        height: '7.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }, children: _jsx(CardMedia, { component: 'img', sx: { width: '2.875rem' }, image: imagem, alt: alt }) }), _jsx(CardContent, { component: 'div', id: 'div-do-paragrafo', sx: {
                        backgroundColor: 'white',
                        width: 240
                    }, children: _jsx("p", { children: txt }) })] }) }));
};
export default Card;
