import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { CollapsibleSection } from "../components/CollapsibleSection";
import huztleart from "../images/huztle/huztleart.jpg";
import ReactGA from "react-ga4";

export default function HuztlePage() {
    ReactGA.send({ hitType: "pageview", page: "/huztle", title: "Huztle" });
  const listen = (
    <>
      <p className="not-prose my-0 font-semibold">
        <a
          className="huztle link"
          href="https://podcasts.apple.com/us/podcast/huztle/id1579500366"
        >
          Apple Music
        </a>
      </p>
      <p className="not-prose my-0 font-semibold">
        <a
          className="huztle link"
          href="https://open.spotify.com/show/13sWB1KLMrqF2V4r1qgVFK"
        >
          Spotify
        </a>
      </p>
      <p className="not-prose my-0 font-semibold">
        <a
          className="huztle link"
          href="https://www.spreaker.com/show/5034202/episodes/feed"
        >
          RSS
        </a>
      </p>
    </>
  );

  const connect = (
    <>
      {" "}
      <p className="not-prose my-0 font-semibold">
        <a className="huztle link" href="https://twitter.com/HUZTLEpod">
          Twitter
        </a>
      </p>
      <p className="not-prose my-0 font-semibold">
        <a href="https://linktr.ee/huztle" className="huztle link">
          Linktree
        </a>
      </p>
    </>
  );

  const title = (
    <h3 className="not-prose text-4xl font-semibold my-0">
    Episode 1: Anna Zhang - Youth Advocate, Photographer, Creative Director
    </h3>
  );

  return (
    <PageContainerOutline className="site-page" title="Huztle">
      <PageHeader
        emoji={`🎙`}
        lineOne="Huztle"
        lineTwo="A Gen-Z Podcast."
        stylename="huztle"
      />
      <PageDetails
        id="huztle"
        icon={huztleart}
        overview="A podcast about Gen-Z entrepreneurs, tech enthusiasts, founders and innovators who are at the intersection of STEM and leadership. Hosted by Rachel Ombok. 💡 "
        listen={listen}
        connect={connect}
        useBorder
      />
      <ProjectSectionDescription id="huztle" subtitle="description" heading="">
        Huztle is a podcast series about GenZ entrepreneurship, in which host
        Rachel Ombok interviews tech enthusiasts, founders and innovators who
        are at the intersection of STEM and leadership, and ask them about their
        habits, mindsets, and routines. In each bi-monthly episode, guests will
        share their experiences, lessons they’ve learned, and their own visions
        for the future in their respective fields.
      </ProjectSectionDescription>

      <CollapsibleSection title={title}>
        <h4 className="font-semibold my-0">Show Notes</h4>
        <p>
          Our first guest is Anna Zhang, a young creative, public speaker,
          student, photographer, and{" "}
          <a
            className="huztle link"
            href="https://www.forbes.com/profile/anna-zhang/?list=30under30-art-style&sh=1cce8f710c4d"
          >
            Forbes 30 Under 30 2021
          </a>{" "}
          nominee. Anna has worked with brands such as Uniqlo, Fujifilm,
          Walgreens, and creates editorial content for her nonprofit magazine, {" "}
          <a href="http://pulsespikes.com/" className="huztle link">
            Pulse Spikes
          </a>
          , which has garnered over 200,000 readers all over the world. She is
          incredibly passionate about making youth centered and driven content,
          and creating positive impact with her work.
        </p>

        <p>
          Anna speaks with Rachel about how she stays motivated and focused, and
          how she connects all the things she learns from her projects,
          professionally and personally. She discusses all her current and past
          endeavaors including Pulse Spikes, working her on-campus job, and her
          last summer internship, as well as her views on what she will be doing
          in the future.
        </p>

        <p>
          Huztle is a podcast series about GenZ entrepreneurship, in which host
          Rachel Ombok interviews tech enthusiasts, founders and innovators who
          are at the intersection of STEM and leadership. In each bi-monthly
          episode, guests will share their experiences, lessons they’ve learned,
          and their own visions for the future in their respective fields. Find
          out more at{" "}
          <a className="huztle link" href="https://www.rachelombok.com/huztle">
            rachelombok.com/huztle
          </a>
          .
        </p>

        <iframe
          src="https://widget.spreaker.com/player?episode_id=45948613&theme=dark&chapters-image=true"
          width="100%"
          height="200px"
          title="Huztle Episode 1: Anna Zhang - Youth Advocate, Photographer, Creative Director"
        ></iframe>

        <h4>Resources</h4>
        <ul>
          <li>
            <a
              href="https://www.codingitforward.com/civic-digital-fellowship"
              className="huztle link"
            >
              Coding It Forward's Civic Digital Fellowship
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/about/changethegame/designchallenge2019/"
              className="huztle link"
            >
              Google Play's Change the Game Design Challenge
            </a>
          </li>
          <li>
            <a href="https://www.colorflamestudio.com" className="huztle link">
              Anna's Photography Website
            </a>
          </li>
          <li>
            <a href="http://pulsespikes.com" className="huztle link">
              Pulse Spikes Website
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1SSDiu1sNeeMVSpXly4CWA2GLm8j5w5Pwp-Vk9GUfQHI/edit?usp=sharing"
              className="huztle link"
            >
              Episode Transcript
            </a>
          </li>
        </ul>
        <p className="not-prose mb-0">
          Feedback? Great! Please contact me at{" "}
          <a
            className="huztle link"
            href="mailto:rachel.ombok@nyu.edu?subject=Hey!"
          >
            rachel.ombok@nyu.edu
          </a>{" "}
          if you have any questions.
        </p>
        <div className="flex space-x-2">
          <a href="https://twitter.com/HUZTLEpod">
            <img
              alt="Huztle Twitter"
              src="https://img.shields.io/badge/-Huztle_Twitter-F894A2?style=flat-plastic&logo=twitter&logoColor=white"
              className="w-36"
            />
          </a>
          <a href="https://www.instagram.com/colorflame/">
            <img
              alt="Anna Instagram"
              src="https://img.shields.io/badge/-Anna's_Instagram-E4405F?style=flat-plastic&logo=instagram&logoColor=white"
              className="w-52"
            />
          </a>
        </div>
      </CollapsibleSection>
      <ProjectSectionDescription id="huztle" subtitle="background" heading="">
        Huztle actually started as an idea in my Podcasting Workshop class in
        Spring 2021. The course is taught in the Tisch School of the Arts, and
        helps students cultivate audio projects throughout the semester that
        they can use to create their own podcasts. The class collective Podcast
        is{" "}
        <a href="https://unmutepodcast.org/about" className="nyu link">
          Unmute
        </a>
        , which features audio samples from all students work, including mine.
        Listen to more episodes{" "}
        <a href="https://open.spotify.com/show/0EXE5JyZq1YBx82MB4AmSM?si=b164f1d0a26f4e4c" className="nyu link">
          here
        </a>
        .
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
