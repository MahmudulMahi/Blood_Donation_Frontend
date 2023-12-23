import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import CarouselBanner from '../../components/Home/CarouselBanner'
import StoriesSections from './StoriesSections'

const Stories = () => {
  return (
    <div>

<div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <StoriesSections></StoriesSections>
      </div>
      <div className="mt-44">
        <Footer />
      </div>


    </div>
  )
}

export default Stories