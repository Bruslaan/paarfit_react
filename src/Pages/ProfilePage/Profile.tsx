import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import BAComp from './B&AComp/BAComp';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { app } from '../../firebase';
import BoxResults from '../../Components/boxResults/index';
import { lvlSystem } from '../../constants';
import { userInfo } from 'node:os';

const Profile = () => {
  const { userInformation } = useContext(AuthContext);

  return (
    <div className='profile'>
      <div className='flexItem'>
        <ProfileInfo userInfo={userInformation} />
      </div>
      <div className='flexItem'>
        <BoxResults
          userInfo={userInformation}
          userPoints={userInformation?.points}
          lvlSystem={lvlSystem || []}
          userLvl={userInformation?.level}
        />
      </div>
      <div className='flexItem'>
        <BAComp />
      </div>
    </div>
  );
};

export default Profile;
