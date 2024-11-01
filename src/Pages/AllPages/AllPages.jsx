import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Github from '../Github/Github'
import Home from '../Home/Home'
import Project from '../Projects/Project'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'

const AllPages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Github />
      <Experience/>
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default AllPages
