import React from 'react';
import Store from './GlobalState/store';
import Login from './LoginPage';
import Register from './RegisterPage';
import LandingPage from './LandingPage/LandingPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Profile from './ProfilePage/Profile';

let App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/auth' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/landing-page' component={LandingPage} />
          <Route exact path='/profile-page' component={Profile} />
          <Store>
            <PrivateRoute path='/' />
          </Store>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
