import React, { ReactNode } from 'react'
import './NavBar.css'
import NavBarMobileMenu from '../NavBarMenu'

interface Props {
    itemLeft?: ReactNode
    itemRight?: ReactNode
}

// top Nav bar

export const NavBar: React.FC<Props> = (props) => {
    const { itemLeft, itemRight } = props
    return (
        <nav className="nav__bar">
            <div className="nav_bar_items">
                <div className="textWhite contentTopLeft">
                    <NavBarMobileMenu/>
                    <div className="areaLogoTopLeft">{itemLeft}</div>
                </div>
                <div className="disable_on_mobile">
                    <div className="yellow1 contentTopRight">{itemRight}</div>
                </div>
            </div>
        </nav>
    )
}



