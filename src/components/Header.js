import React from 'react'
import logo from '../assets/websitelogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-gray-600 body-font font-Gobold_Regular">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-12 h-auto' src={logo} alt='Website Logo'/></a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className='mr-5 hover:text-gray-900 hover:underline'>HOME</Link>
        <Link to="/Journey" className='mr-5 hover:text-gray-900 hover:underline'>THE JOURNEY</Link>
        <Link to="/Team" className='mr-5 hover:text-gray-900 hover:underline'>TEAM</Link>
        <Link to="/Store" className='mr-5 hover:text-gray-900 hover:underline'>STORE</Link>
        <Link to="/Contact" className='mr-5 hover:text-gray-900 hover:underline'>CONTACT</Link>
      </nav>
      <span className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><img className='w-8' src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry-1.png" alt='User Icon'/>GAGAN
       </span>
    </div>
  </header>
  )
}

export default Header