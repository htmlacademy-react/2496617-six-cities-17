import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import { AppRoute, AuthorizationStatus, LOCATIONS } from '../../const';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';
import { changeCity } from '../../store/offers-process/offers-process.slice';
import { getRandomInteger } from '../../utils/utils';

// #======================== LoginPage ========================# //

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  type LocationState = {
    from?: string;
  };
  const location = useLocation();
  const locationState = location.state as LocationState;

  const fromPage = locationState?.from as AppRoute || AppRoute.Main;

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(fromPage));
    }
  }, [authStatus, dispatch, fromPage]);

  const randomCity = LOCATIONS[getRandomInteger(0, LOCATIONS.length - 1)];

  const handleCityLinkClick = () => {
    dispatch(changeCity(randomCity));
  };

  return (
    <main className='page__main page__main--login'>
      <Helmet>
        <title>6 cities - login</title>
      </Helmet>
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title' data-testid='login-title'>Sign in</h1>
          <LoginForm />
        </section>
        <section className='locations locations--login locations--current'>
          <div className='locations__item'>
            <Link
              className='locations__item-link'
              to={AppRoute.Main}
              onClick={handleCityLinkClick}
            >
              <span>{randomCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
