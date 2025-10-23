import React, { useState } from "react"; 
import Logo from "../assets/p_logo.png";


const Footer = () => {

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
  <footer className="bg-green-900 text-white">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="text-center md:text-left">
          <a href="/" className="inline-block cursor-pointer mb-6">
            <img src={Logo} alt="Logo" className="h-24 w-24 object-contain mx-auto md:mx-0" />
          </a>
          <h3 className="text-xl font-semibold mb-2">Philadelphia Generation Baptist Church</h3>
          <p className="text-green-100">Addis Ababa, Ethiopia</p>
        </div>
        
        <div className="text-center">
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" onClick={handleSmoothScroll} className="text-green-100 hover:text-white transition-colors">About</a></li>
            <li><a href="#services" onClick={handleSmoothScroll} className="text-green-100 hover:text-white transition-colors">Services</a></li>
            <li><a href="#gallery" onClick={handleSmoothScroll} className="text-green-100 hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#review" onClick={handleSmoothScroll} className="text-green-100 hover:text-white transition-colors">Reviews</a></li>
            <li><a href="#contact" onClick={handleSmoothScroll} className="text-green-100 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div className="text-center">
          <h4 className="text-xl font-bold mb-6">Follow Us</h4>
          <div className="space-y-4">
            <a href="https://www.facebook.com/profile.php?id=100077574315008" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-green-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <ion-icon name="logo-facebook" className="text-2xl"></ion-icon>
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com/pastorkalebmoges" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-green-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <ion-icon name="logo-instagram" className="text-2xl"></ion-icon>
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com/@pastorkalebkiflemoges5339" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-green-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <ion-icon name="logo-youtube" className="text-2xl"></ion-icon>
              <span>YouTube</span>
            </a>
            <a href="https://tiktok.com/@pastorkalebkifl66" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-green-100 hover:text-white transition-all duration-300 hover:translate-x-1">
              <ion-icon name="logo-tiktok" className="text-2xl"></ion-icon>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-green-800">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p className="text-green-100">&copy; {new Date().getFullYear()} Philadelphia Generation Baptist Church. All rights reserved.</p>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer;