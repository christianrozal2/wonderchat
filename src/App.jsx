import React from 'react'
import { Navbar, Hero, SelfServe, Maximize, FAQ, Footer, Trusted } from './components/components'

const App = () => {
  return (
    <div>
      <div className='w-full h-[640px] sm:h-[768px] md:h-[1024px] lg:h-[1280px] background-2 absolute top-0 -z-10'>
      </div>

      <div className='px-6 sm:px-16'>
        <Navbar />
      </div>

      <div className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16'>
        <Hero />
      </div>

      <div className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16'>
        <SelfServe />
      </div>

      <div className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16'>
        <Trusted />
      </div>

      <div className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16'>
        <FAQ />
      </div>

      <div className='mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16'>
        <Maximize />
      </div>

      <div className='background-3'>
        <Footer />
      </div>

    </div>
  )
}

export default App