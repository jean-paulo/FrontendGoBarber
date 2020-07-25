import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

// Extende as propriedades que uma rota do React ja tem e adiciona a propriedade isPrivate
interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType; // quando queremos receber um component pelo seu nome sem utilizar as tags
}

// ...rest são todas as propriedades que recebemos no componente
const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // Pega os dados do usuarios autenticado, se nessa variavel tiver alguma coisa quer dizer que o usuario está autenticado
  const { user } = useAuth();

  // a propriedade location garante que não perdemos nosso histórico de rotas
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // Se a rota é privada e o usuario ta logado autoriza, se não redireciona
        // Se a rota não for privada e o usuario não está logado também autoriza
        return isPrivate === !!user ? (
          <Component />
        ) : (
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
