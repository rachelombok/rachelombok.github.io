import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { Link } from "react-router-dom";
import { PageDetails } from "../components/PageDetails";
import handymapgroupwin from "../images/handymap/handymapgroup2.png";
import handymapgroupnight from "../images/handymap/handymapgroup3.png";
import mitmap from "../images/handymap/mitmap.jpg";
import handymapgroup1 from '../images/handymap/handymapgroup1.png';

export default function HandyMapPage() {
  const overview =
    "An app that identifies wheelchair accessible entrances in buildings and helps users naviagate to the location in the easiest possible way.";
  const team = (
    <>
      {" "}
      <p className="not-prose my-0">
        <a href="https://www.jntaimo.com" className="link handymap ">
          Joseph Ntaimo
        </a>
        , Creative/Programming Lead
      </p>
      <p className="not-prose my-0">
        <a
          href="https://www.linkedin.com/in/wenmichelle/"
          className="link handymap "
        >
          Michelle Wen
        </a>
        , Backend Developer
      </p>
      <p className="not-prose my-0">
        <a
          href="https://www.linkedin.com/in/vanessa-sun-3703b98b/"
          className="link handymap "
        >
          Vanessa Sun
        </a>
        , Graphic Designer
      </p>
    </>
  );
  return (
    <PageContainerOutline className="site-page">
      <PageHeader
        emoji={`👨‍🦽`}
        lineOne="HandyMap"
        lineTwo="HackMIT Best Assistive Tech Winner 2019."
        stylename="handymap"
      />

      <PageDetails
        id="handymap"
        icon={handymapgroupwin}
        overview={overview}
        roles="Frontend/Backend Developer"
        timeline="September 2019"
        team={team}
      />

      <ProjectSectionDescription
        id="handymap"
        subtitle="background"
        heading="What is HandyMap?"
      >
        <a href="https://devpost.com/software/handymap" className="link handymap">
          HandyMap
        </a>{" "}
        is an Android application created by Rachel Ombok, Michelle Wen, Joseph
        Ntaimo and Vanessa Sun at HackMIT 2019. It is an app that identifies
        wheelchair accessible entrances in buildings and helps users naviagate
        to the location in the easiest possible way. The project ranked in the
        Top 10 and won Best Assistive Tech project at the event against 200
        other teams.
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="handymap"
        subtitle="problem"
        heading="The Inspiration"
      >
        The project is inspired by the sister of one our creators, Joseph
        Ntaimo. Joseph often needs to help locate wheelchair accessible
        entrances to accommodate her, but they can be hard to find when
        buildings have multiple entrances. Therefore, we created our app as an
        innovative piece of assistive tech to improve accessibility across the
        M.I.T campus.
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="handymap"
        subtitle="ideation"
        heading="How We Built It"
      >
        <div className="flex justify-around">
          <div>
            <p className="mb-8">
              We started off using MIT’s Accessible Routes interactive map to
              see where the wheelchair friendly entrances were located at MIT.
              We then inspected the JavaScript code running behind the map to
              find the latitude and longitude coordinates for each of the
              wheelchair locations.
            </p>

            <p>
              We then created a Python script that filtered out the latitude and
              longitude values, ignoring the other syntax from the coordinate
              data, and stored the values in separate text files.
            </p>
          </div>
          <img
            src={handymapgroupnight}
            alt="Lego Poppy mindstorms robot"
            className="size-7/12 ml-1"
          />
        </div>
        <img alt="MIT campus map" src={mitmap} className="center"></img>

       

        <div className="flex justify-around">
          <div className="space-y-5">
          <p>
          We tested whether our method would work in Python first, because it is
          the language we all are most familiar with, by using string
          concatenation to add the proper Java syntax to the latitude and
          longitude points. Then we printed all of the points to the terminal
          and imported them into Android Studio.
        </p>
            <p>
              After being certain that the method would work, we uploaded these
              files into the raw folder in Android Studio and wrote code in Java
              that would iterate through both of the latitude/longitude lists
              simultaneously and plot them onto the map.
            </p>
            <p>
              The next step was learning how to change the color and image
              associated with each marker, which was very time intensive, but
              led us to having our custom logo for each of the markers.
            </p>

            <p>
              Separately, we designed elements of the app in Adobe Illustrator
              and imported logos and button designs into Android Studio. Then,
              through trial and error (and YouTube videos), we figured out how
              to make buttons link to different pages, so we could have both a
              FAQ page and the map. We split the work between frontend and
              backend, but always helped each other along the way.
            </p>

            <p>
              Then we combined both of the apps together atop of the original
              maps directory and ironed out the errors so that the pages would
              display properly. Check out our Github repository{" "}
              <a
                href="https://github.com/jntaimo/HandyMap"
                className="link handymap"
              >
                here
              </a>
              .
            </p>
          </div>
          <iframe
            width="1360"
            height="815"
            src="https://www.youtube.com/embed/rDeRYoFUZjI"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-8"
          ></iframe>
        </div>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id="handymap"
        subtitle="technologies"
        heading=""
      >
       <div className="flex space-x-2">
       <img  width="100px" alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" />
                <img  width="100px" alt="Javascript" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=javascript&logoColor=white" />
                <img width="160px" alt="Android Studio" src="https://img.shields.io/badge/-AndroidStudio-3DDC84?style=flat-square&logo=android-studio&logoColor=white" />
                <img width="150px" alt='Google Maps' src="https://img.shields.io/badge/-GoogleMaps-4285F4?style=flat-square&logo=google-maps&logoColor=white"/>
       </div>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id="handymap"
        subtitle="results"
        heading="Challenges we ran into/Accomplishments"
      >
        <p>
                We had a lot more ideas than we were able to implement. Stripping our app to basic, reasonable features was something we had to tackle in the beginning, but it kept changing as we discovered the limitations of our project throughout the 24 hours. Therefore, we had to sacrifice features that we would otherwise have loved to add.
            </p>
            <p>
                A big difficulty for our team was combining our different elements into a cohesive project. Since our team split up the usage of Android Studio, Adobe illustrator, and programming using the Google Maps API, it was most difficult to integrate all our work together.
            </p>
            <p>We were proud of how effectively we were able to split up our team’s roles based on everyone’s unique skills. In this way, we were able to be maximally productive and play to our strengths. We were also able to add Boston University accessible entrances in addition to MIT's, which proved that we could adopt this project for other schools and locations, not just MIT.</p>
           
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="handymap"
        subtitle="conclusion"
        heading="What we learned"
      >
       We used Android Studio for the first time to make the application. We discovered how much Google API had to offer, allowing us to make our map and include features such as instant directions to a location. This helped us realize that we should use our resources to their full capabilities. For 3 of us on the team, it was our first hackathon and we learned how to use our time efficiently in times of crunch, and how to communicate our ideas effectively and proactively as a team.
       <img src={handymapgroup1} className="mx-auto" alt="HandyMap team after the hackathon"/>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="handymap"
        subtitle="future"
        heading="What's next for HandyMap"
      >
       <p>
                Given more time, we knew we would have added many features such as accessibility for visually impaired students to help them find entrances, alerts for issues with accessing ramps and power doors, a community rating system of entrances, using machine learning and the community feature to auto-import maps that aren't interactive, and much, much more. Most important of all, we would apply it to all colleges and even anywhere in the world.
                Check out our <a href='https://devpost.com/software/handymap' className='link handymap'>Devpost</a> writeup!
            </p>
            <iframe width="1100" height="670" src="https://www.youtube.com/embed/QS6WupVbfqM"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="mx-auto"></iframe>
      
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
