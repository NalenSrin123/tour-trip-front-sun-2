import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TourGallery from '../../components/tour/hero_section/TourGallery'
import { Available_tours } from './Available_tours'
import FeaturedTourPackages from './Tour_packages'

const ToursPage = () => {
  return (
    <>
      <Header/>
      <main>
        <TourGallery/>
        {/* <Available_tours/> */}
        {/* <FeaturedTourPackages/> */}
      </main>
      <Footer/>
    </>
  )
}

export default ToursPage
