import { Outlet } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyles';
import {
  HeaderStyled,
  Logo,
  LogoLink,
  NavigationContainer,
  NavigationLink,
  NavigationStyled,
} from './SharedLayout.styled';
import { Container } from 'components/Shared/Container.styled';

export const SharedLayout = () => (
  <>
    <GlobalStyles />
    <HeaderStyled>
      <Container>
        <NavigationStyled>
          <LogoLink to="/">
            <Logo>The Movies</Logo>
          </LogoLink>
          <NavigationContainer>
            <NavigationLink to="/" end>
              Home
            </NavigationLink>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </NavigationContainer>
        </NavigationStyled>
      </Container>
    </HeaderStyled>
    <main>
      <Outlet />
    </main>
  </>
);
