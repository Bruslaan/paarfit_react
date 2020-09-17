import React, { useRef, useEffect } from 'react'
import { Prompt } from 'react-router'
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
        <div>
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



            <div style={{ }}>Informationen usw</div>
            <MobileStepper
                style={{position:"fixed", bottom:"60px", maxWidth:"600px", margin:"auto"}}
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
const MyItem: React.FC<any> = ({ onClick, children, visible }) => (
    <div
        style={{
            width: '80vw',
            maxWidth: "600px",
            // height: 300,
            objectFit: "cover",
            // background: "orange",
            cursor: visible ? 'default' : 'pointer',
        }}
        onClick={onClick}
    >

        <video preload="metadata" controls style={{height:"100%", width:"100%", objectFit:"contain"}} width="100%" poster="">
            <source src="https://firebasestorage.googleapis.com/v0/b/paarfit-90016.appspot.com/o/video1.mp4?alt=media&token=c526f78b-82c3-41fe-b145-ecbd96d3ec34#t=0.5" type="video/mp4" />
            <source src="https://firebasestorage.googleapis.com/v0/b/paarfit-90016.appspot.com/o/video1.mp4?alt=media&token=c526f78b-82c3-41fe-b145-ecbd96d3ec34#t=0.5" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        {children}
    </div>
);
export default TrainingActive
