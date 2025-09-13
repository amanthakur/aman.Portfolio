import React, { useRef, useState } from 'react'
import './about.css'
import Contact from '../Contact/contact'
import amaning from '../../assets/amaning.svg'
import resume from '../../assets/resume.pdf'
import p1 from '../../assets/p1.svg'
import p2 from '../../assets/p2.svg'
import p3 from '../../assets/p3.svg'
import whatido from '../../assets/whatido.svg'


import { FaLinkedin, FaGithub, FaBehance, FaMedium } from 'react-icons/fa';

const ACCORDION_ITEMS = [
  {
    id: 'experience',
    title: 'Product design leadership with strategic depth',
    content: (
      <>
        <p>
         I bring product design leadership with strategic depth, blending creativity, systems thinking, and business acumen to shape products that drive measurable impact. My approach combines user-centered research, data-driven insights, and a strong design vision to create experiences that solve real problems while supporting long-term growth. I excel at building and mentoring high-performing teams, fostering a culture of collaboration, and aligning design strategy with business goals. From defining product roadmaps to delivering polished, scalable solutions, I guide every stage of the design process with empathy, clarity, and precision—ensuring that design is not just a visual layer but a strategic driver of innovation and success.


        </p>
        
      </>
    )
  },
  {
    id: 'skills',
    title: 'Information design',
    content: (
      <>
        <p>As a design leader, I see information design as the foundation for creating clarity in complex systems. It’s the practice of structuring and presenting data in a way that is intuitive, actionable, and meaningful for users. My approach blends strategic thinking, visual hierarchy, and user-centered design to ensure that every interaction delivers value.

I focus on:

Simplifying Complexity: Turning dense data and workflows into digestible, user-friendly experiences.

Designing for Decision-Making: Presenting information that empowers users to act confidently.

Creating Visual Systems: Building scalable layouts and components for dashboards, reports, and multi-platform experiences.

Ensuring Accessibility: Making content clear, inclusive, and easy to navigate for diverse audiences.

Driving Business Impact: Aligning data presentation with organizational goals to inform strategy and growth.

In every product, information design is not just about aesthetics—it’s a strategic tool for storytelling, trust-building, and guiding action.</p>
        
      </>
    )
  },
  {
    id: 'approach',
    title: 'Design Strategy, Problem Solving & Impactful Solutions',
    content: (
      <>
        <p>
         I bring a strategic approach to design that merges creative problem-solving, impactful solutions, and a strong design strategy. My process focuses on deeply understanding user needs and business goals, uncovering core challenges, and shaping innovative solutions that are both intuitive and scalable. I excel at simplifying complexity, fostering cross-functional collaboration, and driving clarity through design systems and storytelling. With a balance of vision, research, and execution, I create experiences that not only solve problems but also build long-term value, trust, and growth</p>
      </>
    )
  }
]

const About = () => {
  const [open, setOpen] = useState(ACCORDION_ITEMS.map(() => false))
  const contentRefs = useRef([])

  const toggle = (index) => {
    setOpen(prev => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <>

      <div className="about-page">
        <div className="about-sec">
          <div className="my-img">
            <img src={amaning} alt="Aman Thakur" />
          </div>

          <div className="about-text">
            <h1>About Me</h1>
            <p>I excel at the crossroads of design, strategy, leadership, and technology, combining empathy, creativity, and analytical thinking to deliver meaningful solutions. With a diverse background spanning academia, entrepreneurship, sales, marketing, HR, and finance, I bring a holistic understanding of business challenges and a unique ability to bridge user needs with organizational goals.

            </p>

<div className="cta-row">
          <a className="btn" href={resume} download>
            Download My Resume
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/aman-thakur-123456789" target="_blank" rel="noopener noreferrer">
             <FaLinkedin size={40} color="#0077b5" />
            </a>
            <a href="https://github.com/amanthakur" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} color="#333" />
            </a>
            <a href="https://www.behance.net/thakuramansingh" target="_blank" rel="noopener noreferrer">
             <FaBehance size={40} color="#1769ff" />
            </a>
            <a href="https://medium.com/@aman_amanroy" target="_blank" rel="noopener noreferrer">
             <FaMedium size={40} color="#000" />
            </a>
          </div>
        </div>          </div>
        </div>

        </div>
        <div className=" container text-section">

          <div className='whoiam'>
            <div className='whoiam-left'>

                      
             
              <p>
                 <b>What I do.</b> <br/>

               I help companies turn user problems into measurable product roadmaps, design validated and intuitive user experiences, and ship production-ready interfaces. I collaborate with cross-functional teams to align business goals with user needs, drive data-informed design decisions, and deliver solutions that scale. My work focuses on simplifying complexity, improving usability, and creating products that drive measurable impact.




              </p>



            </div>
            <div className='whoiam-right'>

                <div className='ps'> 
                  <img src={p1} alt="" />
                  <h3> Product Strategy</h3> 
                  <p>Turn user problems into clear, actionable roadmaps and measurable bets that align with business goals. Leverage data-driven insights, market research, and user feedback to prioritize initiatives, reduce risk, and deliver long-term value.

</p>
                
                
                </div>

                <div className='ps2'>

                  <div className='ux'>
                    <img src={p2} alt="" />

                    <h3> UX Design (Research-Led)</h3> 
                  <p>Lead research to uncover user needs, design intuitive and accessible flows, and validate solutions through iterative testing. Collaborate with teams to ensure scalable, consistent, and goal-driven experiences.</p>
                


                  </div>

                  <div className='pro'>
                    <img src={p3} alt="" />
<h3> Prototype → Production </h3> 
                  <p>Create high-fidelity coded prototypes, refine them into scalable, production-ready components, and collaborate with engineering to ensure quality, consistency, and smooth delivery.</p>
                

                  </div>

                  
                  
                  
                   </div>





            </div>


          </div>
          <p>
            " As a highly ethical design leader and problem solver, I don’t just design solutions – I enable businesses to win. Whether it is enterprise platforms, B2B/B2C digital experiences across platforms or data insights, I push design boundaries with real-world context in mind."

          </p>

          <div className="accordion" role="region" aria-label="About toggles">
            {ACCORDION_ITEMS.map((item, idx) => (
              <div className="accordion-item" key={item.id}>
                <button
                  className={`accordion-toggle ${open[idx] ? 'open' : ''}`}
                  aria-expanded={open[idx]}
                  aria-controls={`acc-${item.id}`}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.title}</span>
                  <span className="chev" aria-hidden="true" />
                </button>

                <div
                  id={`acc-${item.id}`}
                  className="accordion-content"
                  ref={el => (contentRefs.current[idx] = el)}
                  style={{
                    maxHeight: open[idx] ? `${contentRefs.current[idx]?.scrollHeight || 0}px` : '0px'
                  }}
                >
                  <div className="accordion-content-inner">
                    {item.content}
                    {/* you can add more markup/components here under each item */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Contact />
      

    </>
  )
}

export default About