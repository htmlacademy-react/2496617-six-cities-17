import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

// ^======================== PrivateRoute ========================^ //

type PrivateRouteProps = {
  children: JSX.Element;
};
export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children } = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return authorizationStatus === authorizationStatus
    ? (children)
    : (<Navigate to={AppRoute.Login} />);
}
