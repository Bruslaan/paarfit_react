
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
    {
        id: 3,
        name: "Training",
        icon: <FitnessCenterRoundedIcon />,
        destination: "/training"
    },
    {
        id: 4,
        name: "Training",
        icon: <Badge badgeContent={4} color="secondary">
            <Avatar src="https://avatars.dicebear.com/api/avataaars/seed.svg" />
        </Badge>,
        destination: "/profile"
    }
]