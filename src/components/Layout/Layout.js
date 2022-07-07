import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <Suspense fallback="">
            <Outlet />
          </Suspense>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
