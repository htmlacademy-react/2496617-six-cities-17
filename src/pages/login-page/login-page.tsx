import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../components/login-form/login-form';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector, } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { getAuthStatus } from '../../store/auth-process/auth-process.selectors';

// #======================== LoginPage ========================# //

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [authStatus, dispatch]);

  return (
    <main className='page__main page__main--login'>
      <Helmet>
        <title>6 cities - login</title>
      </Helmet>
      <div className='page__login-container container'>
        <section className='login'>
          <h1 className='login__title'>Sign in</h1>
          <LoginForm />
        </section>
        <section className='locations locations--login locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#'>
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
