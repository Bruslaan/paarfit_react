import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
// import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import Avatar from '@material-ui/core/Avatar';
import { Route } from './Components/Menu';
import React from 'react';
import { Badge } from '@material-ui/core';

import img1 from './assets/MilestoneIcons/Durchstarter.svg';
import img2 from './assets/MilestoneIcons/Gewinnerteam_grls.svg';
import img3 from './assets/MilestoneIcons/Spitzensportler_bys.svg';

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
      <span>
        <img src='/images/hantel.svg' alt='' />
      </span>
    ),
    destination: '/',
  },
  {
    id: 6,
    name: 'Test',
    icon: (
      <>
        <span className='iconPremium'>&#xe6dd;</span>
      </>
    ),
    destination: '/milestones',
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
    destination: '/',
  },
];

export const navLinksSidebarTop: Route[] = [
  {
    id: 1,
    name: 'Test',
    icon: (
      <span>
        <img src='/images/hantel.svg' alt='' />
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

export const infoItems = [
  {
    title_1: 'ABWECHSLUNGSREICH',
    title_2: 'MOTIVIEREND',
    img: img1,
    subTitle: 'Power-Couple',
    body:
      'Unterstützt euch gegenseitig und erreicht eure Ziele mit abwechslungsreichen Partnerübungen für maximalen Trainingsspaß.',
  },

  {
    title_1: 'INDIVIDUELL',
    title_2: 'ALLTAGSTAUGLICH',
    img: img2,
    subTitle: 'Power-Couple',
    body:
      'Passt das Trainingskonzept euren Bedürfnissen an: Ihr bestimmt, wie intensiv das Training ist – jederzeit und überall, ohne Geräte.',
  },

  {
    title_1: 'Ganzheitlich',
    title_2: 'Effizient',
    img: img3,
    subTitle: 'Power-Couple',
    body:
      'Gestaltet eure gemeinsame Zeit und steigert dabei gleichzeitig euer Wohlbefinden für mehr Leistung und Vitalität im Alltag.',
  },
];

type Levels = {
  id: number;
  title: string;
  points: number;
  cssStyle: string;
  description: string;
  subdescription: string;
};

export const lvlSystem: Array<Levels> = [
  {
    id: 1,
    title: 'Durchstarter',
    points: 1500,

    cssStyle: 'ctDurchstarter',
    description: 'Das Geheimnis des Erfolgs ist anzufangen. (Mark Twain)',
    subdescription: 'Bleibt dran!',
  },
  {
    id: 2,
    title: 'Sportskanonen',
    points: 3000,
    cssStyle: 'ctSportkanonen',
    description: 'Der Anfang ist die Hälfte des Ganzen. (Aristoteles)',
    subdescription: ' Ihr habt einen grandiosen Start hingelegt!',
  },
  {
    id: 3,
    title: 'Gewinnerteam',
    points: 4500,
    cssStyle: 'ctGewinnerteam',
    description: 'Das W in gewinnen steht für Wir.',
    subdescription: 'Wir sind besser als ich – Weiter so!',
  },
  {
    id: 4,
    title: 'Überflieger',
    points: 6000,
    cssStyle: 'ctÜberflieger',
    description: 'In einem gesunden Körper wohnt ein gesunder Geist. (Juvenal)',
    subdescription: 'Eure Reise ist beeindruckend!',
  },
  {
    id: 5,
    title: 'Spitzensportler',
    points: 10000,
    cssStyle: 'ctSpitzensportler',
    description:
      'Die Belohnung erfolgreichen Tuns ist, es vollbracht zu haben. (R. W. Emerson)',
    subdescription: 'Ihr seid ein unschlagbares Team!',
  },
];

export const badgeArr = [
  {
    nr: 1,
    te: 1,
    badgeIcn: '1',
  },
  {
    nr: 2,
    te: 2,
    badgeIcn: '3',
  },
  {
    nr: 3,
    te: 3,
    badgeIcn: '9',
  },
  {
    nr: 4,
    te: 5,
    badgeIcn: '15',
  },
  {
    nr: 5,
    te: 7,
    badgeIcn: '21',
  },
  {
    nr: 6,
    te: 10,
    badgeIcn: '30',
  },
  {
    nr: 7,
    te: 15,
    badgeIcn: '45',
  },
  {
    nr: 8,
    te: 20,
    badgeIcn: '60',
  },
  {
    nr: 9,
    te: 25,
    badgeIcn: '75',
  },
  {
    nr: 10,
    te: 50,
    badgeIcn: '150',
  },
  {
    nr: 11,
    te: 75,
    badgeIcn: '225',
  },
  {
    nr: 12,
    te: 100,
    badgeIcn: '300',
  },
];

export const pricingPackage = [
  {
    subPeriod: 'Jahres-Sparabo',
    price: '135 € / Jahr',
    priceSubTitle: '2,60€/ pro Woche',
    advice: 'Bestes Preis-Leistungs-Verhältnis',
    testTitle: '14 Tage kostenlos testen',
    body: [
      'Individuell zugeschnittenes Partnertraining',
      'Alltagstauglich & ohne Geräte',
      'Ganzheitliche Fitness & Stressabbau',
    ],
  },
  {
    subPeriod: 'flexibles Monatsabo',
    price: '15 €/ Monat',
    priceSubTitle: '3,75€/ pro Woche',
    advice: 'Monatlich kündbar',
    testTitle: '14 Tage kostenlos testen',
    body: [
      'Individuell zugeschnittenes Partnertraining',
      'Alltagstauglich & ohne Geräte',
      'Ganzheitliche Fitness & Stressabbau',
    ],
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

export const motQuoteArr = [
  'Schön, dass ihr da seid!',
  'Toll, euch zu sehen!',
  'Jedes Training macht euch stärker!',
  'Ein Trainingstag ist ein gewonnener Tag!',
  'Ihr zwei seid großartig!',
  'Werdet die beste Version von euch selbst!',
  'Ein Schritt weiter Richtung Ziel!',
];

export const trainingMoods = [
  { title: 'Ausgelaugt', description: 'Lockeres Training' },
  { title: 'Etwas erschöpft', description: 'Moderates Training' },
  { title: 'Voller Energie', description: 'Wir geben heute alles' },
];
