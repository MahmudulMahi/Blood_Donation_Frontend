import React from 'react'
import Navbar from '../../../components/Home/Navbar'
import CarouselBanner from '../../../components/Home/CarouselBanner'
import Footer from '../../../components/Home/Footer'
import OurTeamSections from './OurTeamSections'

const OurTeam = () => {
  return (
    <div>
         <Navbar/>
         <CarouselBanner />
         <OurTeamSections></OurTeamSections>
         
         <br></br>


         <Footer />
        
    </div>
  )
}

export default OurTeam