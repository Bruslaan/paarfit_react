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
import { AuthContext } from '../AuthProvider'
import { CircularProgress } from '@material-ui/core';
import { Prompt } from 'react-router'
import firebase, { heutigesDatum } from '../firebase'
import { ReturnLink, HandleData, getPoints } from './trainingsUtils'
import {sequenceState} from "./trainingsUtils"
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





export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setloading] = useState(false)
    const [workouts, setworkouts]: any = useState([])
    const { user, userInformation } = useContext(AuthContext)
    const history = useHistory()

    let params: any = useParams();
    let currentID: number = Number(params["id"])
    let stage = sequenceState[currentID]

    let schwierigkeitsgrad: string = userInformation?.stufe





    async function fetchWorkouts() {

        setloading(true)
        const link: string = ReturnLink(stage, schwierigkeitsgrad) as string
        fetch(link)
            .then(response =>
                response.json())
            .then(data => {
                const filteredData = HandleData(stage, schwierigkeitsgrad, data)
                setworkouts(filteredData)
                setloading(false)
            }
            ).catch(error => {
                console.log(error)
                setloading(false)
            })
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleFinish = () => {
        uploadWorkoutTocloud()
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const uploadWorkoutTocloud = async () => {
        // upload 
        const workout: any = {}
        workout[stage] = true
        console.log("workout to upload", workout)
        const fireastore = firebase.firestore()
        const doneWorkouts = await fireastore.collection("users").doc(user?.uid).collection("pflicht_workouts").doc("workout_" + heutigesDatum).get()
        const data = doneWorkouts?.data()!
        const stageExists = doneWorkouts.exists && data[stage]

        if (!stageExists) {
            const increment = firebase.firestore.FieldValue.increment(getPoints(stage));
            // Document reference
            const storyRef = fireastore.collection('users').doc(user?.uid);

            // Update read count
            await storyRef.update({ punkte: increment });
            console.log("Incremented")
        }


        fireastore.collection("users").doc(user?.uid).collection("pflicht_workouts").doc("workout_" + heutigesDatum).set(workout, { merge: true }).then((doc) => {
            console.log("Workout gespeichert ", doc)
            history.push("/training/overview")
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
