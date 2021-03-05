import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './NavBarMenu.css';
import { handleLogout } from '../firebase';
export default function NavBarMobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    event.target.classList.add('click-state');
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
    event.target.classList.remove('click-state');
  };

  return (
    <div className='disable_on_desktop ctMenuMobile'>
      <Button
        aria-controls='headerNavBarMenuSt'
        className='btnMobileMenu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <div id='nav-iconMenu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>

      <Menu
        id='headerNavBarMenuSt'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='areaMenuTopMob blueBg'>
          <div className='subMenuMob blackBg'>
            <MenuItem onClick={handleClose}>
              <div className='mobileCtAccount '>
                <a title='' className='textWhite inactiveStyle'>
                  <span className='iconSetting'>&#xe672;</span> Account
                </a>
              </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <div className='mobileCtLock'>
                <a href='' title='' className='textWhite'>
                  <span className='iconLock'>&#xe66b;</span> Datenschutz
                </a>
              </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <div className='mobileCtFaq'>
                <a href='' title='' className='textWhite'>
                  <span className='iconBulb'>&#xe7bc;</span> FAQ
                </a>
              </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <div className='mobileLogout'>
                <a
                  href='/'
                  onClick={(e) => handleLogout(e)}
                  title=''
                  className='textWhite'
                >
                  <span className='iconOutput'>&#xe6d3;</span> Logout
                </a>
              </div>
            </MenuItem>
          </div>
        </div>
        <div className='bgSubMenu'>
          <img src='images/bgSubMenu.png' alt='' />
        </div>
      </Menu>
    </div>
  );
}
