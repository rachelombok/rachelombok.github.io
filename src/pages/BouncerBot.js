import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { Link } from "react-router-dom";

export default function RDSPage() {
    return(
<PageContainerOutline className="site-page">
      <PageHeader
        emoji={`💾`}
        lineOne="SulSul! SimSim!"
        lineTwo="AIIDE 2020 Conference Paper."
        stylename="sulsulsimsim"
      />

      <PageDetails
        id="sulsulsimsim"
        icon={ts4pic}
        overview={overview}
        roles="Programmer"
        timeline="February 2020 to August 2020"
        team={team}
      />

      <ProjectSectionDescription
        id="sulsulsimsim"
        subtitle="abstract"
        heading=""
      >

      </ProjectSectionDescription>
      </PageContainerOutline>
    );
};