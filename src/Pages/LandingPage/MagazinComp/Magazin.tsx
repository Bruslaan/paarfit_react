import React from 'react';
import MagazinComp from './MagazinComp';
import './Magazin.css';

const Magazin = () => {
  return (
    <div className='magazin'>
      <div className='magTitle'>Paarfit MAGAZIN</div>
      <div className='magSubTitle'>
        Bleibt auf dem Laufenden! Spannendes zu körperlicher und geistiger
        Gesundheit, Ernährungs- und Trainingstipps
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
