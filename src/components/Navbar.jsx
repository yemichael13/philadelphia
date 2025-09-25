import React, { useState } from "react";
import Logo from "../assets/p_logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);

  // Smooth scroll handler
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
  <div 
    className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-white h-20 border-1 border-gray-300 shadow-md px-4 transition-opacity duration-300 ${navbarHovered ? 'opacity-100' : 'md:opacity-30'}`}
    onMouseEnter={() => setNavbarHovered(true)}
    onMouseLeave={() => setNavbarHovered(false)}
  >
    <a href="/" className="cursor-pointer">
      <img src={Logo} alt="Logo" className="h-12 w-12 object-contain " />
    </a>
      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        {!menuOpen ? (
          <ion-icon name="menu-outline" size="large" onClick={() => setMenuOpen(true)} className="cursor-pointer"></ion-icon>
        ) : (
          <ion-icon name="close-outline" size="large" onClick={() => setMenuOpen(false)} className="cursor-pointer"></ion-icon>
        )}
      </div>
      {/* Menu */}
      <div className={`absolute md:static mb-4 bg-white md:min-h-fit min-h-[20vh] border-b-gray-400 md:border-none md:shadow-none shadow-lg left-0 top-20 w-full md:w-auto px-5 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}>
        <ul className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-8 px-4 py-2 text-sm md:mx-4">
          <li className="hover:text-green-900"><a href="#about" onClick={handleSmoothScroll}>About</a></li>
          <li className="hover:text-green-900"><a href="#services" onClick={handleSmoothScroll}>Services</a></li>
          <li className="hover:text-green-900"><a href="#gallery" onClick={handleSmoothScroll}>Gallery</a></li>
          <li className="hover:text-green-900"><a href="#review" onClick={handleSmoothScroll}>Reviews</a></li>
          <li className="hover:text-green-900"><a href="#contact" onClick={handleSmoothScroll}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;