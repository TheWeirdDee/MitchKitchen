import React from 'react'

const CustomerR = () => {
  return (
    <div className="bg-[#013220] text-[#ce1126] py-12 px-6 md:px-16  flex flex-col justify-center items-center">
    <h2
      className="text-center text-5xl md:text-5xl font-bold inline-block mb-8 mx-auto pb-2 relative"
      data-aos="fade-up"
    >
      Customer <br /> Reviews
      <span className="absolute md:left-60 left-53 top-1/2 transform -translate-y-1/2 w-1/3 md:w-2/2 h-1 bg-yellow-500"></span>
      <span className="absolute md:right-60 right-53 top-1/2 transform -translate-y-1/2 w-1/3 md:w-2/2 h-1 bg-yellow-500"></span>
    </h2>
    </div>
  )
}

export default CustomerR