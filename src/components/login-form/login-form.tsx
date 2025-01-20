import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { getLoginStatus } from '../../store/auth-process/auth-process.selectors';

// ^======================== LoginForm ========================^ //

const loginFormInitialState = {
  email: '',
  password: '',
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);

  const [loginFormState, setLoginFormState] = useState(loginFormInitialState);

  const onEmailInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLoginFormState((prevState) => ({
      ...prevState,
      email: evt.target.value,
    }));
  };

  const onPasswordInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLoginFormState((prevState) => ({
      ...prevState,
      password: evt.target.value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({
      email: loginFormState.email,
      password: loginFormState.password,
    }));
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const submitCondition = loginFormState.email !== ''
    && loginFormState.password !== ''
    && passwordRegex.test(loginFormState.password);

  return (
    <form className='login__form form' onSubmit={handleSubmit}>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>E-mail</label>
        <input
          className='login__input form__input'
          type='email'
          name='email'
          placeholder='Email'
          required
          value={loginFormState.email}
          onChange={onEmailInputChange}
          data-testid='login-element'
        />
      </div>
      <div className='login__input-wrapper form__input-wrapper'>
        <label className='visually-hidden'>Password</label>
        <input
          className='login__input form__input'
          type='password'
          name='password'
          placeholder='Password'
          required
          value={loginFormState.password}
          onChange={onPasswordInputChange}
          data-testid='password-element'
        />
      </div>
      <button
        className='login__submit form__submit button'
        type='submit'
        disabled={(loginStatus === LoginStatus.Processing) || !submitCondition}
      >
        {loginStatus === LoginStatus.Processing ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
export default LoginForm;
