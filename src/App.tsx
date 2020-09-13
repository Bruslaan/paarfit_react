import React from 'react';


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
          <PrivateRoute path="/" />

        </Switch>
      </Router>
    </div>
  );
}


export default App;


