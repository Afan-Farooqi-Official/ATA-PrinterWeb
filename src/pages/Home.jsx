import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className="text-gray-700">

      {/* ===== Hero Section ===== */}
      <section className="relative h-screen w-full">
        {/* Hero Image */}
        <img 
          src={assets.hero_section}
          alt="Architectural Studio Hero" 
          className="w-full h-full object-cover brightness-60"
        />

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-lg">
            ATA Printer Studio
          </h1>
          <p className="mt-4 text-gray-200 text-lg sm:text-xl max-w-2xl drop-shadow-md">
            Modern & classic architectural services, 2D & 3D designs, and precision printing solutions.
          </p>
          <Link 
            to="/contact"
            className="mt-8 inline-block px-8 py-4 text-sm font-medium uppercase tracking-widest border border-white text-white bg-transparent hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-500"
          >
            Get Started
          </Link>
        </div>
      </section>


      {/* ===== Services Preview ===== */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16">
        <h2 className="text-3xl sm:text-4xl font-medium text-gray-800 text-center mb-10">
          Our <span className="text-sky-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example preview cards */}
          {[
            { name: "AutoCAD", img: assets.autocad, link: "/services" },
            { name: "3D Views", img: assets.threed_view, link: "/services" },
            { name: "Interior Design", img: assets.interor_design, link: "/services" },
          ].map((service, idx) => (
            <Link key={idx} to={service.link} className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
              <img src={service.img} alt={service.name} className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-semibold uppercase drop-shadow-lg group-hover:text-sky-500 transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/services"
            className="inline-block border border-black px-8 py-4 text-sm font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-500 uppercase tracking-widest"
          >
            See All Services
          </Link>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="bg-gray-50 py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src={assets.about_us} alt="Studio" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-800">About <span className="text-sky-500">Us</span></h2>
            <p className="text-gray-600 leading-relaxed">
              ATA Printer Studio combines modern technology with classic architectural expertise to deliver precise, visually stunning 2D and 3D designs. Our team ensures your vision is realized with attention to detail and professional quality.
            </p>
            <Link 
              to="/about"
              className="inline-block border border-black px-8 py-4 text-sm font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-500 uppercase tracking-widest"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Featured Projects / Gallery ===== */}
      <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16">
        <h2 className="text-3xl sm:text-4xl font-medium text-gray-800 text-center mb-10">
          Featured <span className="text-sky-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            assets.project1,
            assets.project2,
            assets.project3,
          ].map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300">
              <img src={img} alt={`Project ${idx + 1}`} className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="bg-gray-50 py-16 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-gray-800 mb-6">Ready to start your project?</h2>
        <Link 
          to="/contact"
          className="inline-block border border-black px-8 py-4 text-sm font-medium hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-500 uppercase tracking-widest"
        >
          Contact Us
        </Link>
      </section>

    </div>
  )
}

export default Home
