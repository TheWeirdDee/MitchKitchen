import React, { useEffect } from "react";
import events from "../../assets/events.jpg";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-green-900 min-h-screen flex items-center justify-center p-10 relative">
      {/* Large Rotated Text */}
      <h1
        className="about-heading absolute md:left-1/2 left-1/8 sm:left-1/7 top-100 -translate-x-1/2 text-[50px] sm:text-[50px] md:text-[90px] text-beige font-serif font-bold uppercase tracking-wide rotate-90"
        data-aos="fade-down"
      >
        OUR STORY
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-35 relative z-1 md:left-0 left-16">
        {/* Left Section */}
        <div className="flex flex-col gap-16">
          {/* ROOTS */}
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-white text-2xl font-serif font-bold">ROOTS</h2>
            <p className="text-white text-lg max-w-md">
              From Jamaica with love. A <br /> history of homemade food, <br />{" "}
              savory and sweet palette, <br /> pungent spices, and a love for{" "}
              <br /> food that’s passed from <br /> generation to generation.
            </p>
            <div
              className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center"
              data-aos="zoom-in"
            >
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
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-white text-2xl font-serif font-bold">
              PASSION
            </h2>
            <p className="text-white text-lg ">
              Our chef is as passionate <br />
              about cooking as you are about <br /> eating! There is something
              about <br /> food cooked with love they say, <br /> you can always
              tell!
            </p>
            <div
              className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center"
              data-aos="zoom-in"
            >
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

          {/* ON THE ROAD */}
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-white text-2xl font-serif font-bold">
              ON THE ROAD
            </h2>
            <p className="text-white text-lg max-w-md">
              From festivals to parties to <br />
              private dining events, as our <br /> slogan suggests, we are{" "}
              <br />
              bringing fine dining straight to you. <br /> Catch us on the road!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-16 relative bottom-20 right-10 md:left-30 sm:left-0 content-right">
          {/* CULTURE */}
          <div
            className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center"
            data-aos="zoom-in"
          >
            <img
              src={events}
              alt="On The Road"
              className="w-40 h-40 object-cover relative bottom-6"
            />
            <p className="absolute top-43 text-black font-bold text-sm">
              With Love <br /> Mitch Kitchen
            </p>
          </div>

          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-white text-2xl font-serif font-bold">
              CULTURE
            </h2>
            <p className="text-white text-lg max-w-md text-left">
              Our culture is one of comfort food. <br /> Fast food from
              different parts <br />
              of the world re-imagined to <br /> excite your tastes and create{" "}
              <br /> an unforgettable experience.
            </p>

            <div
              className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center"
              data-aos="zoom-in"
            >
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
          <div className="flex flex-col" data-aos="fade-up">
            <h2 className="text-white text-2xl font-serif font-bold">MENU</h2>
            <p className="text-white text-lg w-full max-w-sm md:max-w-md break-words hidden md:block">
              Our menus are as unique as the events we cater. <br /> With a menu that
              never stays the same, <br /> specially created every time to make sure
              your experience of our food is always new <br /> and exciting!
            </p>
             
            <p className="text-white text-lg w-full max-w-sm text-justify break-words block md:hidden">
              Our menus are as unique <br /> as the events we cater. <br />
              With a menu that never <br />
              stays the same, specially created <br /> every time to make sure{" "}
              <br />
              your experience of our food <br /> is always new and exciting!
            </p>

            <div
              className="relative w-44 h-55 bg-[#f5f5dc] rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center"
              data-aos="zoom-in"
            >
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
        </div>
      </div>
    </div>
  );
};

export default About;
