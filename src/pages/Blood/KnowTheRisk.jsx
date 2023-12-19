import React from 'react'
import Navbar from '../../components/Home/Navbar'
import CarouselBanner from '../../components/Home/CarouselBanner'
import Footer from '../../components/Home/Footer'
import KnowTheRiskPage from './KnowTheRiskPage'

export default function KnowTheRisk() {
  return (
    <div>
    <div>
    <Navbar />
  </div>
  <div className="">
    <CarouselBanner />
  </div>
  <div className="">
    <KnowTheRiskPage />
  </div>
  <div className="mt-44">
    <Footer />
  </div>
</div>
  )
}
