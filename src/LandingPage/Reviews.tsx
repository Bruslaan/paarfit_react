import React from 'react';
import ReviewComp from './ReviewComp';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className='reviewsBG'>
        <div className='reviewTitle'>
          <div className='reviewTitleInline'>...</div>
          UND WAS SAGEN UNSERE MITGLIEDER?
        </div>
        <p className='reviewSubtitle'>
          Echte Erfahrungen und beeindruckende Resultate
        </p>
        <div className='reviewsComp'>
          <ReviewComp />
          <ReviewComp />
          <ReviewComp />
        </div>
        <button className='navBtn'>
          Jetzt Anmelden
          <svg
            className='arroIcon'
            height='20px'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
