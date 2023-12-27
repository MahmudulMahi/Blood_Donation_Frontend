import React from 'react';
import Navbar from '../../components/Home/Navbar';
import CarouselBanner from '../../components/Home/CarouselBanner';
import Footer from '../../components/Home/Footer';
import PreparingToGiveBloodPage from '../Donor/PreparingToGiveBloodPage'

const PreparingToGiveBlood = () => {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <div>
        <CarouselBanner></CarouselBanner>
      </div>
    <div>
      <PreparingToGiveBloodPage></PreparingToGiveBloodPage>
    </div>
    
      <div className='mt-96'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PreparingToGiveBlood;