import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import HeroSectionAbout from './HeroSectionAbout'
import TravelInspiration from '../../components/TravelInspiration'

const AboutPage = () => {
  return (
    <>
      <Header/>
      <main>
        <HeroSectionAbout/>
        <TravelInspiration/>
      </main>
      <Footer/>
    </>
  )
}

export default AboutPage
