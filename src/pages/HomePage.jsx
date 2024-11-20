import React from 'react'
import HeroSection from '../components/HeroScetion'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import OurProjects from '../components/OurProjects'
import Feedback from '../components/Feedback'

function HomePage() {
  return (
    <>
        <NavBar />
        <HeroSection />
        <OurProjects />
        <Feedback />
        <Footer />
    </>
  )
}

export default HomePage