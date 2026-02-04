import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'

// Services with active links
const servicesList = [
  { name: "AutoCAD", img: assets.autocad, link: "/services" },
  { name: "Architectural Drawings", img: assets.architectural_design, link: "/services" },
  { name: "Submission Drawings", img: assets.submission_drwaing, link: "/services" },
  { name: "3D Perspective Views", img: assets.threed_view, link: "/services" },
  { name: "3D Presentations", img: assets.threed_presentation, link: "/services" },
  { name: "2D Presentations", img: assets.twod_presentation, link: "/services" },
  { name: "Interior Design", img: assets.interor_design, link: "/services" },
  { name: "Structural Drawings", img: assets.structural_drawings, link: "/services" },
  { name: "Electrical Drawings", img: assets.electrical_drawings, link: "/services" },
  { name: "Town Planning", img: assets.town_planing, link: "/services" },
  { name: "Topographical Survey", img: assets.topographical_survey, link: "/services" },
  { name: "Plot Demarcation", img: "https://i.pinimg.com/1200x/1c/22/a6/1c22a6bb6cd37becdd4acaa3f44433b7.jpg", link: "/services" }
]

const Services = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10 text-gray-700">

      {/* Hero */}
      <section className="text-center pt-12">
        <h1 className="text-3xl sm:text-4xl font-medium text-gray-800 tracking-wide">
          Our <span className="text-sky-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
          ATA Printer Studio offers a full range of architectural services with modern and classic precision.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesList.map((service, idx) => (
          <Link 
            to={service.link} 
            key={idx} 
            className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Background Image */}
            <img 
              src={service.img} 
              alt={service.name} 
              className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            {/* Text */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-2xl font-semibold uppercase drop-shadow-lg group-hover:text-sky-500 transition-colors duration-300">
                {service.name}
              </h3>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <p className="text-gray-600 mb-6">
          Interested in any of our services? Let’s bring your project to life.
        </p>
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

export default Services
