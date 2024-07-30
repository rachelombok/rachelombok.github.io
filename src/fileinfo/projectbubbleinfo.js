import sulsulsimsimLogo from '../images/sulsulsimsim/plumbob1.svg';
import handyMapLogo from '../images/handymap/handymaplogo.png';
import justShootLogo from '../images/justshoot/digcamtrans.png';
import covideasLogo from '../images/covidforecasts/COVIDforecasts-logo-white-2.png';
import ultraHacksLogo from '../images/twitter/twitterlogo.png';
import rdsLogo from '../images/rds/rcclogo.png';

import { pathConstants } from './pathConstants';

export const projectBubbleInfo = [
    {
        title: 'SulSul! SimSim!',
        tagline: 'Understanding how to play with life.',
        bgColor: '#50c839',
        icon: sulsulsimsimLogo,
        linkPath: '',
        canvasPosition: ['1100px', '300px'],
        textColor: 'white',
        tier: 1
    },
    {
        title: 'HandyMap',
        tagline: 'Find accessible entrances easier than ever before.',
        bgColor: '#7d1f1f',
        icon: handyMapLogo,
        linkPath: '',
        canvasPosition: ['1200px', '-190px'],
        textColor: 'white',
        tier: 1
    },
    {
        title: 'JustShoot',
        tagline: 'Improving community for photographers everywhere.',
        bgColor: 'linear-gradient(#1215a8, #a30084)',
        icon: justShootLogo,
        linkPath: pathConstants.JUSTSHOOT,
        canvasPosition: ['-500px', '100px'],
        textColor: 'white',
        tier: 1
    },
    {
        title: 'Covid Forecasts',
        tagline: 'Creating a pandemic prediction market.',
        bgColor: '#000',
        icon: covideasLogo,
        linkPath: '',
        canvasPosition: ['-650px', '750px'],
        textColor: 'white',
        tier: 2
    },
    {
        title: 'Bouncer Bot',
        tagline: '#UltraHacks 2020 2nd place winner.',
        bgColor: '#c621a0',
        icon: ultraHacksLogo,
        linkPath: '',
        canvasPosition: ['600px', '300px'],
        textColor: 'white',
        tier: 3
    },
    {
        title: 'RDS',
        tagline: 'A solution to a unique robotics problem.',
        bgColor: '#242424',
        icon: rdsLogo,
        linkPath: '',
        canvasPosition: ['-1000px', '-380px'],
        textColor: 'white',
        tier: 1
    },
    {
        title: 'The Pink Effect',
        tagline: "Behind BLACKPINK's popularity in the K-Pop scene.",
        bgColor: '#ff99c5',
        icon: rdsLogo,
        linkPath: '',
        canvasPosition: ['-252px', '850px'],
        textColor: 'black',
        tier: 3
    },
];