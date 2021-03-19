import React, {useContext} from 'react';
import Store from './GlobalState/store';
import Login from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from "./AuthProvider";
import Pricing from "./Pages/LandingPage/PricingPage/Pricing";


let App = () => {
    const {authenticated, loadingAuthState, haveInformation} = useContext(
        AuthContext
    );

    if (loadingAuthState) {
        return (
            <div className="loadingOverlay">
                <div className="loader">

                </div>

            </div>
        )
    }


    return (
        <div>
            <Router>
                {
                    !authenticated ?
                        <Switch>
                            <Route exact path='/auth' component={Login}/>
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/' component={LandingPage}/>
                            <Route exact path='/pricing' component={Pricing}/>
                            <Route path='/about' component={LandingPage} />
                        </Switch>
                        :
                        <Switch>
                            <Store>
                                <PrivateRoute path='/'/>
                            </Store>
                        </Switch>
                }


            </Router>
        </div>
    );
};

export default App;
