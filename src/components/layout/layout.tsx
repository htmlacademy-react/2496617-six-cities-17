import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import classNames from 'classnames';

// %------------ components ------------% //
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

// ^======================== Layout ========================^ //

export default function Layout(): JSX.Element {

  const path = useLocation().pathname as AppRoute;
  const isGrayPage = path === AppRoute.Main || path === AppRoute.Login;
  const isFavoritesPage = path === AppRoute.Favorites;

  return (
    <div
      className={classNames(
        'page',
        { 'page--gray': isGrayPage }
      )}
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

      {
        isFavoritesPage &&
        <footer className='footer container'>
          <a className='footer__logo-link' href='main.html'>
            <img
              className='footer__logo'
              src='img/logo.svg'
              alt='6 cities logo'
              width={64}
              height={33}
            />
          </a>
        </footer>
      }
    </div>
  );
}
