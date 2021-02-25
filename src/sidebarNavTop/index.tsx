import React, { ReactNode } from 'react'

import { Menu } from '../Menu'
import { navLinksSidebarTop } from '../constants'



interface Props {
    items?: ReactNode

}

// sidebar Nav bar

export const SidebarNavTop: React.FC<Props> = (props) => {
    const { items } = props
    return (
        <div className="areaMenuLeftTop whiteBg">
             {items}
        </div>
    )
}
const menuType1 ='sidebarMenuTopSt';
export const SidebarNavTopContainer: React.FC<Props> = () => {
    
    return (
        <SidebarNavTop items={<Menu  links={navLinksSidebarTop} menuType="sidebarMenuTopSt" />} />
    )
}



