import React, { useState } from 'react';
import './HeightComp.css';

const HeightComp = ({ userID }: any) => {
  const [height, setHeight] = useState('');

  return (
    <div>
      <div className='heightDiv'>
        <input
          onChange={(e) => setHeight(e.target.value)}
          type='text'
          className='heightCompA'
          placeholder='0 cm'
          value={height}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default HeightComp;
