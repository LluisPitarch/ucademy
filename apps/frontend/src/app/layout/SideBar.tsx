import { Link, Router } from 'react-router-dom';
import { SideBarContainer, DashboardLink } from './styles/layout.styles';
import Dashboard from '/src/assets/img/dashboard.svg';

const LINKS = [{ label: 'Dashboard', path: '/', icon: Dashboard }];

const SideBar = () => {
  return (
    <SideBarContainer>
      {LINKS.map(({ path, label, icon }) => (
        <Link to={path} key={label}>
          <DashboardLink>
            <img src={icon} alt={label} />
            {label}
          </DashboardLink>
        </Link>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
