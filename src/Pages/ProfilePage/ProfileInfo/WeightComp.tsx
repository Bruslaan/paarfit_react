import React, { useState } from 'react';
import './WeightComp.css';

const WeightComp = ({ setUserWeight, weight }: any) => {
  return (
    <div className='weightContainer'>
      <div className='weightBtnContainer'>
        <button
          className='weightM'
          onClick={() => weight > 0 && setUserWeight({ value: weight - 1 })}
        >
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
          onChange={(e) =>
            setUserWeight({ value: Number.parseInt(e.target.value) })
          }
          className='weightInput'
          type='string'
          name='weightInput'
          placeholder='0 Kg'
          autoComplete='off'
          value={weight}
        />
        <button
          className='weightP'
          onClick={() => setUserWeight({ value: weight + 1 })}
        >
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
    </div>
  );
};

export default WeightComp;
