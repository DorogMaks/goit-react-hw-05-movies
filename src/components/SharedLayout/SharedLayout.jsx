import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyles } from 'components/GlobalStyles';

export const SharedLayout = () => (
  <>
    <GlobalStyles />
    <header>
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
