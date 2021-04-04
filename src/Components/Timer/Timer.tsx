import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const Timer = ({
  sets,
  pause,
  trainingTime,
  onEndReached,
  enabled,
  alternate,
}: any) => {
  const createSequenceArray = () => {
    let seqArray = [];

    for (let i = 0; i < sets; i++) {
      seqArray.push('Workout');
      seqArray.push('Pause');
    }
    return seqArray;
  };

  const SequenceArray = createSequenceArray();

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
    SequenceArray[currentSequenceIndex] === 'Workout'
      ? (initTimerWith = trainingTime)
      : (initTimerWith = pause);
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

  const RelaxOrPartnerChange = alternate ? 'Wächsel' : 'Entspannen';

  return (
    <div>
      <h2>{SequenceArray[currentSequenceIndex]}</h2>
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
          <p className='purple1'>
            {SequenceArray[currentSequenceIndex] === 'Workout'
              ? 'Los!'
              : RelaxOrPartnerChange}
          </p>
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
