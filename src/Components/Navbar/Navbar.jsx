import { useState } from "react";
import { FaBars, FaTimes, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-[#d4af7a] px-6 md:px-16 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold relative">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm uppercase">
        <li className="hover:text-white"><NavLink exact to='/' className='navLink' activeClassName='active'>
            Home
          </NavLink></li>
        <li className="hover:text-white"> <NavLink exact to='/gallery' className='navLink' activeClassName='active'>
            Gallery
          </NavLink></li>
        <li className="hover:text-white">  <NavLink to='/about' className='navLink' activeClassName='active'>
            About Us
          </NavLink> </li>
        <li className="relative">
          <span className="hover:text-white"><NavLink exact to='/contact' className='navLink' activeClassName='active'>
            Contact Us
          </NavLink></span>
          <div className="absolute left-0 w-full h-[2px] bg-white"></div>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-2 right-6 text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`fixed z-1 top-0 left-0 w-full pt-20 h-screen  bg-green-900 text-center text-lg transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full" } "block" : "hidden"
        } md:hidden`}
      >
        <li className="py-3 hover:text-white"> <NavLink to='/' className='navLink' activeClassName='active'>
            Home
          </NavLink></li>
        <li className="py-3 hover:text-white"> <NavLink to='/gallery' className='navLink' activeClassName='active'>
            Gallery
          </NavLink></li>
        <li className="py-3 hover:text-white"> <NavLink to='/about' className='navLink' activeClassName='active'>
            About Us
          </NavLink></li>
        <li className="py-3 relative">
          <span className="hover:text-white"> <NavLink to='/contact' className='navLink' activeClassName='active'>
            Contact Us
          </NavLink></span>
          {/* <div className="w-full h-[2px] bg-white"></div> */}
        </li>
      </ul>

      {/* Social Icons */}
      <div className="absolute right-4 md:mt-22 mt-38 mr-2 flex flex-col space-y-4 text-2xl">
  <FaTiktok className="cursor-pointer hover:text-white" />
  <FaInstagram className="cursor-pointer hover:text-white" />
  <FaFacebook className="cursor-pointer hover:text-white" />
</div>

    </nav>
  );
};

export default Navbar;