import React, { useState, useEffect, useContext } from 'react';
import { app } from '../../../firebase';
import { AuthContext } from '../../../AuthProvider/index';

import './BAComp.css';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import defaultImgB from '../../../assets/baImgB.jpeg';
import defaultImgA from '../../../assets/baImgA.jpeg';

const BAComp = () => {
  const { user } = useContext(AuthContext);
  const uID = user?.uid;
  const db = app.firestore();
  const storageRef = app.storage().ref();

  const [beforeImg, setBeforeImg] = useState('');
  const [afterImg, setAfterImg] = useState('');

  // I. Upload file to storage, Set BImg & AImg on Upload, Add imageURLs to user  user data
  // I1. If !BImg ? (setBImg(fileURL), db...set(beforeImgURL:fileURL)) : (setBImg(aImg) db...set(beforeImgURL:aImg)) setAImg(fileURL) db...set(afterImgURL:fileURL)))
  const onFileChange = async (e: any) => {
    // Upload File
    const file = e.target.files[0];
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);

    // Set uploaded file to either before or after
    if (!beforeImg) {
      setBeforeImg(await fileRef.getDownloadURL());
      addBURLToUserData(await fileRef.getDownloadURL());
    } else {
      if (!afterImg) {
        setAfterImg(await fileRef.getDownloadURL());
        addAURLToUserData(await fileRef.getDownloadURL());
      } else {
        setBeforeImg(afterImg);
        addBURLToUserData(afterImg);
        setAfterImg(await fileRef.getDownloadURL());
        addAURLToUserData(await fileRef.getDownloadURL());
      }
    }
  };

  const addBURLToUserData = async (url: any) => {
    // Add file names to user data
    await db.collection('users').doc(uID).update({
      beforeImgURL: url,
    });
  };

  const addAURLToUserData = async (url: any) => {
    // Add file names to user data
    await db.collection('users').doc(uID).update({
      afterImgURL: url,
    });
  };

  // II. Set images on mount, refresh by getting user imageURLs
  // II1. Using useEffect: setBImg(db...get(beforeImgURL)) setAImg(db...get(afterImgURL)), []
  useEffect(() => {
    const getFileName = async () => {
      db.collection('users')
        .doc(uID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (
              doc.data()!.beforeImgURL !== '' ||
              doc.data()!.afterImgURL !== ''
            ) {
              setBeforeImg(doc.data()!.beforeImgURL);
              setAfterImg(doc.data()!.afterImgURL);
            } else if (
              doc.data()!.beforeImgURL === '' &&
              doc.data()!.afterImgURL === ''
            ) {
              setBeforeImg(defaultImgB);
              setAfterImg(defaultImgA);
            } else if (doc.data()!.beforeImgURL === '')
              setBeforeImg(defaultImgB);
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    };
    getFileName();
  }, []);

  return (
    <div className='baContainer'>
      <div className='baTitle'>
        <div className='bTitle'>before</div>
        <div className='baSelectedTitle'>after</div>
      </div>
      <div className='baIconContainer'>
        <input
          type='file'
          className='baInputBtn'
          onChange={(e: any) => onFileChange(e)}
        />
        <svg
          className='baIcon'
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
      <div className='baComp'>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImg}
              srcSet=''
              alt='Image one'
            />
          }
          itemTwo={
            <ReactCompareSliderImage src={afterImg} srcSet='' alt='Image two' />
          }
          onPositionChange={function noRefCheck() {}}
          position={50}
          style={{
            flexGrow: 1,
            width: 'inherit',
            height: '620px',
            borderRadius: '15px',
          }}
        />
      </div>
    </div>
  );
};

export default BAComp;
