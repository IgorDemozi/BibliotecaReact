import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from './Card';
import ImgCadastro from 'assets/add_circle_FILL0_wght400_GRAD0_opsz48.svg';
import ImgBiblioteca from 'assets/import_contacts_FILL0_wght400_GRAD0_opsz48 (1).svg';
import ImgEmprestimos from 'assets/pending_actions_FILL0_wght400_GRAD0_opsz48.svg';
import { CardsDiv, ContainerMain } from './Main.styles';
const Main = () => {
    return (_jsx(ContainerMain, { "data-testid": 'Main', children: _jsxs(CardsDiv, { children: [_jsx(Card, { dataTestId: 'linkCadastro', txt: "Cadastrar novo Livro", rota: "/home/cadastro", alt: "cadastro", imagem: ImgCadastro }), _jsx(Card, { dataTestId: 'linkBiblioteca', txt: "Biblioteca", rota: "/home/biblioteca", alt: "biblioteca", imagem: ImgBiblioteca }), _jsx(Card, { dataTestId: 'linkHistorico', txt: "Hist\u00F3rico de Empr\u00E9stimos", rota: "/home/emprestimos", alt: "emprestimos", imagem: ImgEmprestimos })] }) }));
};
export default Main;
