// 'use client'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
         <Image priority={true} src="/images/site-logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} />
         <div className="p-6 rounded-lg  w-1/3 text-center">
            <h1 className="text-3xl font-bold mb-4">Not Found</h1>
            <p className="text-destructive">Could not find requested resource</p>
            <Button variant="outline" className="mt-4 ml-2">
               Back to home
            </Button>
         </div>
      </div>
   )
}

export default NotFound
