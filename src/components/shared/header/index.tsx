'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ShoppingCart, UserIcon } from 'lucide-react'

// import Navbar from './Navbar'
import siteLogo from '@/../public/images/site-logo.svg'
import { cn } from '@/lib/utils'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import ModeToggle from './ModeToggle'
import Navbar from './Navbar'

export default function Header({}) {
   const [hide, sethide] = useState(false)
   const [lastScrollY, setLastScrollY] = useState(0)
   const [isZeroScroll, setIsZeroScroll] = useState(true)

   useEffect(() => {
      const controlNavbar = () => {
         // If scroll down hide the navbar
         if (window.scrollY > lastScrollY && window.scrollY > 500) {
            sethide(true)
            // If scroll up show the navbar
         } else {
            sethide(false)
         }

         if (window.scrollY == 0) {
            setIsZeroScroll(true)
         } else {
            setIsZeroScroll(false)
         }
         // Remember current page location to use in the next scroll move
         setLastScrollY(window.scrollY)
      }

      window.addEventListener('scroll', controlNavbar)

      return () => {
         // Cleanup function
         window.removeEventListener('scroll', controlNavbar)
      }
   }, [lastScrollY, isZeroScroll])

   return (
      // Header

      <header
         className={cn(
            'bg-quinary sticky top-0 z-50 flex h-[3.75rem] items-center justify-center overflow-hidden transition-transform',
            {
               '-translate-y-full': hide,
               'shadow-none': isZeroScroll,
               'shadow-[0_0_4px_hsl(0_0_0/0.3)]': !isZeroScroll,
            },
         )}>
         <div className="wrapper flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-start">
               <Image priority={true} src={siteLogo} width={48} height={48} alt={`${APP_NAME} logo`} />
               <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
            </Link>
            <div className="sm-up:gap-x-8 flex items-center gap-x-2">
               {/* Navbar */}
               <Navbar />
               {/* Mode Toggle */}
               <ModeToggle />
               {/* <Button asChild variant="ghost">
                  <Link href="/cart">
                     <ShoppingCart />
                     Cart
                  </Link>
               </Button>
               <Button asChild>
                  <Link href="/sign-in">
                     <UserIcon />
                     Sign In
                  </Link>
               </Button> */}
            </div>
         </div>
      </header>
   )
}
