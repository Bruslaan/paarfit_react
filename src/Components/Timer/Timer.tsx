import React, {useEffect, useState} from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import {isConstructorDeclaration} from 'typescript';

const Timer = ({
                   sets,
                   pause,
                   trainingTime,
                   onEndReached,
                   enabled,
                   alternate,
               }: any) => {
    const createSequenceArray = () => {
        let seqArray = ["Vorbereitung"];
        let partnerArray = ["Macht euch bereit"]

        for (let i = 0; i < sets; i++) {
            if (alternate) {
                const zahl = i % 2 === 0 ? "Partner 1" : "Partner 2"
                partnerArray.push(zahl);
                partnerArray.push('Partnerwechsel');
            }
            seqArray.push('Workout');
            seqArray.push('Pause');


        }
        return [seqArray, partnerArray];
    };

    const [SequenceArray, partnerArray] = createSequenceArray();

    const GetArraySet = () => {
        let setArray: string[] = [];
        for (let i = 0; i < sets; i++) {
            setArray.push('Satz ' + (i + 1));
        }
        return setArray;
    };
    const ArraySet = GetArraySet();

    const [timer, setTimer] = useState(0);
    const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);
    const sequenceEndReached = currentSequenceIndex === SequenceArray.length - 1;
    const currentSet = currentSequenceIndex / 2;

    useEffect(() => {
        let initTimerWith = 0;

        if (SequenceArray[currentSequenceIndex] === 'Vorbereitung') {
            initTimerWith = 10
        } else {
            SequenceArray[currentSequenceIndex] === 'Workout'
                ? (initTimerWith = trainingTime)
                : (initTimerWith = pause);
        }

        setTimer(initTimerWith);
    }, [currentSequenceIndex]);

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const timoutTimer = setTimeout(() => {
            if (sequenceEndReached && timer === 0) {
                clearTimeout(timoutTimer);
                onEndReached();
                console.log('Start break sound effects');
                return;
            }
            if (timer === 0 && !sequenceEndReached) {
                setCurrentSequenceIndex(currentSequenceIndex + 1);
            } else {
                setTimer(timer - 1);
            }
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timoutTimer);
    });

    const RelaxOrPartnerChange = alternate ? 'Wechsel' : 'Entspannen';

    return (
        <div>
            <h1>{partnerArray[currentSequenceIndex]}</h1>
            {partnerArray[currentSequenceIndex] ? <h3>{SequenceArray[currentSequenceIndex]}</h3> :<h2>{SequenceArray[currentSequenceIndex]}</h2> }

            <div className='boxTimeProgressbar'>
                <div className='flipText'>
                    <CircularProgressbar
                        value={
                            SequenceArray[currentSequenceIndex] === 'Workout'
                                ? (timer * 100) / trainingTime
                                : (timer * 100) / pause
                        }
                        text=''
                        styles={
                            SequenceArray[currentSequenceIndex] === 'Workout'
                                ? {
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
                                }
                                : {
                                    path: {
                                        strokeWidth: '8',
                                        stroke: '#F8CD4E',
                                        strokeLinecap: 'round',
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                    },
                                    trail: {
                                        strokeWidth: '4',
                                        stroke: '#EAEBEB',
                                        strokeLinecap: 'round',
                                    },
                                }
                        }
                    />
                </div>
                <div className='titleTimeProgressbar'>
                    <h3>{timer}</h3>

                </div>
            </div>
            <div className='ctSetProgressbar'>
                {ArraySet.map((set: any, index: number) => (
                    <div
                        key={index}
                        className={`boxSetProgressbar gray2 ${
                            currentSet > index ? 'workout_done' : ''
                        } ${currentSet === index ? 'setActive' : ''}`}
                    >
                        {set}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timer;
