import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/selectors';

// ^======================== PrivateRoute ========================^ //

type PrivateRouteProps = {
  children: JSX.Element;
};
export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? (children)
    : (<Navigate to={AppRoute.Login} />);
}
