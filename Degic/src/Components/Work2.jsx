import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Work = () => {
  return (
    <section className="container max-w-[1400px] py-16 px-6 md:px-12 lg:px-16 mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-24">
        {/* left section */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold">
            Make more time for the work
          </h1>
          <div className="flex items-center gap-2 mt-4 md:mt-6">
            <CheckCircleOutlineIcon className="text-[#2ab690]" />
            <p>Many ways to use illustrations in design</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <CheckCircleOutlineIcon className="text-[#2ab690]" />
            <p>Simply explained with illustrations</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <CheckCircleOutlineIcon className="text-[#2ab690]" />
            <p>Make more time for the work</p>
          </div>
          <div>
            
            <button className="btn text-[#5F62E2] bg-indigo-100 px-4 py-3 rounded-[10px] mt-6">
              Explore All <ArrowForwardIcon />{" "}
            </button>
          </div>
        </div>

    {/* right section */}
        <div className="flex  justify-center items-center w-full md:w-1/2">
          <div>
            <img src="/Group22.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
