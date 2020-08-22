import React from 'react'
import './Menu.css'
import { NavLink } from "react-router-dom"


interface Props {
    links: Array<Route>
}

export interface Route {
    id: string | number
    name: String
    icon: any
    destination: string
}

export const Menu: React.FC<Props> = ({ links }) => {
    return (

        <div className="menu">
            {links.map(link => <NavLink exact activeClassName="active__link" key={link.id} to={link.destination} >{link.icon}</NavLink>)}
        </div>


    )
}
