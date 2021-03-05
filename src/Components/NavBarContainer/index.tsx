import React from 'react'
import { Menu } from '../Menu'
import { NavBar } from '../NavBar'
import { Logo } from '../Logo'
import { navLinks } from '../../constants'


export default function NavBarContainer() {


    return (
        <div className="areaMenuTop"><NavBar
            itemLeft='Paarfit'
            itemRight='wir sind besser als ich' />
        </div>
        
    )
}
