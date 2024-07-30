import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import jslogo from '../images/justshoot/jstextlogo.jpg';

export default function JustShootPage() {
    const overview = <>
    <a href="https://justshoot.netlify.app" className="justshoot-link">
                JustShoot
              </a>{" "}
              is a community and platform for photo enthusiasts to find cool
              locations for photo shoots.</>;

    const roles = 'Fullstack Developer';
    const timeline = 'August 2020 to Present';
  return (
    <PageContainerOutline>
      <PageHeader
        emoji={`📸`}
        lineOne="JustShoot"
        lineTwo="Improving community for photographers everywhere."
        stylename='justshoot'
      />

      <PageDetails id='justshoot' icon={jslogo} overview={overview} roles={roles} timeline={timeline} />
    </PageContainerOutline>
  );
}
