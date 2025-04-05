import { useState } from "react";
import { FaBars, FaTimes, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import MainLogo from '../../assets/MainLogo.png';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" bg-[#013220] text-[#D3AF37] TheSeason px-6 md:px-16 py-4 flex justify-between items-center relative">
      {/* Logo */}
      
      <Link to="/">
  <div className="text-xl font-bold relative logo">
    <img src={MainLogo} alt="Logo" className="pt-2 h-20 w-20" />
  </div>
</Link>


      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-md uppercase">
        <li>
          <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/gallery" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/about" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/contact" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-20 left-0 bottom-2  relative text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed z-10 top-0 left-0 w-full pt-20 h-screen bg-[#013220] text-[#D3AF37] text-center text-lg TheSeason transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <li className="py-3">
          <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/gallery" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Gallery
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/about" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            About Us
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink 
            exact to="/contact" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-white" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul> 
      
      {/* Social Icons */}
      <div className="absolute z-1 right-3 md:mt-11 mt-22 mr-2 flex flex-col space-y-4 text-2xl">
         
        <FaInstagram className="cursor-pointer hover:text-white" />
        <FaFacebook className="cursor-pointer hover:text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
