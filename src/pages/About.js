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

export default function AboutPage() {
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
      <div className="c15 prose-2xl space-x-2">
        <div>
          <p>
            Hi, I'm Rachel! I'm a graduate of{" "}
            <a href="https://engineering.nyu.edu" className="link nyu">
              New York University
            </a>
            , where I studied Computer Science and Game Engineering at the Tandon School of Engineering, and am
            currently exploring all of the opportunities I’m given that merge
            tech and artistic creativity together.
          </p>
          <p>
            After graduation I worked as a Software Engineer at{" "}
            <a href="https://www.alteryx.com" className="link alteryx">
              Alteryx
            </a>{" "}
            for two years working on{" "}
            <a href="https://www.trifacta.com" className="link alteryx">
              Trifacta
            </a>{" "}
            products. In summer of 2021, I interned at{" "}
            <a
              href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview"
              className="link twitter"
            >
              Twitter
            </a>{" "}
            as a Software Engineering Intern, and in school I had
            taken courses such as{" "}
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
            >
              exploreCSR program
            </a>
            .
          </p>
        </div>

        {currentTheme == "light" && (
          <motion.img
            src={roavilight}
            className="avi object-cover "
            alt="picture of Rachel Ombok light theme"
            key="1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            transition={{ duration: 1.5 }}
          />
        )}
        {currentTheme == "luxury" && (
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
        {currentTheme == "cupcake" && (
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
        {currentTheme == "valentine" && (
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
