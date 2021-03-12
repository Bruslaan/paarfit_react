import React, { useContext, useState } from 'react';
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
    teamName: '',
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
    await db.collection('users').doc(uID).update(userInfo);
  };

  const getUserInfo = async () => {
    const doc = await db.collection('users').doc(uID).get();
    if (doc.exists) {
      const teamName = doc.data()?.teamName ?? '';
      const nameA = doc.data()?.nameA ?? '';
      const ageA = doc.data()?.ageA ?? '';
      const nameB = doc.data()?.nameB ?? '';
      const ageB = doc.data()?.ageB ?? '';
      const genderA = doc.data()?.genderA ?? '';
      const genderB = doc.data()?.genderB ?? '';
      const heightA = doc.data()?.heightA ?? '';
      const heightB = doc.data()?.heightB ?? '';
      const weightA = doc.data()?.weightA ?? '';
      const weightB = doc.data()?.weightB ?? '';
      const points = doc.data()?.points ?? '';
      const imageB = doc.data()?.imageB ?? '';
      const imageA = doc.data()?.imageA ?? '';

      setUserInfo({ ...userInfo, teamName: teamName });
      setUserInfo({ ...userInfo, nameA: nameA });
      setUserInfo({ ...userInfo, ageA: ageA });
      setUserInfo({ ...userInfo, nameB: nameB });
      setUserInfo({ ...userInfo, ageB: ageB });
      setUserInfo({ ...userInfo, genderA: genderA });
      setUserInfo({ ...userInfo, genderB: genderB });
      setUserInfo({ ...userInfo, heightA: heightA });
      setUserInfo({ ...userInfo, heightB: heightB });
      setUserInfo({ ...userInfo, weightA: weightA });
      setUserInfo({ ...userInfo, weightB: weightB });
      setUserInfo({ ...userInfo, points: points });
      setUserInfo({ ...userInfo, nameA: nameA });
      setUserInfo({ ...userInfo, imageB: imageB });
      setUserInfo({ ...userInfo, imageA: imageA });
    } else {
      console.log('No such document!');
    }
  };

  return (
    <div className='profile'>
      <ProfileInfo setUserInfo={setUserInfo} userInfo={userInfo} />
      <PointsComp />
      <BAComp />
    </div>
  );
};

export default Profile;
