import React from "react";
import "../../index.css";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-[#013220] font-bold text-[#EFCFA0] min-h-screen flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-8 mt-1 max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-left md:pr-16">
          <button className="bg-[#ce1126] chloe text-white tracking-wider leading-6 mb-5 py-1 px-9 rounded-md flex items-center gap-3 text-md w-max">
            <span className="mb-4">📅</span> BUY A TICKET TO OUR <br /> TASTING
            EVENTS
          </button>
          <button className="bg-[#ce1126] text-white mb-8 py-2 chloe tracking-widest leading-9 px-8 rounded-md font-bold flex items-center gap-3 text-md w-max">
            <span>📞</span> MAKE A RESERVATION
          </button>
          <div className="relative w-max mt-4 flex md:block md:text-center">
  <h1 className="md:text-8xl text-[#ce1126] frunchy text-7xl sm:text-7xl">
    CONTACT
  </h1>
  <h2 className="relative left-4 bottom-3 md:text-8xl text-[#ce1126] text-7xl sm:text-7xl frunchy md:mt-0 mt-3">
    US
  </h2>
</div>

        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="text-white Bona space-y-3 w-full">
          <div>
            <label className="block text-lg font-semibold">Name:</label>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-white outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Email:</label>
            <input
              type="email"
              className="w-full bg-transparent border-b-2 border-white outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Phone No:</label>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-white outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Your Message:</label>
            <textarea
              className="w-full bg-white text-black p-2 h-32 outline-none"
              required
            />
          </div>
          <button type="submit" className="bg-[#ce1126] text-white py-3 px-6 rounded-md text-xl w-full">Submit</button> 
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
