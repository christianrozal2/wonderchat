import React from 'react'
import { logo1, market, price, union, volume } from '../assets/assets'
import { partners } from '../constants/constants'
import Button from './Button'

const Trusted = () => {
  return (
    <section className='container px-0'>
        <div>
            <div>
                <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>Trusted by 100+ businesses</h2>
                <div className='grid sm:grid-cols-6 grid-cols-4 border border-outline1 mt-10 sm:mt-14 lg:mt-20'>
                    {partners.map((partner) => (
                        <img key={partner.id} src={partner.icon} alt={partner.id} className='border border-outline1 aspect-video' />
                    ))}
                </div>
            </div>
            <div className='container items-center text-center sm:px-10 md:px-32 lg:px-52 py-10 sm:py-16 md:py-24 lg:py-32'>
                <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>5 minute set-up process</h2>
                <div className='px-6 sm:px-12 md:px-16 lg:px-20'>
                    <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>Spend 5 minutes to get a ChatGPT powered chatbot that works 24/7 to help you engage and retain more users and boost conversions.</p>
                    <div className='flex flex-col sm:flex-row gap-5 justify-center mt-6 sm:mt-8 lg:mt-10'>
                    <Button label='Get Started for Free' />
                    <Button type='primary' label='Watch Video' />
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div>
                <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10 border-y-2 border-y-outline2 shadow-2 rounded-3xl py-10 sm:py-14 items-center'>
                        <div className='border-t-2 border-t-outline1 shadow-2 rounded-3xl px-4 sm:px-12 pt-4 sm:pt-12 background-1 order-2 sm:order-1'>
                            <img src={market} alt="market" />
                        </div>
                        <div className='order-1 sm:order-2'>
                            <div className='flex'>
                                <img src={union} alt="union" />
                                <p className='p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl'>How It Works</p>
                            </div>
                            <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl mt-4 lg:mt-10'>Share a link or PDF file</h2>
                            <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>By providing the link or PDF file to your knowledge base, you can build an AI chatbot that learns from the text on your website and answers all the questions about your product.</p>
                        </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'>
                    <div className='container border-y-2 border-y-outline2 shadow-2 rounded-3xl py-10 sm:py-14 flex flex-col justify-center background-1'>
                        <div className='flex'>
                            <img src={union} alt="union" />
                            <p className='p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl'>How It Works</p>
                        </div>
                        <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl mt-4 lg:mt-10'>Customize Your Chatbot</h2>
                        <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>Set the role of your chatbot and profile photo of your chatbot to reflect your brand identity. Tailor its response length to what you like best.</p>

                        <img src={volume} alt="volume" className='mt-10 sm:mt-14 lg:mt-20'/>
                    </div>
                    <div className='container border-y-2 border-y-outline2 shadow-2 rounded-3xl py-12 flex flex-col justify-center background-1'>
                        <div className='flex'>
                            <img src={union} alt="union" />
                            <p className='p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl'>How It Works</p>
                        </div>
                        <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl mt-4 lg:mt-10'>Ready in 5 Minutes</h2>
                        <p className='text-textColor text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>Wait for less than 5 minutes to have the Chatbot learn all the information from the webpages of your website. Once done, you can instantly converse with it.</p>

                        <img src={price} alt="volume" className='mt-10 sm:mt-14 lg:mt-20'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trusted