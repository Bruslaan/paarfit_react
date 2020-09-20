import React, { useRef, useEffect } from 'react'
import { Prompt } from 'react-router'
import MyItem from './WorkoutItem'
import {
    SnapList,
    SnapItem,
    useVisibleElements,
    useScroll,
    // useDragToScroll,
    // isTouchDevice,
} from 'react-snaplist-carousel';
import { MobileStepper, Button } from '@material-ui/core';

function TrainingActive() {

    const snapList = useRef(null);

    const [activeStep, setActiveStep] = React.useState(0);

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
                    <Button size="small" onClick={handleNext} disabled={activeStep === 4}>Weiter</Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>Zurück</Button>
                }
            />

            <Prompt
                when={true}
                message='Du bist mitten im Workout, sicher dass du es abbrechen willst?'
            />
        </div>
    )
}

export default TrainingActive
