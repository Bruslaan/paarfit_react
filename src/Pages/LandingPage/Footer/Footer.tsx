import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <a href='/impressum' className='footerLink'>
          Impressum
        </a>
        <a href='/datenschutz' className='footerLink'>
          Datenschutz
        </a>
        <a href='/agb' className='footerLink'>
          AGB
        </a>
      </div>
    </div>
  );
};

export default Footer;
