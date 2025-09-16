import React from 'react'
import './Work2.css'
import work2 from '../../assets/work2.svg'

const Work2 = () => {
  return (
    <div className='container'>
          <div className='work-section '>
    
            <h2>Featured Work</h2>
    
            <div className='work-card'>
              <img className='work-image' src={work2} alt="Featured work" />
    
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
    
          <div className='work-section margin-top'>
    
            <div className='work-card'>
              <img className='work-image' src={work1} alt="Featured work" />
    
              <div className='work-overlay'>
                <div className='work-text'>
                    <h4> Product & Design</h4>
                  <h3>Watch Out Cybersecurity Portal</h3>
                  <p>
                  The north star is to make insights conversational, workflows intelligent, and data exploration as easy as talking to a 
    colleague — without compromising analytical power
                  </p>
                  <button className='work-btn'>View Project</button>
                </div>
              </div>
            </div>
          </div>
    
          <div className='work-section margin-top'>
    
            <div className='work-card'>
              <img className='work-image' src={work1} alt="Featured work" />
    
              <div className='work-overlay'>
                <div className='work-text'>
                    <h4> Product & Design</h4>
                  <h3>Watch Out Cybersecurity Portal</h3>
                  <p>
                  The north star is to make insights conversational, workflows intelligent, and data exploration as easy as talking to a 
    colleague — without compromising analytical power
                  </p>
                  <button className='work-btn'>View Project</button>
                </div>
              </div>
            </div>
          </div>
    
          <div className='work-section margin-top'>
    
            <div className='work-card'>
              <img className='work-image' src={work1} alt="Featured work" />
    
              <div className='work-overlay'>
                <div className='work-text'>
                    <h4> Product & Design</h4>
                  <h3>Watch Out Cybersecurity Portal</h3>
                  <p>
                  The north star is to make insights conversational, workflows intelligent, and data exploration as easy as talking to a 
    colleague — without compromising analytical power
                  </p>
                  <button className='work-btn'>View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Work2