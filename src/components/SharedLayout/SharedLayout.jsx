import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyles';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Shared/Container.styled';
import {
  HeaderStyled,
  Logo,
  LogoLink,
  NavigationContainer,
  NavigationLink,
  NavigationStyled,
} from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <GlobalStyles />
    <HeaderStyled>
      <Container>
        <NavigationStyled>
          <LogoLink to="/">
            <Logo>SearchingMovies</Logo>
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
