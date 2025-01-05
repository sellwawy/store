import Image from 'next/image'
import loader from '../../public/images/loader.gif'

import React from 'react'

function loading() {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
         }}>
         <Image src={loader} width={150} height={150} alt="Loading..." />
      </div>
   )
}

export default loading
