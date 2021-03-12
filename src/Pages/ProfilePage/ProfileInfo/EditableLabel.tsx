import React, { useState } from 'react';
import './EditableLabel.css';

const EditableLabel = ({
  nameAgeEditableLabel,
  setUserInfo,
  teamname,
  name,
  age,
}: any) => {
  const [editMode, setEditMode] = useState(false);

  const onInfoChange = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {nameAgeEditableLabel ? (
        <div className='editableLabel'>
          <label htmlFor='name' id='userALbl' className='profInfoTitle'>
            {editMode ? (
              <div className='editContainer'>
                <input
                  onChange={(e) => setUserInfo({ name: e.target.value })}
                  id='nameInput'
                  type='text'
                  className='nameInput'
                  placeholder='Name'
                  value={name}
                />
                <input
                  onChange={(e) => setUserInfo({ age: e.target.value })}
                  id='ageInput'
                  type='text'
                  className='ageInput'
                  placeholder='Alter'
                  value={age}
                />
                <div onClick={() => onInfoChange()} className='clickOutside' />
              </div>
            ) : (
              <>
                <p className='namelabel'>{name}</p>
                <p className='ageLabel'>{age}</p>
              </>
            )}
          </label>
          <div onClick={() => setEditMode(!editMode)}>
            <svg
              className='profileInfoIcon'
              width='0.8em'
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
      ) : (
        <>
          <label htmlFor='name' id='userALbl' className='profInfoTitle'>
            {editMode ? (
              <div className='editContainer'>
                <input
                  onChange={(e) => {
                    setUserInfo({ teamname: e.target.value });
                  }}
                  type='text'
                  className='teamNameInput'
                  name=''
                  id=''
                  value={teamname}
                />
                <div onClick={() => onInfoChange()} className='clickOutside' />
              </div>
            ) : (
              <>
                <p className='text-info'>{teamname}</p>
              </>
            )}
          </label>
          <div onClick={() => setEditMode(!editMode)}>
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
        </>
      )}
    </div>
  );
};

export default EditableLabel;
