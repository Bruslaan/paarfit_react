import React, { useState } from 'react';
import './WeightComp.css';

const WeightComp = ({ userID }: any) => {
  const [weightA, setWeightA] = useState(0);
  const [weightB, setWeightB] = useState(0);

  function handleWeight(event: any) {
    userID === 'userA'
      ? setWeightA(
          (document.getElementById('weightA') as HTMLInputElement).valueAsNumber
        )
      : setWeightB(
          (document.getElementById('weightB') as HTMLInputElement).valueAsNumber
        );

    event.preventDefault();
  }

  function handleWeightDecrement(event: any) {
    userID === 'userA'
      ? weightA >= 1
        ? setWeightA(weightA - 1)
        : setWeightA(weightA)
      : weightB >= 1
      ? setWeightB(weightB - 1)
      : setWeightB(weightB);

    event.preventDefault();
  }

  function handleWeightIncrement(event: any) {
    userID === 'userA' ? setWeightA(weightA + 1) : setWeightB(weightB + 1);

    event.preventDefault();
  }

  return (
    <div className='weightContainer'>
      <form name='weightForm' onSubmit={(e) => handleWeight(e)}>
        <div className='weightBtnContainer'>
          <button className='weightM' onClick={(e) => handleWeightDecrement(e)}>
            <svg
              className='weightBtnIcon'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20 12H4'
              />
            </svg>
          </button>
          <input
            className='weightInput'
            type='string'
            name='weightInput'
            id={userID === 'userA' ? 'weightA' : 'weightB'}
            placeholder='0 Kg'
            autoComplete='off'
            value={userID === 'userA' ? weightA + ' kg' : weightB + ' kg'}
          />
          <button className='weightP' onClick={(e) => handleWeightIncrement(e)}>
            <svg
              className='weightBtnIcon'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeightComp;
