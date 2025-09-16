import React from 'react'
import './Intro.css'
import namsate from '../../assets/namsate.svg'
import whatido from '../../assets/whatido.svg'

import resume from '../../assets/resume.pdf'
import { FaLinkedin, FaGithub, FaBehance, FaMedium } from 'react-icons/fa';

const Intro = () => {
  return (
    <div className='Intro container'>
        <div className='Intro-text'>
          <div className='right'> <img src={whatido} alt=""  /> </div>  
      <h1>Namste!<img src={namsate} alt="" />      
</h1>
    <p>

I’m Aman, A <span>Design Leader  </span>with 11 years of Experience Shaping <span> Vision </span> and <span>Strategy </span>through thoughtful Product and <span>UX Design. </span> I leverage <span>AI-Driven Insights </span> and <br/><span>Intelligent Automation </span> to Create Products that <span>Evolve with Users. </span> With <br/><span>Empathy-Driven Leadership,</span> I Guide Teams to Deliver Meaningful Experiences <br/>that <span>Solve Complex Challenges </span> and Leave a Lasting <span>Impact. </span>
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
        </div>






</div>

    </div>
  )
}
 
export default Intro