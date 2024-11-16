import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Presentation = () => {
  const CardData = [
    {
      img: "/Group1.png",
      heading: "Managment",
      text: "Software platform for running your new internet business",
    },
    {
      img: "/Group2.png",
      heading: "Managment",
      text: "Transport platform  your new  business",
    },
    {
      img: "/Group3.png",
      heading: "Managment",
      text: "Transport platform  your new  business",
    },
    {
      img: "/Group4.png",
      heading: "Managment",
      text: "Software platform for running your new internet business",
    },
  ];

  const SocialIcon = [
    {icon:"/icon1.png"},
    {icon:"/icon2.png"},
    {icon:"/icon3.png"},
    
  ]

  return (
    <section className=" bg-[#f9f9f9] container mx-auto max-w-[1400px] justify-between items-center gap-20 py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* left side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 ">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="bg-white px-3 py-5 hover:bg-indigo-100 rounded-xl transition-all text-center"
            >
              <div className="flex justify-center items-center">
                <img src={card.img} alt="" />
              </div>
              <div>
                <h1 className=" text-lg md:text-xl lg:text-2xl text-black font-semibold">
                  {card.heading}
                </h1>
                <p className="text-gray-500 mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right side */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-semibold text-center lg:text-start">The quickest way to create modern presentation</h1>
          <p className="text-base sm:text-xl text-gray-500 my-5 text-center lg:text-start">Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
          <div className="text-center lg:text-start">
          <button className='btn bg-indigo-100 text-[#5F62E2] hover:text-white hover:bg-[#5F62E2] transition-all duration-300 px-4 py-3 rounded-[10px]'>Explore All <ArrowForwardIcon/> </button>
          </div>
          <p className="text-gray-500 mt-16 text-center lg:text-start">Follow us</p>
          <div className="flex  gap-3 mt-5 justify-center lg:justify-start">
            {SocialIcon.map((icon , index)=>(
              <a key={index} href="" className="flex justify-center items-center w-[50px] h-[50px] bg-[#C4C4C4] rounded-full">
                <img  src={icon.icon} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
