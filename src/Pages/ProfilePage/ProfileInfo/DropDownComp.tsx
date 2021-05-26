import React, { useState } from 'react';

import './DropDownComp.css';

const DropDownComp = ({ genderArr, onValuePicked, pickedValue, editMode }: any) => {
  const [gender, setGender] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);

  function handleSetGender(item: any) {
    setGender(item);
    onValuePicked(item);

    setShowDropDown(!showDropDown);
  }


    {
        if(!editMode){
            return (
                    <p style={{}}>{pickedValue}</p>
            )
        }
    }

  return (
    <div className='dropdown'>
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        className='dropbtn'
      >
        <div className='dropBtnTitle'>{gender || pickedValue}</div>
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
      <div className={`${showDropDown && 'show '} dropdown-content`}>
        {/* <div
          className='clickAwayOverlay'
          onClick={() => setShowDropDown(false)}
        /> */}
        {genderArr.map((item: any) => (
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
