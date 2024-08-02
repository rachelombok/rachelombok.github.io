import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { CourseSectionDetails } from "../components/CourseSectionDetails";

export default function GameDesignPage() {
  const overview = (
    <p>
      CS 4553 is about experimental game design. Design in this context pertains
      to every aspect of the game, and these can be broadly characterized as the
      game system, control, visuals, audio, and resulting theme. These aspects
      are explored through the creation of a few very focused game prototypes
      using a variety of contemporary game engines and frameworks, high-level
      programming languages, and physical materials. The objective is to gain a
      better understanding of what makes games appealing, and how game
      mechanics, systems, and a variety of player experiences that can be
      designed and iteratively improved by means of rapid prototyping and
      play-testing. This course was an elective class in my minor,{" "}
      <a
        className="link nyu"
        href="'http://bulletin.engineering.nyu.edu/preview_program.php?catoid=15&poid=4473"
      >
        Game Engineering.
      </a>
    </p>
  );

  const objectives = (
    <div className="cs4553-course">
      <ol>
        <li>
          <span className="">
            Learn design practices and principles necessary to prototype and
            develop video games
          </span>
        </li>
        <li>
          <span>
            Develop an understanding on how technology, design, and philosophy
            affect the game creation process
          </span>
        </li>
        <li>
          <span>
            Learn about real-world implementation and design challenges faced by
            practicing game designers
          </span>
        </li>
      </ol>
    </div>
  );

  return (
    <PageContainerOutline className="site-page" title="CS4553">
      <PageHeader
        emoji={`🕹`}
        lineOne="CS-UY 4553"
        lineTwo="Game Design"
        stylename="cs4553"
      />

      <CourseSectionDetails overview={overview} objectives={objectives} />

      <ProjectSectionDescription
        id="cs4553"
        subtitle="WEEK 1: MINIMALISM"
        heading="Dizzy Racer"
      >
        <p>
          In{" "}
          <a
            className="cs4553 link"
            href="https://haroonsherjan.itch.io/dizzy-racer"
          >
            Dizzy Racer
          </a>
          , you navigate through a basic 2D maze while trying to manuever
          different character positions.{" "}
          <a
            className="link cs4553"
            href="https://haroonsherjan.itch.io/dizzy-racer"
          >
            Play here.
          </a>{" "}
        </p>

        <p>
          The general purpose of minimalism in game design is to accentuate a
          game's specific elements by limiting the scope or detail of the other
          surrounding elements.
        </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="cs4553"
        subtitle="WEEK 2: Game feel"
        heading="Pinky's Adventure"
      >
        <p>
          Pinky's Adventure is a prototype game showcasing different game feel
          effects.{" "}
          <a
            className="cs4553 link"
            href="https://powerfulduck.itch.io/pinkys-adventure"
          >
            Play here.
          </a>
        </p>
        <p>
          What is game feel? In game development, it's the various effects that
          add weight and "juice" to the game. It's a specific aesthetic and
          style added into a game. “The tactile sensation of manipulating a
          digital agent. The thing that makes your mom lean in her chair as she
          plays Rad Racer.” (Steve Swink). Game feel makes moving, interacting,
          winning and losing games fun. Examples: Screen shakes(collision
          effects, hard turns, acceleration or velocity, gravity),
          Sound(soundtrack music, background ambience and sound effects),
          SFX(explosions, footsteps, engines running), Particle
          Effects(gravel/dust kicked up, comic-book punch effect, blood splatter
          for damage, confetti for winning).{" "}
        </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="cs4553"
        subtitle="WEEK 3: depth"
        heading="Rush"
      >
        <p>
          Rush is a racing game where it's limitations help the player develop
          skills that help them succeed over time.{" "}
          <a className="cs4553 link" href="https://rachelombok.itch.io/rush">
            Play here.
          </a>
        </p>

        <p>
          Which games have depth? Most people would agree that Chess is a deep.
          And that Candyland and Tic-Tac-Toe (Noughts and Crosses), and most
          “social network” games are not at all deep. Depth has to do with the
          complexity of decision making and skill building.
        </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="cs4553"
        subtitle="WEEK 4: Resources"
        heading="City of Schemes"
      >
        <p>
          City of Schemes is a one-player board game where you play as a
          conniving noble trying to claim control of a medieval city. You have
          seven days and seven nights to try and max out either your Popular
          Support, Noble Support, or Military Support and seize the throne,
          after which your window of opportunity closes. But there are many ways
          that your schemes could come to ruin... If any of your Popular
          Support, Noble Support, or Military Support start the day at -20, you
          lose! Similarly, if your Suspicion ever reaches 100 you lose as the
          king's Inquisitor manages to catch you! Each day and each night you
          can select an action to take from around the areas of the city using
          your mouse, which will raise one resource and lower some others. Some
          actions require you to spend either Gold or Energy, and you can only
          take those actions if you have enough of those resources. Finally, at
          the start of each day you'll receive a random event. These can be
          either good or bad, and you'll need to adapt your strategy to what
          luck has in store for you!
          <a
            className="cs4553 link"
            href="https://orbitalics.itch.io/city-of-schemes"
          >
            Play here.
          </a>
        </p>

        <p>
          Resources are quantities that affect gameplay, and can usually be both
          acquired and consumed. When designing resources it's important to
          consider availability, conversion, and relative value of such
          resources. It's important to avoid repetitive feedback loops, positive
          or negative. Avoiding the emergence of degenerate strategies and
          ensuring all systems stay relevant makes sure gameplay stays engaging.
        </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="cs4553"
        subtitle="WEEK 6: PCG"
        heading="Garden of Flora"
      >
        <p>
          Garden of Flora is a PCG collecting game.{" "}
          <a
            className="cs4553 link"
            href="https://amykwan.itch.io/garden-of-flora"
          >
            Play here.
          </a>
        </p>

        <p>
          Procedural Generation is a method of creating data algorithmically as
          opposed to manually, typically through a combination of
          human-generated assets and algorithms coupled with computer-generated
          randomness and processing power. In computer graphics, it is commonly
          used to create textures and 3D models PCG is useful in game design
          because it helps support replayability, since varied content can lead
          to drastically different play experiences. Spelunky is a good example.
        </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="cs4553"
        subtitle="final project"
        heading="Arena GT"
      >
        <p>
          This is a fun survival/action game with Ford GT as the main vehicle
          for the player. There are four types of power ups: Health, Nitro,
          Shield and Mine. Have fun destroying cars if you're good at it.{" "}
          <a
            className="cs4553 link"
            href="https://naga-b.itch.io/3d-arena-fighter"
          >
            Play here.
          </a>
        </p>

        <iframe
          width="1060"
          className="mx-auto"
          height="615"
          src="https://www.youtube.com/embed/TkCnKNw7AqI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
