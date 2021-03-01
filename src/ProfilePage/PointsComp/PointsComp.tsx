import React from 'react';
import Piecart from './Piecart';
import './PointsComp.css';

const PointsComp = () => {
  return (
    <div className='pointsComp'>
      <div className='pointsTitle'>
        Noch <span className='pointsSpan'>70 P.</span> bis zum
      </div>
      <Piecart />
      <div className='pointsDescription'>
        Als Power Couple is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  );
};

export default PointsComp;
