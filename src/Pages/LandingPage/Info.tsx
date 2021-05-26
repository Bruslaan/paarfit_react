import React from 'react';
import './Info.css';
import InfoItem from './InfoItem';
import { infoItems } from '../../constants';

const Info = () => {
  return (
    <div className='info'>
      <div className='infoComps'>
        {infoItems.map((item: any, index: number) => (
          <InfoItem content={item} key={index} />
        ))}
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
    </div>
  );
};

export default Info;
