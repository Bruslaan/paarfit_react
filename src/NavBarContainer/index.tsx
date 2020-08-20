import React from 'react'
import { Menu, LinkProp } from '../Menu'
import { NavBar } from '../NavBar'
import { Logo } from '../Logo'


export default function NavBarContainer() {

    const navLinks: Array<LinkProp> = [
        {
            id: 1,
            name: "Home",
            icon: "test",
            destination: "/test"
        },
        {
            id: 2,
            name: "Profile",
            icon: "test",
            destination: "/test"
        },
        {
            id: 3,
            name: "Training",
            icon: "test",
            destination: "/test"
        }
    ]
    return (
        <NavBar itemLeft={<Logo name="PaarFit"></Logo>} itemRight={<Menu links={navLinks} />} />
    )
}
