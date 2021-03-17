import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import Avatar from '@material-ui/core/Avatar';
import { Route } from './Components/Menu';
import React from 'react';
import { Badge } from '@material-ui/core';

export const navLinks: Route[] = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeRoundedIcon />,
    destination: '/',
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
    name: 'Training',
    icon: (
      <Badge badgeContent={'!'} color='secondary'>
        <Avatar src='https://avatars.dicebear.com/api/avataaars/seed.svg' />
      </Badge>
    ),
    destination: '/profile',
  },
];

export const navLinksMobileFooter: Route[] = [
  {
    id: 5,
    name: 'Test',
    icon: (
      <span className='iconHantelMob'>
        <img src='/images/hantel.svg' alt='' />
      </span>
    ),
    destination: '/profile',
  },
  {
    id: 6,
    name: 'Test',
    icon: (
      <span className='iconPremiumMob'>
        &#xe6dd;<div className='bulletAreaPremiumMob purpleBg2'></div>
      </span>
    ),
    destination: '/profile',
  },
  {
    id: 7,
    name: 'Test',
    icon: (
      <span className='iconProfileMob'>
        <img src='/images/profile.svg' alt='' />
      </span>
    ),
    destination: '/profile',
  },
  {
    id: 8,
    name: 'Test',
    icon: <span className='iconSettingMob'>&#xe672;</span>,
    destination: '/profile',
  },
];

export const navLinksSidebarTop: Route[] = [
    {
        id: 1,
        name: "Test",
        icon: <span><img src="images/hantel.svg" alt=""/></span>,
        destination: "/"
    },
    {
        id: 2,
        name: "Test",
        icon: <><span className="iconPremium">&#xe6dd;</span><div className="bulletAreaPremium purpleBg2"></div></>,
        destination: "/milestones"
    },
    {
        id: 4,
        name: "Test",
        icon: <span><img src="/images/profile.svg" alt=""/></span>,
        destination: "/profile"
    },
]
export const navLinksSidebarBottom: Route[] = [
  {
    id: 1,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe672;</span>
      </span>
    ),
    destination: '',
  },
  {
    id: 2,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe66b;</span>
      </span>
    ),
    destination: '',
  },
  {
    id: 3,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe7bc;</span>
      </span>
    ),
    destination: '',
  },
];

type Levels = {
  id: number;
  title: string;
  points: number;
  cssStyle: string;
  description: string;
};

export const lvlSystem: Array<Levels> = [
  {
    id: 1,
    title: 'Starter-Couple',
    points: 250,
    cssStyle: 'ctStartCouple',
    description:
      'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
  },
  {
    id: 2,
    title: 'Power-Couple',
    points: 500,
    cssStyle: 'ctPowerCouple',
    description:
      'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
  },
  {
    id: 3,
    title: 'Fitness-Couple',
    points: 1000,
    cssStyle: 'ctFitnessCouple',
    description:
      'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
  },
  {
    id: 4,
    title: 'Advanced-Couple',
    points: 2000,
    cssStyle: 'ctAdvancedCouple',
    description:
      'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
  },
  {
    id: 5,
    title: 'Super-Couple',
    points: 5000,
    cssStyle: 'ctSuperCouple',
    description:
      'Als Power-Couple seid ihr unbesiegbar. Lorem ipsum dolor sit amet, consec',
  },
];

export const badgeArr = [
  {
    nr: 1,
    title: 'drop',
    te: 1,
    badgeIcn: <div className='iconBadges textWhite'>&#xe641;</div>,
  },
  {
    nr: 2,
    title: 'rocket',
    te: 2,
    badgeIcn: <div className='iconBadges textWhite'>&#xe837;</div>,
  },
  {
    nr: 3,
    title: 'on fire',
    te: 3,
    badgeIcn: <div className='iconBadges textWhite'>&#xe638;</div>,
  },
  {
    nr: 4,
    title: 'gifted',
    te: 5,
    badgeIcn: <div className='iconBadges textWhite'>&#xe7ff;</div>,
  },
  {
    nr: 5,
    title: 'star',
    te: 10,
    badgeIcn: <div className='iconBadges textWhite'>&#xe68d;</div>,
  },
  {
    nr: 6,
    title: 'loud',
    te: 15,
    badgeIcn: <div className='iconBadges textWhite'>&#xe8ae;</div>,
  },
  {
    nr: 7,
    title: 'moon',
    te: 20,
    badgeIcn: <div className='iconBadges textWhite'>&#xe649;</div>,
  },
  {
    nr: 8,
    title: 'pac-man',
    te: 25,
    badgeIcn: <div className='iconBadges textWhite'>&#xe684;</div>,
  },
  {
    nr: 9,
    title: 'weights',
    te: 50,
    badgeIcn: <div className='iconBadges textWhite'>&#xe861;</div>,
  },
  {
    nr: 10,
    title: 'circle',
    te: 75,
    badgeIcn: <div className='iconBadges textWhite'>&#xe8d2;</div>,
  },
  {
    nr: 11,
    title: 'rain',
    te: 100,
    badgeIcn: <div className='iconBadges textWhite'>&#xe641;</div>,
  },
  {
    nr: 12,
    title: 'diamond',
    te: 250,
    badgeIcn: <div className='iconBadges textWhite'>&#xe807;</div>,
  },
];
