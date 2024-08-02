import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import travelimgs from "../images";

import TravelLocationCarousel from "../components/TravelLocationCarousel";

export default function TravelPage() {
  const names = {
    amsterdam: "Amsterdam, Netherlands",
    austria: "Innsbruck, Austria",
    beijing: "Beijing, China",
    dr: "Dominican Republic, Carribean",
    guilin: "Guilin, China",
    heidelberg: "Heidelberg, Germany",
    hongkong: "Hong Kong, Republic of China",
    italy: "Venice, Italy",
    kenya: "Nairobi, Kenya",
    london: "London, United Kingdom",
    paris: "Paris, France",
    sanfran: "San Francisco, California",
    seattle: "Seattle, Washington",
    shanghai: "Shanghai, China",
    washdc: "Washington, District of Columbia",
  };
  return (
    <PageContainerOutline className="site-page" title="Travel">
      <PageHeader
        emoji={`🧳`}
        lineOne="Travel"
        lineTwo="Through my eyes(and cameras)."
        stylename="travel-title"
      />
      {Object.entries(travelimgs).map(([key, value]) => {
        return (
          <TravelLocationCarousel
            locationName={names[key]}
            images={value}
            stylename={key}
            key={key}
          />
        );
      })}
    </PageContainerOutline>
  );
}
