import React from "react";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-[#013220] text-[#EFCFA0] min-h-screen flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-8 mt-1 max-w-5xl w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-left md:pr-16">
          <button className="bg-[#ce1126] text-white  mb-5 py-2 px-8 rounded-md flex items-center gap-3 text-sm w-max">
            <span className="mb-4">📅</span> BUY A TICKET TO OUR <br /> TASTING
            EVENTS
          </button>
          <button className="bg-[#ce1126] text-white mb-8 py-3 px-8 rounded-md flex items-center gap-3 text-sm w-max">
            <span>📞</span> MAKE A RESERVATION
          </button>
          <div className=" relative w-max mt-4">
            <h1 className="md:text-7xl text-[#ce1126] text-5xl sm:text-5xl font-bold mb-3">
              CONTACT
            </h1>
            <h2 className="md:text-6xl text-[#ce1126] text-4xl sm:text-4xl font-bold absolute left-1/2 transform -translate-x-1/2 top-full">
              US
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSubmit} className="text-white space-y-3 w-full">
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
          <button type="submit" className="bg-[#ce1126] text-white py-3 px-6 rounded-md text-lg w-full">Submit</button> 
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
