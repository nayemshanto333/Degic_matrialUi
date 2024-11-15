import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Slider = () => {
    const Slide = [
        {
            id: 1,
            heading:"Make more time for the work that matters most",
            text:"Best software platform for running an internet business.",
            image:"slide1.png"
        },
        {
            id: 2,
            heading:"Build more time for the work that matters most",
            text:"Best software platform for running an internet business.",
            image:"roket.png"
        },
        {
            id: 3,
            heading:"Take more time for the work that matters most",
            text:"Best software platform for running an internet business.",
            image:"Group1.png"
        },
    ];
    const [currentIndex, setCurrentIndex] =  useState(0);
    const prevslide  = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex === 0 ? Slide.length -1: prevIndex -1));
    }
    const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex === Slide.length ? 0 : prevIndex + 1 ));
    }

    const {heading, text, image} = Slide[currentIndex];
  return (
    <section className='container max-w-[1400px] px-6 md:px-12 lg:px-24 py-20 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 '>
            {/* left side */}
            <div className='flex flex-col justify-between space-y-6 w-full md:w-1/2'>
                <img className='w-16 md:w-24 mb-4' src="/logo.png" alt="logo" />
                <h1 className='text-center lg:text-start text-2xl md:text-4xl lg:text-5xl text-black font-semibold max-w-md'>{heading}</h1>
                <p className='text-center lg:text-start  text-base md:text-xl text-gray-500 max-w-sm'>{text}</p>
                <div className='flex space-x-4 justify-center lg:justify-start items-center mt-4'>
                    <button onClick={prevslide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all'><ChevronLeftIcon className="text-black"/></button>
                    <button onClick={nextSlide} className='bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all'><ChevronRightIcon className="text-black"/></button>
        
                </div>
                
            </div>
            {/* Right side */}
            <div className='flex justify-center items-center w-full md:w-1/2'>
                <img className='w-full' src={image} alt="" />
            </div>
        </div>

        <div className='mt-20 bg-[#f9f9f9] py-3 px-2 '>
            <marquee  direction="left">
            <img src="/Logos.png" alt="Company logo" />
            </marquee>
        </div>
      
    </section>
  );
}

export default Slider;
