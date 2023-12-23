import React from 'react'
import Navbar from '../../../components/Home/Navbar'
import Footer from '../../../components/Home/Footer'
import CarouselBanner from '../../../components/Home/CarouselBanner'
import NewsDSection from './NewsDSection'

function NewsDetails() {
  return (
    <div>
       <div>
        <Navbar />
      </div>
      <div className="">
        <CarouselBanner />
      </div>
      <div className="">
        <NewsDSection></NewsDSection>
       
      </div>
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  )
}

export default NewsDetails