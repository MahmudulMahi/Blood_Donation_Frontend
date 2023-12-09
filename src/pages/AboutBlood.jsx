import React from 'react'
import Navbar from '../components/Home/Navbar'
import CarouselBanner from '../components/Home/CarouselBanner'
import Footer from '../components/Home/Footer'
import AboutBloodPage from './Blood/AboutBloodPage'

export default function AboutBlood() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <AboutBloodPage />
      </div>
     
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
