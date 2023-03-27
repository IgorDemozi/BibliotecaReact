import UserMenu from './UserMenu';
import Logo from '../../assets/Logo.svg';
import styled from 'styled-components';

const Cabecalho = styled.header`
   background-color: white;
   height: 96px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 2rem;
`;

const Header = () => {
   return (
      <Cabecalho data-testid={'Header'}>
         <img src={Logo} alt="Logotipo da biblioteca" />
         <UserMenu />
      </Cabecalho>
   );
};

export default Header;
