import React from 'react'
import './Menu.css'
import { BrowserRouter, Link } from "react-router-dom"


interface Props {
    links: Array<LinkProp>
}

export interface LinkProp {
    id: string | number
    name: String
    icon: String
    destination: string
}

export const Menu: React.FC<Props> = ({ links }) => {
    return (
        <BrowserRouter >
            <div className="menu">
                {links.map(link => <Link key={link.id} to={link.destination} >{link.name}</Link>)}
            </div>
        </BrowserRouter>
    )
}
