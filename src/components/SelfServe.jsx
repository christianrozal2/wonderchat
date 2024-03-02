import React from 'react'
import { bryce, chatbot } from '../assets/assets'

const SelfServe = () => {
  return (
    <section className='container flex flex-col sm:flex-row gap-10 sm:gap-5 md:gap-10 justify-between items-center px-6 md:px-16 lg:px-20 py-10 sm:py-16 md:py-24 lg:py-32 border-y-2 border-y-outline2 shadow-2 rounded-3xl'>
        <div>
           <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Self-Serve Customer Support</h2> 
           <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>"Ever since implementing Wonderchat on our site, I've seen up to a 70% reduction of customer support queries in my inbox.”</p>
           <div className='flex items-center border-t border-t-hr pt-5 mt-5'>
                <img src={bryce} alt="bryce" className='mr-5'/>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-white text-sm sm:text-xl md:text-2xl lg:text-3xl uppercase'>Bryce Conway</h3>
                    <p className='text-textColor text-xs sm:text-sm md:text-base'>Founder and CEO of 10xTravel</p>
                </div>
           </div>
        </div>

        <div className='px-10 sm:px-0'>
            <img src={chatbot} alt="chatbot" width={1000}/>
        </div>
    </section>
  )
}

export default SelfServe