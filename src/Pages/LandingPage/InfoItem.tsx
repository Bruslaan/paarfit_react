import React from 'react';
import './InfoItem.css';
import img from '../../assets/starter_couple.svg';

const InfoItem = ({ content }: any) => {
  return (
    <>
      <div className='infoItem'>
        <span className='infoItemTitle'> {content.title_1} </span>
        <span className='infoItemTitle'>&</span>
        <span className='infoItemTitle'>{content.title_2}</span>
        <img className='navBarLogo' src='' alt='PaarFit' width='160px' />
        <p className='infoItemSubTitle'></p>
        <p className='infoItemBody'>{content.body}</p>
      </div>
    </>
  );
};

export default InfoItem;
