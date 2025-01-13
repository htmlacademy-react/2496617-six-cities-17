// ^======================== HeaderNav ========================^ //

import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { getAuthStatus, getAvatarUrl, getLogin } from '../../store/auth-process/auth-process.selectors';
import { getFavoriteOffers } from '../../store/favorite-offers-process/favorite-offers-process.selectors';

export default function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthStatus);
  const login = useAppSelector(getLogin);
  const avatarUrl = useAppSelector(getAvatarUrl);

  const favoritesAmount = useAppSelector(getFavoriteOffers).length;

  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        {authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className='header__nav-item user'>
              <Link
                className='header__nav-link header__nav-link--profile'
                to={AppRoute.Favorites}
              >
                <div
                  className='header__avatar-wrapper user__avatar-wrapper'
                  style={{ backgroundImage: avatarUrl }}
                >
                </div>
                <span className='header__user-name user__name'>
                  {login}
                </span>
                <span className='header__favorite-count'>{favoritesAmount}</span>
              </Link>
            </li>
            <li className='header__nav-item'>
              <a
                className='header__nav-link'
                onClick={() => {
                  dispatch(logoutAction());
                }}
              >
                <span className='header__signout'>Sign out</span>
              </a>
            </li>
          </> :
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}
