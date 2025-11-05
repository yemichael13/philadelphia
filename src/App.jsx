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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bible_4})` }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="display-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Philadelphia Generation Baptist Church Ethiopia
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            "A Church that is Rooted and Grounded in the Word of God"
          </p>
          <p className="text-lg md:text-xl mb-12 font-medium">
            Join us in faith and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" onClick={handleSmoothScroll}>
              <button className="bg-green-900 text-white px-8 py-4 rounded-full cta-btn font-semibold text-lg hover:bg-white hover:text-green-900 border-2 border-green-900 transition-all duration-300">
                Get in Touch
              </button>
            </a>
            <a href="#newsletter" onClick={handleSmoothScroll}>
              <button className="bg-white text-green-900 px-8 py-4 rounded-full cta-btn font-semibold text-lg hover:bg-green-900 hover:text-white border-2 border-white/30 transition-all duration-300">
                Subscribe to Newsletter
              </button>
            </a>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Cross})` }}
      >
        <div className="hero-overlay" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl">
            <h2 className="display-serif text-4xl md:text-6xl font-bold text-green-900 mb-8">
              Learn more about our church
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                At Philadelphia Baptist Church, we embrace the transformative power of faith to uplift our community and foster spiritual growth. With a heartfelt dedication to our mission and a welcoming spirit, our congregation invites you to explore our rich history, diverse ministries, and upcoming events.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are seeking a place to worship, engage in community service, or deepen your spiritual journey, we are here to support you. Discover the warmth of fellowship and the strength of faith at Philadelphia Baptist Church.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                className="w-full min-h-[500px] bg-white opacity-100 relative flex items-center justify-center"
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
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-serif text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the ways we serve our community and strengthen our faith together</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="elevated-card bg-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={Bible_2} alt="Worship Services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Worship Services</h3>
                <p className="text-gray-600 leading-relaxed">Our worship services are designed to inspire and uplift. Join us for heartfelt music, engaging sermons, and a community that celebrates faith together.</p>
              </div>
            </div>
            <div className="elevated-card bg-green-900 text-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={Bible_5} alt="Community Outreach" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Community Outreach</h3>
                <p className="text-green-100 leading-relaxed">We believe in giving back to our community. Our outreach programs aim to serve those in need, fostering connections and promoting hope.</p>
              </div>
            </div>
            <div className="elevated-card bg-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={Bible_3} alt="Small Groups" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">Small Groups</h3>
                <p className="text-gray-600 leading-relaxed">Join our small groups for fellowship and support. These gatherings offer a space for prayer, discussion, and building lasting relationships in faith.</p>
              </div>
            </div>
          </div>
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

    

    <section className="w-full py-20 bg-gradient-to-r from-green-900 to-green-800" id="newsletter">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="display-serif text-4xl md:text-5xl font-bold text-white mb-6">Stay connected with us</h2>
        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">Subscribe to our newsletter to receive the latest updates, events, and opportunities to connect with our family directly in your inbox.</p>
        <form
          action="https://philadelphiagnbaptistethiopia.us11.list-manage.com/subscribe/post?u=6658d12054f3d8bd98c6fcf9b&amp;id=922b8b5360&amp;f_id=00d4d5e3f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate w-full max-w-2xl mx-auto"
          target="_blank"
          noValidate
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input 
              type="email" 
              name="EMAIL" 
              id="mce-EMAIL" 
              placeholder="Enter your email address" 
              required 
              className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300" 
            />
            <button 
              type="submit" 
              name="subscribe" 
              id="mc-embedded-subscribe" 
              className="bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-100 transition-all duration-300 cta-btn whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_6658d12054f3d8bd98c6fcf9b_922b8b5360" tabIndex="-1" />
          </div>
        </form>
      </div>
    </section>
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="display-serif text-4xl md:text-6xl font-bold text-green-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get in touch with us. We'd love to hear from you and answer any questions you may have.</p>
        </div>
        <div className="p-4 m-4">
  <form
    action="https://formsubmit.co/info@philadelphiagnbaptistethiopia.org"
    method="POST"
    className="flex flex-col px-5 md:px-20 mb-12 gap-6 max-w-3xl mx-auto justify-center"
  >
    <input
      type="hidden"
      name="_subject"
      value="New Message from Website Contact Form"
    />
    <input
      type="hidden"
      name="_captcha"
      value="false"
    />
    <input
      type="hidden"
      name="_template"
      value="table"
    />

    <input
      type="text"
      name="name"
      placeholder="Name*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <input
      type="email"
      name="email"
      placeholder="Email*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <textarea
      name="message"
      placeholder="Message*"
      required
      className="border-1 border-gray-500 px-4 py-2 rounded-2xl"
    ></textarea>

    <button
      type="submit"
      className="bg-green-900 text-white w-1/4 px-4 py-2 mx-auto rounded-xl cta-btn font-semibold hover:bg-white hover:text-green-900 border-1 border-green-900 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-900 transition-colors duration-300">
              <ion-icon name="call-outline" size="large" className="text-green-900 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">Call Us</h2>
            <p className="text-gray-600 text-lg">+251-911-954-960</p>
          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-900 transition-colors duration-300">
              <ion-icon name="mail-outline" size="large" className="text-green-900 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">Email Us</h2>
            <div className="flex flex-col space-y-2">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@philadelphiagnbaptistethiopia.org"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 text-sm hover:text-green-700 transition-colors"
  >
    info@philadelphiagnbaptistethiopia.org
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=pastorkalebk@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 text-sm hover:text-green-700 transition-colors"
  >
    pastorkalebk@gmail.com
  </a>
</div>

          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-900 transition-colors duration-300">
              <ion-icon name="location-outline" size="large" className="text-green-900 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-4">Visit Us</h2>
            <p className="text-gray-600">Yeka, Addis Ababa, Ethiopia</p>
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