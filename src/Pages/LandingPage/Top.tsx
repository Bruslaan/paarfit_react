import React from 'react';

import bgImg from '../../assets/bgImg.jpeg';
import Intro from './Intro';
import NavBar from './NavBar';
import Pricing from './PricingPage/Pricing';
import './Top.css';

const Top = () => {
  return (
    <div className='top' style={{ backgroundImage: `url(${bgImg})` }}>
      <NavBar />
      <Intro />
      {/* <Pricing /> */}
    </div>
  );
};

export default Top;
