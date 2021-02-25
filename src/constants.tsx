
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import Avatar from '@material-ui/core/Avatar';
import { Route } from './Menu'
import React from 'react'
import { Badge } from '@material-ui/core';



export const navLinks: Route[] = [
    {
        id: 1,
        name: "Home",
        icon: <HomeRoundedIcon />,
        destination: "/"
    },
    // {
    //     id: 2,
    //     name: "Profile",
    //     icon: <PersonRoundedIcon />,
    //     destination: "/profile"
    // },
    // {
    //     id: 3,
    //     name: "Training",
    //     icon: <FitnessCenterRoundedIcon />,
    //     destination: "/training"
    // },
    {
        id: 4,
        name: "Training",
        icon: <Badge badgeContent={"!"} color="secondary">
            <Avatar src="https://avatars.dicebear.com/api/avataaars/seed.svg" />
        </Badge>,
        destination: "/profile"
    }

]

export const navLinksMobileFooter: Route[] = [

     {
         id: 5,
         name: "Test",
         icon: <span className="iconHantelMob"><img src="/images/hantel.svg" alt=""/></span>,
         destination: "/profile"
     },
     {
         id: 6,
         name: "Test",
         icon: <span className="iconPremiumMob">&#xe6dd;<div className="bulletAreaPremiumMob purpleBg2"></div></span>,
         destination: "/profile"
     },
     {
         id: 7,
         name: "Test",
         icon: <span className="iconProfileMob"><img src="/images/profile.svg" alt=""/></span>,
         destination: "/profile"
     },
     {
         id: 8,
         name: "Test",
         icon: <span className="iconSettingMob">&#xe672;</span>,
         destination: "/profile"
     },
 ]

export const navLinksSidebarTop: Route[] = [
    {
        id: 1,
        name: "Test",
        icon: <span><img src="images/hantel.svg" alt=""/></span>,
        destination: "/profile"
    },
    {
        id: 2,
        name: "Test",
        icon: <><span className="iconPremium">&#xe6dd;</span><div className="bulletAreaPremium purpleBg2"></div></>,
        destination: "/profile"
    },
    {
        id: 4,
        name: "Test",
        icon: <span className="btnProfileMenu"><img src="/images/profile.svg" alt=""/></span>,
        destination: "/profile"
    },
]
export const navLinksSidebarBottom: Route[] = [
    {
        id: 1,
        name: "Test",
        icon: <span className="textWhite"><span className="iconSetting">&#xe672;</span></span>,
        destination: "/profile"
    },
    {
        id: 2,
        name: "Test",
        icon: <span className="textWhite"><span className="iconSetting">&#xe66b;</span></span>,
        destination: "/profile"
    },
    {
        id: 4,
        name: "Test",
        icon: <span className="textWhite"><span className="iconSetting">&#xe7bc;</span></span>,
        destination: "/profile"
    },
    {
        id: 4,
        name: "Test",
        icon: <span className="textWhite"><span className="iconSetting">&#xe6d3;</span></span>,
        destination: "/profile"
    },
]