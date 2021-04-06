import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/wort_Bild_nebeneinander.svg';
import './NavBar.css';

const NavBar = ({ url }: any) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = (e: any) => {
    e.preventDefault();
    setClick(false);
  };

  const doNothing = (e: any) => {};

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
      <a href='/' style={{ textDecoration: 'none' }}>
        <img className='navBarLogo' src={logo} alt='PaarFit' width='160px' />
      </a>
      <div className='navBarContent' onClick={handleClick}>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              exact
              key='/pricing'
              to='/pakete_&_preise'
              className='nav-links'
              activeStyle={{
                fontWeight: 'bold',
                color: 'rgb(93,	98,	231)',
              }}

              // onClick={window.innerWidth <= 960 ? closeMobileMenu : doNothing}
            >
              Pakete & Preise
            </NavLink>
          </li>
          <li className='über'>
            <NavLink
              exact
              key='/about'
              to='/paarfit_philosophie'
              className='nav-links'
              activeStyle={{
                fontWeight: 'bold',
                color: 'rgb(93,	98,	231)',
              }}
              // onClick={window.innerWidth <= 960 ? closeMobileMenu : doNothing}
            >
              PaarFit Philosophie
            </NavLink>
          </li>
          {/* <li className='nav-item'>
            <NavLink
            exact
                          key='/about'
              to='/landing/magazin'
              className='nav-links'
              activeStyle={{
                fontWeight: 'bold',
                color: 'rgb(93,	98,	231)',
              }}
              onClick={window.innerWidth <= 960 ? closeMobileMenu : doNothing}
            >
              PaarFitMagazin
            </NavLink>
          </li> */}
        </ul>
        {button ? (
          <div className='navBtnComp'>
            <a href='/einloggen' className='navLogin'>
              Login
            </a>
            <a href='/registrieren' style={{ textDecoration: 'none' }}>
              <button className='paarfit_button'>
                Kostenlos testen
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
