import React, { useRef, useState } from 'react'
import './workshop.css'
import WorkshopImage from '../../assets/workshop.webp'
import Contact from '../Contact/contact'
const ACCORDION_ITEMS = [
  {
    id: 'learning',
    title: "Grasp the Bigger Picture",
    content: (
      <>
        <p>Start with a deep understanding of the overall goals, audience needs, and business objectives. This ensures every design decision aligns with the broader vision and delivers meaningful impact.</p>
      </>
    )
  },
  {
    id: 'format',
    title: 'Match Visuals to the Message',
    content: (
      <>
        <p>Use design elements purposefully—colors, typography, icons, and imagery should reinforce the message and make it instantly clear, rather than distract or confuse.</p>
      </>
    )
  },
    {
    id: 'format',
    title: 'Simplify and Declutter',
    content: (
      <>
        <p>Remove unnecessary complexity. A clean, minimal layout improves comprehension, reduces cognitive load, and helps users focus on what matters most.</p>
      </>
    )
  },
  {
    id: 'who',
    title: 'Guide the Audience’s Eye',
    content: (
      <>
        <p>Use hierarchy, contrast, and spacing to create a natural flow that leads the viewer through information effortlessly, ensuring key points are never missed.</p>
      </>
    )
  },
  {
    id: 'takeaway',
    title: 'Materials & takeaway',
    content: (
      <>
       <p>Craft designs that leave a lasting impression with thoughtfully chosen materials, formats, and messaging that ensures the audience retains and acts on the information.</p>
      </>
    )
  }
]

const Workshop = () => {
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
    <div className=''>
      <div className="workshop-page">
        <div className="workshop-sec">
          <div className="workshop-img">
            <img src={WorkshopImage} alt="Workshop" />
          </div>
          <div className="workshop-text">
            <h1>Workshop</h1>
            <p>
              Data by itself doesn’t inspire change – stories do!
              This interactive, hands-on workshop empowers students and professionals to present data in a way that captivates, convinces, and sparks action. Learn to go beyond charts and numbers to craft compelling narratives that truly drive decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="container workshop-section">

        <div>
        <h3>Data is everywhere. Insight is rare.</h3>
        <p>
          Even top-tier data teams fall short when their findings don’t resonate. From classrooms to C-suites, the same challenges surface:
          <br/>🔍 Slide decks overloaded with numbers but lacking clarity<br/>
          💤 Presentations that lose the audience’s attention<br/>
          ❌ Missed chances to influence decisions and drive change
        </p>

        <p>Whether you’re just starting your career or training your team to communicate better, this workshop bridges that gap.</p>

       

        
</div>

<div className='margin-top-bottom'>

   <p><strong>What you’ll gain from this workshop:</strong></p>

  {/* Accordion starts here */}
        <div className="accordion " role="region" aria-label="Workshop details">
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
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Accordion ends here */}

        </div>


      </div>

      <Contact />

    </div>
  )
}

export default Workshop