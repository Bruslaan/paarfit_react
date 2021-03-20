import React, {useEffect, useState} from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';

const Timer = ({sets, pause = 3, trainingTime = 5}: any) => {


    const SequenceArray = ["Workout", "Pause", "Workout", "Pause"]

    const [timer, setTimer] = useState(0);
    const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);

    const decreaseTimer = () => {
        setTimer(timer - 1)
    }

    const mayDecreaseTimer = timer > 0
    const mayIncreaseSequence = currentSequenceIndex < (SequenceArray.length - 1)

    useEffect(() => {
        let initTimerWith = 0
        if (SequenceArray[currentSequenceIndex] === "Workout") {
            initTimerWith = trainingTime
        } else {
            initTimerWith = pause
        }
        setTimer(initTimerWith)
    }, [currentSequenceIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("have to incrase the seq")
            if (!timer && mayIncreaseSequence) {
                console.log("have to incrase the seq")
                setCurrentSequenceIndex(currentSequenceIndex + 1)
            } else {
                mayDecreaseTimer && decreaseTimer()
            }
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });


    return (
        <div>
            <h2>{pause ? 'Workout' : 'Pause'}</h2>
            <div className='boxTimeProgressbar'>
                <div className='flipText'>
                    <CircularProgressbar
                        value={100}
                        text=''
                        styles={{
                            path: {
                                strokeWidth: '8',
                                stroke: '#9529F9',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            },
                            trail: {
                                strokeWidth: '4',
                                stroke: '#EAEBEB',
                                strokeLinecap: 'round',
                            },
                        }}
                    />
                </div>
                <div className='titleTimeProgressbar'>
                    <h3>
                        {timer}
                    </h3>
                    <p className='purple1'>{pause ? 'Go!' : 'Relax'}</p>
                </div>
            </div>
            <div className='ctSetProgressbar'>
                {/*            {ArraySet.map((set: any, index: number) => (
                    <div key={index} className='boxSetProgressbar gray2'>
                        {set}
                    </div>
                ))}*/}
            </div>
        </div>
    );
};

export default Timer;
