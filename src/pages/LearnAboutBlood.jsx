import React from 'react'
import Navbar from '../components/Home/Navbar'
import CarouselBanner from '../components/Home/CarouselBanner'
import Footer from '../components/Home/Footer'
import LearnAboutBloodPage from './Blood/LearnAboutBloodPage'

export default function LearnAboutBlood() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <LearnAboutBloodPage />
      </div>
     
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
