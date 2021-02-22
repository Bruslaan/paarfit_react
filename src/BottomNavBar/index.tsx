import React, { ReactNode } from 'react'
import './index.css'

import { Menu } from '../Menu'
import { navLinksMobileFooter } from '../constants'



interface Props {
    items?: ReactNode

}

// bottom Nav bar

export const BottomNavBar: React.FC<Props> = (props) => {
    const { items } = props
    return (
        <nav className="bottom__nav__bar menuAreaBottomMob disable_on_desktop">
            <div className="bottom__nav_bar_items">
                {items}
            </div>
        </nav>
    )
}
const menuType1 ='bottomMenu';
export const BottomNavBarContainer: React.FC<Props> = () => {
    
    return (
        <BottomNavBar items={<Menu  links={navLinksMobileFooter} menuType="bottomMenu" />} />
    )
}



