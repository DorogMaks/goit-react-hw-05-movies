import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid rgb(204, 204, 204);
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;
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
  margin: 0;
  padding: 0;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  padding: 16px 0px;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  transition: color 250ms ease 0s;
  &:not(:last-child) {
    margin-right: 16px;
  }
  &.active {
    color: rgb(34, 139, 34);
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: rgb(110, 110, 110);
  }
`;
