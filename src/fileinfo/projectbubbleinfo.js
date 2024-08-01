import sulsulsimsimLogo from '../images/sulsulsimsim/plumbob1.svg';
import handyMapLogo from '../images/handymap/handymaplogo.png';
import justShootLogo from '../images/justshoot/digcamtrans.png';
import covideasLogo from '../images/covidforecasts/updatedcovideaslogo.png';
import ultraHacksLogo from '../images/twitter/twitterlogo.png';
import rdsLogo from '../images/rds/rcclogo.png';

import { pathConstants } from './pathConstants';

const pinkEffectIcon = <>
 <div class="hvr-float">
                <div class="blackpink-soundwaves-container">
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-1"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-5"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-4"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-2"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-4"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-6"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-5"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-2"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-5"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-1"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-2"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-5"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-4"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-4"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-7"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-3"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-5"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-4"></div>
                  <div class="hvr-bounce-in bp-soundwaves bp-soundwaves-1"></div>
                </div>
              </div>
</>;

export const projectBubbleInfo = [
    {
        title: 'SulSul! SimSim!',
        tagline: 'Understanding how to play with life.',
        bgColor: '#50c839',
        icon: sulsulsimsimLogo,
        linkPath: '/sulsulsimsim',
        canvasPosition: ['1100px', '300px'],
        textColor: 'white',
        tier: 1,
        showOnCanvas: true
    },
    {
        title: 'HandyMap',
        tagline: 'Find accessible entrances easier than ever before.',
        bgColor: '#7d1f1f',
        icon: handyMapLogo,
        linkPath: '/handymap',
        canvasPosition: ['1200px', '-190px'],
        textColor: 'white',
        tier: 1,
        showOnCanvas: true
    },
    {
        title: 'JustShoot',
        tagline: 'Improving community for photographers everywhere.',
        bgColor: 'linear-gradient(#1215a8, #a30084)',
        icon: justShootLogo,
        linkPath: pathConstants.JUSTSHOOT,
        canvasPosition: ['-500px', '100px'],
        textColor: 'white',
        tier: 1,
        showOnCanvas: true
    },
    {
        title: 'Covid Forecasts',
        tagline: 'Creating a pandemic prediction market.',
        bgColor: '#000',
        icon: covideasLogo,
        linkPath: '/covidforecasts',
        canvasPosition: ['-650px', '750px'],
        textColor: 'white',
        tier: 2,
        showOnCanvas: true
    },
    {
        title: 'Bouncer Bot',
        tagline: '#UltraHacks 2020 2nd place winner.',
        bgColor: '#c621a0',
        icon: ultraHacksLogo,
        linkPath: '/bouncerbot',
        canvasPosition: ['600px', '300px'],
        textColor: 'white',
        tier: 3,
        showOnCanvas: true
    },
    {
        title: 'RDS',
        tagline: 'A solution to a unique robotics problem.',
        bgColor: '#242424',
        icon: rdsLogo,
        linkPath: '/rds',
        canvasPosition: ['-1000px', '-380px'],
        textColor: 'white',
        tier: 1,
        showOnCanvas: true
    },
    {
        title: 'The Pink Effect',
        tagline: "Behind BLACKPINK's popularity in the K-Pop scene.",
        bgColor: '#ff99c5',
        icon: null,
        elementIcon: pinkEffectIcon,
        linkPath: '',
        canvasPosition: ['-252px', '850px'],
        textColor: 'black',
        tier: 2,
        showOnCanvas: false
    },
];