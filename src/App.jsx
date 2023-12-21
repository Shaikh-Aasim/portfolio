import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {


  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>

    <SocialLinks></SocialLinks>
    </>
  )
}

export default App
