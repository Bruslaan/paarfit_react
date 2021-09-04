import React, {useContext, useEffect, useState} from 'react';
import './index.css';
import {
    createStyles,
    makeStyles,
    Paper,
    Theme,
    Grid, Modal,
} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {motQuoteArr} from '../../constants';
import moment from "moment"
import {AuthContext} from "../../AuthProvider";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {db, heutigesDatum} from "../../firebase";

const BoxTrainingActivityStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    })
);

export default function BoxTrainingActivity() {
    const {user} = useContext(AuthContext);
    const getActivities = async () => {
        const document = await db.collection("users").doc(user?.uid).collection("last_workouts").doc(heutigesDatum).get()
        if (!document.exists) {
            return
        }
        if (document?.data()?.activities) {
            setActivities(document?.data()?.activities)
        }

    }


    useEffect(() => {
        getActivities()
    }, []);


    const startWorkout = () => {
        history.push('/training/overview');
    };
    const history = useHistory();
    const [modalOpened, setModalOpened] = useState(false);
    const [activities, setActivities] = useState({
        joggen: false,
        fahrad: false,
        hausarbeit: false,
        spatzieren: false,
        etc: false,

    });

    const saveActivities = async () => {
        await db.collection("users").doc(user?.uid).collection("last_workouts").doc(heutigesDatum).set({activities: activities}, {merge: true})
        setModalOpened(false)

    }

    const {userInformation} = useContext(AuthContext);
    const isPflichtWorkout = userInformation?.lastWorkoutDone ? moment().isAfter(moment(userInformation.lastWorkoutDone?.toDate()).add(2, "days"), "day") : true

    console.log(isPflichtWorkout)
    const classes = BoxTrainingActivityStyles();

    // const schedule = require('node-schedule');
    // const rngTimer = schedule.scheduleJob('* 10 * * * *', function () {
    //   setRng(Math.floor(Math.random() * motQuoteArr.length));
    // });

    return (
        <Paper className={classes.paper}>
            <div className='areaHomeCol2'>
                <div className='ctHomeCol2'>
                    <div className='titleCol2 textWhite'>
                        {motQuoteArr[Math.floor(Math.random() * motQuoteArr.length)]}
                    </div>
                    <div className='subTitleCol2 yellow1'>Willkommen zurück!</div>
                </div>
                <div className='ctTrainingCol2 whiteBg'>
                    <div
                        onClick={startWorkout}
                        className='detailsTrainingCol2 blueBg2 big__button'
                    >
                        <h2 className='textWhite'>training</h2>
                        <div className='ctGetStartedCol2'>
                            <div className='iconGetStarted1'>
                                <img src='images/hantel.svg' alt=''/>
                            </div>
                            <div className='linkGetStarted'>
                                <div className='iconGetStarted2'>
                                    <img src='images/iconArrow.png' alt=''/>
                                </div>
                                <p className='textWhite'>
                                    {isPflichtWorkout ? "jetzt starten" : "jetzt wiederholen"}
                                </p>
                            </div>
                        </div>
                        <div className='hereGoCol2'>
                            <h2 className='textWhite'>
                                los geht's
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='ctActivitateCol2 whiteBg'>
                    <div onClick={() => setModalOpened(true)} className='detailsActivCol2 purpleBg2 big__button'>
                        <h2 className='textWhite'>aktivität</h2>
                        <div className='ctAddCol2'>
                            <div className='iconAddCol2'>
                                <img src='images/aktivitäten.svg' alt=''/>
                            </div>
                            <div className='linkAddCol2'>
                                <h2 className='textWhite ' style={{fontSize: "20px"}}>
                                    +hinzufügen
                                </h2>
                            </div>
                        </div>
                        <div className='hereGoCol2'>
                            <p className='textWhite'>
                                egal, ob spazieren gehen, schwimmen oder Gartenarbeit
                            </p>
                        </div>
                    </div>
                </div>


                <Dialog

                    open={modalOpened}
                    onClose={() => setModalOpened(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Aktivität hinzufügen?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description"><FormControl component="fieldset">
                            <p className=''>
                                Füge deine heutigen aktivitäten hinzu. Egal, ob spazieren gehen, schwimmen oder
                                Gartenarbeit.
                            </p>
                            <br/>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={activities.joggen} onChange={(event) => setActivities({
                                        ...activities,
                                        joggen: event.target.checked
                                    })} name="joggen"/>}
                                    label="Joggen"
                                />

                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={activities.fahrad} onChange={(event) => setActivities({
                                        ...activities,
                                        fahrad: event.target.checked
                                    })} name="gilad"/>}
                                    label="Fahrad fahren"
                                />

                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={activities.hausarbeit}
                                                       onChange={(event) => setActivities({
                                                           ...activities,
                                                           hausarbeit: event.target.checked
                                                       })} name="gilad"/>}
                                    label="Hausarbeiten"
                                />

                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={activities.spatzieren}
                                                       onChange={(event) => setActivities({
                                                           ...activities,
                                                           spatzieren: event.target.checked
                                                       })} name="gilad"/>}
                                    label="Spatzieren gehen"
                                />

                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={activities.etc} onChange={(event) => setActivities({
                                        ...activities,
                                        etc: event.target.checked
                                    })} name="gilad"/>}
                                    label="Andere aktivitäten"
                                />

                            </FormGroup>

                        </FormControl>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setModalOpened(false)} color="primary">
                            Abbrechen
                        </Button>
                        <Button onClick={saveActivities} color="primary" autoFocus>
                            Speichern
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </Paper>
    );
}
