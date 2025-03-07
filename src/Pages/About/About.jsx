import React from "react";
import events from "../../assets/events.jpg";

const About = () => {
  return (
    <div className="bg-green-900 min-h-screen flex items-center justify-center p-10 relative">
      {/* Large Rotated Text */}
      <h1 className="absolute md:left-1/2 left-1/9 sm:left-1/8 top-100 -translate-x-1/2 text-[50px] sm:text-[50px] md:text-[90px] text-beige font-serif font-bold uppercase tracking-wide rotate-90">
        OUR STORY
      </h1>
       

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-35 relative z-1 md:left-0 left-16">
        {/* Left Section */}
        <div className="flex flex-col gap-16">
          {/* ROOTS */}
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-serif font-bold">ROOTS</h2>
            <p className="text-white text-lg max-w-md">
              From Jamaica with love. A <br /> history of homemade food,  savory and <br />
              sweet palette,  pungent spices, <br />and a love for food that’s passed
              from <br /> generation to generation.
            </p>
            <div className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center">
              <img
                src={events}
                alt="Roots"
                className="w-40 h-40 object-cover relative bottom-6"
              />
               <p className="absolute top-43 text-black font-bold text-sm">
               With Love <br /> Mitch Kitchen
              </p>
            </div>
          </div>

          {/* PASSION */}
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-serif font-bold">PASSION</h2>
            <p className="text-white text-lg max-w-md">
              Our chef is as passionate about <br />cooking as you are about eating! <br />
              There is something about food cooked <br /> with love they say, you can
              always tell!
            </p>
            <div className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center">
              <img
                src={events}
                alt="Passion"
                className="w-40 h-40 object-cover relative bottom-6"
              />
              <p className="absolute top-43 text-black font-bold text-sm">
               With Love <br /> Mitch Kitchen
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-serif font-bold">
              ON THE ROAD
            </h2>
            <p className="text-white text-lg max-w-md">
              From festivals to parties to <br />private dining events, as our <br /> slogan
              suggests, we are <br />bringing fine dining straight to you. <br /> Catch us on
              the road!
            </p>
            </div>
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col gap-16 relative left-0 md:left-30">
          {/* CULTURE */}
          <div className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center">
              <img
                src={events}
                alt="On The Road"
                className="w-40 h-40 object-cover relative bottom-6"
              />
              <p className="absolute top-43 text-black font-bold text-sm">
               With Love <br /> Mitch Kitchen
              </p>
            </div>
    
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-serif font-bold">CULTURE</h2>
            <p className="text-white text-lg max-w-md">
              Our culture is one of comfort food. <br /> Fast food from different parts
              of the world <br /> re-imagined to excite your tastes and <br />create an
              unforgettable experience.
            </p>
            <div className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center">
              <img
                src={events}
                alt="Culture"
                className="w-40 h-40 object-cover relative bottom-6"
              />
              <p className="absolute top-43 text-black font-bold text-sm">
               With Love <br /> Mitch Kitchen
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-serif font-bold">MENU</h2>
            <p className="text-white text-lg max-w-md">
              Our menus are as unique as the <br /> events we cater.  With a menu that <br />
              never stays the same, specially created <br /> every time to make sure
              your experience <br /> of our food is always new and exciting!
            </p>
            <div className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center">
              <img
                src={events}
                alt="Menu"
                className="w-40 h-40 object-cover relative bottom-6"
              />
              <p className="absolute top-43 text-black font-bold text-sm">
               With Love <br /> Mitch Kitchen
              </p>
            </div>
          </div>

          {/* ON THE ROAD */}
           
            
        </div>
      </div>
    </div>
  );
};

export default About;
