import React from 'react';
import BAComp from './B&AComp/BAComp';
import NavBars from './NavBars';
import PointsComp from './PointsComp/PointsComp';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className='profile'>
      {/* <NavBars /> */}
      <ProfileInfo />
      <PointsComp />
      <BAComp />
    </div>
  );
};

export default Profile;
