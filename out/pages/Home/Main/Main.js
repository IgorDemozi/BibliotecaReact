import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from './Card';
import ImgCadastro from '../../../assets/add_circle_FILL0_wght400_GRAD0_opsz48.svg';
import ImgBiblioteca from '../../../assets/import_contacts_FILL0_wght400_GRAD0_opsz48 (1).svg';
import ImgEmprestimos from '../../../assets/pending_actions_FILL0_wght400_GRAD0_opsz48.svg';
import { CardsDiv, ContainerMain } from './Main.styles';
const Main = () => {
    return (_jsx(ContainerMain, { children: _jsxs(CardsDiv, { children: [_jsx(Card, { txt: 'Cadastrar novo Livro', rota: '/cadastro', alt: 'cadastro', imagem: ImgCadastro }), _jsx(Card, { txt: 'Biblioteca', rota: '/biblioteca', alt: 'biblioteca', imagem: ImgBiblioteca }), _jsx(Card, { txt: 'Hist\u00F3rico de Empr\u00E9stimos', rota: '/emprestimos', alt: 'emprestimos', imagem: ImgEmprestimos })] }) }));
};
export default Main;
