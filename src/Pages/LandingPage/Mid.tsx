import React from 'react';
import Footer from './Footer/Footer';
import Info from './Info';
import Magazin from './MagazinComp/Magazin';
import Reviews from './Reviews';
import Video from './Video';

const Mid = () => {
  return (
    <div className='mid'>
      <Info />
      <Video />
      <Reviews />
      <Magazin />
      <Footer />
    </div>
  );
};

export default Mid;
