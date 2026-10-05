import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Project from '../components/Project'
import Contact from '../components/Contact'

const Home = () => {
  return (
    /* MENGHILANGKAN BACKGROUND SOLID:
      Menggunakan bg-transparent agar animasi lingkaran di App.jsx 
      bisa terlihat menyatu dari atas sampai bawah.
    */
    <div className="bg-transparent relative">
      <Hero />
      <About />
      <Skills />
      <Certifications/>
      <Project />
      <Contact />
    </div>
  )
}

export default Home