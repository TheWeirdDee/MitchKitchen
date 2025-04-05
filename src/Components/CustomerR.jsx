import React from 'react'
import '../index.css';
const CustomerR = () => {
  return (
    <div className="bg-[#013220] text-[#ce1126] py-12 px-6 md:px-16  flex flex-col justify-center items-center">
    <h2
      className="perandory text-center text-5xl md:text-[65px] tracking-widest md:leading-15 leading-10 font-bold inline-block mb-8 mx-auto pb-2 relative"
      data-aos="fade-up"
    >
      Customer <br /> Reviews
      <span className="absolute md:left-70 left-50 top-10 md:top-15 transform -translate-y-1/2 w-1/2 md:w-2/2 h-1 bg-yellow-500 [@media(max-width:499px)]:left-52 [@media(max-width:499px)]:w-1/3 [@media(max-width:499px)]:top-12"></span>


      <span className="absolute md:right-70 right-50 top-10 md:top-15 transform -translate-y-1/2 w-1/2 md:w-2/2 h-1 bg-yellow-500 [@media(max-width:499px)]:right-52 [@media(max-width:499px)]:w-1/3 [@media(max-width:499px)]:top-12"></span>
    </h2>
    </div>
  )
}

export default CustomerR