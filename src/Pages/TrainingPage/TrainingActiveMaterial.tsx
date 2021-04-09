import React, {useContext, useEffect, useRef, useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import WorkoutItem from './WorkoutItem';
import {useHistory, useParams} from 'react-router';
import {AuthContext} from '../../AuthProvider';
import {CircularProgress} from '@material-ui/core';
import {Prompt} from 'react-router';
import firebase, {heutigesDatum} from '../../firebase';
import {
    ReturnLink,
    HandleData,
    getPoints,
    diff_minutes, sequenceState,
} from './trainingsUtils';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';
import Timer from '../../Components/Timer/Timer';
import SuccModal from "../../Components/SuccModal/SuccModal";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
        },
        resetContainer: {
            // padding: theme.spacing(3),

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
        },
    })
);

function ColorlibStepIcon(props: any) {
    const classes = useColorlibStepIconStyles();
    const {active, completed} = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            <div className='customStepperIcon_ins1'>
                <div className='customStepperIcon_ins2'>{props.icon}</div>
            </div>
        </div>
    );
}

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#F8CD4E;',
        zIndex: 1,
        color: '#fff',
        width: 44,
        height: 44,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#F8CD4E;',
    },
    completed: {
        backgroundColor: '#883EF0;',
    },
});

export default function VerticalLinearStepper({stageNumber, onFinished}: any) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setloading] = useState(false);
    const [workouts, setworkouts]: any = useState([]);
    const {user, userInformation} = useContext(AuthContext);
    const [timerEnabled, setTimerEnabled] = useState(true);
    const [startTime, setstartTime]: any = useState(null);


    let params: any = useParams();
    let currentMood: number = Number(params['id']);
    let stage = sequenceState[stageNumber];

    let schwierigkeitsgrad: string = userInformation?.stufe;

    async function fetchWorkouts() {
        setloading(true);
        const link: string = ReturnLink(stage, schwierigkeitsgrad) as string;
        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = HandleData(stage, schwierigkeitsgrad, data);
                setworkouts(filteredData);
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
                setloading(false);
            });
    }

    useEffect(() => {
        const now = new Date();
        setstartTime(now);
        fetchWorkouts();
    }, []);

    const handleNext = () => {
        if (activeStep === workouts.length - 1) {
            handleFinish()
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


    const isPflichtTraining = userInformation.lastWorkoutDone ? moment().isAfter(moment(userInformation.lastWorkoutDone?.toDate()).add(2, "days"), "day") : true


    const handleFinish = () => {
        if (isPflichtTraining) {
            uploadWorkoutTocloud();
        }

        onFinished()
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const moodBased = (mood: number, [first, second]: any) => {
        switch (mood) {
            case 0:
                return first
            case 1:
                const medianAmount = (first + second!) / 2
                return Math.round(medianAmount)
            case 2:
                return second
        }
    }

    const parseWorkoutInformation = (workout: any, kraft: boolean) => {


        const proPerson = workout?.sets?.includes("pro")

        const parseSets = workout?.sets?.split("-").map((element: any) => parseInt(element))
        const parseReps = workout?.reps?.split("-").map((element: any) => parseInt(element))
        const pausePause = workout?.pause?.split("-").map((element: any) => parseInt(element))
        let newWorkout = {...workout}

        const pause = moodBased(currentMood, pausePause)
        newWorkout.set = proPerson ? moodBased(currentMood, parseSets) * 2 : moodBased(currentMood, parseSets)
        newWorkout.rep = kraft ? moodBased(currentMood, parseReps) * 3 : moodBased(currentMood, parseReps)
        newWorkout.pause = proPerson ? 10 : pause
        newWorkout.alternate = proPerson
        return newWorkout
    }


    const getPunkte: any = () => {

        console.log(stage)
        switch (stage) {
            case "Aufwärmen":
                return 15
            case "Kraft":
                return 40
            case "Dehnen":
                return 15
            case "Ausdauer/Fettverbrennung":
                return 30
            default:
                return 10
        }
    }
    const uploadWorkoutTocloud = async () => {

        // upload
        const db = firebase.firestore().collection("users").doc(user?.uid)
        const document = await db.collection("last_workouts").doc(heutigesDatum).get()
        if (document.exists && stageNumber <= document.data()!["last_done"]) {
            return
        }
        await db.collection("last_workouts").doc(heutigesDatum).set({
            last_done: stageNumber,
            punkte: firebase.firestore.FieldValue.increment(getPunkte())
        }, {merge: true})

        await db.update({points: firebase.firestore.FieldValue.increment(getPunkte())})

    };
    return (
        <div className='trainingStepperMob'>
            <div className='trainingStepperSt'>

                <div
                    className='detTrainingWork'
                    style={{
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                >
                    <Stepper
                        activeStep={activeStep}
                        orientation='vertical'
                        style={{width: '100%', padding: '0'}}
                    >
                        {workouts.map((workout: any) => (
                            <Step key={workout['_id']}>
                                <StepLabel
                                    className='titleTrainingStep'
                                    StepIconComponent={ColorlibStepIcon}
                                >
                                    <h3 style={{marginLeft: '20px'}}>{workout.workoutname}</h3>
                                </StepLabel>
                                <StepContent style={{padding: '0'}}>
                                    <div className='areaCtTrainingDet'>
                                        <WorkoutItem onPaused={() => setTimerEnabled(true)}
                                                     onPlaying={() => setTimerEnabled(false)}
                                                     workout={parseWorkoutInformation(workout, stageNumber === 1)}
                                                     stage={stage}/>
                                        <div className={classes.actionsContainer}>
                                            <div className='detTrainingBtn btnDspNone'>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Zurück
                                                </Button>
                                                <Button
                                                    variant='contained'
                                                    onClick={
                                                        activeStep === workouts.length - 1
                                                            ? handleFinish
                                                            : handleNext
                                                    }
                                                    className={classes.button}
                                                >
                                                    {activeStep === workouts.length - 1
                                                        ? 'Abschließen'
                                                        : 'Weiter'}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='timeTrainingWork'>
                                        <div className='boxTimeTraining'>
                                            <Timer
                                                enabled={timerEnabled}
                                                onEndReached={() => handleNext()}
                                                sets={parseWorkoutInformation(workout, stageNumber === 1).set}
                                                pause={parseWorkoutInformation(workout, stageNumber === 1).pause}
                                                alternate={parseWorkoutInformation(workout, stageNumber === 1).alternate}
                                                trainingTime={parseWorkoutInformation(workout, stageNumber === 1).rep}
                                            />
                                            <div className='detTrainingBtn btnDspNoneDesk'>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Zurück
                                                </Button>
                                                <Button
                                                    variant='contained'
                                                    onClick={
                                                        activeStep === workouts.length - 1
                                                            ? handleFinish
                                                            : handleNext
                                                    }
                                                    className={classes.button}
                                                >
                                                    {activeStep === workouts.length - 1
                                                        ? 'Abschließen'
                                                        : 'Weiter'}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>

                    {loading && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <p style={{marginBottom: '20px'}}>Workouts werden geladen...</p>
                            <CircularProgress/>
                        </Paper>
                    )}

                    <Prompt
                        when={!(activeStep >= workouts.length - 1)}
                        message='Du bist mitten im Workout, sicher dass du es abbrechen willst?'
                    />
                </div>
            </div>
        </div>
    );
}
