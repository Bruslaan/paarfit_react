import React, { useState } from 'react';

import './DropDownComp.css';

const DropDownComp = () => {
  const [genderleft, setGenderleft] = useState('');
  const [genderright, setGenderright] = useState('');
  const [key, setKey] = useState('');

  const genderArr = ['Male', 'Female', 'Diverse'];

  function myFunction() {
    document.getElementById('myDropdown')!.classList.toggle('show');
  }

  function handleSetGender(item: any) {
    setGenderleft(item);

    myFunction();
  }

  return (
    <div className='dropdown'>
      <button onClick={myFunction} className='dropbtn'>
        <div className='dropBtnTitle'>{genderleft}</div>
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
      <div id='myDropdown' className='dropdown-content'>
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
