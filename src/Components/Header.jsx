import React from 'react'
import foody from "../assets/images/foody.png"
import cartIcon from "../assets/icons/cart.svg"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <nav id='header' className='bg-white text-white'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
            <div className='logo-wrapper pl-4 flex items-center'>
                <Link to="/" className='toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl'>
                    <img src={foody} alt='logo' className='w-40 h-40 object=cover' />
                </Link>
            </div>
            <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
                <Link to="/" className='text-xl'>Home</Link>
                <Link to="#about" className='text-xl'>About</Link>
            </div>
            <div className='flex items-center justify-center space-x-4'>
                <Link to="/cart"><img src={cartIcon} alt='Cart Icon' /></Link>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header