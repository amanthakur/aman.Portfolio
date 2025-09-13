import React from 'react'
import './resume.css'
import  cup from '../../assets/cup.svg' 
import shape from '../../assets/shape.svg'
import achive from '../../assets/achive.svg'
import Contact from '../Contact/contact'
import work from '../../assets/work.svg'
import resume from '../../assets/resume.pdf'

const Resume = () => {
  return (
    <div className='container'>
        <div className='Resume'> 
        <h2>Resume</h2>
       <button className='btn' > <a href={resume}> Download My Resume</a> </button>
        </div>




        <div className='resume-details'>
            <img src={cup} alt="" />
          <h3>Why consider me?</h3>
          <p>I thrive at the intersection of design, business, and technology, leveraging empathy, storytelling, and data-driven insights to create meaningful experiences. With over a decade of experience in UI/UX and product design, I bring a unique perspective that blends creativity with strategy. My career spans leadership roles, product innovation, entrepreneurship, and research-driven design, giving me a 360° view of how digital products impact businesses and users alike.

As a design manager and product thinker, I don’t just craft interfaces — I design solutions grounded in real-world context. From B2B enterprise SaaS platforms to consumer-facing experiences, my approach is deeply rooted in research, user empathy, and measurable impact. I am equally passionate about mentoring design teams, conducting workshops, and shaping scalable design systems that empower teams to deliver faster and smarter.</p>

 <img src={shape} alt="" />
          <h3>What shaped me?</h3>
          <p>Two defining experiences:
            </p>
            <p>

1️⃣ Building Products with Purpose – From leading UX strategies for cybersecurity platforms and SaaS-based solutions to designing data-driven enterprise tools for manufacturing and healthcare, I’ve helped businesses scale through thoughtful design.</p>
<p>
2️⃣ Entrepreneurial Mindset & Service to Society – Running my own design initiatives and contributing to social causes, including supporting underprivileged children and families, has taught me resilience, empathy, and long-term vision.

These experiences shaped my belief that great design is not just about visuals but about solving problems, empowering users, and driving measurable outcomes. I operate with a customer-first mindset, believing in collaboration, authenticity, and building high-performing teams where every member plays to their strengths, learns from challenges, and celebrates shared success.</p>
        </div>

        <div className='experience'>
            <h2>  Work  <img src={work} alt="" /></h2>

            <div className='job'>
           <div className='location-date'> 
             July 2022 - Present <br/>
             Hyderabad , India
            </div>
            <div className='job-details'>

<h3>Manager (UI/UX)</h3>

<h4>Castellum Labs </h4>
<p> 
Driving and finalizing UX for cybersecurity solutions offered to Banking, Institutional and

Enterprise clients. Manage design needs for digital footprint, marketing campaigns and 

exclusive projects of group company.</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
             Sep 2020 - Jun 2022
             <br/>
             Remote

            </div>
            <div className='job-details'>

<h3>Design Head (UI/UX)</h3>

<h4>QR Clear Inc </h4>
<p> 
Lead a 5 people digital Team and created some software solution designs for patient 

Usability,
Covid-19 tracking apps and dashboard Solutions .</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
             Feb 2020 - Aug 2020 <br/>
             Remote

            </div>
            <div className='job-details'>

<h3>Design Head (UI/UX)</h3>

<h4>The GoldCube Inc </h4>
<p> 
Lead a 7 members digital team and engage with IT,DevOps, Network & cybersecurity 

security 
teams for a FinTech product. Participated/Contributed in daily,weekly & quarterly 

product
 development goals for iOS,Android or Web interface.
 Launched various 

dashboards and panels as per product development goals. 
</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
             Oct 2016 – Jan 2020 <br/>
             Delhi India

            </div>
            <div className='job-details'>

<h3>Product Design Lead(UI/UX)</h3>

<h4>AE DIMENSIONS PVT LTD </h4>
<p> 
Managed the UI Designing & UX development of AddLauncher.com (AdTech platform for

advertisers & publisher. Marketplace for media buying) Also Managed other flagship 

projects or 
digital products of group company along digital & devOps team. 

Participated/Contributed in 
daily,weekly & quarterly product development goals for iOS,

Android or Web interface.</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
           Jan 2016 – Sep 2016
           <br/>
           Remote

            </div>
            <div className='job-details'>

<h3>Sr PRODUCT DESIGNER / UI DEVELOPER</h3>

<h4>Direct Dispatch INC </h4>
<p> 
Worked as Experience Design Lead for Direct-Dispatch Brand Evolution project along a

cross-functional & cross-cultural team. Managed digital footprint and branding as per

supply chain or B2B industry needs.</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
            Apr 2013 – Sep 2015 <br/>
            Chandigarh , India


            </div>
            <div className='job-details'>

<h3>UI/UX DESIGNER / UI DEVELOPER</h3>

<h4>             Tri network ltd
</h4>
<p> 
    Managed the UI Designing & UX development of Trideal.com (Online marketplace connecting

subscribers with local merchants by offering deals & coupons for activities,goods & services)

Also Managed other flagship projects or digital products of group company along digital &

devOps team.Participated/Contributed in daily,weekly & quarterly product development 

goals 
for iOS,Android or Web interface.
</p>




           </div>
        </div>

         <div className='job'>
           <div className='location-date'> 
             July 2013 <br/>
            Chandigarh , India
            </div>
            <div className='job-details'>

<h3>UI/UX Designer, UI Developer</h3>

<h4>AYUSHMAAN TECHNOLOGY</h4>
<p> 
Worked closely with product team,engineers and founding team for executing

iOS/Android/WebApps for international clientele. 
Excelled in creating wireframes & 

high-fidelity prototypes.
Participated/Contributed in 10+ projects </p>




           </div>
        </div>

<h2>  
Educations <img src={achive} alt="" /></h2>
        <div className='job'>
           <div className='location-date'> 
             2010 to 2013 

            </div>
            <div className='job-details'>

<h3>Bsc (IT) </h3>

<h4>Punjab Technical University.
</h4>
<p> 
 </p>




           </div>
        </div>

<div className='job'>
           <div className='location-date'> 
             2013

            </div>
            <div className='job-details'>

<h3>ARENA ANIMATION </h3>

<h4>Certification Diploma in UI/UX DESIGNING
</h4>
<p> 

 </p>




           </div>
        </div>

        <div className='job'>
           <div className='location-date'> 
             2024

            </div>
            <div className='job-details'>

<h3>Google </h3>

<h4>Google UX Design Professional Certificate</h4>
<p> 

 </p>




           </div>
           
        </div>


        </div>
                <Contact/>


    </div>
  )
}

export default Resume