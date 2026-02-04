import React from 'react';
import { toast } from 'react-toastify';
import {assets} from '../assets/assets.js'

const Contact = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Inquiry submitted successfully!");
  }

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12 text-gray-700'>
      
      {/* Title Section matching the Navbar font-medium style */}
      <div className='text-2xl text-center pt-8'>
          <p className='text-gray-500 font-light tracking-[0.2em] uppercase'>
            Connect <span className='text-gray-800 font-medium'>With <span className="text-sky-500">Us</span></span>
          </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 mb-28'>
        
        {/* Left Side: Visual/Image - Matching the clean architectural look */}
        <img 
          className='w-full md:max-w-[480px] grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-sm' 
          src={assets.contact_us}
          alt="office-architecture" 
        />

        {/* Right Side: Structured Contact Info & Minimal Form */}
        <div className='flex flex-col justify-center items-start gap-8'>
          
          <div className='space-y-4'>
            <p className='font-semibold text-xl text-gray-600 tracking-wider uppercase underline underline-offset-8 decoration-sky-500'>
              Our Office
            </p>
            <p className='text-gray-500 leading-relaxed'>
              Office No-14, Ground Floor, <br /> Habib Chamber, Block-14, <br />
              Main University Road, <br />
              Karachi
            </p>
            <p className='text-gray-500'>
              Cell: 0300-2517452 <br /> Email: Ataprint22@gmail.com
            </p>
          </div>

          <div className='w-full space-y-6 pt-4'>
            <h3 className='font-medium text-gray-800 uppercase tracking-widest text-sm'>Send an Inquiry</h3>
            
            <form onSubmit={submitHandler} className='flex flex-col gap-4 w-full md:min-w-[400px]'>
              <input 
                type="text" 
                placeholder="Name" 
                className='border border-gray-300 px-4 py-2 outline-none focus:border-sky-500 transition-colors'
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                className='border border-gray-300 px-4 py-2 outline-none focus:border-sky-500 transition-colors' 
                required
              />
              <textarea 
                rows="4" 
                placeholder="Message" 
                className='border border-gray-300 px-4 py-2 outline-none focus:border-sky-500 transition-colors resize-none'
                required
              />
              {/* Button matching the sky blue hover logic */}
              <button className='border border-black px-8 py-4 text-sm font-medium cursor-pointer hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-500 uppercase tracking-widest'>
                Submit Proposal
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact