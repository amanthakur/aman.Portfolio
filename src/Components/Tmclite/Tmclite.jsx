import React from 'react'
import './tmclite.css'

import work1 from '../../assets/work1.svg'
import Risk from '../../assets/Risk.svg'
import list from '../../assets/list.svg'
import Summary from '../../assets/Summary.svg'
import Problem from '../../assets/Problem.svg'
import Role from '../../assets/Role.svg'
import Challenges from '../../assets/Challenges.svg'
import Approch from '../../assets/Approch.svg'
import Solution from '../../assets/Solution.svg'
import work2 from '../../assets/work2.svg'
import log4 from '../../assets/log4.svg'
import  log3 from '../../assets/log3.svg'
import Qdash from '../../assets/Qdash.svg'


const Tmclite = () => {
  return (
     <div className='watchoutp'>
         <div className='work-card'>
                  <img className='work-image' src={work2} alt="Featured work" />
        
                  <div className='work-overlay'>
                    <div className='work-text'>
                        <h4> Product & Design</h4>
                      <h3>Designing Clarity for Complex Care: The TM-Lite Portal</h3>
                      <p>
TM-Lite is a comprehensive organ transplant system designed to streamline and improve the entire process for doctors and patients.

                      </p>

                        <div className='watchout-box'>
                     <div className='watchout-box-1'> 
                       <h4>Role</h4>
                       <p>Lead Product Designer</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Industry</h4>
                       <p>Health Care</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Platforms</h4>
                       <p>Web Application</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Duration</h4>
                       <p>7 Months</p>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
   
   
                <div className='container'>
   
                 <div className='con-section'>
              <div className='con-section-left'> 
                Product details
               </div>
               <div className='con-section-right'>
   
   <h3><img className='' src={Summary} alt="Summary" />
   
   Summary</h3>
   <h4></h4>
   <p> 

    As the Lead Product Designer, I created TMC lite, a portal that streamlines the organ transplant process for doctors and patients. My goal was to replace fragmented, manual systems with a centralized, user-friendly platform.

My process began with user research—interviewing patients and doctors to map their journeys and pain points. Based on their feedback, I designed and tested a solution that provides patients with real-time status updates and medication reminders, while giving doctors a centralized dashboard to track and manage care.

Overcoming challenges like data security and user adoption, my solution significantly improved the process. TMC lite led to a 20% increase in patient satisfaction and a 30% reduction in data errors, ultimately saving time for doctors and reducing anxiety for patients.
   
</p>


    </div>
           </div>
   
    <div className='con-section'>
              <div className='con-section-left'> 
               </div>
               <div className='con-section-right'>
   
   <h3> <img className='' src={Problem} alt="Problem" />Problem Statement</h3>
   <h4></h4>
   <p>
  Clearly define the core problem you're solving. What challenges do doctors and patients face in the organ transplant process?</p>
<ul>
    <li>For Patients: Lack of real-time information, anxiety about wait times, difficulty tracking post-transplant care, and communication gaps with their medical team.
</li>
    <li>For Doctors: Inefficient manual tracking of patient data, communication bottlenecks, and difficulty monitoring patient adherence to post-transplant protocols.
</li>
    <li>The Overarching Goal: The lack of a centralized, user-friendly platform creates stress, potential for error, and inefficiency for all stakeholders. Your solution aims to streamline this complex process.   
</li>
</ul>
   
   
   
  
    
   
    </div>
           </div>
   
            <div className='con-section'>
              <div className='con-section-left'> 
               </div>
               <div className='con-section-right'>
   
   <h3> <img className='' src={Role} alt="Role" />
   Role & Team</h3>
   <h4></h4>
   
     <p>Describe your specific contribution and the team you worked with.</p>   

     <ul>
       <li>Your Role: State your title clearly—"Lead Product Designer." Specify your responsibilities, such as user research, wireframing, prototyping, user testing, and collaborating with developers and stakeholders.
</li>
       <li>The Team: Mention the key members you collaborated with, such as product managers, developers (front-end and back-end), and subject matter experts (doctors or transplant coordinators). This shows you worked in a realistic, cross-functional environment.
</li>
     </ul>


   
   
     <h3> <img className='' src={Challenges} alt="Challenges" /> Key Challenges & How We Solved Them</h3>
   <h4></h4>
   
     <ul>
   
       <li> 
         <b>Data Security & Patient Privacy </b> <br/>
       <p>
        
        <b>Challenge: </b>Handling sensitive patient health information (PHI) required strict compliance with regulations like HIPAA. Any breach could have severe legal and ethical consequences. <br/> 

<b>Solution:</b> We implemented a robust security architecture. All patient data was encrypted both in transit and at rest. We used a role-based access control (RBAC) system to ensure doctors and patients could only view the information they were authorized to see. Regular security audits were conducted to identify and patch vulnerabilities.</p>
   </li>


       <li> 
         <b>User Adoption & Workflow Integration </b> <br/>
       <p>
        
        <b>Challenge: </b>Doctors and hospital staff are often resistant to new software that disrupts their established workflows. The portal needed to be intuitive and offer a clear value proposition to encourage adoption. <br/> 

<b>Solution:</b> Our solution was twofold. First, we conducted extensive user research to design a user interface (UI) that mimicked and simplified existing hospital processes. We focused on making the most critical tasks, like checking patient status or sending messages, accessible with minimal clicks. Second, we launched a phased rollout with dedicated training and support sessions for medical staff. This provided a seamless transition and addressed any questions or concerns in real-time.</p>
   </li>
   

       <li> 
         <b>Patient Anxiety & Information Overload </b> <br/>
       <p>
        
        <b>Challenge: </b>Patients often feel anxious and overwhelmed by the transplant process. The portal needed to provide clear, reassuring information without adding to their stress. <br/> 

<b>Solution:</b> We designed the patient-facing dashboard to be simple and visually calming. We used a clear, "at-a-glance" format to show a patient's current status (e.g., "Active on Waiting List" or "Post-Op Recovery"). Instead of bombarding them with complex medical jargon, we used plain language and offered a secure messaging feature so they could directly ask their care team questions, providing a direct line to reassurance.</p>
   </li>
   
   
    
   
     </ul>
   
   
   
    </div>
           </div>
   
   
            <div className='con-section'>
              <div className='con-section-left'> 
               </div>
               <div className='con-section-right'>
   
   <h3> <img className='' src={Approch} alt="Approch" />Approach</h3>
   <h4></h4>
   
   <p>Detail the design process you followed. This is where you explain how you went from a problem to a solution.

</p>
   
   
   <ul>
     
       <li> 
         <b>Discovery & Research: </b> <br/>
       <p>
        
        <b>User Research: </b> How did you understand your users? Mention methods like interviews with doctors and transplant patients, surveys, and competitive analysis of existing solutions.<br/> 

<b>Journey Mapping:</b> Explain how you mapped out the patient and doctor journey to identify pain points and opportunities for improvement.</p>
   </li>


       <li> 
         <b>Ideation & Design: </b> <br/>
       <p>
        
        <b>Information Architecture:</b>How did you structure the portal to be intuitive? Mention creating sitemaps and user flows. <br/> 

<b>Wireframing & Prototyping: </b>Describe the process of creating low-fidelity wireframes and then high-fidelity prototypes.</p>
   </li>
   

       <li> 
         <b>Validation:</b> 
       <p>
        
        <b>Usability Testing: </b> Explain how you tested your prototypes with actual users to gather feedback and make iterative improvements. Mention the key insights you gained from this process.<br/> 

</p>   </li>
   
   </ul>
   

    </div>
   
                  
           </div>
   
   
           
   
       </div>
   
   
         <div className='con-sec'>
              <div className='con-img-left'> 
   
                <img className='' src={log4} alt="Featured work" />
              
   
               </div>
               <div className='con-img-right'>
   
   
             <img className='' src={log3} alt="Featured work" />
   
   
   
              </div>
           </div>
   
   
                 <div className='container'>
   
               
   
    <div className='con-section'>
              <div className='con-section-left'> 
               </div>
               <div className='con-section-right'>
   
   <h3> <img className='' src={Solution} alt="Solution" /> Solution Highlights</h3>
   <h4></h4>
   <p>Present the key features and functionalities of the TMC lite portal that directly address the problem statement.


     </p>
   <ul>
    <b>For Patients:</b> 
     <li> 
         
       <p>
         <b>Real-time status updates: </b> A dashboard showing their place on the waitlist or their post-op recovery progress.<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Medication reminders: </b> Alerts to help them stay on schedule with their post-transplant drugs.<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Secure messaging: </b> A direct line of communication with their care team.<br/> 
       </p>   
     </li>

     
   </ul>




    <ul>
<b>For Doctors:</b> 
     <li> 
         
       <p>
         <b>Centralized patient dashboard: </b> A single view of all their transplant patients, with key metrics and alerts.<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Automated reports: </b>  Features that generate summaries of a patient's progress or adherence.<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Collaboration tools:  </b> Tools to help the surgical team and coordinators share information seamlessly.<br/> 
       </p>   
     </li>
     
   </ul>
   
    </div>
           </div>




  <div className='con-section'>
              <div className='con-section-left'> 
                Results & Impact

               </div>
               <div className='con-section-right'>
   
   <h4></h4>
   <p>This is the most critical section. Quantify the success of your design.



     </p>
   <ul>
    <b>Metrics: Use data to back up your claims. Mention metrics like:</b> 
     <li> 
         
       <p>
         <b>Increase in patient satisfaction: </b>Patient feedback scores on portal usage increased by 20%."<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Reduction in errors: </b> "Manual data entry errors reduced by 30%."<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Time savings:  </b>  "Doctors saved an average of 15 minutes per day on administrative tasks."<br/> 
       </p>   
     </li>
     
   </ul>

   <ul>
    <b>Qualitative Impact: Talk about the non-numerical benefits.</b> 
     <li> 
         
       <p>
         <b>Improved patient confidence: </b>How did the portal reduce anxiety for patients and their families?<br/> 
       </p>   
     </li>

      <li> 
         <b> </b> 
       <p>
         <b>Enhanced care coordination: </b> How did it improve collaboration among the medical team?<br/> 
       </p>   
     </li>

     <p><b>Future Opportunities:</b> Conclude with the potential for future growth, such as adding features for remote monitoring or integrating with other health systems.</p>

   
   </ul>

   
    </div>
           </div>
   
            
   
   
           
   
       </div>
   
   
        <div className='con-sec conatainer'>
              <div className='con-img-left'> 
   
       <div className='work-card'>
                   <img className='work-image' src={Qdash} alt="Featured work" />
         
                   <div className='work-overlay'>
                     <div className='work-text'>
                         <h4> Product & Design</h4>
                       <h3>Q-Clear: Your Personal Health Passport</h3>
                       <p>
Q-Clear simplifies health verification, streamlines safe entry into public spaces, and makes managing personal health data as seamless as checking a dashboard—all without sacrificing privacy or control.                       </p>
                   
                   <button className='work-btn'>View Project</button>
                     </div>
                   </div>
                 </div>       
   
               </div>
               <div className='con-img-right'>
   
   
    <div className='work-card'>
                  <img className='work-image' src={work1} alt="Featured work" />
        
                  <div className='work-overlay'>
                    <div className='work-text'>
                        <h4> Product & Design</h4>
                      <h3>Watch Out Cybersecurity Portal</h3>
                      <p>
                     Watch Out Cybersecurity Portal simplifies threat detection, streamlines security workflows, and makes managing enterprise cybersecurity as seamless as checking a dashboard — all without sacrificing protection or control.
                      </p>
                                    <button className='work-btn'>View Project</button>
   
                    </div>
                  </div>
                </div>
   
   
              </div>
           </div>
   
          
   
       </div>
  )
}

export default Tmclite