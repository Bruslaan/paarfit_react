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
            marginLeft: "auto",
        },
        resetContainer: {
            // padding: theme.spacing(3),
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
    const [workoutDone, setworkoutDone] = useState(false)
    const [loading, setloading] = useState(false)
    const [workouts, setworkouts]: any = useState([])
    const [state, dispatch]: any = useContext(Context);
    const history = useHistory()


    let params: any = useParams();
    let currentID: number = params["id"]
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
    const handleFinish = () => {
        setworkoutDone(true)
        finishWorkouts()

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    return (
        <div className={classes.root} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Stepper activeStep={activeStep} orientation="vertical" style={{ width: "100%", marginLeft:"10px" }}>
                {workouts.map((workout: any) => (
                    <Step key={workout["_id"]}>
                        <StepLabel><h1>{workout.workoutname}</h1></StepLabel>
                        <StepContent style={{padding:"0"}}>
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
            {/* {activeStep === workouts.length && workoutDone && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>{stage} abgeschlossen - zurück zur Übersicht</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Zurück zur Übersicht</Button>
                </Paper>
            )} */}

            {loading && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    Workouts werden geladen...
                </Paper>
            )}
        </div>
    );
}
