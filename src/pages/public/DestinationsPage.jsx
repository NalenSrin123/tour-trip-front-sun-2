import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Popular_Destinations from '../../components/tour/Popular_Destinations'
import Top_attractions from './Top_attractions'
import TravelSection from './Practical_section'
import DestinationDetail from './DestinationDetailPage'
import { Available_tours } from './Available_tours'

const DestinationsPage = () => {
  return (
    <>
      <Header/>
      <main>
        {/*  */}
        <DestinationDetail/>
        <Top_attractions/>
        <Available_tours/>
        <TravelSection/>
      </main>
      <Footer/>
    </>
  )
}

export default DestinationsPage

