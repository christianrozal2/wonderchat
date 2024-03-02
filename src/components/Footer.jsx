import React from 'react'
import { footerLinks, footerLinks2 } from '../constants/constants'
import { mac, message, windows } from '../assets/assets'

const Footer = () => {
  return (
    <footer>
      <div className='px-6 sm:px-16'>
        <div className='container px-0 flex flex-col md:flex-row justify-between gap-10 mt-10 sm:mt-16 md:mt-24 lg:mt-36'>
          <div className='max-w-96'>
            <img src={message} alt="message" className='h-7 sm:h-8 md:h-9 lg:h-10'/>
            <h3 className='h-gradient font-bold text-xl sm:text-2xl md:text-3xl mt-5'>
            We growing up your business with personal AI manager.
            </h3>
            <h4 className='h-gradient font-bold text-sm sm:text-base md:text-xl mt-3 sm:mt-4'>Wonderchat, 2023.</h4>
          </div>

          <div className='grid grid-cols-2 ss:flex ss:justify-between gap-10'>
            {footerLinks.map((link) => (
              <div key={link.title} >
                <h4 className='h-gradient font-bold text-sm sm:text-base md:text-xl'>{link.title}</h4>
                <ul className='flex flex-col gap-3 mt-5'>
                  {link.links.map((item) => (
                    <li key={item.name} className='text-textColor text-sm sm:text-base lg:text-lg'>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className='h-gradient font-bold text-sm sm:text-base md:text-xl'>Get the App</h4>
              <img src={windows} alt="windows" className='mt-5 h-7 sm:h-8 md:h-9 lg:h-10'/>
              <img src={mac} alt="windows" className='mt-3 h-7 sm:h-8 md:h-9 lg:h-10'/>
            </div>
          </div>
        </div>

      </div>

      <div className='mt-10 bg-body py-6 flex flex-col ss:flex-row justify-between px-6 sm:px-16 gap-5'>
        <div>
          <p className='text-textColor text-center text-sm sm:text-base'>
          &copy;2023 Wonderchat. All Rights Reserved.
          </p>
        </div>
        <div className='flex flex-col ss:flex-row gap-5'>
           {footerLinks2.map((link) => (
            <p key={link.id} className='text-textColor text-center text-sm sm:text-base'>
              {link.title}
            </p>
           ))}   
        </div>
      </div>
    </footer>
  )
}

export default Footer