import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import history from './history';
import LogIn from './pages/login';
import Dashboard from './pages/dashboard';
import { selectAuthToken } from './redux/selectors';
import { azureContext } from './context/azure-authentication-context';

function App() {
  const authToken = useSelector(selectAuthToken);
  useEffect(() => {
    const accountInfos = azureContext.acquireToken();
    console.log(accountInfos);
    if (accountInfos.length) {
      console.log(JSON.stringify(accountInfos));
    } else {
      console.log('no accounts');
    }
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
          {authToken ? <Redirect to="/dashboard"/> : <LogIn azureContext={azureContext} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
