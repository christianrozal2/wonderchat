import React from 'react'
import Button from './Button'

const Maximize = () => {
  return (
    <section className='container items-center text-center border-t-2 border-t-outline2 shadow-2 rounded-3xl sm:px-10 md:px-32 lg:px-52 py-10 sm:py-16 md:py-24 lg:py-32 background-1'>
        <div>
          <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl '>Maximize your support capacity without extra hiring</h2>
          <div className='px-6 sm:px-12 md:px-16 lg:px-20'>
            <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to help you engage and retain more users and boost conversions.</p>
            <div className='flex flex-col sm:flex-row gap-5 justify-center mt-6 sm:mt-8 lg:mt-10'>
              <Button label='Get Started for Free' />
              <Button type='primary' label='Watch Video' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Maximize