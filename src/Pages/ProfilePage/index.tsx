import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './index.css';
import { handleLogout } from '../../firebase';
import { AuthContext } from '../../AuthProvider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createStyles, Theme, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase';
import Profile from './Profile';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      maxWidth: '400px',
      borderRadius: 5,
      marginTop: '10px',
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#f75c1a"',
    },
  })
)(LinearProgress);

const calculateLevelPoints = (info: any) => {
  if (info) {
    return (info?.punkte / 1500) * 100;
  }
  return 0;
};

const Mapping: any = {
  Anfänger: 'Starter Paar',
};

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [userInformation, setuserInformation]: any = useState({});
  const db = firebase.firestore();
  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .get()
      .then((document: any) => {
        document.exists && setuserInformation(document.data());
      })
      .catch((error: any) => {
        console.log('cannot load user information', error);
      });
  }, []);
  return (
    <div>
      <Profile />
    </div>
  );
}
