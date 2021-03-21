import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TrainingOverview.css';

const TrainingOverview = () => {
  const history = useHistory();
  const startWorkout = (index: number) => {
    history.push('/training/overview/active/' + index);
  };

  const moods = [
    { title: 'Gut', description: 'Schwierigkeitsgrad I' },
    { title: 'Sehr Gut', description: 'Schwierigkeitsgrad II' },
    { title: 'Fantastisch', description: 'Schwierigkeitsgrad III' },
  ];

  return (
    <div className='trainingOverview'>
      <h1>Wie geht es dir heute?</h1>
      <div className='OverviewCardContainter'>
        {moods.map((mood: any, index: number) => (
          <div onClick={() => startWorkout(index)} className='cardStyle'>
            <div className='trainingOverviewTitle'>{mood.title}</div>
            <div className='trainingOverviewDes'>{mood.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingOverview;
