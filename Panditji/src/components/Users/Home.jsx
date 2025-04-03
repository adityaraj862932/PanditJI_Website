import React from 'react'
import Pooja from './Pooja'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'


function Home() {
  return (
    <div>
        <Hero/>
        <Pooja/>
        <About/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home