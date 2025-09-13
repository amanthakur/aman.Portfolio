import React from 'react'
import './Skills.css'
import namsate from '../../assets/namsate.svg'
import p1 from '../../assets/p1.svg'
import p2 from '../../assets/p2.svg'
import p3 from '../../assets/p3.svg'
import tools from '../../assets/tools.svg'
import figma from '../../assets/Tools/figma.svg'
import Ai from '../../assets/Tools/Ai.svg'
import Ae from '../../assets/Tools/Ae.svg'
import Github from '../../assets/Tools/Github.svg'
import Gsheet from '../../assets/Tools/Gsheet.svg'
import Jira from '../../assets/Tools/Jira.svg'
import Miro from '../../assets/Tools/Miro.svg'
import Notion from '../../assets/Tools/Notion.svg'
import Ps from '../../assets/Tools/Ps.svg'
import Slack from '../../assets/Tools/Slack.svg'
import Subl from '../../assets/Tools/Subl.svg'
import User from '../../assets/Tools/User.svg'
import Vs from '../../assets/Tools/Vs.svg'
import Myw from '../../assets/Tools/Myw.svg'
import Simg from '../../assets/Tools/Simg.svg'

const Skills = () => {
  return (
    <div className='container'>

      {/* SKILLS LIST */}
      <div className='Skills-list'>
        <div className='Skill'>
          <img src={p3} alt="Product Strategy" />
          <h4>Product Strategy</h4>
          <p>Turn user problems into clear, actionable roadmaps and measurable bets that align with business goals. Leverage data-driven insights, market research, and user feedback to prioritize initiatives, reduce risk, and deliver long-term value.</p>
        </div>
        <div className='Skill'>
          <img src={p1} alt="UX Design" />
          <h4>UX Design (Research-Led)</h4>
          <p>Lead research to uncover user needs, design intuitive and accessible flows, and validate solutions through iterative testing. Collaborate with teams to ensure scalable, consistent, and goal-driven experiences.</p>
        </div>
        <div className='Skill'>
          <img src={p2} alt="Prototype to Production" />
          <h4>Prototype → Production</h4>
          <p>Create high-fidelity coded prototypes, refine them into scalable, production-ready components, and collaborate with engineering to ensure quality, consistency, and smooth delivery.</p>
        </div>
      </div>

      {/* TOOLS SLIDER */}
      <div className='Tools'>
        <h2 className='tools-heading-img'><img src={Myw} alt="Myw" /></h2>

        <div className="logo-slider">
          <div className="logo-track">
            <div className="tooltip" data-tooltip="Figma"><img src={figma} alt="Figma" /></div>
            <div className="tooltip" data-tooltip="Photoshop"><img src={Ps} alt="Photoshop" /></div>
            <div className="tooltip" data-tooltip="Adobe Illustrator"><img src={Ai} alt="Adobe Illustrator" /></div>
            <div className="tooltip" data-tooltip="Miro"><img src={Miro} alt="Miro" /></div>
            <div className="tooltip" data-tooltip="User Testing"><img src={User} alt="User Testing" /></div>
            <div className="tooltip" data-tooltip="Google Sheets"><img src={Gsheet} alt="Google Sheets" /></div>
            <div className="tooltip" data-tooltip="GitHub"><img src={Github} alt="GitHub" /></div>
            <div className="tooltip" data-tooltip="Sublime Text"><img src={Subl} alt="Sublime Text" /></div>
            <div className="tooltip" data-tooltip="VS Code"><img src={Vs} alt="VS Code" /></div>
            <div className="tooltip" data-tooltip="Notion"><img src={Notion} alt="Notion" /></div>
            <div className="tooltip" data-tooltip="Slack"><img src={Slack} alt="Slack" /></div>
            <div className="tooltip" data-tooltip="Jira"><img src={Jira} alt="Jira" /></div>

            {/* Duplicate logos for infinite loop */}
            <div className="tooltip" data-tooltip="Figma"><img src={figma} alt="Figma" /></div>
            <div className="tooltip" data-tooltip="Photoshop"><img src={Ps} alt="Photoshop" /></div>
            <div className="tooltip" data-tooltip="Adobe Illustrator"><img src={Ai} alt="Adobe Illustrator" /></div>
            <div className="tooltip" data-tooltip="Miro"><img src={Miro} alt="Miro" /></div>
            <div className="tooltip" data-tooltip="User Testing"><img src={User} alt="User Testing" /></div>
            <div className="tooltip" data-tooltip="Google Sheets"><img src={Gsheet} alt="Google Sheets" /></div>
            <div className="tooltip" data-tooltip="GitHub"><img src={Github} alt="GitHub" /></div>
            <div className="tooltip" data-tooltip="Sublime Text"><img src={Subl} alt="Sublime Text" /></div>
            <div className="tooltip" data-tooltip="VS Code"><img src={Vs} alt="VS Code" /></div>
            <div className="tooltip" data-tooltip="Notion"><img src={Notion} alt="Notion" /></div>
            <div className="tooltip" data-tooltip="Slack"><img src={Slack} alt="Slack" /></div>
            <div className="tooltip" data-tooltip="Jira"><img src={Jira} alt="Jira" /></div>
          </div>
        </div>
      </div>

      {/* SKILL BOX */}
      <div className='skill-box'>
        <h2 className='skill-box-h-img'><img src={Simg} alt="Skills" /></h2>

        <div className='skill-box-row p-r-l-10 p-top-6 '>
          <div className='skill-box-inner sec-color-1'>Product Design</div>
          <div className='skill-box-inner sec-color-2'>Prototyping</div>
          <div className='skill-box-inner sec-color-3'>Design System</div>
          <div className='skill-box-inner sec-color-4'>Design Token</div>
          <div className='skill-box-inner sec-color-5'>Interaction Design</div>
          <div className='skill-box-inner sec-color-6'>User research</div>
        </div>

        <div className='skill-box-row p-r-l-10-1'>
          <div className='skill-box-inner sec-color-5'>Wireframing</div>
          <div className='skill-box-inner sec-color-4'>Gamification</div>
          <div className='skill-box-inner sec-color-3'>UX Metrics Map</div>
          <div className='skill-box-inner sec-color-2'>Information Architecture</div>
          <div className='skill-box-inner sec-color-1'>Usability Testing</div>
        </div>

        <div className='skill-box-row p-r-l-10-2'>
          <div className='skill-box-inner sec-color-2'>HTML5</div>
          <div className='skill-box-inner sec-color-3'>CSS3</div>
          <div className='skill-box-inner sec-color-1'>JavaScript</div>
          <div className='skill-box-inner sec-color-5'>React</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
