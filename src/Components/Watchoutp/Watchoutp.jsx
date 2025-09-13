import React from 'react'
import './watchoutp.css'
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







const Watchoutp = () => {
  return (
    <div className='watchoutp'>
      <div className='work-card'>
               <img className='work-image' src={work1} alt="Featured work" />
     
               <div className='work-overlay'>
                 <div className='work-text'>
                     <h4> Product & Design</h4>
                   <h3>Watch Out Cybersecurity Portal</h3>
                   <p>
                  Watch Out Cybersecurity Portal simplifies threat detection, streamlines security workflows, and makes managing enterprise cybersecurity as seamless as checking a dashboard — all without sacrificing protection or control.
                   </p>

                  <div className='watchout-box'>
                     <div className='watchout-box-1'> 
                       <h4>Role</h4>
                       <p>UI/UX Manager</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Industry</h4>
                       <p>Cyberscurity</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Platforms</h4>
                       <p>Web Application</p>
                    </div>
                     <div className='watchout-box-1'> 
                       <h4>Duration</h4>
                       <p>16 Months</p>
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

Watch Out is an enterprise cybersecurity portal designed to help SecOps teams detect, investigate, and respond to threats faster—without drowning in alerts. The product centralizes alert triage, incident investigation, policy/rule management, threat intelligence, and audit reporting into a single, coherent workflow. I led the end‑to‑end UX and UI, focusing on reducing cognitive load, making complex data scannable, and aligning the interface to real SOC workflows (L1→L2→L3). The result is a system that helps teams prioritize what matters, collaborate with confidence, and demonstrate compliance.</p>

 </div>
        </div>

 <div className='con-section'>
           <div className='con-section-left'> 
            </div>
            <div className='con-section-right'>

<h3> <img className='' src={Problem} alt="Problem" />Problem Statement</h3>
<h4></h4>
<p>
Security operations teams are overloaded with noisy alerts and fragmented tools. Investigations often require pivoting across multiple systems (SIEM, EDR, TI feeds, ticketing) with inconsistent data models and no clear handoff path. This leads to: </p>
<uL>
  <li><b>Alert fatigue </b> and inconsistent triage decisions</li>
  <li><b>Slow Mean Time to Detect/Respond (MTTD/MTTR) </b>due to scattered evidence and manual steps</li>
  <li><b>Siloed collaboration </b> (analysts, threat hunters, and IT) and poor auditability</li>
  <li><b>High onboarding time</b> for new analysts because of domain complexity and inconsistent UI patterns</li>


</uL>



<p>
<b>Design goal: </b> Build a unified, learnable portal that surfaces the highest‑risk issues first, supports deep investigations without context‑switching, and  produces audit‑ready evidence and reports.</p>
 

 </div>
        </div>

         <div className='con-section'>
           <div className='con-section-left'> 
            </div>
            <div className='con-section-right'>

<h3> <img className='' src={Role} alt="Role" />
Role & Team</h3>
<h4></h4>

  <ul>

    <li> <b>Role: </b>Lead Product Designer (end‑to‑end): discovery → IA/flows → wireframes → interactive prototyping → UI design system → handoff to engineering → design QA.
</li>
    <li><b> Collaboration:</b> Product manager, security architect/SME, frontend & backend engineers, QA. Stakeholders included SecOps Manager/CISO, L1–L3 analysts, and IT operations.
</li>
    <li> <b>Tools: </b> Figma for design/system, FigJam/Miro for mapping, Notion/Jira for tracking, Loom for async walkthroughs.
</li>

  </ul>


  <h3> <img className='' src={Challenges} alt="Challenges" /> Key Challenges & How We Solved Them</h3>
<h4></h4>

  <ul>

    <li> 
      <b>Data density vs. clarity </b> <br/>
    <p>Challenge: Analysts need to see a lot—signals, entities, timelines—without losing the thread.
Response: Introduced a two‑pane incident workspace with a persistent evidence timeline; progressive disclosure for long properties; column presets; and saved analyst views per role.</p>
</li>
    <li><b> Collaboration:</b> Product manager, security architect/SME, frontend & backend engineers, QA. Stakeholders included SecOps Manager/CISO, L1–L3 analysts, and IT operations.
</li>
    <li> <b>Tools: </b> Figma for design/system, FigJam/Miro for mapping, Notion/Jira for tracking, Loom for async walkthroughs.
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



<p>(1) Discover & Define</p>

<ul>
  <li>Stakeholder interviews (CISO, SecOps lead, L1–L3 analysts) to map goals, pain points, and KPIs.</li>
 <li>Heuristic review of existing tools; inventory of duplicated/overlapping features.
</li>
<li>Journey mapping of the Alert → Investigate → Resolve → Report loop; con-sections-to-be-Done statements for L1/L2/L3 roles.
</li>

<li>Risk model alignment: severity, confidence, SLA clocks, ownership, and escalation rules.
</li>

</ul>

<p>(2) Information Architecture & Flows</p>

<ul>
  <li>Navigation strategy: Overview (Dashboards) → Work (Alerts/Incidents) → Configure (Rules/Policies) → Intelligence (Feeds) → Admin (Users/Roles/Audit).</li>
 <li>North‑star flow defined around a triage board, incident workspace, and case management.
</li>

</ul>

<p>(3) Design & Prototype</p>

<ul>
  <li>Low→mid‑fidelity wireframes validating layouts for high‑density data.</li>
 <li>Interactive Figma prototype covering triage, incident detail, timeline, evidence, and policy builder.</li>
  <li>Accessibility first (WCAG AA): color tokens for status states, keyboard access, visible focus, semantic tables.</li>
</ul>

<p>(4)Validate & Iterate</p>

<ul>
  <li>Task‑based usability tests with analysts (prioritization, enrichment pivots, escalation, and closure).</li>
 <li>Iterations on table density, grouping & saved views, risk badges, and keyboard shortcuts.</li>
  <li>Design system: foundations (grid, spacing), typography scale, color tokens, components (table, filters, tabs, modals, toasts), and charts.</li>
</ul>




<p>Key Challenges & How We Solved Them</p>

<ul>
  <li> <b>Data density vs. clarity  </b> <br/> <b>Challenge: </b> Analysts need to see a lot—signals, entities, timelines—without losing the thread.
<br/> <b>Response: </b>Introduced a two‑pane incident workspace with a persistent evidence timeline; progressive disclosure for long properties; column presets; and saved analyst views per role.
</li>

 <li> <b>Alert noise & prioritization</b> <br/>
<b>Challenge: </b> Too many alerts of uneven quality.<br/>
<b>Response: </b> Risk scoring badges (severity × confidence),SLA timers, bulk triage actions, and a Queue Health widget to surface backlog and breached SLAs.
</li>

  <li> <b>Context switching across tools</b> <br/>
Challenge: Pivoting to SIEM/EDR/TI broke flow.<br/>
Response: Added enrichment panels (whois, geo, process tree), smart links to external tools, and a pivot history so analysts can retrace steps.
</li>

  <li> <b>Compliance & auditability</b> <br/>
<b>Challenge:</b> Proving due diligence for ISO 27001/SOC2 and internal audits.<br/>
<b>Response:</b> Case management with immutable audit trail, evidence attachments, approval gates for rule changes, and auto‑generated Post‑Incident Reports.
</li>

<li><b>Onboarding new analysts</b> <br/>
<b>Challenge:</b> Steep learning curve and inconsistent patterns.<br/>
<b>Response: </b>Inline guidance, empty‑state tutorials, sample data mode, and role‑based shortcuts (L1 triage vs. L3 hunting).
</li>

</ul>












 </div>

               
        </div>


        

    </div>


      <div className='con-sec'>
           <div className='con-img-left'> 

             <img className='' src={Risk} alt="Featured work" />
           

            </div>
            <div className='con-img-right'>


          <img className='' src={list} alt="Featured work" />



           </div>
        </div>


              <div className='container'>

            

 <div className='con-section'>
           <div className='con-section-left'> 
            </div>
            <div className='con-section-right'>

<h3> <img className='' src={Solution} alt="Solution" /> Solution Highlights</h3>
<h4></h4>
<p>
  </p>
<uL>
  <li><b>Dashboards : </b> SOC overview with risk trend, active incidents by severity, SLA breaches, detection coverage, and queue health.</li>
  <li><b>Triage Board: </b> High‑signal worklist with bulk actions, SLA badges, quick assign, and canned responses.</li>
  <li><b>Incident Workspace:</b> Tabs for Overview • Entities • Evidence • Timeline • Actions; side‑panel showing related signals, hosts, users, and MITRE ATT&CK mapping.</li>
  <li><b>Search & Filters:</b> Query builder (field + operator + value), recent queries, saved filters, and keyboard‑driven power search.</li>
  <li><b>Policy & Rule Management:</b> Versioned rules with approvals, staging vs. production, rule hit distribution, false‑positive feedback loop.</li>
  <li><b>Threat Intelligence:</b> Indicators (IoCs), sightings, reputation scores, and watchlists with bulk import.</li>
  <li><b>Users & Roles:</b> RBAC, least‑privilege defaults, scoped views, and action permissions surfaced contextually in UI.</li>
  <li><b>Reporting:</b> One‑click Post‑Incident Report and weekly SOC digest; export (PDF/CSV) with scrubbed PII when required.</li>
  <li><b>Design System:</b> Tokenized colors for status/severity, accessible data‑viz presets, responsive data tables (sticky headers, resizable columns), and dark theme.</li>



</uL>

 </div>
        </div>

         


        

    </div>


     <div className='con-sec conatainer'>
           <div className='con-img-left'> 

  <div className='work-card'>
                  <img className='work-image' src={work2} alt="Featured work" />
        
                  <div className='work-overlay'>
                    <div className='work-text'>
                        <h4> Product & Design</h4>
                      <h3>Designing Clarity for Complex Care: The TM-Lite Portal</h3>
                      <p>
TM-Lite is a comprehensive organ transplant system designed to streamline and improve the entire process for doctors and patients.

                      </p>

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

export default Watchoutp