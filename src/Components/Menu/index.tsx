import React from 'react'
import './Menu.css'
import { NavLink } from "react-router-dom"


interface Props {
    links: Array<Route>
    menuType: string
}

export interface Route {
    id: string | number
    name: String
    icon: any
    destination: string
}

export const Menu: React.FC<Props> = (props) => {
    const {links,menuType} = props;
    if(menuType==='bottomMenu'){
        return (        
            <div className="menu">
                {links.map(link => <div className="bottomNavBarItemBox"><NavLink exact activeClassName="active__link" key={link.id} to={link.destination} >{link.icon}</NavLink></div>)}
            </div>
        )
    }else if(menuType==='sidebarMenuTopSt'){
        return (        
            <ul>
                {links.map(link => <li><NavLink exact activeClassName="active__link" key={link.id} to={link.destination} >{link.icon}</NavLink></li>)}
            </ul>
        )
    }else if(menuType==='sidebarMenuBottomSt'){ 
        return (        
            <ul>
                {links.map(link => <li><NavLink exact activeClassName="active__link" key={link.id} to={link.destination} >{link.icon}</NavLink></li>)}
            </ul>
        )
    }else{
        return (            
            <div className="menu">
                {links.map(link => <NavLink exact activeClassName="active__link" key={link.id} to={link.destination} >{link.icon}</NavLink>)}
            </div>
        )
    }
    
}