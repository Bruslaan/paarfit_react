import React from 'react';
import Store from './GlobalState/store'
import { useClearCache } from "react-clear-cache";
import Login from './LoginPage'
import Register from './RegisterPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';


let App = () => {
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  !isLatestVersion && emptyCacheStorage()

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/auth" component={Login} />
          <Route exact path="/register" component={Register} />
          <Store>
            <PrivateRoute path="/" />
          </Store>
        </Switch>
      </Router>
    </div>
  );
}


export default App;


