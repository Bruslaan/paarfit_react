import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TrainingOverview.css';
import { trainingMoods } from '../../constants';

const TrainingOverview = () => {
  const history = useHistory();
  const startWorkout = (index: number) => {
    history.push('/training/overview/active/' + index);
  };

  return (
    <div className='trainingOverview'>
      <h1>Wie möchtest du heute trainieren?</h1>
      <div className='OverviewCardContainter'>
        {trainingMoods.map((mood: any, index: number) => (
          <div
            key={index}
            onClick={() => startWorkout(index)}
            className='cardStyle'
          >
            <div className='trainingOverviewTitle'>{mood.title}</div>
            <div className='trainingOverviewDes'>{mood.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingOverview;
