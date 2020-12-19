import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import history from './history';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard';
import { selectAuthToken } from './redux/selectors';
import { setAuthToken } from './redux/actions';
import { azureContext } from './context/azure-authentication-context';

function App() {
  const authToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  useEffect(() => {
    azureContext.acquireToken().then((token: string) => {
      console.log(token);
      dispatch(setAuthToken(token));
    });
  }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <LogIn azureContext={azureContext} />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          {authToken ? <Dashboard/> : <LogIn azureContext={azureContext} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
