import React from 'react';

export default function Hero() {
  return (
    <>
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] container mx-auto'>
        <div className='flex-1 flex flex-col'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold max-w-[576px] lg:leading-[66px]'>Simply explained with illustrations</h1>
            <p className='text-md md:text-lg lg:text-xl text-gray-500  pt-[22px] max-w-[460px]'>There are a lot of different components that will help you create the perfect look for your project</p>
            <div className='flex gap-3 pt-11'>
                <button className='btn bg-[#5F62E2] text-white px-4 py-3 rounded-[10px] '>Get Started</button>
                <button className='btn bg-indigo-100 text-[#5F62E2] px-4 py-3 rounded-[10px]'>Learn More</button>
            </div>
        </div>
        <div>
            <img src="/roket.png" alt="roket" />
        </div>
    </div>
      
    </>
  );
}
