import React, { useEffect, useState } from 'react';
import logo from '../../assets/wort_Bild_nebeneinander.svg';
import './NavBar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (e: any) => {
    e.preventDefault();
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className='navBar'>
      <a href='/landing-page' style={{ textDecoration: 'none' }}>
        <img className='navBarLogo' src={logo} alt='PaarFit' width='160px' />
      </a>
      <div className='navBarContent' onClick={handleClick}>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='/pakete&Preise'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pakete & Preise
            </a>
          </li>
          <li className='über'>
            <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Über
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='/paarFitMagazin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PaarFitMagazin
            </a>
          </li>
        </ul>
        {button ? (
          <div className='navBtnComp'>
            <a href='/auth' className='navLogin'>
              Login
            </a>
            <a href='/register' style={{ textDecoration: 'none' }}>
              <button className='navBtn'>
                Jetzt Anmelden
                <svg
                  className='arroIcon'
                  height='20px'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        ) : (
          <div className='menuIcn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={click ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
