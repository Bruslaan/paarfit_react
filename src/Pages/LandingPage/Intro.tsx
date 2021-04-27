import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      <br />
      <br />
      <div className='title'>
        <span className='landingPageSpan'>Wir </span>sind besser als ich
      </div>

      <div className='subtitle'>
          PaarFit ist das erste Trainingsprogramm, das speziell für euch als Paar zusammengestellt ist.
      </div>
      <a href='/registrieren' style={{ textDecoration: 'none' }}>
        <button className='paarfit_button'>
          Kostenlos testen
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
      </a>
      {/* <button className='chatBtn'>
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
      </button> */}
    </div>
  );
};

export default Intro;
