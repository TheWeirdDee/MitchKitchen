import React from "react";
import events from "../assets/events.jpg";
import './EventCard.css';

const EventCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-900 p-6">
      <div className="  text-white max-w-lg w-full border border-transparent p-6">
        <div className="text-center mb-4 title">
          <h2 className="text-3xl font-bold uppercase">Upcoming</h2>
          <h2 className="text-3xl font-bold uppercase">Events</h2>
        </div>

        {/* Image Section */}
        <div className="relative event-image">
          <img
            src= {events}
            alt="Fire performer"
            className="w-full h-80 object-cover rounded-t-lg"
          />
        </div>

        {/* Event Details */}
        <div className="bg-yellow-700 text-white text-center p-6 mt-0 ">
          <h3 className="text-2xl font-bold uppercase">Touch Ah Color</h3>
          <h3 className="text-2xl mt-3 font-bold uppercase">Touch Ah Surgery</h3>
          <p className="text-sm mt-3
    text-left font-bold">Date: August 24, 2025</p>
          <p className="text-sm text-left mt-3 font-bold">Location: London, United Kingdom</p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4 ">
          <button className="menu-button rounded-full transition">
            See Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;