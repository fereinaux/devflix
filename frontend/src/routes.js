import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { Main } from 'components/Main';
import { Login } from 'components/Login';
import { DevContainer } from 'components/Devs/DevContainer';
import { RepoContainer } from 'components/Repos/RepoContainer';
import { MainContent } from 'components/Main';

// import { Container } from './styles';

export default function Routes() {
  function RouteWrapper({
    component: Component, 
    layout: Layout, 
    ...rest
  }) {
    return (
      <Route {...rest} render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
    );
  }

  return (
    <BrowserRouter >
      <Route path="/" exact component={Login} />
      <Switch>
        <RouteWrapper path="/browse" exact component={MainContent} layout={Main} />
        <RouteWrapper path="/browse/devs" component={DevContainer} layout={Main} />
        <RouteWrapper path="/browse/repos" component={RepoContainer} layout={Main} />
      </Switch>
    </BrowserRouter>
  );
}
