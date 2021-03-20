import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Button from '@material-ui/core/Button';

const Timer = () => {
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerValues, setTimerValues] = useState({
    time: 5,
    set: 2,
    pause: 3,
    progress: 0,
  });

  let setArr = [''];
  const initialTime = timerValues.time;

  const setTrainingSets = () => {
    for (let step = 1; step <= timerValues.set; step++) {
      // Runs 5 times, with values of step 0 through 4.
      setArr.push('Set ' + step);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (pause) {
        case true:
          if (!timerValues.pause) {
            setPause(false);
            console.log('Pause over');
          } else
            setTimerValues({
              ...timerValues,
              time: timerValues.time - 1,
              progress: (100 / initialTime) * timerValues.time,
            });
          break;
        case false:
          setTimerValues({
            ...timerValues,
            progress: 100,
          });
          if (!timerValues.time) {
            setPause(true);
            console.log('Workout over');
          }

          setTimerValues({
            ...timerValues,
            time: timerValues.time - 1,
            progress: (100 / initialTime) * timerValues.time,
          });
          break;
      }
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  setTrainingSets();

  return (
    <div>
      <h2>{pause ? 'Workout' : 'Pause'}</h2>
      <div className='boxTimeProgressbar'>
        <div className='flipText'>
          <CircularProgressbar
            value={timerValues.progress}
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
            {pause ? `${timerValues.pause} Sek` : `${timerValues.time} Sek`}
          </h3>
          <p className='purple1'>{pause ? 'Go!' : 'Relax'}</p>
        </div>
      </div>
      <div className='ctSetProgressbar'>
        {setArr.map((set: any, key: any) => (
          <>
            <div key={key} className='boxSetProgressbar gray2'>
              {set}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Timer;
