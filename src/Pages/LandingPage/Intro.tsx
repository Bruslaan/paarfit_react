import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='title'>
        <span className='landingPageSpan'>Wir</span> &nbsp;sind besser als ich
      </div>
      <div className='subtitle'>
        Sieh dir an, warum sich mehr als 10.000 Paare dafür entschieden zu
        haben, mit Paarfit zu trainieren
      </div>
      <button className='navBtnIntro'>
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
      <button className='chatBtn'>
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
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Intro;