import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

// ^======================== Header ========================^ //

function Header(): JSX.Element {

  const path = useLocation().pathname as AppRoute;

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          {path !== AppRoute.Login && <HeaderNav />}
        </div>
      </div>
    </header>
  );
}
export default memo(Header);
