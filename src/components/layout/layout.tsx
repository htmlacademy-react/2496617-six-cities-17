import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import classNames from 'classnames';

// %------------ components ------------% //
import Header from '../header/header';

// ^======================== Layout ========================^ //

export default function Layout(): JSX.Element {

  const path = useLocation().pathname as AppRoute;
  const isMainPage = path === AppRoute.Main;
  const isLoginPage = path === AppRoute.Login;
  const isFavoritesPage = path === AppRoute.Favorites;

  return (
    <div
      className={classNames(
        'page',
        { 'page--gray': isMainPage || isLoginPage },
        { 'page--main': isMainPage }
      )}
    >

      <Header />

      <Outlet />

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
