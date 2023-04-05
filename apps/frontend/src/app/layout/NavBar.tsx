import { NavBarContainer } from './styles/layout.styles';
import Logo from '/src/assets/img/logo.svg';

const NavBar = () => {
  return (
    <NavBarContainer>
      <img src={Logo} alt="Ucademy" />
    </NavBarContainer>
  );
};

export default NavBar;
