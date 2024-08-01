import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { CollapsibleSection } from "../components/CollapsibleSection";
import { CourseSectionDetails } from "../components/CourseSectionDetails";
import { Link } from "react-router-dom";
import shrine1 from "../images/cs3113/shrine1.png";
import shrine2 from "../images/cs3113/shrine2.png";
import shrine3 from "../images/cs3113/shrine3.png";
import background1 from "../images/cs3113/background1.png";
import background2 from "../images/cs3113/background2.png";
import background3 from "../images/cs3113/background3.png";
import playerstate1 from "../images/cs3113/playerstate1.png";
import playerstate2 from "../images/cs3113/playerstate2.png";
import roomdesctable from "../images/cs3113/roomdesctable.png";
import levellayout from "../images/cs3113/levellayout.png";
import greatescape1 from "../images/cs3113/greatescape1.png";
import greatescape2 from "../images/cs3113/greatescape2.png";
import greatescape3 from "../images/cs3113/greatescape3.png";
import greatescape4 from "../images/cs3113/greatescape4.png";
import maze1 from '../images/cs3113/maze1.jpeg';
import maze2 from '../images/cs3113/maze3.jpeg';
import maze3 from '../images/cs3113/maze4.jpeg';
import maze4 from '../images/cs3113/maze5.jpeg';

export default function GameProgrammingPage() {
  const overview = (
    <p>
      Intro to Game Programming is a comprehensive course designed to provide an
      overview of modern game programming practices and their hands-on
      implementations. Students study the basic building blocks of interactive
      computer games and learn how to implement them as cross platform
      applications using C# and the Unity game engine. This course was a core
      class in my minor,{" "}
      <a
        class="link nyu"
        href="'http://bulletin.engineering.nyu.edu/preview_program.php?catoid=15&poid=4473"
      >
        Game Engineering.
      </a>
    </p>
  );

  const objectives = (
    <ol>
      <li class="course-bullet cs3113-title">
        <span class="course-text">
          Gain proficiency in C# and the Unity development pipeline.
        </span>
      </li>
      <li class="course-bullet cs3113-title">
        <span class="course-text">
          Develop a range of methods for the expression and articulation of
          ideas, including experimentation, information gathering, testing and
          refinement.
        </span>
      </li>
      <li class="course-bullet cs3113-title">
        <span class="course-text">
          Be comfortable working with software and hardware limitations, and be
          able to come up with creative workarounds both in design and
          development.
        </span>
      </li>
      <li class="course-bullet cs3113-title">
        <span class="course-text">
          Create work of technical and conceptual depth, suitable for a
          professional portfolio
        </span>
      </li>
    </ol>
  );
  const skills = (
    <div className="flex space-x-2">
      <img
        width="100px"
        alt="XCode"
        src="https://img.shields.io/badge/-XCode-147EFB?style=flat-square&logo=xcode&logoColor=white"
      />
      <img
        width="90px"
        alt="Unity"
        src="https://img.shields.io/badge/-Unity-000000?style=flat-square&logo=unity&logoColor=white"
      />
      <img
        width="80px"
        alt="C#"
        src="https://img.shields.io/badge/-CSharp-239120?style=flat-square&logo=csharp&logoColor=white"
      />
    </div>
  );

  const projects = (
    <>
      <p className="not-prose my-0 font-medium">
        <a href="https://razzve.itch.io/elemental-fury" class="cs3113 link">
          Elemental Fury
        </a>
      </p>
      <p className="not-prose my-0 font-medium">
        <a href="https://mjm1175.itch.io/adventure-game" class="cs3113 link">
          Great Escape
        </a>
      </p>
      <p className="not-prose my-0 font-medium">
        <a
          href="https://alok-roy-chatterjee.itch.io/maze-platformer-rush"
          class="cs3113 link"
        >
          Pixel Maze Mobile Game
        </a>
      </p>
    </>
  );

  return (
    <PageContainerOutline className="site-page">
      <PageHeader
        emoji={`🎮`}
        lineOne="CS-UY 3113"
        lineTwo="Introduction to Game Programming"
        stylename="cs3113"
      />

      <CourseSectionDetails
        overview={overview}
        objectives={objectives}
        skills={skills}
        projects={projects}
      />

      <ProjectSectionDescription
        id="cs3113"
        subtitle="Project 1"
        heading="Elemental Fury"
      >
        <p>
          In <a href="https://razzve.itch.io/elemental-fury">Elemental Fury</a>,
          you play as a mysterious wizard wielding elemental powers. You travel
          across the realm and deal with obstacles on you way. You do so by
          using 3 elements - swap the elements with M1. In fire mode you shoot
          fireballs with M2 that melt ice walls. In earth mode you select an
          earth block by targeting it with cursor and holding M2, upon release
          of M2 the block is pushed away from the player. In air mode you gain
          multiple air jumps. Using elemental abilities requires elemental
          charges that can be replenished by locating the elemental shrines.{" "}
          <a class="link cs3113" href="https://razzve.itch.io/elemental-fury">
            Play here.
          </a>{" "}
        </p>

        <p>
          The goal of this first project was to create a 2D platformer with a
          focus on level design and game feel. The player character must be
          rigged and animated with Idle, Run, and Jump states. Considering
          player space, mood, and obstacle placement, we had to experiment with
          interface and expectations, making a strong effort to retain players
          with a smooth difficulty curve. Includes at least 1 easy, 1 medium and
          1 hard level. The game tutorializes through gameplay without explicit
          exposition, dialogue, or text.
        </p>
        <div className="c12">
          <div className="collapsible-summary space-x-6">
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">development log</h5>}
              >
                <div className="space-y-4">
                  <p className="pt-4">
                    We began the development with the idea of being able to use
                    four elemental power:, air, water, fire, and earth, to pass
                    the obstacle. Next, we thought of ways to implement these
                    powers integrating tools and concepts we learned in our game
                    engineering course (such as instantiating, raycasting, using
                    colliders and triggers). As we were thinking about the
                    powers, we came up with certain obstacles that the player
                    had to interact with, such as enemies, ice walls, metal
                    grids, earth platforms. We ended up implementing ice walls
                    and earth platforms.
                  </p>

                  <p>
                    We started developing abilities with the fire power. The
                    first idea that came to mind was shooting projectiles to
                    melt ice walls. Some other concepts were damaging enemies,
                    and interacting with water to create steam clouds to
                    fly/glide. As for earth, we were inspired by Avatar Aang and
                    implemented direct interaction with the level setup for the
                    player - moving certain platforms. We also considered
                    interacting with earth to create damaging lava puddles. For
                    air, we wanted to provide mobility. We were thinking about
                    flying or gliding, but ended up implementing a simpler
                    version - air jumping. For water we were considering seeping
                    through platforms, gaining stealth, or moving faster.
                    However, we faced communication and collaboration issues
                    that barred us from implementing many concepts, such as
                    enemies or the water powers.
                  </p>

                  <p>
                    We wanted to give controller support and use as many
                    mechanics as we had access to, so there is functionality for
                    keyboard direction and space bar, as well as clicking
                    forward or back to help you advance through the level. We
                    initially wanted each power to have a distinct hotkey, but
                    conceived some ambitious plans for many more powers and
                    combining elements, so it seemed to make more sense to use
                    one button to cycle through powers and another to trigger
                    the ability.
                  </p>
                  <p>
                    At first we thought of this game as an fast-paced adventure
                    platformer, where you run forward and through your powers
                    left and right, but after some playtesting we decided that
                    due to the pace and the feel of the movement in the game, it
                    would more sense to lean towards a puzzle-game approach. To
                    achieve this, we limited the power gain of the player by
                    implementing charges for the elemental abilities, and
                    shrines to replenish those charges.
                  </p>
                  <h3 class="cs3113">Shrines</h3>
                  <img src={shrine1} />
                  <img src={shrine2} />
                  <img src={shrine3} />

                  <h3 class="cs3113">Backgrounds</h3>
                  <img src={background1} />
                  <img src={background2} />
                  <img src={background3} />

                  <h3 class="cs3113">Player States</h3>
                  <img src={playerstate1} />
                  <img src={playerstate2} />

                  <h3 class="cs3113">Summary of Playtests:</h3>

                  <p className="pt-5">Playtest Results Week 1</p>
                  <ul className="list-disc px-3">
                    <li>Levels too easy, so make them more complex(hard)</li>
                    <li>Add more mechanics based on the element</li>
                    <li>No animations</li>
                    <li>Add better sounds</li>
                  </ul>
                  <p className="pt-5">Playtest Results Week 2</p>
                  <ul className="list-disc px-3">
                    <li>Add background theme based on the element</li>
                    <li>Need better background music</li>
                    <li>Add exit screen</li>
                    <li>Add more obstacles</li>
                    <li>Add power count dashboard</li>
                  </ul>
                  <p className="pt-5">Playtest Results Week 3</p>
                  <ul className="list-disc px-3">
                    <li>Add ending and winning scene</li>
                    <li>Make levels that have all powers</li>
                    <li>Add ability to combine powers and use them at once</li>
                  </ul>
                </div>
              </CollapsibleSection>
            </div>
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">postmortem</h5>}
              >
                <h3 class="cs3113">Successes</h3>
                <p>
                  We were able to introduce multiple mechanics into our game
                  instead of just one, which corresponds to each level. We also
                  created our own sprites and game art ourselves which we had no
                  experience with prior to the assignment. We also were able to
                  get the game working and remove all the bugs we had
                  encountered prior to finishing.{" "}
                </p>
                <h3 class="cs3113">Setbacks</h3>
                <p>
                  For our demo we did not have all the functioning mechanics for
                  the playtesting during class, which didn’t allow us to get
                  much feedback on the actual gameplay of our game, but we
                  received positive responses on the visual style of our level
                  and the concept of our game. During the development process we
                  also ran into the trouble of some parts of the game working on
                  some people’s machines and not on other’s, which made
                  collaborating a bit more difficult.{" "}
                </p>
                <h3 class="cs3113">Lessons Learned</h3>
                <p>
                  Collaboration on the game was tougher than expected in the
                  beginning, with trying to figure out how to divide the work,
                  and also how to share it whether on Bitbucket or on Unity
                  Organization Collaboration, and who would work on which
                  levels. We also learned that for future projects it’s
                  important to think about the smaller details for the game,
                  such as sounds, music, and other small details.
                </p>

                <h3 class="cs3113">Next Steps</h3>
                <p>
                  {" "}
                  If we were to do a final polish on this game, it would be good
                  to add accessibility features such as subtitles or even a
                  tutorial for the game, as well as game difficulties ranging
                  from easy to difficult. Also, since our game concept revolves
                  around the elements and a main character who uses all of them,
                  a story mode or subplot would be interesting and could engage
                  the player more into our game.{" "}
                </p>
              </CollapsibleSection>
            </div>
          </div>
        </div>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id="cs3113"
        subtitle="Project 2"
        heading="Great Escape"
      >
        <p>
          <a
            href="https://mjm1175.itch.io/adventure-game"
            className="cs3113 link"
          >
            Great Escape
          </a>{" "}
          is an adventure game where you play as a death-row inmate in a corrupt
          prison which is performing experiments on its prisoners. You are fed
          up with seeing your fellow inmates go mysteriously missing and are
          determined to escape but not without first gathering enough evidence
          to take this place down with you.{" "}
          <a class="cs3113 link" href="https://mjm1175.itch.io/adventure-game">
            Play here.
          </a>
        </p>
        <p>
          The objective of this project was to create a 3D topdown adventure
          game. The game incorporates a point and click interface with
          pathfinding and navmesh agents, and is about exploring rooms, and
          collecting items. The world includes keys and locked doors as well as
          obstacles and traps. We also used scenes and variables to store
          states.{" "}
        </p>

        <div className="c12">
          <div className="collapsible-summary space-x-6">
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">development log</h5>}
              >
                <div className="space-y-4">
                  <p className="pt-4">
                    We wanted the art style of the game to be dark and have a
                    gloomy vibe, keeping in tone with the game’s story. Our
                    initial idea for the game was to have the player escape from
                    some place and give them a maze like layout to navigate
                    through.{" "}
                  </p>
                  <p>
                    Our core idea we came up with in the beginning was to have
                    multiple paths to the end, all of which including different
                    rooms which the player must explore to progress. We wanted
                    the player to be able to explore as much as they wanted and
                    therefore linked all the paths together at the beginning and
                    the end of each one.{" "}
                  </p>
                  <p>
                    In the beginning, we wanted to create a rogue-like game with
                    randomly generated rooms and paths. We wanted the player to
                    have a new experience during each play. However, this idea
                    became increasingly difficult to implement with a fixed
                    number of collectibles required to reach the end. For this
                    reason, we decided not to make room generation random. We
                    also decided not to give the player the ability to fight.{" "}
                  </p>
                  <p>
                    The story that the game tries to tell is that the player is
                    a patient/prisoner in a prison full of death-row inmates,
                    but the prison is corrupt. They are performing experiments
                    on the prisoners and when some of them go awry, no one
                    notices because they were all scheduled to die anyway. Your
                    character has had enough, he decides to escape but not
                    without first acquiring enough evidence to take this place
                    down when he goes.
                  </p>
                  <p>
                    There are 13 different “rooms” in the game. The rooms are
                    essentially different levels for the player to explore. The
                    description for each room is located in the Room Description
                    table below. Check the Level Layout below for the layout of
                    the prison as well as the locations of each room.{" "}
                  </p>
                  <p>
                    There will be 11 notes for the player to collect, but only 3
                    are needed to unlock the last corridor. They are scattered
                    throughout the different rooms. See the Notes section below
                    for descriptions of each note. See the Room Description
                    table below for the locations of each note.
                  </p>
                  <p></p>

                  <h3 class="cs3113">Room Description Table</h3>
                  <img src={roomdesctable} />

                  <h3 class="cs3113">Debuffs</h3>
                  <p>
                    Poison debuff - loses 10 hp every second Nausea debuff -
                    slows the player speed by half.
                  </p>
                  <h3 class="cs3113">Level Layout</h3>
                  <img src={levellayout} />

                  <h3 class="cs3113">Game Notes</h3>
                  <p>
                    <b>Note 1</b> - “Patient XE-89 seems to be showing signs of
                    change. The growth is significantly higher than other
                    patients. This seems promising. I will make a new report
                    after a few more tests.”{" "}
                  </p>
                  <p>
                    <b>Note 2</b> - “Queen Rene came through to check on us the
                    other day. Her presence, her gaze was more intimidating than
                    the warden himself. We had to muster the courage to keep
                    things under control and show the results of our findings.”
                  </p>
                  <p>
                    <b>Note 3</b> - “Drat! Another failed experiment. The
                    rotting smell of this prison is growing day by day. Our
                    scientists are slowly being driven mad by the smell. I even
                    heard Maurice talking to himself in the middle of the day.”{" "}
                  </p>
                  <p>
                    <b>Note 4</b> - “Ah shoot! Some of the patients have broken
                    out of their cells. They are starting to attack each other,
                    wrecking everything they see. The guards are trying to get
                    the patients under control but I fear it may be too hard on
                    them. I hope peace will return to this prison soon.”{" "}
                  </p>
                  <p>
                    <b>Note 5</b> - “These highly developed energy drinks seem
                    to trigger innate responses within the patients. We had to
                    tone down the dosage after multiple patients died after an
                    intake of a single energy drink.”
                  </p>
                  <p>
                    <b>Note 6</b> - “The cans seem to emit an iridescent glow
                    that only disappears once the liquid has been consumed. The
                    red drink seems to increase the patient’s physical strength
                    and the white drink seems to heighten the patient’s speed.”
                  </p>
                  <p>
                    <b>Note 7</b> - “Not all drinks enhance the patients’ senses
                    though. The orange drink seems to hinder the patient’s
                    senses while the green drink seems to contain unknown
                    toxins.”{" "}
                  </p>
                  <p>
                    <b>Note 8</b> - “Patient XE-89: Male, Age 27, 180 cm, 72.5
                    kg. Athletically fit. Status: Alive. Patient XE-88: Male,
                    Age 34...”{" "}
                  </p>
                  <p>
                    <b>Note 9</b> - “We woke up this morning and headed to our
                    respective workstations. Only to find a broken cabinet and
                    cut up electrical wires. There seems to be a bunch of energy
                    drinks missing. I wonder which cursed brat stole our supply
                    and why. The energy drinks are a big concern but why the
                    electrical wires, and how were they even cut?”{" "}
                  </p>
                  <p>
                    <b>Note 10</b> - “Some of our patients seem to have
                    developed immunity to some of our tests. This is great news.
                    I can not wait to share these findings with the warden. I am
                    sure he will be overjoyed at this result.”{" "}
                  </p>
                  <p>
                    <b>Note 11</b> - “Oh no no no no… The last experiment went
                    so horribly wrong. Patient XE-89, among other patients, has
                    broken from their cells. The research staff are running away
                    in horror. I too am hiding away and secretly writing under
                    this tiny tiny flame. I hope the guards can get everything
                    under control. I hear footsteps, I think someo...”
                  </p>

                  <h3 class="cs3113">Summary of Playtests</h3>
                  <p className="pt-5">Playtests Results Week 1</p>
                  <ul className="list-disc px-3">
                    <li>Movement instruction</li>
                    <li>Can’t find the door</li>
                    <li>More instruction for combat</li>
                    <li>Music is kind of loud (frequent)</li>
                    <li>More mechanisms</li>
                    <li>More storytelling/more instructions</li>
                    <li>The environment is engaging</li>
                    <li>Gap between shooting</li>
                    <li>Shaking the camera might be great</li>
                  </ul>
                  <p className="pt-5">Playtests Results Week 2</p>
                  <ul className="list-disc px-3">
                    <li>Doesn’t realize that the doors are interactable (!)</li>
                    <li>Rigidbody (physics needs to be fixed)</li>
                    <li>Death screen doesn’t fit</li>
                    <li>Atmosphere and music choice</li>
                    <li>Interact with objects</li>
                    <li>Have an inventory</li>
                  </ul>
                  <p className="pt-5">Playtests Results Week 3</p>
                  <ul className="list-disc px-3">
                    <li>Lost in the corridor</li>
                    <li>Nice graphics</li>
                    <li>Getting stuck in the wall</li>
                    <li>
                      Add a health bar, show that the water actually does
                      something
                    </li>
                    <li>Can’t go to the door (mesh, box collider)</li>
                    <li>Background music is too loud</li>
                    <li>Assets are good</li>
                    <li>The boss can drop item</li>
                    <li>Bullets/Weapons can be collectables?</li>
                    <li>The best</li>
                  </ul>
                </div>
              </CollapsibleSection>{" "}
            </div>{" "}
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">postmortem</h5>}
              >
                <div className="space-y-4">
                  <h3 class="cs3113">Sucesses</h3>
                  <p>
                    One success we had creating this game is that we were able
                    to build off of everyone’s ideas and could come up with an
                    elaborate and complex concept for our game. We were
                    constantly changing and brainstorming new ways and mechanics
                    that would make our game more engaging.
                  </p>
                  <p>
                    A big success for us was implementing backwards navigation
                    between rooms. One of our team members created a Game and
                    Room Manager to control access and links between rooms. It
                    took a lot of work to make sure that the transitions felt
                    seamless and to ensure that camera and spawn positions were
                    maintained throughout the routes.{" "}
                  </p>
                  <img src={greatescape1} />
                  <p>
                    Another success was the animations and sound effects. This
                    is an area that our team had the least experience with and
                    yet we wanted to make sure that the player received adequate
                    and appropriate feedback when an event had occurred. It took
                    some work and lots of research but we are proud of the
                    effect that was accomplished.
                  </p>
                  <p>
                    A final success, albeit a small one, was the implementation
                    of an Easter Egg in our game. We were excited about this
                    feature and its capability to auto-win for the player. I
                    won't give anything away but it might be worth it to go back
                    the way you came...
                  </p>

                  <h3 class="cs3113">Challenges</h3>
                  <p>
                    In the same vein, many challenges we faces were achieving
                    the successes mentioned, such as finding assets and
                    animations for all of the functionality.
                  </p>
                  <p>
                    One challenge we had was getting all the smaller details of
                    the game ironed out to finish on time. We knew what we
                    wanted our core game to be about and what to include but we
                    still had many smaller things to implement before the game
                    was due, and were scrambling to finish some of the tasks.
                  </p>
                  <p>
                    Another challenge is that finding assets and animations for
                    all of the functionality were difficult given the complexity
                    of what we were trying to accomplish within the game. A lot
                    of the free assets that were downloaded did not match with
                    one another. Furthermore, when creating the boss scene
                    outside, there were not a lot of matching assets to help
                    decorate the scene.
                  </p>
                  <img src={greatescape2} />
                  <p>
                    Additionally, coming up with a truly compelling story took
                    us some time as we wanted our ideas to be consistent with
                    the aesthetic and feel of the game.
                  </p>

                  <h3 class="cs3113">What We Learned</h3>
                  <p>
                    We learned about keeping continuity in our game, for example
                    we had to work on making sure the health progress persisted
                    through all the rooms, and making sure transitions for the
                    background music and sound effects were smooth when the
                    player went from room to room. These features were important
                    for polishing our game.{" "}
                  </p>
                  <p>
                    We also learned about using AI & NavMesh with unity to make
                    player and bots move and follow the player.
                  </p>
                  <img src={greatescape4} />

                  <h3 class="cs3113">Possible Future Revisons</h3>
                  <p>
                    We initially wanted to make room generation and room order
                    random, so if given more time, we would like to go back and
                    implement that feature.
                  </p>
                  <img src={greatescape3} />
                  <p>
                    We also would like to add a way to force the player to drink
                    debuffs when they enter a room with one, since right now
                    they can just leave without interacting if they know its a
                    bad one. We thought about making the door lock behind the
                    player until they collected the item. We also would like the
                    buffs/debuffs to last longer to make them more significant.
                    In addition, we would include a visual indication on the
                    player to show whether or not they are still being affected
                    by the buffs/debuffs. We would also include a health bar.
                  </p>
                  <p>
                    Additionally, we considered having more distinguished enemy
                    variants, but the animations included with our character did
                    not include other fighting styles and since we did not have
                    experience with creating our own 3D animations, this became
                    low on the priority list.
                  </p>
                  <p>
                    Finally, we would have liked to add a cut scene at the
                    beginning of the game to give some exposition for the story.
                  </p>

                  <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQ4u9HqdVIElnsNB6G79tWcN9g1pwpVvDiEATQ-3x5TITJOLKZ4KqM2z_o4WvU9Nhli0uop7It8-dDN/embed?start=false&loop=false&delayms=3000"
                    frameborder="0"
                    width="90%"
                    height="569"
                    allowfullscreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                  ></iframe>
                </div>
              </CollapsibleSection>{" "}
            </div>
          </div>{" "}
        </div>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id="cs3113"
        subtitle="Project 3"
        heading="Pixel Maze Mobile Game"
      >
        <p>
          This maze platformer rush mobile game included multiple levels that
          has platforms, barriers, obstacles and increasing difficulty as the
          player navigates further into different levels. The player is able to
          move in any direction and has to reach as many enemies as they can to
          earn points for a medal score on each level. The game automatically
          moves into the next level after a medal score is given for the amount
          of enemies destroyed by the player within the time limit. The levels
          include many different enemies, many different maze style platforms
          and uses a point reward scoring system for when the player eliminates
          more enemies as they move across the platforms.{" "}
          <a
            class="cs3113 link"
            href="https://alok-roy-chatterjee.itch.io/maze-platformer-rush"
          >
            Play here.
          </a>
        </p>

        <p>
          This Final Project is a fully flushed out large scale mobile game
          project. Seeing how far we can explore the input options of mobile
          devices, such as touch, swipes, rotation, geolocation, and haptic
          feedback. It is also presented with a trailer.
        </p>
        <div className="c12">
          <div className="collapsible-summary space-x-6">
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">development log</h5>}
              >
                <div className="space-y-4">
              <img src={maze1}/>
						<p>The easy level was developed so that the player having to navigate through many maze style platforms while having to kill enemies that can
							 be on different platforms and between different barriers. This level includes a time limit, fewer enemies and fewer platforms so that
							  the player is able to understand and adjust to the game’s setting while being able more easily navigate through the setting. Players will
							   earn points each time they destroy an enemy. These points will determine their score and the player will get a medal based on their 
							   amount of points. Different enemies were made to have different points given to the player when the player destroys different enemies. 
							   This point scoring is the same for all levels.  </p>
						<p>As part of the development process, a player can destroy an enemy by reaching the enemy and making contact with the enemy. The emphasis 
							was placed on creating a maze style narrative where the player has to focus on using effective maze and platform navigation skills so 
							that they are able to reach enemies under a time limit. Also, there are different amounts of points that need to be earned to get a gold
							 medal, silver medal, or bronze medal. Throughout the levels, there are different maze structures and platforms placed so that the player
							  has to jump at accurate angles and maneuver around smaller spaces. The player can move in any direction and can also have motion towards 
							  the ground. </p>
							  <img src={maze4}/>
						<p>The medium level was developed so that the player having to navigate through many maze style platforms while having to kill enemies that are
							 on many different maze style platforms and between barriers placed on the platforms. This level includes a time limit, more enemies, 
							 barriers, and more maze style platforms than the easy level so that the player has to use better navigation and so that the player finds it
							  more difficult to eliminate different types of enemies and gain points towards their medal score for the level. The platforms had less
							   spacing and there more enemies where the maze platforms were harder to navigate so that the player was encouraged to move quickly around 
							   the maze style platforms and reach the enemies. Players will still have their enemy kills determine their score and will get a medal based 
							   on the amount of enemies they destroy. </p>
						<img src={maze3}/>
						<p>The hard level was developed so that the player having to navigate through many maze style platforms while having to kill enemies to earn points
							 and try for a medal score. This hard level includes a time limit, even more enemies, barriers, and more difficult maze style design platforms
							  than the medium level so that the player has to use even better navigation throughout the platforms and so that the player finds it even more 
							  difficult to destroy different types of enemies. The platforms will be harder to reach because of the time limit and how the player has to
							   navigate around smaller spaces. There will also be more barriers placed on or around the platforms. Players will still have points that 
							   determine their score and will get a medal based on the amount of enemies they destroy. </p>
						<p>During playtesting, there were recommendations made to change the UI of the game that shows the current score of the player based on how many
							 enemies they have destroyed and how many points are needed to get a gold, silver, or bronze medal for each level. The UI was not showing up 
							 clearly initially, but after changing the aspect ratio, scaling settings, and reference resolution, it was much more efficient to change the 
							 UI so that it shows well on the phone screen. The font size and position was changed to better show the score and medals score UI. Also, during
							  playtesting, the player navigated well throughout the levels and the the point scoring system of the player gaining points by destroying enemies 
							  had accurate behavior. The sound feedback after destroying enemies and background music was also working well. Also, when the player earned a
							   medal score, the game behavior for moving to the next level automatically was working well. </p>
                               </div>
              </CollapsibleSection>
            </div>{" "}
            <div className="summary-section">
              <CollapsibleSection
                title={<h5 className="subtitle">postmortem</h5>}
              >
               <div>
               <h3 class='cs3113'>Successes</h3>
								<p>The successes we had for developing this maze platformer mobile game were that the different levels had effective narrative, good creativity 
									in maze style platforms design, many platforms, and barriers, and creating a time limit and medal score goals that would keep the player
									 motivated. Each of the levels were successfully made so that the player is able to make the maneuvers, have a display of the amount of time
									  left to complete the level, move across platforms, and understand the maze style game setting, narrative and the game’s objectives of 
									  getting the most amount of points from destroying enemies and getting a medal score from user experience and real time UI feedback. There was
									   also success in developing the logic behind the game where there was a time limit and the player can earn points and gain medals from
									    destroying more enemies while navigating the maze style platformers. The barriers and maze structures were also well designed and developed 
										so that each of the levels had more excitement, and created more interesting gameplay for the users. </p>
								
								<h3 class='cs3113'>Challenges</h3>
								<p>The challenges for this maze platformer mobile game was the placement of barriers, and platforms so that each of the maze platformer levels would
									 create enough difficulty for the player. When some of the traps and barriers were placed initially as part of the level design, it occasionally 
									 interfered with the player’s navigation by creating too much difficulty or making it too easy for the player to destroy enemies while moving 
									 across platforms. Also, another challenge was controlling player navigation in response to the player’s enemy kills because some maze style 
									 structures did not always align with the difficulty of the level and some of the enemies were not placed correctly on the maze initially, so
									  the player would not have been able to reach enemies. Also, having barriers too close or too far from platforms changed how the player would
									   be able to destroy enemies to earn points. So, then this became a challenge of finding a way to have the player’s skills in navigation be the 
									   ultimate decider of the player’s score from earning points. In some platforms and barriers for the levels, there was the challenge of maintaining
									    clarity about what the game’s purpose and setting was. Also, the placement and quantity of platforms was also challenging because we had to 
										maintain a certain difficulty on each level and even small changes to platform sizes and positions of where enemies were would vary how the 
										difficulty of gameplay would be. Having too many barriers or platforms also crowded the screen so there had to be enough space between barriers
										 and platforms so that the players could navigate around enemies. </p>	
								<h3 class="cs3113">What We Learned</h3>
								<p>We learned that the game’s difficulty on each of the levels would easily vary based on where the platforms, barriers, and enemies were placed. Even
									 though the harder level would have less platforms and more barriers. There was a need for continuous testing of gameplay because of how the 
									 player would still be able to find easier angles that would decrease the difficulty of a harder level even though the level had been designed as
									  a medium or hard level. The position and size of barriers and the variation in the maze style platforms would change the entire level’s player 
									  dynamics. Also, understanding how the enemies would be moved towards the player also changed the level difficulty and the player’s gameplay.
									    We also learned that keeping platforms spaced too far apart would really change player experience because the screen did not always fit in 
										the next platforms that the player could jump to, so understanding how the game works on different screen sizes was good to learn so that the
										 platforms, barriers, and a player’s would be easily visible to the player. Then, the player would have more understanding and more clarity 
										 of how to proceed and move throughout the levels. </p>	
								<h3 class="cs3113">Possible Future Revisions</h3>
								<p>Possible future revisions for this maze platformer mobile game include adding more animations to platforms like disappearing barriers and traps.
									 Other future revisions could be adding enemies that would automatically create new barriers for the player while they are also trying to 
									 eliminate the player.. Also, other revisions could be adding more barriers around platforms so that the player would have to navigate better 
									 during landing onto the platforms. Also, adding a map for the player so that they can be better prepared with finding  enemies, barriers, and
									  finding nearby platforms is easier. Additionally, other revisions could be that the enemies can jump off walls. Also, the enemies could 
									  disrupt the player’s kills more by being able to place traps, in real time during the player’s gameplay, near the platforms. Also, other 
									  future revisions could be adding more barriers on the walls so that the player’s jumping maneuver has increased difficulty and having 
									  movable platforms that have the animation of sliding in towards the middle and slide out towards the side walls. </p>
									  <iframe className='mx-auto my-4'width="560" height="315" src="https://www.youtube.com/embed/dxaseGN2D-c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
									
               </div>
              </CollapsibleSection>
            </div>
          </div>{" "}
        </div>
      </ProjectSectionDescription>
    </PageContainerOutline>
  );
}
