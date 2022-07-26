import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import {
  Switch, Route, useHistory, Redirect,
} from 'react-router-dom';
// pages
import {
  Dashboard, Settings,
  NewClient, Called, Client,
} from '..';
// components
import { NavBar } from '../../components';
// style
import {
  Container, Content, Aside,
} from './style';

export default function Main() {
  const history = useHistory();
  // set the page url.
  /**
   * inspect the page title and join
   * with the value assigned to the function.
   */
  function handleTitleDom(value) {
    reactDom.render(
      `Called System - ${value}`,
      document.getElementById('title'),
    );
  }
  const [location, setLocation] = useState('');
  /**
   *  useEffect which maintains state
   * according to the location of the page 'URL'.
   */
  useEffect(() => {
    switch (history.location.pathname) {
      case '/client':
        setLocation('/client');
        /**
         * value assigned to the function
         * to identify the page by name.
         */
        handleTitleDom('Cliente');
        break;
      case '/settings':
        setLocation('/settings');
        handleTitleDom('Configurações');
        break;
      case '/newclient':
        setLocation('/newclient');
        handleTitleDom('Adicionar Cliente');
        break;
      default:
        setLocation('');
        handleTitleDom('Início');
        break;
    }
  }, []);

  // function to use the hook.
  function handleRegisterPress(name) {
    // using the hook with the page link.
    history.push(`/${name}`);
    handleTitleDom(name);
  }

  return (
    <Container>
      <Aside>
        <NavBar
          onClick={(name) => handleRegisterPress(name)}
          defaultScreen={location}
        />
      </Aside>
      <Content>
        <Switch>
          <Redirect from="/dashboard" to="/" />
          <Route
            exact
            path="/"
            component={Dashboard}
          />
          <Route
            exact
            path="/client"
            component={Client}
          />
          <Route
            exact
            path="/settings"
            component={Settings}
          />
          <Route
            exact
            path="/newclient"
            component={NewClient}
          />
          <Route
            exact
            path="/called"
            component={Called}
          />
        </Switch>
      </Content>
    </Container>
  );
}
