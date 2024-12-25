import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

// ^======================== PrivateRoute ========================^ //

type PrivateRouteProps = {
  children: JSX.Element;
};
export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? (children)
    : (<Navigate to={AppRoute.Login} />);
}
