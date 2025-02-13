import React from 'react'
import { Home } from '../sections/Home/Home'
import { About } from '../sections/About/About'
import { Projects } from '../sections/Projects/Projects'
import { Experience } from '../sections/Experience/Experience'
import { Contact } from '../sections/Contact/contact'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="w-full p-5 mx-auto max-w-7xl">
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

export default HomePage