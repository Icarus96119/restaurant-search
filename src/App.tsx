import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import history from './history';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard';
import { selectAuthToken } from './store/selectors';

function App() {
  const authToken = useSelector(selectAuthToken);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          {authToken ? <Redirect to="/dashboard"/> : <LogIn />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
