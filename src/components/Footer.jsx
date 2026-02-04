import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-blue-50 shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-16">

          {/* Brand */}
          <div className="space-y-4">
            <img src={assets.logo} alt="ata-printer" className="w-28" />
            <p className="text-gray-500 text-sm leading-relaxed">
              We provide high-quality architectural printing and design
              solutions with precision, clarity, and professionalism.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-gray-800 font-medium uppercase tracking-widest text-sm">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link to="/" className="hover:text-sky-500 transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-sky-500 transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-sky-500 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-sky-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gray-800 font-medium uppercase tracking-widest text-sm">
              Office
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Office No-14, Ground Floor, <br /> Habib Chamber, Block-14, <br />
              Main University Road, <br />
              Karachi
            </p>
            <p className="text-gray-500 text-sm">
              Cell: 0300-2517452 <br />
              Email: Ataprint22@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 tracking-wider">
            © {new Date().getFullYear()} ATA Printer. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Crafted with precision & clarity
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
