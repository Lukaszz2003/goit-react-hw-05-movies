import ListSkeleton from 'components/List/ListSkeleton';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className="linkHome">
            HOME
          </NavLink>
          <NavLink to="/movies" className="linkMovies">
            MOVIES
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<ListSkeleton />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
