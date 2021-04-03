import React from 'react';
import './ReviewComp.css';
import reviewCompImg from '../../assets/baImgA.jpeg';

const ReviewComp = () => {
  return (
    <div className='reviewComp'>
      <div
        className='reviewCompImg'
        style={{ backgroundImage: `url(${reviewCompImg})` }}
      />
      <div className='reviewCompBot'>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
            />
          </svg>
        </div>
        <p className='content'>
          Wir sind beruflich eingespannt und freuen uns, dass wir dank PaarFit
          den gemeinsamen Sport als Quality time in unseren Alltag einbinden
          können. Die Rezepte sind unaufwendig und lecker – perfekt, wenn man
          nicht stunden- lang in der Küche stehen und trotzdem was Gesundes
          essen will!
        </p>
        <p className='customer'>Thomas & Susann</p>
      </div>
    </div>
  );
};

export default ReviewComp;
