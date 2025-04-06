import React, { useEffect } from "react";
import aboutone from "../../assets/aboutone.png";
import abouttwo from "../../assets/abouttwo.png";
import aboutthree from "../../assets/aboutthree.png";
import aboutfour from "../../assets/aboutfour.png";
import aboutfive from "../../assets/aboutfive.png";
import OurStory  from "../../assets/OurStory.png";
import "./About.css";
import "../../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Excited from "../../Components/Excited";
 

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <div className="bg-[#013220] min-h-screen flex items-center justify-center p-10 relative">
        {/*  Text */}
        <div className="about-heading absolute   md:left-1/2 left-1/8 sm:left-1/7 md:top-2 top-2 -translate-x-1/2">
  <img
    src={OurStory}
    alt="Roots"
    className="w-100 md:h-300 h-200 object-contain"
    data-aos="fade-down"
    style={{
      // position: "absolute",
      animation: "scrollUpDown 5s ease-in-out infinite",
    }}
  />
</div>

<style>{`
  @keyframes scrollUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(150px);
    }
  }
`}</style> 


        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-35 relative z-1 md:left-5 left-30">
          {/* Left Section */}
          <div className="flex flex-col gap-16  relative content-left right-20 ">
            {/* ROOTS */}
            <div className="flex flex-col" data-aos="fade-up">
              <h2 className="TheSeason text-white text-3xl mb-2 font-bold">
                ROOTS
              </h2>
              <p className="text-white Bona text-lg max-w-md">
                From Jamaica with love. A <br /> history of homemade food,{" "}
                <br />
                savory and sweet palette, <br /> pungent spices, and a love for
                <br /> food that’s passed from <br /> generation to generation.
              </p>
              <div
                className="relative w-44 h-55 rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={abouttwo}
                  alt="Roots"
                  className="w-44 h-55 object-cover relative"
                />
              </div>
            </div>

            {/* PASSION */}
            <div className="flex flex-col" data-aos="fade-up">
              <h2 className="text-white text-3xl mb-2 TheSeason font-bold">
                PASSION
              </h2>
              <p className="text-white Bona text-lg ">
                Our chef is as passionate <br />
                about cooking as you are about <br /> eating! There is something
                about <br /> food cooked with love they say, <br /> you can
                always tell!
              </p>
              <div
                className="relative w-44 h-55 rounded-sm shadow-lg rotate-[-15deg] mt-10 flex items-center justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={aboutfour}
                  alt="Passion"
                  className="w-44 h-55 object-cover relative"
                />
              </div>
            </div>

            {/* ON THE ROAD */}
            <div className="flex flex-col" data-aos="fade-up">
              <h2 className="text-white text-3xl mb-2 TheSeason font-bold">
                ON THE ROAD
              </h2>
              <p className="text-white Bona text-lg max-w-md">
                From festivals to parties to <br />
                private dining events, as our <br /> slogan suggests, we are{" "}
                <br />
                bringing fine dining straight <br /> to you. Catch us on the
                road!
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-16 relative md:bottom-0 bottom-30 md:right-10 right-30 md:left-30 sm:left-0 content-right">
            {/* CULTURE */}
            <div
              className="relative w-44 h-55  rounded-sm shadow-lg rotate-[15deg] mt-10 flex items-center justify-center"
              data-aos="zoom-in"
            >
              <img
                src={aboutone}
                alt="On The Road"
                className="w-44 h-55 object-cover relative bottom-1"
              />
            </div>

            <div className="flex flex-col" data-aos="fade-up">
              <h2 className="text-white text-3xl mb-2 TheSeason font-bold">
                CULTURE
              </h2>
              <p className="text-white text-lg max-w-md Bona text-left">
                Our culture is one of comfort.
                <br />
                Fast food from different parts <br />
                of the world re-imagined to <br /> excite your tastes and create{" "}
                <br /> an unforgettable experience.
              </p>

              <div
                className="relative w-44 h-55 rounded-sm shadow-sm rotate-[15deg] mt-10 flex items-center justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={aboutthree}
                  alt="Culture"
                  className="w-44 h-55 object-cover relative"
                />
              </div>
            </div>

            {/* MENU */}
            <div className="flex flex-col" data-aos="fade-up">
              <h2 className="text-white text-3xl mb-2 TheSeason font-bold">MENU</h2>
              <p className="text-white Bona text-lg w-full max-w-sm md:max-w-md break-words hidden md:block">
                Our menus are as unique as <br /> the events we cater. <br />{" "}
                With a menu that never stays <br />
                the same, specially made every <br />
                time to make sure your <br /> experience of our food is <br />{" "}
                always new, and exciting!
              </p>

              <p className="text-white Bona text-lg w-full max-w-sm text-justify break-words block md:hidden">
                Our menus are as unique <br /> as the events we cater. <br />
                With a menu that never <br />
                stays the same, specially created <br /> every time to make sure
                your <br /> experience of our food <br /> is always new and
                exciting!
              </p>

              <div
                className="relative w-44 h-55 rounded-sm shadow-sm rotate-[15deg] mt-10 flex items-center justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={aboutfive}
                  alt="Menu"
                  className="w-44 h-55 object-cover relative  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Excited />
    </div>
  );
};

export default About;
