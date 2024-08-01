import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { Link } from "react-router-dom";
import bouncerbot from '../images/bouncerbot/ultrahacks.jpeg';
import bouncerbot2 from '../images/bouncerbot/botbouncer3.jpg';

export default function BouncerBotPage() {
    const roles = <> <p className="not-prose my-0"><a href='https://twitter.com/therachelplan' class='link bouncerbot'>Rachel Ombok</a>, Team Member</p>
    <p className="not-prose my-0"><a href='https://twitter.com/presidentsham' class='link bouncerbot'>Shameed Job</a>, Team Member</p>
    <p className="not-prose my-0"><a href='https://twitter.com/CarlaGaMe' class='link bouncerbot'>Carla Garcia Medina</a>, Team Member</p></>;

    return(
<PageContainerOutline className="site-page">
      <PageHeader
        emoji={`🤖`}
        lineOne="Bouncer Bot"
        lineTwo="#UltraHacks 2020 2nd Place Winner."
        stylename="bouncerbot"
      />

      <PageDetails
        id="bouncerbot"
        icon={bouncerbot}
        overview="A Twitter bot that encourages healthy conversations by utilizing Twitter’s mute function."
        roles={roles}
        timeline="October 2020"
      />

      <ProjectSectionDescription
        id="bouncerbot"
        subtitle="background"
        heading="What is Bot Bouncer?"
      >
<p>
                <a href= 'https://twitter.com/bot_bouncer' class='link ultrahacks-link'>Bouncer Bot</a> is a Twitter bot that utilizes Twitter's mute function for users. The mute function can be a powerful and useful tool 
                to curate and censor a user's timeline and content they interact with everyday. We wanted to create a bot that could help 
                facilitate Twitter’s built in muting function in a useful way.

            </p>
            <p>
                Bouncer Bot mutes certain words the user DMs the bot and censors it so that the user doesn't have to see content that includes 
                that word. We also worked to incorporate images to the bot. The bot analyzes the image a user sends, and calculates the MSE 
                (mean squared error) of the image model, and mutes all images in the future that are close in value to the muted image.

            </p>
            <img src={bouncerbot2} width='1100' height="550" className="mx-auto"/>

            <p>
                This project was created for the Twitter sponsored <a href='https://ultrahacks.devpost.com' class='link bouncerbot'>#UltraHacks</a> virtual hackathon, which I got the opportunity to attend through 
                <a href='https://techatnyu.org' class='link bouncerbotk'> Tech@NYU</a>’s program, Tech Undivided. Tech Undivided is a pilot program that connects Black and Latinx students with networking 
                and professional opportunities to help their journey into tech.
            </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="bouncerbot"
        subtitle="ideation"
        heading="How we built it."
      >
 <p>
                The objective of the hackathon was to create a project for Twitter that would encourage healthy conversations, so first we had to get 
                familiar with the Twitter API and the Tweepy Python library. We created Developer accounts and first programmed the bot to send a DM to 
                users, and if that functionality failed, attempted to send a normal tweet. With the API’s mute functionality, we are able to receive a 
                DM from another account, giving us a word they want to mute, and we mute it for them. 

            </p>
          
            <iframe className='mx-auto' width="1160" height="655" src="https://www.youtube.com/embed/7f5pdKDcfJk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           
            <p>
                We also started to create an extra feature to the bot that would allow the bot to mute images as well. A user would send the image they want to mute, 
                and we would save the image into our database. Then, if that same user was sent that image, or an image similar to it, our bot would calculate the 
                mean squared error between the sent image and the muted image, and if the images are similar, our bot would mute the message of the picture. 
                The bot was built with Python and Django, and deployed using Heroku. You can check out our work <a href='https://github.com/rachelombok/ultrahacks' class='link bouncerbot'>here</a>. 

            </p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id="bouncerbot"
        subtitle=""
        heading="Conclusion"
      >
 <p>
                At the end of the weekend, we placed 2nd among everyone and were able to present our projects to all the attendees and Twitter representatives at the event. 
                It was my first online hackathon I participated in and it was all around a successful and enjoyable experience. 
            </p>
            <blockquote class="twitter-tweet tw-align-center">
            <p lang="en" dir="ltr">
              And the 2nd place winner of the
              <a
                href="https://twitter.com/hashtag/UltraHacks?src=hash&amp;ref_src=twsrc%5Etfw"
                > #UltraHacks</a>
              Hackathon is......🥁 roll please.....<a
                href="https://twitter.com/hashtag/BOUNCERBOT?src=hash&amp;ref_src=twsrc%5Etfw"
                >#BOUNCERBOT</a>
               🤖 Congratulations to the
              <a href="https://twitter.com/techatnyu?ref_src=twsrc%5Etfw"
                > @techatnyu</a>
              chapter representing
              <a href="https://twitter.com/nyuniversity?ref_src=twsrc%5Etfw"
                > @nyuniversity</a>!
              <a href="https://t.co/klkXRk5VbI"> pic.twitter.com/klkXRk5VbI</a>
            </p>
            &mdash; Twitter University Recruiting (@TwitterU)
            <a
              href="https://twitter.com/TwitterU/status/1317933369729052672?ref_src=twsrc%5Etfw"
              >October 18, 2020</a>
          </blockquote>
      </ProjectSectionDescription>
      </PageContainerOutline>
    );
};