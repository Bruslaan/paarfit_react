import React from 'react';
import MagazinComp from './MagazinComp';
import './Magazin.css';

const Magazin = () => {
  return (
    <div className='magazin'>
      <div className='magTitle'>Paarfit MAGAZIN</div>
      <div className='magSubTitle'>
        Bleibt immer auf dem Laufenden. Tipps zur Ernährung, zu Paar-Aktivitäten
        und zum optimalen Trainingsflow.
      </div>
      <div className='magCompContainer'>
        <MagazinComp />
        <MagazinComp />
        <MagazinComp />
      </div>
    </div>
  );
};

export default Magazin;
