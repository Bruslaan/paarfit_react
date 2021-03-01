import React, { useState } from 'react';
import './HeightComp.css';

const HeightComp = ({ userID }: any) => {
  const [heightA, setHeightA] = useState(0);
  const [heightB, setHeightB] = useState(0);

  function handleHeight(event: any) {
    userID === 'userA'
      ? setHeightA(
          (document.getElementById('heightA') as HTMLInputElement).valueAsNumber
        )
      : setHeightB(
          (document.getElementById('heightB') as HTMLInputElement).valueAsNumber
        );

    event.preventDefault();
  }

  console.log(heightA);

  return (
    <div>
      <form action='' name='height' onSubmit={(e) => handleHeight(e)}>
        <div className='heightDiv'>
          <input
            type='text'
            id={userID === 'userA' ? 'heightA' : 'heightB'}
            name={userID === 'userA' ? 'heightA' : 'heightB'}
            className='heightCompA'
            placeholder='0 cm'
            value=''
            // {
            //   userID === 'userA'
            //     ? heightA !== 0
            //       ? heightA
            //       : ''
            //     : heightB !== 0
            //     ? heightB
            //     : ''
            // }
            // value={userID === 'userA' ? heightA + ' cm' : heightB + ' cm'}
            autoComplete='off'
          />
          {/* <label className='heightLabelA'>{heightL}</label> */}
        </div>
      </form>
    </div>
  );
};

export default HeightComp;
