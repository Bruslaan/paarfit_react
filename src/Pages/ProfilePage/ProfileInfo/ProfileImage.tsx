import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider';
import { db, uploadImage } from '../../../firebase';
import './ProfileImage.css';

const ProfileImage = ({ onFileUploaded }: any) => {
  const { user } = useContext(AuthContext);

  const onFileChange = async (e: any) => {
    const file = e.target.files[0];

    console.log('1image successfully uploade:', file);

    const ImageURL = await uploadImage('profileImage', file);
    console.log('2image successfully uploade:', ImageURL);

    if (!ImageURL) {
      return;
    }

    await db
      .collection('users')
      .doc(user?.uid)
      .update({ profileImgURL: ImageURL });

    onFileUploaded(ImageURL);

    console.log('3image successfully uploade:', ImageURL);
  };

  return (
    <div>
      <div className='profileImgIconContainer baIcon'>
        <input
          onChange={(e: any) => {
            onFileChange(e);
          }}
          type='file'
          className='baInputBtn'
        />
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
            d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileImage;
