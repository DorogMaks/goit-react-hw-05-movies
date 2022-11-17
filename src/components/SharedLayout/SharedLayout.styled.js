import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: #fff;
  border-bottom: 1px solid rgb(204, 204, 204);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: color 250ms ease 0s;
  &:hover {
    color: rgb(110, 110, 110);
  }
`;

export const Logo = styled.h1`
  font-style: italic;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  padding: 16px 0px;
  font-weight: 600;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
  transition: color 250ms ease 0s;

  :not(:last-child) {
    margin-right: 16px;
  }

  &.active {
    color: rgb(34, 139, 34);
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: rgb(110, 110, 110);
  }
`;
