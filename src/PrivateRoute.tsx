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
import TrainingPage from './Pages/TrainingPage';
import TraningActive from './Pages/TrainingPage/TrainingActiveMaterial';
import TrainingOverView from './Pages/TrainingPage/TrainingOverview';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Logo} from './Components/Logo';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import Drawer from './Components/react-bottom-drawer';
import Tagebuch from './Components/Tagebuch';
import Milestones from './Pages/MilestonesPage';
import Profile from "./Pages/ProfilePage/Profile";

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
    const customStyle = useStyles();
    const {authenticated, loadingAuthState, haveInformation} = useContext(
        AuthContext
    );
    const [drawerVisible, setdrawerVisible] = useState(false);
    const openDrawer = () => {
        console.log('hallo');
        setdrawerVisible(true);
    };
    const closeDrawer = () => {
        setdrawerVisible(false);
    };

    if (loadingAuthState) {
        return (
            <div className='center__all'>
                <Logo name='PaarFit'/>
                <CircularProgress/>
            </div>
        );
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
                                        <Route exact path='/training'>
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
                                    </Switch>
                                </div>
                            </div>
                            <BottomNavBarContainer/>

                            <Fab
                                onClick={openDrawer}
                                color='secondary'
                                aria-label='add'
                                className={customStyle.fab}
                            >
                                <DescriptionIcon/>
                            </Fab>

                            <Drawer isVisible={drawerVisible} onClose={closeDrawer}>
                                Trainingstagebuch
                                <div style={{}}>
                                    <Tagebuch/>
                                </div>
                            </Drawer>
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
