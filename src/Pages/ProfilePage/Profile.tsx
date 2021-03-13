import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../AuthProvider';
import BAComp from './B&AComp/BAComp';
import PointsComp from './PointsComp/PointsComp';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {app} from '../../firebase';

const Profile = () => {

    return (
        <div className='profile'>
            <div className="flexItem">
                <ProfileInfo
                />
            </div>
            <div className="flexItem">
                <PointsComp/>
            </div>
            <div className="flexItem">
                <BAComp/>
            </div>

        </div>
    );
};

export default Profile;
