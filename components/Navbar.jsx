import Link from 'next/link'
import React from 'react'
import Signup from '../pages/signup'
import Login from '../pages/login'
const Navbar = () => {
   return (

      <header className="text-gray-400 bg-gray-900 body-font ">
         <div class="container flex flex-wrap p-5 flex-col md:flex-row">
            <nav class="flex lg:w-2/5 flex-wrap items-start justify-left text-base  ">
            <Link href={'/'}>
            <a class="mr-5 hover:text-white">Home</a>
            </Link>
            </nav>
            <div class="lg:w-3/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Link href={'/signup'}>
            <button class="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 mr-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign Up
               </button>

            </Link>

            
            <Link href={'/login'}>
            <button class="inline-flex items-center bg-gray-800 text-white border-0 py-1 px-3 mr-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
               </button>

            </Link>

            </div>
         </div>
      </header>

   )
}

export default Navbar