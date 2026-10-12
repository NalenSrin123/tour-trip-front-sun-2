import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TourGallery from '../../components/tour/hero_section/TourGallery'
import { Available_tours } from './Available_tours'
import FeaturedTourPackages from './Tour_packages'
import TourLight from './tour/TourLight'
import Tours_detailContent from '../../components/tour/tours_detailContent/Tours_detailContent'

const ToursPage = () => {
  return (
    <>
      <Header/>
      <main>
        <TourGallery/>
        <Tours_detailContent/>
        <TourLight/>
      </main>
      <Footer/>
    </>
  )
}

export default ToursPage
