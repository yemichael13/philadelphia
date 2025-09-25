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
  <section>
    <div className='w-full h-auto  flex md:flex-row flex-col gap-4 md:justify-between items-center  mt-2 md:mt-8 p-8'>
        <div>
            <a href="/" className="cursor-pointer">
                <img src={Logo} alt="Logo" className="h-40 w-40 object-contain " />
            </a>
            <h5>Addis Ababa, Ethiopia</h5>
        </div>
        <div className='flex flex-row justify-center items-center gap-8 md:w-1/2 border-l border-l-black' >
            <div >
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                <li className="hover:text-green-900"><a href="#about" onClick={handleSmoothScroll}>About</a></li>
                <li className="hover:text-green-900"><a href="#services" onClick={handleSmoothScroll}>Services</a></li>
                <li className="hover:text-green-900"><a href="#gallery" onClick={handleSmoothScroll}>Gallery</a></li>
                <li className="hover:text-green-900"><a href="#review" onClick={handleSmoothScroll}>Reviews</a></li>
                <li className="hover:text-green-900"><a href="#contact" onClick={handleSmoothScroll}>Contact</a></li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 md:w-1/2 border-r border-r-black' >
            <h4 className='text-2xl font-bold'>Find Us</h4>
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                                <a href="https://www.facebook.com/profile.php?id=100077574315008" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-facebook"></ion-icon>Facebook
                                </a>
                                <a href="https://instagram.com/pastorkalebmoges" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-instagram"></ion-icon>Instagram
                                </a>
                                <a href="https://youtube.com/@pastorkalebkiflemoges5339" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-youtube"></ion-icon>Youtube
                                </a>
                                <a href="https://tiktok.com/@pastorkalebkifl66" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'>
                                    <ion-icon name="logo-tiktok"></ion-icon>Tiktok
                                </a>
            </ul>
        </div>
        </div>
        
        
    </div>
    <div className=' border-t border-t-black w-4/5  p-4'>
        <p className="font-light">&copy; {new Date().getFullYear()} Philadephia generation baptist church </p>
    </div>
  </section>
    
  )
}

export default Footer;