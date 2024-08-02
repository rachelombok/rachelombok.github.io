import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import nickrussoaward from "../images/rds/nickrussoaward.JPG";
import projectsched from "../images/rds/projectsched.png";
import course from "../images/rds/rdscourse.jpg";
import legopoppy1 from "../images/rds/legopoppy1.png";
import legopoppy2 from "../images/rds/legopoppy2.png";
import legopoppy3 from "../images/rds/legopoppy3.png";
import poppy from "../images/rds/poppy1.png";
import mindstormscode from "../images/rds/mindstormscode2.png";

export default function RDSPage() {
  const overview =
    "A project that solved a unique problem statment for my General Engineering & Prototyping course. Winner of Nick Russo Award for Outstanding General Engineering Design.";
  const team = (
    <>
      <p className="not-prose my-0">Christopher Glenn, Head Designer/Builder</p>
      <p className="not-prose my-0">Cameron Noori, Director of Software</p>
    </>
  );
  return (
    <PageContainerOutline className="site-page" title="RDS">
      <PageHeader
        emoji={`🤖`}
        lineOne="Retrieval & Delivery System"
        lineTwo="A solution to a unique problem."
        stylename=""
      />

      <PageDetails
        id=""
        icon={nickrussoaward}
        overview={overview}
        roles="Project Coordinator"
        timeline="September 2018 to December 2018"
        team={team}
      />

      <ProjectSectionDescription
        id=""
        subtitle="abstract"
        heading="Introduction & Overview"
      >
        <p>
          Problem prompt:{" "}
          <i>
            A blackout has occurred in New York City. Three hospitals have used
            up their backup power supplies due to the unanticipated duration of
            the blackout. There are some power supply areas in the city with
            fuel cells that supply enough power for the hospitals' need. In
            order to save lives, Mayor Bill de Blasio has issued an RFP for a
            robot that can retrieve and deliver fuel cells accumulating a
            minimum of 200 hours of reserve energy.
          </i>
        </p>
        <p>
          <i>
            Your robot must be able to navigate the course autonomously around
            the city and retrieve fuel cells and deliver them to hospitals, in
            less than 5 minutes. You must design the product with the tools
            given (Lego Mindstorms, Lego Digital Designer, Autodesk Fusion360,
            etc).
          </i>
        </p>
        <p>
          For the project we separated our roles to efficiently accomplish tasks
          and finish on time. I was the Project Coordinator, and was in charge
          of keeping our progress on track and making sure all the requirements
          were met. We were a team of a Head Builder, Director of Software, and
          Project Coordinator. Together, we were RCC Builders and Developers,
          and our robot’s name was Poppy.
        </p>
        <p>
          To plan out the schedule of the project I used Microsoft Project and
          made the template myself. I also made the cost estimate table for our
          project, so that we could demonstrate that our robot design was not
          only efficient but also cost effective.
        </p>
        <img
          alt="Project's schedule"
          src={projectsched}
          className="mx-auto grid my-5 size-4/5"
        />
        <p>
          All the milestone presentations and the final presentation were made
          by myself as well, and I always made sure we covered every detail that
          would showcase our robot’s best features. When we submitted our
          project, we successfully completed the mission, budgeted an
          inexpensive cost estimate, had a higher performance than our
          competitors, and created innovative code that ensured Poppy stay on
          course.
        </p>
        <img
          alt="RDS obstacle course for robot"
          src={course}
          className="mx-auto grid my-5 size-4/5"
        ></img>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id=""
        subtitle="ideation"
        heading="Technical Design Description"
      >
        <p>
          We created two designs for our robot, and tested to see which would be
          the most efficient for the course. When reworking our second design,
          we kept in mind the time frame we had to keep for the project’s
          mission. So, we created a design that could hold multiple fuel cells
          at once, minimizing the time taken, while also maximizing the number
          of fuel cells transported.
        </p>
        <div className="row">
          <div className="column">
            <img src={legopoppy1} alt="Leggo Poppy mindstorms render 1" />
          </div>
          <div className="column">
            <img src={legopoppy2} alt="Lego Poppy mindstorms render 1" />
          </div>
          <div className="column">
            <img src={legopoppy3} alt="Lego Poppy mindstorms render 1" />
          </div>
        </div>
        <p>
          At the end of the semester, our robot delivered 210 fuel cell hours in
          under one minute. To pick up fuel cells, we 3D printed an exterior
          robot part, that served as a ramp to easily retrieve fuel cells. To
          ensure the robot could move autonomously on the course while also
          traveling in the best way, we added a gyro sensor to help stay
          straight and navigate the course.
        </p>
        <div className="flex justify-around">
          <div>
            <p>
              The efficient mechanism of four arm pairs on the robot, made it so
              multiple fuel cells can be carried at once. They all operated on a
              gear mechanism too easily be reset automatically by Poppy. The
              wider arm design also lowered the margin of error when obtaining
              fuel cells.
            </p>

            <p>
              In our Mindstorms code, we used structured code blocks that had
              designated purposes, such as a straight driving function,
              retrieval of a fuel cell, and loops that would execute these
              commands.
            </p>
            <img
              src={mindstormscode}
              alt="a section of the Lego mindstorms code"
              className="my-5"
            />
          </div>
          <img
            src={poppy}
            alt="Lego Poppy robot built in real life"
            className="size-5/12 ml-16"
          />
        </div>
      </ProjectSectionDescription>

      <ProjectSectionDescription id="" subtitle="results" heading="Conclusions">
        <p>
          To see our final presentation and more details on the RDS project, see
          below.
        </p>
        <p className="underline">
          <a href="https://manual.eg.poly.edu/index.php/Retrieval_and_Delivery_System_(RDS)">
            RDS Project Site
          </a>
        </p>
        <div className="justify-items-center grid space-y-5">
          <iframe
            src="https://onedrive.live.com/embed?cid=51C5E7B980EAB28A&amp;resid=51C5E7B980EAB28A%211839&amp;authkey=AEtkPXvW5RZSBYk&amp;em=2&amp;wdAr=1.7777777777777777"
            width="910px"
            height="497px"
          >
            This is an embedded{" "}
            <a target="_blank" href="https://office.com">
              Microsoft Office
            </a>{" "}
            presentation, powered by{" "}
            <a target="_blank" href="https://office.com/webapps">
              Office
            </a>
            .
          </iframe>

          <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/K-kFgggJ1Ag"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
