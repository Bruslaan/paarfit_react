import React from 'react'
import { Menu } from '../Menu'
import { NavBar } from '../NavBar'
import { Logo } from '../Logo'
import { navLinks } from '../constants'


export default function NavBarContainer() {


    return (
        <NavBar
            itemLeft={<Logo name="PaarFit"></Logo>}
            itemRight={<Menu links={navLinks} />} />
    )
}
