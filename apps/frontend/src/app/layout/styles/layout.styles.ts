import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  padding: 33px;
  position: sticky;
  background: #262d34;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 104px);
`;

export const SideBarContainer = styled.aside`
  position: sticky;
  padding: 32px 20px;
  width: 225px;
`;

export const SidebarList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 23px;
`;

export const DashboardLink = styled.li`
  list-style: none;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 16px;
  font-family: 'Poppins';
  font-size: '15px';
`;
