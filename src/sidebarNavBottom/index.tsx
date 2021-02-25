import React, { ReactNode } from 'react'

import { Menu } from '../Menu'
import { navLinksSidebarBottom } from '../constants'



interface Props {
    items?: ReactNode

}

// sidebar Nav bar

export const SidebarNavBottom: React.FC<Props> = (props) => {
    const { items } = props
    return (
        <div className="detMenuLeftBottom whiteBg">
           <div className="areaMenuLeftBottom blackBg">
                {items}
            </div>
        </div>
    )
}
const sidebarMenuBottomSt ='sidebarMenuTopSt';
export const SidebarNavBottomContainer: React.FC<Props> = () => {
    
    return (
        <SidebarNavBottom items={<Menu  links={navLinksSidebarBottom} menuType="sidebarMenuBottomSt" />} />
    )
}



