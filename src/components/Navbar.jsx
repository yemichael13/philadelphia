import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center bg-white h-20 border-1 border-gray-300 shadow-md px-4">
      <h3 className="text-green-900 py-2 text-2xl">Philadelphia</h3>
      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        {!menuOpen ? (
          <ion-icon name="menu-outline" size="large" onClick={() => setMenuOpen(true)} className="cursor-pointer"></ion-icon>
        ) : (
          <ion-icon name="close-outline" size="large" onClick={() => setMenuOpen(false)} className="cursor-pointer"></ion-icon>
        )}
      </div>
      {/* Menu */}
      <div className={`absolute md:static bg-white md:min-h-fit min-h-[20vh] border-b-gray-400 md:border-none md:shadow-none shadow-lg left-0 top-20 w-full md:w-auto px-5 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}>
        <ul className="flex md:flex-row flex-col justify-center items-center md:gap-8 gap-8 px-4 py-2 text-sm md:mx-4">
          <li className="hover:text-green-900"><Link to="/">About</Link></li>
          <li className="hover:text-green-900"><Link to="/">Services</Link></li>
          <li className="hover:text-green-900"><Link to="/">Reviews</Link></li>
          <li className="hover:text-green-900"><Link to="/">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;