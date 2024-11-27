// ^======================== Layout ========================^ //

import { Outlet } from 'react-router-dom';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';


export default function Layout(): JSX.Element {
  return (
    <>
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
    </>
  );
}
