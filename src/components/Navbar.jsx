import React from 'react'
import { NavLink } from 'react-router-dom'
import logoPath from '../assets/images/Logo.png.jpeg'

function Navbar() {
  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <nav className='mx-auto mt-4 px-6 md:px-12 py-3.5 max-w-7xl bg-[#0a0a0a]/90 backdrop-blur-md rounded-full border border-gray-800 shadow-xl shadow-black/30 flex items-center justify-between'>

        <NavLink to='/' className='flex items-center gap-3 active:scale-95 transition-transform'>
        <img src={logoPath} alt="buyNova Logo" className='h-10 w-auto' />
        </NavLink>

        <div>
          <NavLink to="/" end className={({isActive}) => `px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-all ${isActive ? 'bg-blue-500/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            Home
          </NavLink>

          <NavLink to="/products" end className={({isActive}) => `px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-all ${isActive ? 'bg-blue-500/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            Products
          </NavLink>

          <NavLink to="/about" end className={({isActive}) => `px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-all ${isActive ? 'bg-blue-500/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            About
          </NavLink>
        </div>

        <NavLink to="/signup" className='bg-transparent border border-gray-700 hover:border-blue-500 text-blue-400 font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:text-white active:scale-95 shadow-inner'>
            Create Account
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar