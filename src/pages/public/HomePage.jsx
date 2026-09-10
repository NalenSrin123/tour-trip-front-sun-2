import React from 'react'
import PromoBanner from '../../components/tour/PromoBanner'
import ExperienceSection from '../../components/tour/ExperienceSection'
import Header from '../../components/header'
import Footer from '../../components/footer'

const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <PromoBanner/>
        <ExperienceSection/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage
