import React from 'react';
import { PageContainerOutline } from '../components/PageContainerOutline';
import { PageHeader } from '../components/PageHeader';
import roavi from '../images/about/ro-avi-1.jpg';

export default function AboutPage() {

    return(
        <PageContainerOutline >
            <PageHeader
            emoji={`✌🏾`}
            lineOne='Hey there,'
            lineTwo='Nice to meet you.'
            />
            <div className='c15 prose-2xl'>
   <div>        

<p>

Hi, I'm Rachel! I'm a recent graduate of <a href='https://engineering.nyu.edu' class='link nyu-link'>New York University</a>, where I studied Computer Science
and Game Engineering, and am currently exploring all of the opportunities I’m given that merge tech and artistic creativity together. 


</p>
<p>
Currently I am a Software Engineer at <a href="https://www.alteryx.com" class="trifacta-link link">Alteryx</a> working on <a href="https://www.trifacta.com" class="trifacta-link link">Trifacta</a> products.
In summer of 2021, I interned at <a href='https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview' class='twitter-link link'>Twitter</a> as a Software Engineering Intern,
and this past school year 
I have taken courses such as <a href='/cs3113' class='cs3113-link link'>Introduction to Game Programming</a> and <a class='dm2133-link link' href='/dm2133'>3D Modeling</a>, and conducted research
at Brown University in their <a href="https://explorecsr.cs.brown.edu/ai/index.html" class="handymap-link link">exploreCSR program</a>.


</p>
</div> 
<img src={roavi} className='avi'/>
            </div>
               
        </PageContainerOutline>
    );
};