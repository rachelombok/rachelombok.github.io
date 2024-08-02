import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { CollapsibleSection } from "../components/CollapsibleSection";
import { CourseSectionDetails } from "../components/CourseSectionDetails";
import { Link } from "react-router-dom";
import pic1 from '../images/dm2133/1.jpg';
import pic2 from '../images/dm2133/2.JPG';
import pic3 from '../images/dm2133/3.jpg';
import pic4 from '../images/dm2133/4.JPG';
import pic5 from '../images/dm2133/5.JPG';
import pic6 from '../images/dm2133/6.jpg';

export default function ModelingPage() {
    const overview = "In this course, students learn to produce and render high-quality 3D models, and upon completion of this course, students will have a solid understanding of the fundamentals of modeling, texturing, animation and lighting using industry-standard software. Students may create content for video games, web, film, or other interfaces.";

    const skills = <div className="flex space-x-2"><img alt="Unity" width='100px' src="https://img.shields.io/badge/-Maya-0696D7?style=flat-square&logo=autodesk&logoColor=white" />
    <img width='100px' alt="XCode" src="https://img.shields.io/badge/-ZBrush-e8781c?style=flat-square&logo=zbrush&logoColor=white" /></div>;
    
    const projects = <><p  className="not-prose my-0 font-medium dm2133">Lego Flower Bouquet</p>
    <p  className="not-prose my-0 font-medium dm2133">Squid Game Doll</p></>;
    const objectives = <ol >
											
    <li className='course-bullet dm2133'><span className='course-text'>Demonstrate proficiency in working with tools, menus, and keyboard shortcuts, and modeling 3D objects</span></li>
    <li className='course-bullet dm2133'><span className='course-text'>Demonstrate proficiency in working with textures, lights, and cameras</span></li>
    <li className='course-bullet dm2133'><span className='course-text'>Understand and utilize tools and technology, while adapting to constantly changing
        technological paradigms by learning how to learn.</span></li>
    <li className='course-bullet dm2133'><span className='course-text'>Students will be able to integrate/interface different technologies within a technological ecosystem.</span>
    </li>
</ol>;

    return(
<PageContainerOutline className="site-page">
      <PageHeader
        emoji={`🦾`}
        lineOne="DM-UY 2133"
        lineTwo="3D Modeling"
        stylename="dm2133"
      />

      <CourseSectionDetails
        overview={overview}
        objectives={objectives}
        skills={skills}
        projects={projects}
      />

      <ProjectSectionDescription
        id="dm2133"
        subtitle="Maya model"
        heading="Lego Flower Bouquet"
      >
<p>
							Develop one polygnal model, usually a character or inanimate object. If the object is a character, it can either be an original or a 
                            pre-existing character. One of the 
                             primary goals of this project is learning how to keep topology clean.	</p>
							 
							  <p>I decided to model the Lego Flower Bouquet build because the blocks of the model are very geometric and would be simple to model. 
                                  There were pieces that could be reused and duplicated throughout the project. I also owned a Lego Bouquet in real life, so it made
                                  it that much easier to model and create. 
                              </p>
								
                                <div className='row w-auto'>
                                <div className="column">
                                        <img src={pic1} className='shadow image-level' alt="real life Lego Flower Bouquet" />
                                 </div>
                                 <div className="column ">
                                        <img src={pic2} className='shadow image-level'alt="Work in progress Maya model lego flower bouquet"/>
                                   </div>
                                   <div className="column">
                                        <img src={pic4} className='shadow image-level' alt="Final render of 3D modeled lego flower bouquet"/>
                                   </div>
                                </div>
                            
                                
                                <p>The entire model was made with primitive polygons in Autodesk Maya. It took around 3 weeks to model all the flowers and
                                    pieces in the project, and then afterwards I moved on to texturing and creating UV Map for the bouquet. The color map and texturing
                                    were relatively easy, since every piece had the same, plastic like texture and smooth surface. I used Arnold to render and texture each piece of lego.
                                </p>
                                
                              
                                <img src={pic3} alt="Final render of 3D modeled lego flower bouquet 2" className='img center'/>
                                
                                <img src={pic5} width='100%' alt="Final render of 3D modeled lego flower bouquet 3"/>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id="dm2133"
        subtitle="zbrush character"
        heading="Squid Game Doll"
      >
<p>
					In this project, we used ZBrush to model a simple character. The character must be pre-existing, and have a relatively simple design.
                   Modeling and color is done in ZBrush, then Maya and Arnold are used for lighting and rendering of final images.	</p>
				
				
				<p>
					I chose to model the Squid Game Doll from the hit Netflix Original Series Squid Game. I chose this character because I really enjoyed
                    the show, and thought it would be a cool, but relatively easy 3D model to create for this assignment. 
				</p>
				
                <p>Similar to the Lego Bouquet Model, the Squid Game Doll model had really one texture and surface throughout, a sort of porcelain texture that
                    was a bit shiny in some places, and muted in others. For this project I used around 6 different subtools, for each part of her body (head, dress
                    , legs, arms, and collar), and also had different Polygroups for each of these sections as well. I used ZBrush's built in PolyPaint tool to color her,
                    and then created a UV Map so that I could export the texture to use in Maya. From my model I created a .obj file that I imported into Maya, and then 
                    rendered the finished product using Arnold. 
                </p>
                <img src={pic6} width='100%' alt="3d Model of Squidgame girl doll"/>
      </ProjectSectionDescription>
      </PageContainerOutline>
    );

};