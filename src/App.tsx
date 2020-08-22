import React from 'react';
import NavBarContainer from './NavBarContainer'
import { BottomNavBarContainer } from './BottomNavBar'
import Blog from './BlogPage'
import ProfilePage from './ProfilePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

let App = () => {
 


  return (
    <div>
      <Router>
        <NavBarContainer />
        <div className="spacer"></div>
        <div className="main__container">
          <Switch>

            <Route exact path="/profile">
              <ProfilePage  />
     

            </Route>
            <Route exact path="/training"></Route>
            <Route exact path="/">
              <Blog />
            </Route>
          </Switch>
        </div>
        <BottomNavBarContainer />
      </Router>
    </div>
  );
}


export default App;


