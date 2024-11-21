import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="src/assets/logo.jpg" alt="Logo" className="h-10 mr-4" />
          <ul className="flex space-x-8">
            <li className='relative hover:text-[#35B8FF] font-bold'>
              <NavLink to="/" className="text-gray-800 hover:text-blue-500">Home</NavLink>
            </li>
            <li className='relative hover:text-[#35B8FF] font-bold'>
              <NavLink to="/about" className="text-gray-800 hover:text-blue-500">About</NavLink>
            </li>
            <li className='relative hover:text-[#35B8FF] font-bold'>
              <NavLink to="/SingIn" className="text-gray-800 hover:text-blue-500">Sign In</NavLink>
            </li>
            <li className='relative hover:text-[#35B8FF] font-bold'>
              <NavLink to="/SingUp" className="text-gray-800 hover:text-blue-500">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        <button  className="w-[120px] h-[35px] rounded-[8px] bg-transparent font-bold border-[2px] border-[#35B8FF] text-[16px] text-black transition duration-300 ease-in-out hover:bg-[#13AAF8]">
        Exit
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
