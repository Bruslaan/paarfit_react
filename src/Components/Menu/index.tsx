import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { handleLogout } from '../../firebase';

interface Props {
  links: Array<Route>;
  menuType: string;
}

export interface Route {
  id: string | number;
  name: String;
  icon: any;
  destination: string;
}

export const Menu: React.FC<Props> = (props) => {
  const { links, menuType } = props;
  if (menuType === 'bottomMenu') {
    return (
      <div className='menu'>
        {links.map((link: any, index) => (
          <div key={index} className='bottomNavBarItemBox'>
            <NavLink
              exact
              activeClassName='btnProfileMenu'
              key={link.id}
              to={link.destination}
            >
              {link.icon}
            </NavLink>
          </div>
        ))}
      </div>
    );
  } else if (menuType === 'sidebarMenuTopSt') {
    return (
      <ul>
        {links.map((link: any, index) => (
          <li key={index}>
            <NavLink
              exact
              activeClassName='btnProfileMenu'
              key={link.id}
              to={link.destination}
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  } else if (menuType === 'sidebarMenuBottomSt') {
    return (
      <ul>
        {links.map((link: any, index) => (
          <li key={index}>
            <NavLink
              exact
              activeClassName='btnProfileMenu'
              key={link.id}
              to={link.destination}
            >
              {link.icon}
            </NavLink>
          </li>
        ))}

        <li>
          <a style={{ cursor: 'pointer' }} onClick={() => handleLogout()}>
            <span className='textWhite iconSettingInactive'>
              <span className='iconSetting'>&#xe6d3;</span>
            </span>
          </a>
        </li>
      </ul>
    );
  } else {
    return (
      <div className='menu'>
        {links.map((link) => (
          <NavLink
            exact
            activeClassName='btnProfileMenu'
            key={link.id}
            to={link.destination}
          >
            {link.icon}
          </NavLink>
        ))}
      </div>
    );
  }
};
