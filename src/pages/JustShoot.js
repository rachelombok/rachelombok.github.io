import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import jslogo from "../images/justshoot/jstextlogo.jpg";
import jsimg1 from "../images/justshoot/justshoot1.jpg";
import jsimg2 from "../images/justshoot/justshoot2.jpg";
import jsimg3 from "../images/justshoot/justshoot3.png";

import { ProjectSectionDescription } from "../components/ProjectSectionDescription";

export default function JustShootPage() {
  const overview = (
    <>
      <a href="https://justshoot.netlify.app" className="justshoot-link">
        JustShoot
      </a>{" "}
      is a community and platform for photo enthusiasts to find cool locations
      for photo shoots.
    </>
  );

  const roles = "Fullstack Developer";
  const timeline = "August 2020 to 2023";
  return (
    <PageContainerOutline className="site-page" title="JustShoot">
      <PageHeader
        emoji={`📸`}
        lineOne="JustShoot"
        lineTwo="Improving community for photographers everywhere."
        stylename="justshoot-title"
      />

      <PageDetails
        id="justshoot"
        icon={jslogo}
        overview={overview}
        roles={roles}
        timeline={timeline}
      />

      <ProjectSectionDescription
        id="justshoot"
        subtitle="Ideation"
        heading="Why JustShoot?"
      >
        As a hobbyist photographer, one dilemma I always find myself in is never
        knowing where to go to shoot photos. Sometimes I want to visit somewhere
        with a lot of greenery, or maybe somewhere with a lot of graffiti and
        city buildings, but I never know where to start looking. This gave me an
        idea: what if you could have a website that served as a ‘Yelp’ for
        photographers? It could show photo destination spots for what you are
        looking for, and also show you feedback on how nice or bad the location
        is. This idea then turned into JustShoot.
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="justshoot"
        subtitle="background"
        heading="What is JustShoot?"
      >
        <p>
          JustShoot is a community and platform for photo enthusiasts to find
          cool locations for photo shoots. You can browse the map and search for
          snap spots posted by the JustShoot community. Get inspired by
          photographers in the area, find great spots to take photos, and share
          your own. To share photos with the community, double click the map or
          press the plus in the top right corner, upload your photo, set the
          correct location, and add a little writeup and details. The result is
          a collaborative open community and platform for photography
          enthusiasts, both amateur and professional.
        </p>
        <img src={jsimg1} className="my-5 border border-8 rounded border-neutral-content" alt="homescreen of JustShoot" />
        <img
          src={jsimg2}
          className="my-5 border border-8 rounded border-neutral-content"
          alt="the form that pops up when creating a new data point on the map"
        />
        <img
          src={jsimg3}
          className="my-5 border border-8 rounded border-neutral-content"
          alt="How the new data point appears on the map after creation"
        />
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="justshoot"
        subtitle="development"
        heading="How it was built."
      >
        JustShoot on the back end is built on top of Node.js/Express and
        MongoDB. On the front end, JustShoot uses React and Bootstrap. In
        addition, the web application also uses MapBox to provide its location
        data and show the places data and photo spots. Finally, JustShoot is
        deployed using Heroku. JustShoot was the first full stack project I
        created this past summer, and it taught me a lot about backend
        development and creating fully responsive web applications. In the
        future, I hope to add more features and functionality to the site, such
        as adding logins and profile pages for users, allowing multiple pictures
        to be shared, and also photospot suggestions based on where locations
        people search for. Check out the repo{" "}
        <a
          className="link justshoot"
          href="https://github.com/rachelombok/JustShoot"
        >
          here
        </a>
        .
        <iframe
          width="1250"
          height="670"
          src="https://www.youtube.com/embed/Zye6HkykpDY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto my-14"
        ></iframe>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="justshoot"
        subtitle="technologies"
        heading=""
      >
        <p className="flex space-x-2">
          <img
            alt="React"
            src="https://img.shields.io/badge/-React-red?style=flat-square&logo=react&logoColor=white"
            width="100px"
          />

          <img
            alt="Heroku"
            src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white"
            width="100px"
          />

          <img
            alt="MongoDB"
            src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"
            width="120px"
          />
          <img
            alt="NodeJS"
            src="https://img.shields.io/badge/-NodeJS-339933?style=flat-square&logo=node.js&logoColor=white"
            width="110px"
          />
          <img
            alt="Bootstrap"
            src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white"
            width="120px"
          />
        </p>
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
