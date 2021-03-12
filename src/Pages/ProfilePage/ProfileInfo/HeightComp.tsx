import React from 'react';
import './HeightComp.css';

const HeightComp = ({ setUserHeight, height }: any) => {
  return (
    <div>
      <div className='heightDiv'>
        <input
          onChange={(e) => setUserHeight({ value: e.target.value })}
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
