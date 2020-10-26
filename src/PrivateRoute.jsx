import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

import NavBarContainer from './NavBarContainer'
import { BottomNavBarContainer } from './BottomNavBar'
import Blog from './BlogPage'
import ProfilePage from './ProfilePage'
import CreateUserInformation from './CreateUserInformation'
import TrainingPage from './TrainingPage'
import TraningActive from './TrainingPage/TrainingActive'
import TrainingOverView from './TrainingPage/TrainingOverview'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Logo } from './Logo'

const PrivateRoute = ({ ...rest }) => {
    const { authenticated, loadingAuthState, haveInformation } = useContext(AuthContext);

    if (loadingAuthState) {
        return (
            <div className="center__all">
                <Logo name="PaarFit" />
                <CircularProgress />
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={routeProps =>
                authenticated ? (

                    haveInformation ? (
                        <div>
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
                                    <Route exact path="/training/overview">
                                        <TrainingOverView />
                                    </Route>
                                    <Route exact path="/training/overview/active/:id">
                                        <TraningActive />
                                    </Route>
                                    <Route exact path="/">
                                        <Blog />
                                    </Route>
                                </Switch>
                            </div>
                            <BottomNavBarContainer />
                        </div>

                    ) : (
                            <CreateUserInformation />
                        )


                ) : (

                        <Redirect to={{ pathname: "/auth", state: { prevPath: rest.path } }} />
                    )
            }
        />
    );
}

export default PrivateRoute