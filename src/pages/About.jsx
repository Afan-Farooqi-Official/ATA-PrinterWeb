import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="text-gray-700">

      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-800">
        <img 
          src={assets.about_us_page}
          alt="architectural background"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">About <span className="text-sky-500">Us</span></h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
            ATA Printer Studio transforms architectural visions into reality with precision, creativity, and cutting-edge printing solutions.
          </p>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] grid md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800 uppercase tracking-widest text-sm underline underline-offset-8 decoration-sky-500">Why Choose Us</h3>
          <p className="text-gray-500 leading-relaxed">
            Expert team, modern tools, and a commitment to precision make us the top choice for architectural studios.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800 uppercase tracking-widest text-sm underline underline-offset-8 decoration-sky-500">Precision</h3>
          <p className="text-gray-500 leading-relaxed">
            Every blueprint, print, and model is crafted with meticulous attention to detail.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800 uppercase tracking-widest text-sm underline underline-offset-8 decoration-sky-500">Innovation</h3>
          <p className="text-gray-500 leading-relaxed">
            We use the latest technologies and creative solutions to bring your concepts to life.
          </p>
        </div>
      </section>

      {/* ===== Our Story Timeline ===== */}
      <section className="py-20 bg-gray-50 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] max-w-5xl mx-auto">
        <h2 className="text-center font-medium text-gray-800 uppercase tracking-widest text-sm underline underline-offset-8 decoration-sky-500">Our Story</h2>
        <div className="mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-sky-200 h-full hidden md:block"></div>

          {/* Timeline items */}
          {[
            { year: "2015", title: "Founded", desc: "Started as a small architectural printing studio in Washington." },
            { year: "2017", title: "Expansion", desc: "Upgraded printing technology and served more architects locally." },
            { year: "2020", title: "Global Reach", desc: "Started accepting international clients and projects." },
            { year: "2023", title: "Innovation", desc: "Adopted 3D printing and high-end visualization solutions." },
          ].map((item, idx) => (
            <div key={idx} className={`md:flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}>
              <div className="md:w-1/2 md:px-8 text-center md:text-left">
                <p className="text-sky-500 font-bold text-xl">{item.year}</p>
                <h3 className="font-medium text-gray-800 mt-2">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full md:top-4"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <h2 className="text-center font-medium text-gray-800 uppercase tracking-widest text-sm underline underline-offset-8 decoration-sky-500">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Syed Alam Shah", role: "Lead Architect", img: assets.demo1 },
            { name: "Zeeshan Qureshi", role: "Architecture Designer", img: assets.demo2 },
            { name: "Zeeshan Sheikh", role: "Project Manager", img: assets.demo3 },
          ].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-sm transition-transform duration-300 group-hover:scale-105" />
              <p className="font-medium text-gray-800">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
