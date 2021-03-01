import React, { useState } from 'react';

import './DropDownComp.css';

const DropDownComp = ({ userID }: any) => {
  const [genderA, setGenderA] = useState('');
  const [genderB, setGenderB] = useState('');
  const [key, setKey] = useState('');

  const genderArr = ['Male', 'Female', 'Diverse'];

  function myFunction() {
    document
      .getElementById(userID === 'userA' ? 'myDropdownA' : 'myDropDownB')!
      .classList.toggle('show');
  }

  function handleSetGender(item: any) {
    userID === 'userA' ? setGenderA(item) : setGenderB(item);

    myFunction();
  }

  return (
    <div className='dropdown'>
      <button onClick={myFunction} className='dropbtn'>
        <div className='dropBtnTitle'>
          {userID === 'userA' ? genderA : genderB}
        </div>
        <div className='dropDownIcnBG'>
          <svg
            className='dropDownIcn'
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
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </button>
      <div
        id={userID === 'userA' ? 'myDropdownA' : 'myDropDownB'}
        className='dropdown-content'
      >
        {genderArr.map((item) => (
          <div
            className='dropDownItem'
            key={item}
            onClick={() => handleSetGender(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownComp;
