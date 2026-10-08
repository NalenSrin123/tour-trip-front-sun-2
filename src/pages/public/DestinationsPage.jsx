import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Popular_Destinations from '../../components/tour/Popular_Destinations'
// import Destination_HeroSection from '../../components/tour/hero_section/Destination_HeroSection'
import Top_attractions from './Top_attractions'
import TravelSection from './Practical_section'

const DestinationsPage = () => {
  return (
    <>
      <Header/>
      <main>
        {/* <Destination_HeroSection/> */}
        <Popular_Destinations/>
        <Top_attractions/>
        <TravelSection/>
      </main>
      <Footer/>
    </>
  )
}

export default DestinationsPage
