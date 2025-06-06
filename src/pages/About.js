import React, { useEffect, useState, useContext } from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import roavilight from "../images/about/ro-avi-14.JPG";
import roavicupcake from "../images/about/ro-avi-1.jpg";
import roaviluxury from "../images/about/ro-avi-17.jpg";
import roavivalentine from "../images/about/ro-avi-11.jpg";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { pathConstants } from "../fileinfo/pathConstants";
import ReactGA from "react-ga4";

export default function AboutPage() {
  ReactGA.send({ hitType: "pageview", page: "/about", title: "About" });
  const [currentTheme, setCurrentTheme] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <PageContainerOutline className="site-page" title="About">
      <PageHeader
        emoji={`✌🏾`}
        lineOne="Hey there,"
        lineTwo="Nice to meet you."
      />
      <div className="c15 prose-2xl space-x-28">
        <div>
          <p>
            Hi, I'm Rachel! I am currently a frontend engineer working at{" "}
            <a href="https://distyl.ai/" className="link distyl" target="_blank"
           rel="noreferrer">
              Distyl.{" "}
            </a>
            I'm a graduate of{" "}
            <a href="https://engineering.nyu.edu" className="link nyu" target="_blank"
           rel="noreferrer">
              New York University
            </a>
            , where I studied Computer Science and Game Engineering at the
            Tandon School of Engineering, and am currently exploring all of the
            opportunities I’m given that merge tech and artistic creativity
            together.
          </p>
          <p>
            After graduation I worked as a Software Engineer at{" "}
            <a href="https://www.alteryx.com" className="link alteryx" target="_blank"
           rel="noreferrer">
              Alteryx
            </a>{" "}
            for two years working on their Cloud Analytics platform, mainly{" "}
            <a
              href="https://www.alteryx.com/about-us/trifacta-is-now-alteryx-designer-cloud"
              className="link alteryx"
              target="_blank"
            rel="noreferrer"
            >
              Alteryx Designer Cloud.
            </a>{" "}
            In summer of 2021, I interned at{" "}
            <a
              href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview"
              className="link twitter"
              target="_blank"
           rel="noreferrer"
            >
              Twitter
            </a>{" "}
            as a Software Engineering Intern, and in school I had taken courses
            such as{" "}
            <Link to={pathConstants.CS3113} className="link cs3113">
              Introduction to Game Programming
            </Link>{" "}
            and{" "}
            <Link to={pathConstants.DM2133} className="link dm2133">
              3D Modeling
            </Link>
            , and conducted research at Brown University in their{" "}
            <a
              href="https://explorecsr.cs.brown.edu/ai/index.html"
              className="link explorecsr"
              target="_blank"
           rel="noreferrer"
            >
              exploreCSR program
            </a>
            . Check out some of{" "}
            <Link to={pathConstants.MAIN} className="link">
              my projects
            </Link>{" "}
            I've done, such as the fullstack web-app I created,{" "}
            <Link to={pathConstants.JUSTSHOOT} className="link justshoot">
              JustShoot
            </Link>
            , or my own{" "}
            <a href="https://portfolio.rachelombok.com/" className="link portfolio" target="_blank"
           rel="noreferrer">
               photography portfolio site.
            </a>
            
          </p>
        </div>

        {currentTheme === "light" && (
          <motion.img
            src={roavilight}
            className="avi object-cover"
            alt="picture of Rachel Ombok light theme"
            key="1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 1.5 }}
          />
        )}
        {currentTheme === "luxury" && (
          <motion.img
            src={roaviluxury}
            className="avi object-cover"
            alt="picture of Rachel Ombok luxury themed"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 1.5 }}
          />
        )}
        {currentTheme === "cupcake" && (
          <motion.img
            src={roavicupcake}
            className="avi object-cover"
            alt="picture of Rachel Ombok cupcake"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 1.5 }}
          />
        )}
        {currentTheme === "valentine" && (
          <motion.img
            src={roavivalentine}
            className="avi object-cover"
            alt="picture of Rachel Ombok valentine"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 1.5 }}
          />
        )}
      </div>
    </PageContainerOutline>
  );
}
