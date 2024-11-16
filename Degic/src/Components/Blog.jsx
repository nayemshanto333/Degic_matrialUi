import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {
  const CardData = [
    {
      image: "/vase1.png",
      heading: "Make myspace your best designed space",
      details:
        "A lot of different components that will help you create the perfect look for your project",
      type: "Design",
    },
    {
      image: "/vase2.png",
      heading: "My company culture has changed today",
      details:
        "A lot of different components that will help you create the perfect look for your project",
      type: "3D illustrations",
    },
    {
      image: "/vase3.png",
      heading: "Professionals in craft! All products were super great",
      details:
        "A lot of different components that will help you create the perfect look for your project",
      type: "Development",
    },
  ];

  return (
    <section className="container max-w-[1400px] py-16 px-6 md:px-12 lg:px-24 mx-auto">
      <div className="flex flex-col md:flex-row justify-between my-6">
        <div className="flex flex-col w:full md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Get more from our blog
          </h1>
          <p className="text-base md:text-xl text-gray-500 mt-5 w-[85%]">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
        </div>
        <div className="flex flex-col  justify-center md:justify-end">
          <button className="text-[#5F62E2] bg-indigo-100 hover:text-white hover:bg-[#5F62E2] transition-all duration-300 px-4 py-3 rounded-[10px] mt-6">
            Explore All <ArrowForwardIcon />{" "}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-8 ">
        {CardData.map((Data, index) => (
          <div key={index}>
            <div className="flex flex-col justify-center items-center  bg-[#f4f4f9] rounded-lg hover:shadow-lg">
              <img src={Data.image} alt="" />
              <div className="px-4 my-4">
                <h1 className=" text-lg md:text-2xl font-semibold   ">
                  {Data.heading}
                </h1>
                <p className="text-sm md:text-base text-gray-500 mt-4 ">
                  {Data.details}
                </p>
                <button className="text-xs sm:text-sm bg-[#e8f7f3] text-gray-500 hover:text-white hover:bg-[#62af9b] transition-all duration-300 px-4 py-2 rounded-[10px] mt-6">
                  {Data.type}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
