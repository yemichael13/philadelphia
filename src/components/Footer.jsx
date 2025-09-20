import { Link } from 'react-router-dom'
import React from 'react'


const Footer = () => {
  return (
  <section>
    <div className='w-full h-auto  flex md:flex-row flex-col gap-4 md:justify-between items-center  mt-2 md:mt-8 p-8'>
        <div>
            <h3 className='text-green-900 py-2 text-2xl'>Philadelphia</h3>
            <h5>Addis Ababa, Ethiopia</h5>
        </div>
        <div className='flex flex-row justify-center items-center gap-8 md:w-1/2 border-l border-l-black' >
            <div >
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                <li className='hover:text-green-900 cursor-pointer'><Link to="/">About</Link></li>
                <li className='hover:text-green-900 cursor-pointer'><Link to="/">Services</Link></li>
                <li className='hover:text-green-900 cursor-pointer'><Link to="/">Gallery</Link></li>
                <li className='hover:text-green-900 cursor-pointer'><Link to="/">Review</Link></li>
                <li className='hover:text-green-900 cursor-pointer'><Link to="/">Contact</Link></li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-center gap-8 md:w-1/2 border-r border-r-black' >
            <h4 className='text-2xl font-bold'>Find Us</h4>
            <ul className='flex flex-col justify-center items-center gap-8 px-4 py-2 text-sm md:mx-4'>
                <li className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'><ion-icon name="logo-facebook"></ion-icon>Facebook</li>
                <li className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'><ion-icon name="logo-instagram"></ion-icon>Instagram</li>
                <li className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'><ion-icon name="logo-youtube"></ion-icon>Youtube</li>
                <li className='cursor-pointer flex gap-2 items-baseline transition-transform duration-300 hover:-translate-y-2'><ion-icon name="logo-twitter"></ion-icon>Twitter</li>
            </ul>
        </div>
        </div>
        
        
    </div>
    <div className=' border-t border-t-black w-4/5  p-4'>
        <p>&copy; {new Date().getFullYear()} Philadephia generation baptist church </p>
    </div>
  </section>
    
  )
}

export default Footer;