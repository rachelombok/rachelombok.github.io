import React from "react";
import { PageContainerOutline } from "../components/PageContainerOutline";
import { PageHeader } from "../components/PageHeader";
import { PageDetails } from "../components/PageDetails";
import { ProjectSectionDescription } from "../components/ProjectSectionDescription";
import { Link } from "react-router-dom";
import covideasblacklogo from '../images/covidforecasts/COVIDforecasts-logo-black.png';
import slide1 from '../images/covidforecasts/slide1.png';
import slide6 from '../images/covidforecasts/slide6.png';
import slide3 from '../images/covidforecasts/slide3.png';
import slide7 from '../images/covidforecasts/slide7.png';

export default function CovideasPage() {
    const team = <><p className="not-prose my-0">Jacob Abernethy, Project Lead</p>
    <p className="not-prose my-0">Bo Waggoner, Mentor</p>
    <p className="not-prose my-0">Raf Frongillo, Mentor</p>
    <p className="not-prose my-0">Sarah Yoo, Student Researcher</p>
    <p className="not-prose my-0">Annirudha Murali, Student Researcher</p></>

    return(
<PageContainerOutline className="site-page">
      <PageHeader
        emoji={`💾`}
        lineOne="COVIDforecasts"
        lineTwo="Creating a pandemic prediction market."
        stylename=""
      />

      <PageDetails
        id=""
        icon={covideasblacklogo}
        overview="COVIDforecasts aims to showcase known and predicted pandemic data, and also allows users to guess the future trajectory of COVID-19."
        roles="Student Researcher"
        timeline="June 2020 to Present"
        team={team}
      />

      <ProjectSectionDescription
        id=""
        subtitle="background"
        heading="What is COVIDforecasts?"
      >
<p>
							The <a href='https://www.covidforecasts.com' className="underline">COVIDforecasts</a> website aims to show various past data readings of coronavirus data, as well as future predictions from various sources. 
							Different forecasts relating to the COVID-19 pandemic are displayed, and users can make their own predictions about the future trajectory of factors relating to the pandemic such as daily deaths, hospitalizations and cases. Our mission is to deliver future projections and collected data by providing the best information on the COVID-19 pandemic.
						</p>
						
						<p>
							I worked on COVIDforecasts this summer as a research intern for Georgia Tech’s <a href='http://www.covideas20reu.org' className="underline">COV-IDEAS REU</a> program. 
							Through the summer, the project team I was a part of focused on aggregating data to show past readings of coronavirus data, as well as future predictions from various sources. 
							The goal was to create a public prediction market for COVID-19, that anyone could use. 

						</p>
      </ProjectSectionDescription>

      <ProjectSectionDescription
        id=""
        subtitle="problem"
        heading="Project Ideation"
      >
<p>
						The motivation for this project stemmed from the lack of understandable data that was being released on the future projections of the pandemic. 
						Different data sources show very varying projections and can be hard to read for anyone not familiar with the pandemic already. 
						Also, most data sources came from accredited academic institutions who were making future projections with the data they had collected themselves, so each source gave a different point of view. 
						We wanted to take this data and transform it into a public prediction market. 
						Since the pandemic has escalated, ‘super forecasters’ have made unique and accurate predictions relating to the pandemic, and we wanted to take the knowledge and showcase it for all to see. 
					</p>
					

					<img src={slide1} width="1350" className="mx-auto" alt='bad forecasts on the covidforecasts website'/>
					
						 
					<p>
						One large focus that was a part of the project ideation was the gamification of the site. 
						Prediction markets can be fun because they let real people give their opinions and views on future events, but we wanted to make sure the site was engaging in the correct way, and that people would make meaningful earnest predictions on our site.


					</p>
			
					<p>
						We wanted the main features of the site to include collecting user predictions, ranking forecasts based on accuracy, and evaluating forecast models and user predictions.

					</p>
					
					<img src={slide6} alt="Covidforecasts First Sprint landing page" width='1350' className="mx-auto"/>
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id=""
        subtitle="timeline"
        heading=""
      >
        <h3 className="mb-0">1st Sprint</h3>
<p>
						We had various sprints where we developed our site in different stages. 
						In the first sprint, we set up a basic Flask site and create our first visualizations in Chart.js. 
						We first had all the charts separate and allowed for users to vote on a poll which prediction seemed the best. 
						During this stage, we also programmed backend APIs for reading and sending forecast data. 


					</p>
					

					<img src={slide3} alt="Covidforecasts First Sprint landing page" width='1350' className="mx-auto"/>
					  
					<h3 className="covideas-title">2nd Sprint</h3>
				
					<p>
						The second sprint consisted of us refactoring the site with React, and organizing a separate frontend and backend for the structure. 
						We used React on the frontend and kept Flask on the backend. 
						This helped with improvements to the site’s UI and better organizing the files. 
						This also helped us learn about running web apps locally and guiding others how to install and configure our app. 
					</p>
					
					
					<h3>MVP</h3>
					<p>
						Halfway through the 10-week program, we were given a seminar talk by Robin Hanson, an acclaimed professor and  economist, where he talked about forecasting, crowdsourcing, and policy in a pandemic, and how they all connect to each other. 
						Since our project aligned with many of his points and economic interests, we wanted to prepare a Minimum Viable Product to present to him and receive feedback. 
						For this sprint, we added D3.js visualizations with the option for users to draw their predictions, which were then saved in a database. 
						We also added account authentication, a user profile page, and smoothed out the design and interface of the charts and site. 

					</p>
					<img src={slide7} alt="Covidforecasts First Sprint landing page" className="mx-auto"/>
					
					<h3>Final Product</h3>
					<p>
						At the end of the 10 week program we wanted to do a soft release of the product that we could send out to people and have them make their predictions. 
						For this final product we added an evaluation metric (Mean Squared Error), and a Top Forecasters page which ranks results of user and official forecaster predictions. 
						The site was deployed on Heroku and is public and available for anyone to use. Click <a href='https://www.covidforecasts.com/#/' className='link covideas-link'>here </a>to see the live site.
					</p>
					
					<iframe width="800" height="470" src="https://www.youtube.com/embed/OQNwDep53Ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="mx-auto"></iframe>
					
					
					
      </ProjectSectionDescription>
      <ProjectSectionDescription
        id=""
        subtitle="technologies"
        heading=""
      >
 <div className="flex space-x-2">
 <img alt="React" width='110px' src="https://img.shields.io/badge/-React-red?style=flat-square&logo=react&logoColor=white" />
						  
						  <img width='130px' alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
						  <img width='110px' alt="Flask" src="https://img.shields.io/badge/-Flask-000000?style=flat-square&logo=flask&logoColor=white" />
						  <img width='130px'alt='MongoDB' src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
						  <img width='80px'alt='D3' src="https://img.shields.io/badge/-D3-F9A03C?style=flat-square&logo=d3.js&logoColor=white"/>
						  <img width='130px' alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white"/>
       </div>
      </ProjectSectionDescription>
      </PageContainerOutline>
    );
};