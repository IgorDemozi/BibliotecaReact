import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Seta from '../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';

const LinkParaHome = styled(Link)`
   text-decoration: none;
   color: #6a7681;

   img {
      transform: translate(-2px, 2px);
   }
`;
const Container = styled.div`
   align-self: flex-start;
   padding: 1rem 0 0 1rem;
`;

const VoltarParaHome = ({ pagina }: { pagina: string }) => {
   return (
      <Container>
         <LinkParaHome data-testid={'VoltarParaHome'} to="/home">
            <img src={Seta} alt="voltar para a tela principal" /> Home
         </LinkParaHome>{' '}
         / <b>{pagina}</b>
      </Container>
   );
};

export default VoltarParaHome;
