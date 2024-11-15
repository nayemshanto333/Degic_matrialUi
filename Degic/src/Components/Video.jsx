import React from "react";

const Video = () => {
  return (
    <section className="bg-gray-100 container max-w-[1400px] py-16 px-6 md:px-12 lg:px-16">
      <div>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold text-center">
          Use illustrations in UI design
        </h1>
        <video controls className="w-full mt-10 md:mt-16 rounded-md" poster="/VideoThumbnail.png">
         <source  src="https://www.youtube.com"
          allowFullScreen />
        </video>
      </div>
    </section>
  );
};

export default Video;
