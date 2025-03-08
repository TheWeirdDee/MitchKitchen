import { useState } from "react";
import { FaBars, FaTimes, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-green-900 text-[#d4af7a] px-6 md:px-16 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold relative logo">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm uppercase">
        <li>
          <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/gallery" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/about" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            exact to="/contact" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-20 right-6 text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed z-10 top-0 left-0 w-full pt-20 h-screen bg-green-900 text-center text-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <li className="py-3">
          <NavLink 
            exact to="/" 
            className={({ isActive }) => 
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
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
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
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
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
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
              `navLink hover:text-white ${isActive ? "border-b-2 border-[#d4af7a]" : ""}`
            }
            onClick={handleNavLinkClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul> 
      
      {/* Social Icons */}
      <div className="absolute z-1 right-4 md:mt-22 mt-38 mr-2 flex flex-col space-y-4 text-2xl">
        <FaTiktok className="cursor-pointer hover:text-white" />
        <FaInstagram className="cursor-pointer hover:text-white" />
        <FaFacebook className="cursor-pointer hover:text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
