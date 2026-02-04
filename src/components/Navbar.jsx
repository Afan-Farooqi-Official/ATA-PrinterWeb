import React, { useContext, useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import {assets} from '../assets/assets.js'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] sticky top-0 z-50 bg-blue-50'>
        <Link to='/'><img src={assets.logo} className='w-24' alt="ata-printer" /></Link>
 
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='group flex flex-col items-center gap-1'>
                <p className='transition-colors duration-300 group-hover:text-sky-500'>HOME</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </NavLink>
            <NavLink to='/services' className='group flex flex-col items-center gap-1'>
                <p className='transition-colors duration-300 group-hover:text-sky-500'>SERVICES</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </NavLink>
            <NavLink to='/about' className='group flex flex-col items-center gap-1'>
                <p className='transition-colors duration-300 group-hover:text-sky-500'>ABOUT</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </NavLink>
            <NavLink to='/contact' className='group flex flex-col items-center gap-1'>
                <p className='transition-colors duration-300 group-hover:text-sky-500'>CONTACT</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </NavLink>
        </ul>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu" />

        {/* Sidebar menu for small screens */}
        <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'w-0'} z-40`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="dropdown" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/services'>SERVICES</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar