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
    name: 'Test',
    icon: (
      <span>
        <img src='images/hantel.svg' alt='' />
      </span>
    ),
    destination: '/',
  },
  {
    id: 2,
    name: 'Test',
    icon: (
      <>
        <span className='iconPremium'>&#xe6dd;</span>
        <div className='bulletAreaPremium purpleBg2'></div>
      </>
    ),
    destination: '/milestones',
  },
  {
    id: 4,
    name: 'Test',
    icon: (
      <span>
        <img src='/images/profile.svg' alt='' />
      </span>
    ),
    destination: '/profile',
  },
];
export const navLinksSidebarBottom: Route[] = [
  {
    id: 1,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe672;</span>
      </span>
    ),
    destination: '/settings',
  },
  {
    id: 2,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe66b;</span>
      </span>
    ),
    destination: '/privacy',
  },
  {
    id: 3,
    name: 'Test',
    icon: (
      <span className='textWhite'>
        <span className='iconSetting iconSettingInactive'>&#xe7bc;</span>
      </span>
    ),
    destination: '/tipps',
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

export const pricingPackage = [
  {
    subPeriod: 'Jährlich',
    price: '99 €',
    priceSubTitle: 'Pro Jahr',
    advice: 'Bestes Preis-Leistungs-Verhältnis',
    testTitle: '10 Tage kostenlos testen',
    body:
      'Effizientes Partnertraining ohne Geräte Auf Ihr Fitness-Niveau abgestimmt Ausgewogenes Ganzkörpertraining Über 15 % Ersparnis gegenüber monatlicher Zahlung',
  },
  {
    subPeriod: 'Monatlich',
    price: '10 €',
    priceSubTitle: 'Pro Monat',
    advice: 'Monatlich kündbar',
    testTitle: '10 Tage kostenlos testen',
    body:
      'Effizientes Partnertraining ohne Geräte Auf Ihr Fitness-Niveau abgestimmt Ausgewogenes Ganzkörpertraining',
  },
];

export const aboutComps = [
  {
    image:
      'https://static.wixstatic.com/media/11062b_680f5b66746f47efa38f7f9e7fc900cc~mv2_d_5638_3727_s_4_2.jpg/v1/fill/w_900,h_604,al_c,q_85,usm_0.66_1.00_0.01/Joggendes%20Paar.webp',
    title: 'Individuelles Training für Paare statt Einzelkämpfermodus',
    body:
      'Du hast keine Lust dich im Fitnessstudio zu quälen, aber Teamsport ist irgendwie auch nicht das Richtige für dich? Sport zu Hause war bisher immer eine recht einsame Angelegenheit – Bis jetzt! Denn PaarFit ist ein perfekt auf euer Fitnessniveau abgestimmtes Training, das ihr als Paar absolviert. Im Vordergrund steht, dass Ihr eure Ziele erreicht – und zwar nicht verbissen, sondern mit einem Lächeln im Gesicht!',
    hr: true,
  },
  {
    image: '',
    title: 'Partner-Workouts motivieren mit Spaß und Erfolg',
    body:
      'Sport zu zweit macht doppelt Spaß – und Motivation gibt’s gratis obendrauf. Sicherlich habt ihr in eurer Partnerschaft schon viele Herausforderungen gemeinsam gemeistert. Nutzt die Energie und Power eurer Beziehung, um eure persönlichen Fitnessziele zu erreichen. Und wie so oft im Leben, gilt auch hier: Zu zweit seid ihr – erst recht in Sachen Sport – unschlagbar! Denn es hilft ungemein, wenn man sich gegenseitig unterstützt. Und was ist motivierender, als gemeinsame Erfolge zu feiern…?',
    hr: true,
  },
  {
    image:
      'https://static.wixstatic.com/media/6e040fef51c84b90ad365705c889a549.jpg/v1/fill/w_906,h_594,al_c,q_85,usm_0.66_1.00_0.01/paar%20Yoga.webp',
    title: 'Fitness-Partnerübungen stärken die Beziehung & Körper',
    body:
      'Das tolle Gefühl, dem Partner oder der Partnerin im wahrsten Sinne des Wortes „den Rücken zu stärken“ ist unbezahlbar. Gleichzeitig intensiviert ihr das gegenseitige Vertrauen und die Kommunikation in eurer Partnerschaft. Gemeinsame Ziele stärken eure Paarbindung und ihr werdet sehen: Das Band zwischen euch wird dicker, während bei euch die Kilos purzeln.',
    hr: true,
  },
  {
    image: '',
    title: 'Das ideale Hobby für Paare mit Zeitmangel: Couple-Training',
    body:
      'Bei all den Alltagsverpflichtungen seid ihr froh, wenn ihr überhaupt genügend Zeit für euch findet? Verbindet eure Zweisamkeit mit euren Fitnesszielen: Wenn ihr als Paar gemeinsam trainiert, dann gewinnt ihr wertvolle quality time statt einen weiteren Zeifresser. Also durchbrecht den Alltagsstress, genießt die Zeit zu zweit und taucht in euer Partnerworkout ein.',
    hr: true,
  },
  {
    image:
      'https://static.wixstatic.com/media/11062b_686888b4fa24451ea729236905e527ae~mv2.jpeg/v1/fill/w_1160,h_616,al_c,q_85,usm_0.66_1.00_0.01/Paar.webp',
    title: 'Sport für Pärchen schafft emotionale & körperliche Nähe',
    body:
      'Wer gemeinsam Sport macht, lacht und sich gegenseitig berührt, bringt eine ganz neue Ebene der Körperlichkeit in die Beziehung. Also lasst euch auf die luftig-leichte Erotik ein, die das Partnertraining mit sich bringt und genießt die kribbelnde Anziehung.',
    hr: false,
  },
];
