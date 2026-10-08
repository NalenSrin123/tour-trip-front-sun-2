import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import HeroSectionAbout from './HeroSectionAbout'

const AboutPage = () => {
  return (
    <>
      <Header/>
      <main>
        <HeroSectionAbout/>
      </main>
      <Footer/>
    </>
  )
}

export default AboutPage
