import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import WorkoutItem from './WorkoutItem'
import { useHistory, useParams } from 'react-router';
import { Context } from "../GlobalState/store"
import { AuthContext } from '../AuthProvider'
import { CircularProgress } from '@material-ui/core';
import { Prompt } from 'react-router'
import firebase from '../firebase'
import { firestore } from 'firebase';

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
            display: "flex",
            width: "100%",
            justifyContent: "center",

        },
        resetContainer: {
            // padding: theme.spacing(3),

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px"
        },

    }),
);




const LevelMapping: { [key: number]: string; } = {
    0: "Aufwärmen",
    1: "Kraft",
    2: "Dehnen",
    3: "Yoga"
}



export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setloading] = useState(false)
    const [workouts, setworkouts]: any = useState([])
    const [state, dispatch]: any = useContext(Context);
    const { user } = useContext(AuthContext)
    const history = useHistory()
    const [enableCongrats, setenableCongrats] = useState(false)

    let params: any = useParams();
    let currentID: number = Number(params["id"])
    let stage = LevelMapping[currentID]

    async function fetchWorkouts() {
        setloading(true)
        fetch(`https://paarfit-strapi.herokuapp.com/workouts?workoutcategories.categoryname=${stage}&&workoutlevels.levelname=Anfänger`)
            .then(response =>
                response.json())
            .then(data => {

                setworkouts(data)
                setloading(false)
            }
            ).catch(error => {
                console.log(error)
                setloading(false)
            })

    }

    const finalWorkout = currentID === Number("2")

    const finishWorkouts = () => {
        // workout finished
        console.log("Workouts finished")
        if (state.currentWorkout === 3) {
            dispatch({ type: "FINISH_WORKOUT" })
        } else {
            dispatch({ type: "NEXT_WORKOUT", payload: "" })
        }


        history.push("/training/overview")
    }


    useEffect(() => {
        fetchWorkouts()
    }, [])


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const showCongrats = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setenableCongrats(true)

    }




    const handleFinish = () => {
        uploadWorkoutTocloud()

        finalWorkout ? showCongrats() :
            finishWorkouts()

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const uploadWorkoutTocloud = () => {
        // upload 
        const workout: any = {}
        workout[stage] = true
        const fireastore = firebase.firestore()
        fireastore.collection("users").doc(user?.uid).collection("pflicht_workouts").doc("pflicht_heute").set(workout, { merge: true }).then((doc) => {
            console.log("Workout gespeichert ", doc)
        }
        ).catch(error => {
            console.log("Workout konnte nicht gespeichert werden ", error)
        })
    }



    return (
        <div className={classes.root} style={{ width: "90%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto" }}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{ width: "100%", padding: "0" }}>
                {workouts.map((workout: any) => (
                    <Step key={workout["_id"]}>
                        <StepLabel ><h3 style={{ marginLeft: "20px" }}>{workout.workoutname}</h3></StepLabel>
                        <StepContent style={{ padding: "0" }}>
                            <WorkoutItem workout={workout} stage={stage} />
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Zurück
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === workouts.length - 1 ? handleFinish : handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === workouts.length - 1 ? 'Abschließen' : 'Weiter'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {enableCongrats && (
                <Paper square elevation={0} className={classes.resetContainer}>

                    <h1>Workouts erfolgreich abgeschlossen.</h1>
                    <Button onClick={() => history.push("/training")} className={classes.button}>
                        Zurück zur Übersicht</Button>
                </Paper>
            )}

            {loading && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <p style={{ marginBottom: "20px" }}>Workouts werden geladen...</p>

                    <CircularProgress />
                </Paper>
            )}

            <Prompt
                when={!(activeStep >= workouts.length - 1)}
                message='Du bist mitten im Workout, sicher dass du es abbrechen willst?'
            />
        </div>
    );
}
