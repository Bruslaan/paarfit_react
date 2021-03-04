import React, { useState } from 'react';
import './ProfileInfo.css';
import profileImg from '../../assets/profileImg.jpeg';
import DropDownComp from './DropDownComp';
import HeightComp from './HeightComp';
import WeightComp from './WeightComp';

const ProfileInfo = () => {
  const genderArr = ['Male', 'Female', 'Diverse'];
  const [genderA, setGenderA] = useState('');
  const [genderB, setGenderB] = useState('');

  console.log(genderA, genderB, 'are picked');
  return (
    <div className='profileInfo'>
      <div
        className='profileInfoImg'
        style={{ backgroundImage: `url(${profileImg})` }}
      />
      <div className='profileInfoTop'>
        <div className='profInfoPreTitle'>Starter-Couple</div>
        <div className='proInfoTitleBox'>
          <div className='profInfoTitle'>Milau78</div>
          <svg
            className='profileInfoIcon'
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
              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className='gridContainer'>
        <div className='grid-itemTitle'>
          <div className='profGridName'>
            Michael
            <svg
              className='profGridIcn'
              width='0.9em'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
          </div>
          <div className='profileAge'>35</div>
        </div>
        <div className='grid-item'></div>
        <div className='grid-itemTitle'>
          <div className='profGridName'>
            Laura-Katarina
            <svg
              className='profGridIcn'
              width='0.9em'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
          </div>
          <div className='profileAge'>31</div>
        </div>
        <div className='grid-item'>
          <DropDownComp
            genderArr={genderArr}
            onValuePicked={(item: any) => setGenderA(item)}
          />
        </div>
        <div className='grid-item'>
          <svg
            className='profileInfoIconGrid'
            width='1.2em'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        </div>
        <div className='grid-item'>
          <DropDownComp
            genderArr={genderArr}
            onValuePicked={(item: any) => setGenderB(item)}
          />
        </div>
        <div className='grid-item'>
          <HeightComp />
        </div>
        <div className='grid-item'>
          <svg
            className='profileInfoIconGrid'
            width='1.2em'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 9l4-4 4 4m0 6l-4 4-4-4'
            />
          </svg>
        </div>
        <div className='grid-item'>
          <HeightComp />
        </div>
        <div className='grid-item'>
          <WeightComp />
        </div>
        <div className='grid-item'>
          <svg
            className='profileInfoIconGrid'
            width='1.2em'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
            />
          </svg>
        </div>
        <div className='grid-item'>
          <WeightComp />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
