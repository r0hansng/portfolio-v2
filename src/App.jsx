import { useState } from 'react'
import './global.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
// import { Button } from './components/Button/Button'
import { Home } from './sections/Home/Home'
import { About } from './sections/About/About'
import { Experience } from './sections/Experience/Experience'
import { Contact } from './sections/Contact/contact'
import { Projects } from './sections/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <div className="p-5 max-w-7xl mx-auto w-full">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
