import React from "react";
import { Link } from "react-router-dom";
import events from "../assets/events.jpg";
import './EventCard.css';

const EventCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#013220] p-6">
      <div className="text-[#ce1126] max-w-lg w-full border border-transparent p-6">
        <div className="text-center TheSeason mb-4 title">
          <h2 className="text-4xl font-bold uppercase">Upcoming</h2> 
          <h2 className="text-4xl    font-bold uppercase">Events</h2>
          <span className="absolute md:left-112 left-95 top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/5 h-1 bg-yellow-500"></span>
      <span className="absolute md:right-112 right-95 top-1/2 transform -translate-y-1/2 w-1/3 md:w-1/5 h-1 bg-yellow-500"></span>
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
        <div className="bg-[#b4911c] text-white text-center p-6 mt-0 ">
          <h3 className="playfair text-3xl font-bold uppercase">Touch Ah Color</h3>
          <h3 className="text-3xl playfair mt-3 font-bold uppercase">Touch Ah Surgery</h3>
          <p className="Bona text-lg mt-3
    text-left font-bold">Date: August 24, 2025</p>
          <p className="Bona text-lg text-left mt-3 font-bold">Location: London, United Kingdom</p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4 ">
        <Link to="/contact">
          <button className="TheSeason  menu-button rounded-full transition">
            BOOK A TASTING
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;