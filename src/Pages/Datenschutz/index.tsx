import React from 'react';
import './index.css';
import Footer from '../LandingPage/Footer/Footer';
import NavBar from '../LandingPage/NavBar';

const index = () => {
  return (
    <>
      <NavBar />
      <div className='datenschutz'>
        <h1>Datenschutz</h1>
      </div>
      <Footer />
    </>
  );
};

export default index;
