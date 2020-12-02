import { ComponentType, FC } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isSigned = Boolean(user);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === isSigned) {
          return <Component />;
        }

        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
