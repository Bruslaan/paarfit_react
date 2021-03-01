import React, { useState } from 'react';
import './WeightComp.css';

const WeightComp = () => {
  const [weight, setWeight] = useState('');

  return (
    <div className='weightContainer'>
      <form action=''>
        <div className='weightBtnContainer'>
          <button className='weightM'>
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
            type='text'
            name='weightInputLeft'
            id='weightInputLeft'
          />
          <button className='weightP'>
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
