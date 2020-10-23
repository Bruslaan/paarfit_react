import React from 'react';
import Store from './GlobalState/store'

import Login from './LoginPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';


let App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/auth" component={Login} />
          <Store>
            <PrivateRoute path="/" />
          </Store>
        </Switch>
      </Router>
    </div>
  );
}


export default App;


