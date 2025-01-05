'use client'

import Link from 'next/link'
import { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { FaBars, FaXmark } from 'react-icons/fa6'

function Navbar() {
   const [isTure, setIsTure] = useState(false)

   const handleClick = () => {
      setIsTure((current) => !current)
   }

   return (
      <>
         {/* Toggle button */}
         <button
            onClick={handleClick}
            aria-controls="main-navigation"
            aria-expanded={isTure}
            className="text-t z-50 sm:hidden">
            {isTure ? (
               <FaXmark className="text-slate-900" size={19} />
            ) : (
               <FaBars className="text-slate-900" size={19} />
            )}
            <span className="sr-only">Menu</span>
         </button>
         {/* Navbar */}
         <nav className="text-primary pt-1 font-semibold" aria-label="Main">
            <ul
               id="main-navigation"
               data-visible={isTure}
               className="max-sm:bg-quinary flex items-center gap-x-8 transition duration-300 ease-out max-sm:fixed max-sm:inset-y-0 max-sm:end-0 max-sm:start-1/4 max-sm:translate-x-full max-sm:flex-col max-sm:gap-y-5 max-sm:pt-16 max-sm:data-[visible=true]:translate-x-0 max-sm:data-[visible=true]:shadow-custom">
               {/* Nav items */}
               <li>
                  <Link href="/#contact" className={buttonVariants()}>
                     Let&apos;s Talk
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default Navbar
