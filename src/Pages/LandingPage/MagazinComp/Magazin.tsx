import React from 'react';
import MagazinComp from './MagazinComp';
import './Magazin.css';

const Magazin = () => {
    return (
        <div className='magazin'>
            <div className='magTitle'>Paarfit MAGAZIN</div>
            <div className='magSubTitle'>
                Kommt in Kürze!
            </div>
            {/*      <div className='magCompContainer'>
        <MagazinComp />
        <MagazinComp />
        <MagazinComp />
      </div>*/}
        </div>
    );
};

export default Magazin;
