import React, {useContext, useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {AuthContext} from './AuthProvider';
import Fab from '@material-ui/core/Fab';
import NavBarContainer from './Components/NavBarContainer';
import {BottomNavBarContainer} from './Components/BottomNavBar';
import {SidebarNavTopContainer} from './Components/sidebarNavTop';
import {SidebarNavBottomContainer} from './Components/sidebarNavBottom';
import Dashboard from './Pages/DashboardPage';
import ProfilePage from './Pages/ProfilePage';
import CreateUserInformation from './CreateUserInformation';
import TraningActive from './Pages/TrainingPage/TrainingActivePage';
import TrainingOverView from './Pages/TrainingPage/TrainingOverview';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Logo} from './Components/Logo';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Milestones from './Pages/MilestonesPage';
import Profile from './Pages/ProfilePage/Profile';
import moment from "moment";
import Pricing from "./Pages/LandingPage/PricingPage/Pricing";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(10),
            right: '10%',
            zIndex: 10,
        },
    })
);

const PrivateRoute = ({...rest}) => {
    const {authenticated, loadingAuthState, haveInformation, userInformation} = useContext(
        AuthContext
    );

    if (loadingAuthState) {
        return (
            <div className='center__all'>
                <Logo name='PaarFit'/>
                <CircularProgress/>
            </div>
        );
    }

    console.log(userInformation)

    if (authenticated && userInformation?.registeredOn) {
        if (!userInformation.payed) {


            const registeredOn = moment(userInformation.registeredOn.toDate())
            const today = moment()

            console.log(registeredOn, "registed on")


            console.log(registeredOn, today)

            if (registeredOn.add(5, "minutes").isBefore(today)) {
                return (
                    <div>
                        <NavBarContainer/>
                        <div className='spacer'></div>
                        <div className='main__container mainContainerStyle'>
                            <div className='ctMenuLeft disable_on_mobile'>
                                <SidebarNavTopContainer/>
                                <SidebarNavBottomContainer/>
                            </div>
                            <div className='contentArea'>
                                <Pricing title={"Ihre 14 tägige Testphase ist abgelaufen!"}/>
                            </div>
                        </div>
                    </div>
                )
            }


        }
    }


    return (
        <Route
            {...rest}
            render={(routeProps) =>
                authenticated ? (
                    haveInformation ? (
                        <div>
                            <NavBarContainer/>

                            <div className='spacer'></div>
                            <div className='main__container mainContainerStyle'>
                                <div className='ctMenuLeft disable_on_mobile'>
                                    <SidebarNavTopContainer/>
                                    <SidebarNavBottomContainer/>
                                </div>
                                <div className='contentArea'>
                                    <Switch>
                                        <Route exact path='/profile'>
                                            <ProfilePage/>
                                        </Route>
                                        <Route exact path='/'>
                                            <Dashboard/>
                                        </Route>
                                        <Route exact path='/training/overview'>
                                            <TrainingOverView/>
                                        </Route>
                                        <Route exact path='/training/overview/active/:id'>
                                            <TraningActive/>
                                        </Route>
                                        <Route exact path='/profile-page' component={Profile}/>
                                        <Route exact path='/milestones'>
                                            <Milestones/>
                                        </Route>
                                        <Redirect to='/'></Redirect>
                                    </Switch>
                                </div>
                            </div>
                            <BottomNavBarContainer/>

                        </div>
                    ) : (
                        <CreateUserInformation/>
                    )
                ) : (
                    <Redirect
                        to={{pathname: '/auth', state: {prevPath: rest.path}}}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
