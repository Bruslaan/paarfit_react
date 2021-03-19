import React from 'react';

import bgImg from '../../assets/bgImg.jpeg';
import Footer from './Footer/Footer';
import Info from './Info';
import Intro from './Intro';
import Magazin from './MagazinComp/Magazin';
import NavBar from './NavBar';
import Reviews from './Reviews';
import './Home.css';
import Video from './Video';

const Home = () => {
  return (
    <div className='home'>
      <div className='top' style={{ backgroundImage: `url(${bgImg})` }}>
        <NavBar />
        <Intro />
      </div>
      <div className='mid'>
        <Info />
        <Video />
        <Reviews />
        <Magazin />
      </div>
    </div>
  );
};

export default Home;
