import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Bible_4 from "./assets/bible-4.jpg";
import Cross from "./assets/cross.jpg";
import Cross_2 from "./assets/cross-2.jpg";
import { Link } from "react-router-dom";
import Bible_2 from "./assets/bible-2.jpg";
import Bible_3 from "./assets/bible-3.jpg";
import Bible_5 from "./assets/bible-5.jpg";
import Gallery from "./components/Gallery";
import MobileGallery from "./components/MobileGallery";
import Footer from "./components/Footer";
import Profile from "./assets/profile.png";

 const App = () => {
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
  <div className="w-full h-auto overflow-x-hidden pt-20">
      <Navbar />
      <section id="hero" className="md:h-auto">
        <div className="bg-img='bg-cover bg-center h-screen mb-4 flex flex-col " style={{ backgroundImage: `url(${Bible_4})` }}>
          <div className="flex flex-col gap-2 justify-center text-center top-20 my-10 bg-white h-80 w-screen p-6">
            <h1 className="text-5xl my-6 font-bold  mb-4">Philadelphia Generation Baptist Church</h1>
            <h3 className="text-2xl ">"A Church that is Rooted and Grounded in the Word of God"</h3>
          </div>
        </div>
        <h3 className="text-center text-2xl my-6 font-semibold">Join us in faith and community</h3>
        <div className="flex md:flex-row justify-center p-8 my-4">
        <a href="#contact" onClick={handleSmoothScroll}> <button className="bg-green-900 cursor-pointer text-white px-6 py-2 rounded-2xl mx-4 hover:bg-white hover:border-green-900 border-1 hover:text-green-900">Get in touch</button></a>
        <a href="#newsletter" onClick={handleSmoothScroll}>  <button className="bg-white cursor-pointer text-green-900 px-6 py-2 rounded-2xl border-1 border-green-900 hover:bg-green-900 hover:text-white">Subscribe to Newsletter</button></a>
        </div>
      </section>
      <section
        id="about"
        className=" flex flex-row h-screen bg-cover bg-center md:pt-25 bg-no-repeat"
        style={{ backgroundImage: `url(${Cross})` }}
      >
        <div className="w-screen md:w-1/2 bg-white h-full flex flex-col justify-center p-8">
          <h2 className="bg-green-900 text-white text-6xl mb-4 p-4">Learn more about our church</h2>
          <p>
            At Philadelphia Baptist Church, we embrace the transformative power of faith to uplift our community and foster spiritual growth. With a heartfelt dedication to our mission and a welcoming spirit, our congregation invites you to explore our rich history, diverse ministries, and upcoming events. Together, we strive to create a nurturing environment where everyone feels valued and connected.<br/><br/>
            Whether you are seeking a place to worship, engage in community service, or deepen your spiritual journey, we are here to support you. Discover the warmth of fellowship and the strength of faith at Philadelphia Baptist Church.
          </p>
        </div>
      </section >
      <section
        id="pastor-message"
        className="relative flex flex-row my-8 h-auto overflow-visible"
      >
        {/* Only show the rectangle on small screens, hide everything else */}
        <div className="md:hidden flex w-full h-full items-center justify-center">
          <div
            className="bg-green-900 text-white rounded-lg shadow-lg flex flex-col items-center justify-center relative"
            style={{ width: '300px', height: '300px', zIndex: 2 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-10" style={{top: '20px'}}>
              <div className="bg-white rounded-full border-2 border-green-900 shadow w-20 h-20 flex items-center justify-center overflow-hidden">
                {/* Profile image can be placed here later */}
                <img src={Profile} alt="Pastor" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center">
              <h2 className="text-xl font-bold my-2">Pastor Kaleb Kifle</h2>
              <p className="text-sm p-2">“Grace and peace to you in the name of our Lord Jesus Christ. Our prayer is that you find encouragement, hope, and a renewed sense of purpose as we worship, grow, and serve together. May God bless you abundantly as you walk in His light.”</p>
            </div>
          </div>
        </div>
        {/* On medium and up, show the original ellipse and background */}
        <div className="hidden md:block w-full h-full">
          <div
            className="relative w-full min-h-[500px] bg-cover bg-right bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${Cross_2})` }}
          >
            <div className="absolute inset-0 w-full h-full backdrop-blur-xs z-0"></div>
            <div
              className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-end"
              style={{ zIndex: 1 }}
            >
              <div
                className="w-full min-h-[500px] bg-green-200 opacity-100 relative flex items-center justify-center"
                style={{
                  borderTopRightRadius: '50% 100%',
                  borderBottomRightRadius: '50% 100%',
                }}
              >
                <div
                  className="bg-green-900 text-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                  style={{ width: '300px', height: '300px', zIndex: 2 }}
                >
                  <div className="mb-2 flex flex-col items-center">
                    <div className="bg-white rounded-full border-2 border-green-900 shadow w-20 h-20 flex items-center justify-center overflow-hidden mb-2">
                      {/* Profile image can be placed here later */}
                      <img src={Profile} alt="Pastor" className="w-full h-full object-cover"/>
                    </div>
                    <h2 className="text-xl font-bold my-2">Pastor Kaleb Kifle</h2>
                  </div>
                  <p className="text-sm p-2">“Grace and peace to you in the name of our Lord Jesus Christ. Our prayer is that you find encouragement, hope, and a renewed sense of purpose as we worship, grow, and serve together. May God bless you abundantly as you walk in His light.”</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="md:grid flex flex-col md:grid-cols-3 md:pt-25 h-auto w-full gap-4 px-2 md:px-0">
        <div className="bg-white flex flex-col border-1 border-green-900 w-full md:w-3/4 hover:scale-105 duration-300 mx-auto my-4 hover:cursor-pointer hover:shadow-lg">
          <img src={Bible_2} alt="Bible" className="w-full h-auto mb-4" />
          <h3 className="text-center text-2xl md:text-3xl font-bold my-5">Worship Services</h3>
          <p className="text-center px-2 md:px-4">Our worship services are designed to inspire and uplift. Join us for heartfelt music, engaging sermons, and a community that celebrates faith together.</p>
        </div>
        <div className="bg-green-900 flex flex-col-reverse border-1 border-green-900 w-full md:w-3/4 hover:scale-105 duration-300 mx-auto my-4 hover:cursor-pointer hover:shadow-lg">
          <img src={Bible_5} alt="Bible" className="w-full h-auto mt-4" />
          <div className="flex flex-col flex-grow justify-center">
            <h3 className="text-center text-white text-2xl md:text-3xl font-bold my-5">Community Outreach</h3>
            <p className="text-center text-white px-2 md:px-4 my-4">We believe in giving back to our community. Our outreach programs aim to serve those in need, fostering connections and promoting hope.</p>
          </div>
        </div>
        <div className="bg-white flex flex-col border-1 border-green-900 w-full md:w-3/4 hover:scale-105 duration-300 mx-auto my-4 hover:cursor-pointer hover:shadow-lg">
          <img src={Bible_3} alt="Bible" className="w-full h-auto mb-4" />
          <h3 className="text-center text-2xl md:text-3xl font-bold my-5">Small Groups</h3>
          <p className="text-center px-2 md:px-4">Join our small groups for fellowship and support. These gatherings offer a space for prayer, discussion, and building lasting relationships in faith.</p>
        </div>
      </section>

      {/* Gallery: show on all screens, but simplified for mobile */}
      <div id="gallery" className="w-full md:pt-20 my-8">
        {/* Mobile Gallery - hidden on desktop */}
        <MobileGallery />
        <div className="hidden md:block">
          <Gallery className="h-100" />
        </div>
      </div>
      
    <section id="review" className="bg-green-100 flex items-center md:pt-25 justify-center w-full h-auto my-4 px-2 md:px-4 py-10 md:py-20">
      {/* Review Section with Next Button */}
      <ReviewSection />
    </section>

    

    <section className="w-full pt-10 pb-10 px-2" id="newsletter">
      <div className="flex flex-col items-center justify-center text-center my-8 p-4 gap-6">
        <h2 className="text-5xl font-bold">Stay connected with us</h2>
        <h5 className="text-2xl text-green-900">Subscribe to our newsletter to receive the latest updates, events, and opportunities to connect with our family directly in your box.</h5>
        <form
          action="https://philadelphiagnbaptistethiopia.us11.list-manage.com/subscribe/post?u=6658d12054f3d8bd98c6fcf9b&amp;id=922b8b5360&amp;f_id=00d4d5e3f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate w-full"
          target="_blank"
          noValidate
        >
          <div className="flex flex-col sm:flex-row items-center justify-center my-4 w-full">
            <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required className="required email border-1 border-green-900 p-2 w-2/3 sm:w-2/3 text-center " />
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="bg-green-900 text-white px-4 border-green-900 hover:bg-white mt-4 md:mt-0 hover:text-green-900 border-1 md:h-10.5">Subscribe</button>
          </div>
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_6658d12054f3d8bd98c6fcf9b_922b8b5360" tabIndex="-1" />
          </div>
        </form>
      </div>
    </section>
    <section id="contact" className="w-full h-auto md:py-25 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="text-6xl font-bold">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-40 gap-10 text-center my-8 py-8 md:px-20 px-2 w-full bg-green-100">
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg shadow-lg">
              <ion-icon name="call-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Call</h2>
              <h5>+251-911-954-960</h5>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg shadow-lg">
              <ion-icon name="mail-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Email</h2>
              <h5 className="text-sm">info@philadelphiagnbaptistethiopia.org</h5>
              <h5 className="text-sm">pastorkalebk@gmail.com</h5>
              
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg shadow-lg">
              <ion-icon name="location-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Location</h2>
              <h5>Yeka, Addis Ababa, Ethiopia</h5>
            </div>
        </div>
      </div>
    </section>

    <Footer />
       
    </div>
  );
}

// ReviewSection component
const reviews = [
  {
    name: "Beruktayit Asfere",
    text: "Being part of Philadelphia Generation Baptist Church has truly changed my life. The sense of community and support from fellow members has been invaluable in my spiritual journey. I feel at home here."
  },
  {
    name: "Teacher Dejene",
    text: "Philadelphia is a place where my family and I have grown closer to God and each other. The worship and teaching are inspiring, and the people are so welcoming!"
  },
  {
    name: "Daniel Alemayehu",
    text: "I love the outreach programs and the genuine care shown by everyone. This church is more than a building—it's a family that lifts you up!"
  }
];

function ReviewSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const nextReview = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setFade(true);
    }, 300);
  };
  return (
    <div className="bg-white md:w-4/5 md:flex md:flex-row md:justify-center flex flex-col gap-4 border border-green-900 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:w-1/2 w-full">
        <h2 className="text-4xl font-bold mb-4">Hear from our congregation</h2>
        <p className="md:mr-4 m-1">We value the voices of our members and strive to create a fulfilling experience for everyone. Check out what they have to say!</p>
      </div>
      <div className={`bg-green-900 text-white text-center w-full md:w-1/3 p-4 shadow-lg md:mx-4 mx-auto flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-3xl my-4 font-bold">{reviews[current].name}</h3>
        <p className="text-sm mb-4">"{reviews[current].text}"</p>
        <button
          className="mt-2 px-4 py-2 bg-green-900 text-white rounded-full flex items-center gap-2 hover:bg-white hover:cursor-pointer hover:text-green-900 transition duration-300"
          onClick={nextReview}
        >
        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default App;