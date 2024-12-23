// ^======================== HeaderNav ========================^ //

import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

export default function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.login);

  const getHeaderAuthElement = () => {
    switch (authorizationStatus) {
      case AuthorizationStatus.NoAuth:
        return (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        );
      case AuthorizationStatus.Auth:
        return (
          <>
            <li className='header__nav-item user'>
              <a
                className='header__nav-link header__nav-link--profile'
                href='#'
              >
                <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                <span className='header__user-name user__name'>
                  {login}
                </span>
                <span className='header__favorite-count'>3</span>
              </a>
            </li>
            <li className='header__nav-item'>
              <Link
                className='header__nav-link'
                to={AppRoute.Login}
                onClick={() => {
                  dispatch(logoutAction());
                }}
              >
                <span className='header__signout'>Sign out</span>
              </Link>
            </li>
          </>
        );
    }
  };

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {getHeaderAuthElement()}
      </ul>
    </nav>
  );
}
