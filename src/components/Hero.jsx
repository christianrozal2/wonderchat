import React from 'react'
import { dashboard, union } from '../assets/assets'
import Button from './Button'

const Hero = () => {
  return (
    <section className='container px-0 text-center '>
        <div className='container'>
          <div className='flex justify-center'>
            <img src={union} alt="union" />
            <p className='p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl'>Welcome to Wonderchat</p>
          </div>
          <h1 className='h-gradient font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 sm:mt-8 lg:mt-10'>Instantly build an AI chatbot with your knowledge base</h1>
          <div className='px-6 sm:px-12 md:px-16 lg:px-20'>
            <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>Share your site link or upload any PDF file to create a ChatGPT powered custom chatbot in 5 minutes</p>
            <div className='flex flex-col sm:flex-row gap-5 justify-center mt-6 sm:mt-8 lg:mt-10'>
              <Button label='Get Started for Free' />
              <Button type='primary' label='Watch Video' />
            </div>
          </div>
        </div>

        <div className='mt-10 lg:mt-36'>
          <img src={dashboard} alt="dashboard" className='border-b-2 border-b-outline2 shadow-2 rounded-3xl'/>
        </div>
    </section>
  )
}

export default Hero