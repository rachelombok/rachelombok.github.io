import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { Link } from "react-router-dom";

export default function TravelPage() {
  return (
    <PageContainerOutline className="site-page">
      <PageHeader
        emoji={`🧳`}
        lineOne="Travel"
        lineTwo="Through my eyes(and cameras)."
        stylename="travel"
      />
      
    </PageContainerOutline>
  );
}
