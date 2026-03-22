import sulsulsimsimLogo from "../images/sulsulsimsim/plumbob1.svg";
import handyMapLogo from "../images/handymap/handymaplogo.png";
import justShootLogo from "../images/justshoot/digcamtrans.png";
import covideasLogo from "../images/covidforecasts/updatedcovideaslogo.png";
import ultraHacksLogo from "../images/twitter/twitterlogo.png";
import rdsLogo from "../images/rds/rcclogo.png";

import { pathConstants } from "./pathConstants";

const pinkEffectIcon = (
  <>
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
  </>
);

export const projectBubbleInfo = [
  {
    id: "sulsulsimsim",
    name: "SulSul! SimSim!",
    tagline: "Understanding how to play with life.",
    color: "simsimgreen",
    colorEnd: "simsimgreen",
    icon: sulsulsimsimLogo,
    linkPath: "/sulsulsimsim",
    canvasPosition: ["700px", "100px"],
    textColor: "white",
    importance: "major",
    showOnCanvas: true,
  },
  {
    id: "handymap",
    name: "HandyMap",
    tagline: "Find accessible entrances easier than ever before.",
    color: "handyMapred",
    colorEnd: "handyMapred",
    icon: handyMapLogo,
    linkPath: "/handymap",
    canvasPosition: ["1000px", "-190px"],
    textColor: "white",
    importance: "major",
    showOnCanvas: true,
  },
  {
    id: "justshoot",
    name: "JustShoot",
    tagline: "Improving community for photographers everywhere.",
    color: "justshootpurple",
    colorEnd: "justshootpink",
    icon: justShootLogo,
    linkPath: pathConstants.JUSTSHOOT,
    canvasPosition: ["-650px", "300px"],
    textColor: "white",
    importance: "major",
    showOnCanvas: true,
  },
  {
    id: "covidforecasts",
    name: "COVIDforecasts",
    tagline: "Creating a pandemic prediction market.",
    color: "nearblack",
    colorEnd: "gray",
    icon: covideasLogo,
    linkPath: "/covidforecasts",
    canvasPosition: ["-150px", "-300px"],
    textColor: "white",
    importance: "medium",
    showOnCanvas: true,
  },
  {
    id: "rds",
    name: "RDS",
    tagline: "A solution to a unique robotics problem.",
    color: "rdsgray",
    colorEnd: "rdsgray",
    icon: rdsLogo,
    linkPath: "/rds",
    canvasPosition: ["-1050px", "-380px"],
    textColor: "white",
    importance: "major",
    showOnCanvas: true,
  },
  {
    id: "bouncer-bot",
    name: "Bouncer Bot",
    tagline: "#UltraHacks 2020 2nd place winner.",
    color: "bouncerbotpink",
    colorEnd: "bouncerbotpink",
    icon: ultraHacksLogo,
    linkPath: "/bouncerbot",
    canvasPosition: ["-300px", "300px"],
    textColor: "white",
    importance: "minor",
    showOnCanvas: true,
  },
];
