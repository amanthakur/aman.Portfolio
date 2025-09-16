import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'
import Work from './Components/Work/Work'
import Footer from './Components/Footer/Footer'
import About from './Components/About/about'
import Pingme from './Components/Pingme/Pingme'
import Resume from './Components/Resume/Resume' 
import Workshop from './Components/Workshop/Workshop'
import Watchoutp from './Components/Watchoutp/Watchoutp'
import Contact from './Components/Contact/contact'
import Tmclite from './Components/Tmclite/Tmclite'
import Qclear from './Components/Qclear/Qclear'

const Home = () => (
  <>
    <Intro/>
    <Skills/>
    <Work/>
    <Contact/>
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pingme" element={<Pingme />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/watchoutp" element={<Watchoutp />} />
        <Route path="/tmclite" element={<Tmclite />} />
        <Route path="/qclear" element={<Qclear />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App