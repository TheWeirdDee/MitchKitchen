import React, { useRef, useState, useEffect } from "react";

function SectionDimensions() {
  const sectionRef = useRef(null);  
  const [sectionHeight, setSectionHeight] = useState(0);  
  useEffect(() => {
     
    const measureHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.getBoundingClientRect().height);
      }
    };

    measureHeight(); 
    window.addEventListener("resize", measureHeight);  

    return () => {
      window.removeEventListener("resize", measureHeight);  
    };
  }, []);

  return (
    <div>
      {/* measuring */}
      <div ref={sectionRef} className="your-section-styling">
        {/* Content... */}
        <h1
          className="TheSeason about-heading h absolute md:left-1/2 left-1/8 sm:left-1/7 top-70 -translate-x-1/2 text-[50px] sm:text-[60px] md:text-[10px] text-[#ce1126] font-bold uppercase tracking-wide rotate-90"
          data-aos="fade-down"
          style={{
            position: "absolute",
            animation: "scrollUpDown 8s ease-in-out infinite",
          }}
        >
          OUR STORY
        </h1>
      </div>

      {/* Display the height */}
      <p>Section Height: {sectionHeight}px</p>
    </div>
  );
}

export default SectionDimensions;
