import React, {useEffect, useState} from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';

const Timer = ({sets = 3, pause = 3, trainingTime = 5, onEndReached}: any) => {

    const SequenceArray = ["Workout", "Pause", "Workout", "Pause", "Workout", "Pause"]

    const GetArraySet = () => {
        let setArray: string[] = []
        for (let i = 0; i < sets; i++) {
            setArray.push("Set " + (i+1))
        }
        return setArray
    }
    const ArraySet = GetArraySet()

    const [timer, setTimer] = useState(0);
    const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
    const sequenceEndReached = currentSequenceIndex === (SequenceArray.length - 1)
    const currentSet = (currentSequenceIndex / 2)

    useEffect(() => {
        let initTimerWith = 0
        SequenceArray[currentSequenceIndex] === "Workout" ? initTimerWith = trainingTime : initTimerWith = pause
        setTimer(initTimerWith)
    }, [currentSequenceIndex]);

    useEffect(() => {
        const timoutTimer = setTimeout(() => {

            if (sequenceEndReached && timer === 0) {
                clearTimeout(timoutTimer);
                onEndReached()
                return
            }

            if (timer === 0 && !sequenceEndReached) {
                setCurrentSequenceIndex(currentSequenceIndex + 1)
            } else {
                setTimer(timer - 1)
            }
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timoutTimer);
    });


    return (
        <div>
            <h2>{SequenceArray[currentSequenceIndex]}</h2>
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
                    <p className='purple1'>{SequenceArray[currentSequenceIndex] === "Workout" ? 'Go!' : 'Relax'}</p>
                </div>
            </div>
            <div className='ctSetProgressbar'>
                {ArraySet.map((set: any, index: number) => (
                    <div key={index}
                         className={`boxSetProgressbar gray2 ${currentSet === index ? "setActive" : ""}`}>
                        {set}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timer;
