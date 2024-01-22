import React from 'react';
import Navbar from '../../components/Home/Navbar';
import DonorCarousel from '../../components/Home/Carousel/DonorCarousel';
import DonateBloodPage from './DonateBloodPage';
import Footer from '../../components/Home/Footer';

const Schedule = () => {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <div className="">
        <DonorCarousel />
      </div>
      <div className="">
        <DonateBloodPage></DonateBloodPage>
      </div> 
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default Schedule;