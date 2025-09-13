// ...existing code...
import React from 'react'
import './work.css'
import work1 from '../../assets/work1.svg'
import work2 from '../../assets/work2.svg'
import Qdash from '../../assets/Qdash.svg'
import Fw from '../../assets/Tools/Fw.svg'
import { useNavigate } from 'react-router-dom' 

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='work-section '>

        <h2 className='work-heading-img'><img src={Fw} alt=""/></h2>

        <div className='work-card'>
          <img className='work-image' src={work1} alt="Featured work" />

          <div className='work-overlay'>
            <div className='work-text'>
                <h4> Product & Design</h4>
              <h3>Watch Out Cybersecurity Portal</h3>
              <p>
             Watch Out Cybersecurity Portal simplifies threat detection, streamlines security workflows, and makes managing enterprise cybersecurity as seamless as checking a dashboard — all without sacrificing protection or control.
              </p>
 <button
                className='work-btn'
                onClick={() => navigate('/watchoutp')} // changed: navigate to watchout page
              >
                View Project
              </button>            </div>
          </div>
        </div>
      </div>

      <div className='work-section margin-top'>

        <div className='work-card'>
                       <img className='work-image' src={work2} alt="Featured work" />
         

          <div className='work-overlay'>
            <div className='work-text'>
                <h4> Product & Design</h4>
              <h3> Designing Clarity for Complex Care: The TM-Lite Portal</h3>
              <p>
              TM-Lite is a comprehensive organ transplant system designed to streamline and improve the entire process for doctors and patients.
              </p>
              <button className='work-btn'>View Project</button>
            </div>
          </div>
        </div>
      </div>

      <div className='work-section margin-top'>

        <div className='work-card'>
          <img className='work-image' src={Qdash} alt="Featured work" />

          <div className='work-overlay'>
            <div className='work-text'>
                <h4> Product & Design</h4>
              <h3>Q-Clear: Your Personal Health Passport</h3>
              <p>
              Q-Clear simplifies health verification, streamlines safe entry into public spaces, and makes managing personal health data as seamless as checking a dashboard—all without sacrificing privacy or control.
              </p>
              <button className='work-btn'    onClick={() => navigate('/Qclear')} // changed: navigate to watchout page
              >View Project</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Work
