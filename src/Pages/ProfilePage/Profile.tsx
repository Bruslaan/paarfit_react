import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import BAComp from './B&AComp/BAComp';
import PointsComp from './PointsComp/PointsComp';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { app } from '../../firebase';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const uID = user?.uid;
  const db = app.firestore();

  const [userInfo, setUserInfo] = useState({
    teamname: '',
    nameA: '',
    ageA: '',
    nameB: '',
    ageB: '',
    genderA: '',
    genderB: '',
    heightA: '',
    heightB: '',
    weightA: '',
    weightB: '',
    points: '',
    imageB: '',
    imageA: '',
  });

  const addUserInfoToUserData = async () => {
    await db
      .collection('users')
      .doc(uID)
      .update({ ...userInfo });
  };

  useEffect(() => {
    // writeUserData({ ...userInfo });
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const docRef = await db.collection('users').doc(uID);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserInfo({ ...userInfo, teamname: doc.data()?.teamname });

          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  return (
    <div className='profile'>
      <ProfileInfo
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        addUserInfoToUserData={addUserInfoToUserData}
      />
      <PointsComp />
      <BAComp />
    </div>
  );
};

export default Profile;
