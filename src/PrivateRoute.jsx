import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import NavBarContainer from './NavBarContainer'
import { BottomNavBarContainer } from './BottomNavBar'
import Blog from './BlogPage'
import ProfilePage from './ProfilePage'
import TrainingPage from './TrainingPage'


const PrivateRoute = ({...rest }) => {
    const { authenticated, loadingAuthState } = useContext(AuthContext);

    if (loadingAuthState) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={routeProps =>
                authenticated ? (               
                    <div>
                        <Redirect from="/auth" to="/"/>
                        <NavBarContainer />
                        <div className="spacer"></div>
                        <div className="main__container">
                            <Switch>
                                <Route exact path="/profile">
                                    <ProfilePage />
                                </Route>
                                <Route exact path="/training">
                                    <TrainingPage />
                                </Route>
                                <Route exact path="/training/active">
                                    <div>Hallo Training</div>
                                </Route>
                                <Route exact path="/">
                                    <Blog />
                                </Route>
                            </Switch>
                        </div>
                        <BottomNavBarContainer />
                    </div>
                ) : (
                        <Redirect to={{ pathname: "/auth", state: { prevPath: rest.path } }} />
                    )
            }
        />
    );
}

export default PrivateRoute