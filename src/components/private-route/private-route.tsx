import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

// ^======================== PrivateRoute ========================^ //

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};
export default function PrivateRoute(privateRouteProps: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = privateRouteProps;

  return authorizationStatus === AuthorizationStatus.NoAuth
    ? (<Navigate to={AppRoute.Login} />)
    : (children);
}
