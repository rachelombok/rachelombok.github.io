import React from 'react';
import { PageContainerOutline } from '../components/PageContainerOutline';
import { PageHeader } from '../components/PageHeader';
import roavi from '../images/about/ro-avi-1.jpg';
import { Link } from 'react-router-dom';

export default function AboutPage() {

    return(
        <PageContainerOutline className='site-page'>
            <PageHeader
            emoji={`✌🏾`}
            lineOne='Hey there,'
            lineTwo='Nice to meet you.'
            />
            <div className='c15 prose-2xl'>
   <div>        

<p>

Hi, I'm Rachel! I'm a recent graduate of <a href='https://engineering.nyu.edu' class='link nyu'>New York University</a>, where I studied Computer Science
and Game Engineering, and am currently exploring all of the opportunities I’m given that merge tech and artistic creativity together. 


</p>
<p>
I recently worked as a Software Engineer at <a href="https://www.alteryx.com" class="link alteryx">Alteryx</a> working on <a href="https://www.trifacta.com" class="link alteryx">Trifacta</a> products.
In summer of 2021, I interned at <a href='https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview' class='link twitter'>Twitter</a> as a Software Engineering Intern,
and this past school year 
I have taken courses such as <Link to='/cs3113' class='link cs3113'>Introduction to Game Programming</Link> and <Link to='/dm2133' class='link dm2133'>3D Modeling</Link>, and conducted research
at Brown University in their <a href="https://explorecsr.cs.brown.edu/ai/index.html" class="link explorecsr">exploreCSR program</a>.


</p>
</div> 
<img src={roavi} className='avi' alt='picture of Rachel Ombok'/>

            </div>
            
               
        </PageContainerOutline>
    );
};