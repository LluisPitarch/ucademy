import { ReactElement } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

import { Body } from './styles/layout.styles';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NavBar />
      <Body>
        <SideBar />
        {children}
      </Body>
    </>
  );
};

export default Layout;
