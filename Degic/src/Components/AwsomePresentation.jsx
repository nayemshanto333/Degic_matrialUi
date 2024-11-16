import React from "react";

const AwsomePresentation = () => {
  return (
    <section className="bg-[#5F62E2] container max-w-[1400px]  px-6 md:px-12 lg:px-24 mx-auto my-6">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* left section */}
        <div className="flex flex-col  justify-center items-center md:items-start w-full md:w-1/2 my-16">
          <h1 className="text-2xl md:text-5xl  text-white font-semibold text-center md:text-start">The quickest way to create aweosme Presentation</h1>
          <div className="flex  gap-3 pt-10">
            <button className="btn bg-[#2ab690] text-white px-4 py-3 rounded-[10px] ">
              Get Started
            </button>
            <button className="btn bg-[#777ae6] text-white px-4 py-3 rounded-[10px]">
              Learn More
            </button>
          </div>
        </div>
        {/* Right section */}
        <div className="flex flex-col justify-end items-center w-full md:w-1/2 pt-0 md:pt-5">
            <img src="/bomb.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AwsomePresentation;
