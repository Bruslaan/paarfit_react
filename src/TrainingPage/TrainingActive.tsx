import React, { useRef, useEffect, useContext } from 'react'
import { Prompt } from 'react-router'
import MyItem from './WorkoutItem'
import { useHistory } from "react-router-dom";
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

function TrainingActive() {

    const snapList = useRef(null);
    const steps = 4
    const [activeStep, setActiveStep] = React.useState(0);
    const [state, dispatch]: any = useContext(Context);
    const history = useHistory()
    const [prompNeeded, enablePromp] = React.useState(true);

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


    useEffect(() => {
        setActiveStep(visible)
    }, [visible])

    return (
        <div >
            <SnapList direction="horizontal" ref={snapList}>
                <SnapItem margin={{ left: '10vw', right: '15px' }} snapAlign="center">
                    <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}></MyItem>
                </SnapItem>
                <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}></MyItem>
                </SnapItem>
                <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}></MyItem>
                </SnapItem>
                <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
                    <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}></MyItem>
                </SnapItem>
                <SnapItem margin={{ left: '15px', right: '10vw' }} snapAlign="center">
                    <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}></MyItem>
                </SnapItem>
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
