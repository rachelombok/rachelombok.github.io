import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { ResumeDescription } from "../components/ResumeDescription";
import { Link } from "react-router-dom";
import { pathConstants } from "../fileinfo/pathConstants";
import resumeDoc from "../fileinfo/Rachel_Ombok_Resume_2024.pdf";
import ReactGA from "react-ga4";

export default function ResumePage() {
    ReactGA.send({ hitType: "pageview", page: "/resume", title: "Resume" });
  const resumeDownload = (
    <>
      Click{" "}
      <a href={resumeDoc} download="Rachel_Ombok_Resume.pdf">
        here
      </a>{" "}
      to download
    </>
  );

  return (
    <PageContainerOutline className="site-page" title="Resume">
      <PageHeader emoji={`💼`} lineOne="Resume." lineTwo={resumeDownload} />

      <h5 className="subtitle base-300">Education</h5>
      <ResumeDescription
        resumeLink="https://www.engineering.nyu.edu/"
        company="New York University, Tandon School of Engineering"
        id="nyu"
        subline="B.S. Computer Science · May 2022"
      >
        <p>Minor in Game Engineering </p>

        <p>
          {" "}
          <b>Honors: </b> Recipient of Nick Russo Award for Outstanding General
          Engineering Design, Grace Hopper Celebration Scholarship Recipient
          2020{" "}
        </p>
        <p>
          {" "}
          <b>Relevant Coursework:</b> Object Oriented Programming<b>(C++)</b>,
          Data Structures and Algorithms<b>(Python)</b>, Discrete Mathematics,
          Data Analysis, Computer Architecture and Organization, Introduction to
          Databases, Design and Analysis of Algorithms, Software Engineering,
          Operating Systems<b>(C)</b>, Linear Algebra and Differential
          Equations, Interactive Computer Graphics, Human Computer Interaction,{" "}
          <Link to={pathConstants.DM2133} className="link dm2133">
            3D Modeling
          </Link>
          ,{" "}
          <Link to={pathConstants.CS3113} className="link cs3113">
            Introduction to Game Programming
          </Link>
          ,
          <Link to={pathConstants.CS4553} className="link cs4553">
            {" "}
            Game Design
          </Link>
          , Introduction to Data Science, Java & Web Design
        </p>
        <p>
          <b>Other Coursework: </b>
          <Link className="link huztle" to={pathConstants.HUZTLE}>
            Podcasting Workshop
          </Link>
        </p>
      </ResumeDescription>

      <h5 className="subtitle base-300">Experience</h5>
      <ResumeDescription
        resumeLink="https://www.alteryx.com/products/alteryx-cloud"
        company="Alteryx - Growth Team"
        id="alteryx"
        subline="Software Engineer · July 2022 to June 2024"
      >
        <p>
          {" "}
          Implemented customer-centric features like Intercom chat messenger and a streamlined trial registration process, driving an increase in user activation for Alteryx Analytics Cloud platform;
          Spearheaded the development and launch of an integration between
          Alteryx’s Designer Cloud and Databricks, Enabling seamless data
          transfer and a unified user experience between the two platforms, and
          Contributed to an increase of 1000 monthly trial sign-ups to Alteryx
          Analytics Cloud by optimizing usability and implementing user growth
          features.
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview"
        company="Twitter - Embed Client Team"
        id="twitter"
        subline="Software Engineering Intern · June 2021 to August 2021"
      >
        <p>
          {" "}
          Developed a Reply Prompt box prototype for embedded Tweets using React
          to introduce more non-users to the Twitter platform, then Conducted a
          user experiment to evaluate an alternative prompt box design,
          resulting in a 7.5% increase in conversion clicks to on-platform
          content. Prototyped and tested a solution for Video Embeds that
          boosted conversion rates and user engagement with embedded Tweets
          containing video.{" "}
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink="https://explorecsr.cs.brown.edu/ai/index.html"
        company="Brown University - exploreCSR"
        id="explorecsr"
        subline="Research Intern · February 2022 to May 2022"
      >
        <p>
          {" "}
          Research Intern in Brown University research program,
          Socially-Responsible AI for Computational Creativity. Program funded
          by Google Research's exploreCSR initiative.
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink="https://game.engineering.nyu.edu"
        company="NYU Game Innovation Lab"
        id="nyu"
        subline="Research Intern · Feb 2020 to August 2020"
      >
        <p>
        Developed general game-playing AI agents for The Sims 4 using a quality diversity evolutionary algorithm. Analyzed and interpreted
          experiment results alongside graduate students and postdocs, and
          organized notes & data within a thesis paper. This was the{" "}
          <Link to={pathConstants.SULSULSIMSIM} className="link sulsulsimsim">
            SulSulSimSim project
          </Link>
          .
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink={pathConstants.COVIDFORECASTS}
        company="Georgia Tech - COVIDEAS 2020 REU"
        id="covideas"
        subline="Research Intern · June 2020 to December 2020"
      >
        <p>
          {" "}
          Conducted research for building a prediction market for the
          coronavirus pandemic by aggregating public health forecast data, and
          built an interactive COVID-19 forecasting website with React and Flask
          that allows users to predict future pandemic-related metrics and
          stores their predictions securely in a MongoDB database. Also designed
          a dynamic website for REU organization and oversaw program website
          updates and modifications.
        </p>
      </ResumeDescription>
      <h5 className="subtitle base-300">Experience</h5>
      <ResumeDescription
        resumeLink={pathConstants.HANDYMAP}
        company="HandyMap"
        id="handymap"
        subline="Java & Python · Sep 2019"
      >
        <p>
          {" "}
          Coded backend of Android application that identifies wheelchair
          accessible entrances on the MIT & Boston University campuses.
          Programmed in-app scenes in Java that iterated through latitude and
          longitude coordinates, and mapped them using the Google API. Winner of
          Best Assistive Tech Project & placed Top 10 against 200+ teams at
          HackMIT 2019.
        </p>
      </ResumeDescription>
      <ResumeDescription
        resumeLink={pathConstants.JUSTSHOOT}
        company="JustShoot"
        id="justshoot"
        subline="MERN Stack & AWS S3"
      >
        <p>
          {" "}
          JustShoot is a community and platform for photo enthusiasts to find
          cool locations for photo shoots. Created a fullstack app with login
          authentication, multer-s3 deployment and MongoDB storage. Deployed
          using Netlify and Heroku.
        </p>
      </ResumeDescription>

      <h5 className="subtitle base-300">Leadership Activities</h5>
      <ResumeDescription
        resumeLink="https://www.instagram.com/gwcnyu/?hl=en" // {pathConstants.GIRLSWHOCODE}
        company="NYU Girls Who Code College Loop"
        id="nyu"
        subline="Founder/President · Oct 2019 to May 2022"
      >
        <p>
          {" "}
          Founder and organizer of bimonthly meetings for the Girls Who Code
          (GWC) College Loop at New York University. Recruited members, plan.ed
          meetings, managed logistics, and served as the point of contact with
          Girls Who Code organization. Managed monthly challenges that hone
          computer science skills, and provided professional development
          opportunities with industry professionals and Girls Who Code corporate
          partners. Won numerous awards at Tandon Student Leader Awards, including Outstanding New Initiative and Outstanding Organizational Collaboration.
          Recognized as an exceptional leader within the Girls Who Code community by receiving the prestigious <a className="underline" href='https://www.linkedin.com/posts/tarikabarrett_womenempoweringwomenwednesday-activity-7181387765807288321-k-gF?utm_source=share&utm_medium=member_desktop'>Reshma Saujani Girls First
    Leadership Award</a>, for my participation in many different Girls Who Code initiatives.
        </p>
      </ResumeDescription>

      <h5 className="subtitle base-300">Awards</h5>
      <ResumeDescription
        resumeLink={pathConstants.RDS}
        company="Nick Russo Award for Outstanding General Engineering Design"
        id="rds"
        subline="Aug 2019"
      >
        <p>
          {" "}
          Retrieval and Delivery System Design Project was a project apart of
          the core curriculum of all NYU engineering students. The purpose was
          to teach students how to manage a project, by creating a project
          outline, producing multi-stage prototypes and marketing your product
          at the end. My team's project was selected as the best Retrieval and
          Delivery System project, from among 150 other teams.
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink='https://www.linkedin.com/posts/tarikabarrett_womenempoweringwomenwednesday-activity-7181387765807288321-k-gF?utm_source=share&utm_medium=member_desktop'
        company="Reshma Saujani Girls First Leadership Award"
        id="gwc"
        subline="April 2024"
      >
        <p>
          {" "}
          Each year, to commemorate Girls Who Code’s anniversary, the organization honors a member of the community who exemplifies the organization's values of bravery, sisterhood, and changing the face of tech. I was the recipient in 2024
          for my leadership and participation in many different Girls Who Code initiatives such as College Loops, Hiring Summit, Staff Retreat, and Summer Immersion Program.
        </p>
      </ResumeDescription>

      <ResumeDescription
        resumeLink='https://animfund.org/programs/gdc-scholarship-program/gdc-scholars/'
        company="Animation Diversity Foundation GDC 2022 Scholar"
        id="adf"
        subline="March 2022"
      >
        <p>
          {" "}
          The ADF GDC Scholarship provides All Access passes to GDC in San Francisco. Consistent with the ADF mission statement, they aim to increase access and opportunity to marginalized or under-represented groups 
          in the games industry, in order to improve diversity and inclusion. Scholarship recipients focus on animation-related disciplines, such as character animation, technical animation/rigging, animation programming, etc. <a className="link adf" href='https://www.linkedin.com/posts/rachelombok_animation-gdc-gamedevelopersconference-activity-6914229793211183105-qLjH?utm_source=share&utm_medium=member_desktop'>My post about the experience.</a>
           </p>
      </ResumeDescription>

      <h5 className="subtitle base-300">Skills</h5>
      <ResumeDescription resumeLink="" company="Technical" id="" subline="">
        <p>
          {" "}
          Javascript, React, Node.js, Progressive Web Development(HTML,CSS,Javascript),
          Python, C++, Flask
        </p>
        <p><b>Certifications: </b><a href='https://www.credly.com/badges/96c1c556-dc48-473a-a201-510e9f6a89f4' className="underline link">Google Cloud Digital Leader</a></p>
      </ResumeDescription>
      <ResumeDescription resumeLink="" company="Software" id="" subline="">
        <p>
          {" "}
          Microsoft Office, G Suite, Heroku, Netlify, VS Code, Figma, Autodesk
          Maya
        </p>
      </ResumeDescription>
      <ResumeDescription resumeLink="" company="Interests" id="" subline="">
        <p> Photography, Guitar, Videogames</p>
      </ResumeDescription>
    </PageContainerOutline>
  );
}
