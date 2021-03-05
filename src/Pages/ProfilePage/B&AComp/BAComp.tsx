import React, { useState, useEffect } from 'react';
import { app } from '../../../firebase';

import './BAComp.css';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import baImgB from '../../../assets/baImgB.jpeg';
import baImgA from '../../../assets/baImgA.jpeg';

const BAComp = () => {
  const [afterImg, setAfterImg] = useState({});
  const [beforeImg, setBeforeImg] = useState({});
  const [arrImg, setArrImg] = useState([]);

  const storageRef = app.storage().ref();
  const outputRef = storageRef.child('Cup.jpg');

  function fileUploadHandler(e: any) {
    const inputFile = e.target.files[0];
    const inputRef = storageRef.child(inputFile.name);
    setBeforeImg(arrImg[1]);

    inputRef.put(inputFile).then(() => {
      setAfterImg(inputFile);
    });
  }
  useEffect(() => {
    storageRef.listAll().then(function (result) {
      result.items.map((item) => {
        setArrImg(arrImg.concat(item.location.path_));
      });

      console.log(arrImg);
      // setAfterImg(arrImg[0]);
      // setBeforeImg(arrImg[1]);
    });
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
          onChange={(e: any) => fileUploadHandler(e)}
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
