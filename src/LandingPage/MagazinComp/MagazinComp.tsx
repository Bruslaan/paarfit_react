import React from 'react';
import './MagazinComp.css';

const MagazinComp = () => {
  return (
    <div className='magazinComp'>
      <div className='magImg' />
      <div className='magCompContent'>
        <div className='magTop'>
          <div className='publisher'>Claudo</div>
          <div className='date'>22. Sept 2020 · 3 Min.</div>
        </div>
        <a href='' className='magazinTitle'>
          Abnehmen & Wohlfühlen: Fit und gut gelaunt - mit der richtigen...
        </a>
        <hr className='solid' />
        <div className='bottom'>
          <div className='bottomLeft'>
            <p className='views'>12 Ansichten</p>
            <a href='' className='commentLink'>
              Kommentar verfassen
            </a>
          </div>
          <div className='bottomRight'>
            <p>1</p>
            <div className='heartIcon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinComp;
