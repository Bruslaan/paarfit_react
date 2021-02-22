import React, { useContext, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Fab from '@material-ui/core/Fab';
import NavBarContainer from './NavBarContainer'
import { BottomNavBarContainer } from './BottomNavBar'
import { SidebarNavTopContainer } from './sidebarNavTop'
import { SidebarNavBottomContainer } from './sidebarNavBottom' 
import Blog from './BlogPage'
import Dashboard from './DashboardPage'
import ProfilePage from './ProfilePage'
<<<<<<< Updated upstream
import PaymentPage from './PaymentPage'
=======
>>>>>>> Stashed changes
import CreateUserInformation from './CreateUserInformation'
import TrainingPage from './TrainingPage'
import TraningActive from './TrainingPage/TrainingActiveMaterial'
import TrainingOverView from './TrainingPage/TrainingOverview'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Logo } from './Logo'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import DescriptionIcon from '@material-ui/icons/Description';
import Drawer from './react-bottom-drawer'
import Tagebuch from './Tagebuch'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        fab: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: "10%",
            zIndex: 10,
        },

    }),
);


const PrivateRoute = ({ ...rest }) => {
    const customStyle = useStyles()
    const { authenticated, loadingAuthState, haveInformation } = useContext(AuthContext);
    const [drawerVisible, setdrawerVisible] = useState(false)
    const openDrawer = () => {
        console.log("hallo")
        setdrawerVisible(true)
    }
    const closeDrawer = () => {
        setdrawerVisible(false)
    }

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
<<<<<<< Updated upstream
                            <div className="spacer"></div>
                            <div className="main__container">
                                <Switch>
                                    <Route exact path="/payment">
                                        <PaymentPage />
                                    </Route>
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
                                        <TrainingPage />
                                    </Route>
                                </Switch>
=======
                            <div className="spacer"></div>                            
                            <div className="main__container mainContainerStyle">
                                <div className="ctMenuLeft disable_on_mobile">
                                    <SidebarNavTopContainer />
                                    <SidebarNavBottomContainer/>                                    
                                </div>
                                <div className="contentArea">
                                    <Switch>
                                        <Route exact path="/profile">
                                            <ProfilePage />
                                        </Route>
                                        <Route exact path="/dashboard">
                                            <Dashboard />
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
                                            <TrainingPage />
                                        </Route>
                                    </Switch>
                                </div>
>>>>>>> Stashed changes
                            </div>
                            <BottomNavBarContainer />
                            
                            <Fab onClick={openDrawer} color="secondary" aria-label="add" className={customStyle.fab}>
                                <DescriptionIcon />
                            </Fab>

                            <Drawer isVisible={drawerVisible} onClose={closeDrawer}>
                                Trainingstagebuch
                                    <div style={{ }}>
                                    <Tagebuch />
                                </div>
                            </Drawer>
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