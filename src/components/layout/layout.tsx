import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';
import { AppRoute } from '../../const';

// ^======================== Layout ========================^ //

export default function Layout(): JSX.Element {

  const path = useLocation().pathname as AppRoute;
  const isGrayPage = path === AppRoute.Main || path === AppRoute.Login;
  const pageClassName = isGrayPage ? 'page page--gray' : 'page';

  return (
    <div
      className={pageClassName}
    >
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo />
            </div>

            <HeaderNav />
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>

      </footer>
    </div>
  );
}
