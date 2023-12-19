
import React from 'react'
import CarouselBanner from '../../components/Home/CarouselBanner'
import Footer from '../../components/Home/Footer'
import NewsSections from './NewsSections'
import Navbar from '../../components/Home/Navbar'

function News() {
  return (
    <div>

<div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner/>
      </div>
      <div className="">
        <NewsSections></NewsSections>
      </div>
      <div className="mt-44">
        <Footer/>
      </div>
    </div>

   
  )
}

export default News