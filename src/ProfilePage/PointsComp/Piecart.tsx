import React from 'react';
import './Piechart.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import fitnessCouple from '../../assets/fitness_couple.svg';

const Piecart = () => {
  return (
    <div className='piechartComp'>
      <div className='piechartContainer'>
        <img
          className='piechartImg'
          style={{ width: 140, marginTop: 10 }}
          src={fitnessCouple}
          alt='fitnessCouple'
        />
        <CircularProgressbarWithChildren
          value={66}
          strokeWidth={10}
          className='path'
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.5,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgb(148	,56	,245	)`,
            textColor: '#f88',
            trailColor: 'unset',
            backgroundColor: '#3e98c7',
          })}
        ></CircularProgressbarWithChildren>
        <CircularProgressbar
          className='trail'
          value={100}
          strokeWidth={4}
          styles={buildStyles({
            // Colors
            pathColor: `rgb(234	,235,	235	)`,
            textColor: 'unset',
            trailColor: 'unset',
            backgroundColor: 'unset',
          })}
        />
      </div>
      <div className='piechartPreTitle'>180/250</div>
      <div className='piechartTitle'>Power-Couple</div>
    </div>
  );
};

export default Piecart;
