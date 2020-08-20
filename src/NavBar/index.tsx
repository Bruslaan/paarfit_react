import React, { ReactNode } from 'react'
import './NavBar.css'


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
                {itemLeft}
                <div className="disable_on_mobile">
                    {itemRight}
                </div>
            </div>
        </nav>
    )
}



