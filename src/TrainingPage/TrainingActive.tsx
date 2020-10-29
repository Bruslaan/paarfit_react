import React, { useRef, useEffect, useContext, useState } from 'react'
import { Prompt } from 'react-router'
import MyItem from './WorkoutItem'
import { useHistory, useParams } from "react-router-dom";

import {
    SnapList,
    SnapItem,
    useVisibleElements,
    useScroll,
    // useDragToScroll,
    // isTouchDevice,
} from 'react-snaplist-carousel';
import { MobileStepper, Button } from '@material-ui/core';
import { Context } from "../GlobalState/store"




const LevelMapping: { [key: number]: string; } = {
    0: "Aufwärmen",
    1: "Kraft",
    2: "Dehnen",
    3: "Yoga"
}






function TrainingActive() {

    const snapList = useRef(null);
    const steps = 4
    const [activeStep, setActiveStep] = React.useState(0);
    const [state, dispatch]: any = useContext(Context);
    const history = useHistory()
    const [prompNeeded, enablePromp] = React.useState(true);
    const [workouts, setworkouts]: any = useState([])
    let params: any = useParams();
    let currentID: number = params["id"]
    let stage = LevelMapping[currentID]

    const visible = useVisibleElements(
        { debounce: 10, ref: snapList },
        ([element]) => element,
    );
    const goToSnapItem = useScroll({ ref: snapList });

    // const { isDragging } = useDragToScroll({ ref: snapList });
    const handleNext = () => {
        goToSnapItem(activeStep + 1)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

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
    const handleBack = () => {
        goToSnapItem(activeStep - 1)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    async function fetchWorkouts() {
        const currentID = params["id"]

        fetch(`https://paarfit-strapi.herokuapp.com/workouts?workoutcategories.categoryname=${LevelMapping[currentID]}&&workoutlevels.levelname=Anfänger`)
            .then(response =>
                response.json())
            .then(data => {
                console.log(data)
                setworkouts(data)
            }
            )

    }

    useEffect(() => {
        setActiveStep(visible)

    }, [visible])

    useEffect(() => {
        fetchWorkouts()
    }, [])

    return (
        <div >
            <SnapList direction="horizontal" ref={snapList}>
                {workouts.map((workout: any) => (
                    <SnapItem key={workout["_id"]} margin={{ left: '10vw', right: '15px' }} snapAlign="center">
                        <MyItem workout={workout} onClick={() => goToSnapItem(0)} visible={visible === 0}></MyItem>
                    </SnapItem>
                ))}

            </SnapList>

            <MobileStepper
                style={{ position: "fixed", bottom: "60px", maxWidth: "600px", margin: "auto" }}
                variant="progress"
                steps={5}
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={activeStep === steps ? finishWorkouts : handleNext} >{activeStep === steps ? "Fertigstellen" : "Weiter"}</Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>Zurück</Button>
                }
            />

            <Prompt
                when={prompNeeded}
                message='Du bist mitten im Workout, sicher dass du es abbrechen willst?'
            />
        </div>
    )
}

export default TrainingActive
