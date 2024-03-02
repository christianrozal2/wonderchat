import React from 'react'
import { close, logo, menu } from '../assets/assets'
import { navLinks } from '../constants/constants'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    
    return (
        <div className='flex items-center justify-between py-6'>
            <div>
                <img src={logo} alt="logo" className='h-7 sm:h-8 md:h-9 lg:h-10' />
            </div>

            <div className='hidden lg:flex'>
                <ul className='text-textColor flex gap-10 text-sm sm:text-base'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.id} className='hover:text-white cursor-pointer'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            
        <div className='flex items-center gap-5'>
            <div className='hidden sm:flex gap-5'>
            <Button type='primary' label='Sign In' />
            <Button label='Sign Up' />
            </div>

            <div className='lg:hidden'>
                <img
                    src={Toggle ? close : menu}
                    alt="menu"
                    className='w-[25px] h-[25px] object-contain'
                    onClick={() => setToggle(!Toggle)}
                />
                <div className={`p-6 bg-slate-900 border-y-2 border-y-outline2 shadow-2 rounded-3xl absolute top-20 right-0 mr-10 mt-0 sm:mt-5 md:mt-10 min-w-48 justify-center items-center flex-col hover:text-white ${Toggle ? 'flex' : 'hidden'}`}>
                    <ul className='text-textColor flex flex-col gap-5 text-sm sm:text-base'>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.id} className='hover:text-white cursor-pointer'>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex sm:hidden flex-col gap-5 mt-5'>
                        <Button type='primary' label='Sign In' />
                        <Button label='Sign Up' />
                    </div>
                </div>
            </div>
        </div>


        </div>
    )
    }

export default Navbar