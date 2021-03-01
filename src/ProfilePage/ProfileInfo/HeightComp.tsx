import React, { useState } from 'react';
import './HeightComp.css';

const HeightComp = () => {
  const [heightL, setHeightL] = useState('');

  function handleHeightL(event: any) {
    setHeightL(
      (document.getElementById('heightLeft') as HTMLInputElement).value
    );
    event.preventDefault();
  }

  return (
    <div>
      <form name='heightL' onSubmit={(e) => handleHeightL(e)}>
        <div className='heightDiv'>
          <input
            type='sumbit'
            id='heightLeft'
            name='heightLeft'
            className='heightCompLeft'
            placeholder='189 cm'
          />
          <label className='heightLabelL' htmlFor='heightL'>
            {heightL}
          </label>
        </div>
      </form>
    </div>
  );
};

export default HeightComp;
