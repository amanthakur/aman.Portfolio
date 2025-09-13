import React from 'react'
import './contact.css'
import Pingme from '../../assets/Tools/Pingme.svg'


const contact = () => {
  return (
     <div className="container">
      <div className='contact-container '>
        <h2 className='Ping-heading-img'>   <img src={Pingme} alt="" /></h2>
        
        <h3> aman@amanux.design</h3>
        <p>Feel free to ping me with any inquiries or questions!</p>
        <form className='contact-form'>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className='contact-form-btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default contact