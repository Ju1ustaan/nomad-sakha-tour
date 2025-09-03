'use client'
import React from 'react'
import { useState } from 'react'
import { InstagrammIcon, TelegramIcon, TikTokIcon, WhatsappIcon, YouTubeIcon } from '../icons/Icons'
const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <div className='w-full fixed top-2 z-100'>
            <div className={`bg-white container_ flex justify-between items-center py-2 px-4 rounded-full relative ${burgerOpen ? 'opacity-100' : 'opacity-80'} transition-all duration-300`}>
                <p className='text-black'>@nomad_sakha</p>

                <nav className=' hidden gap-4 md:flex'>
                    <a href="#" className='text-black group'>О нас<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                    <a href="#" className='text-black group'>Контакты<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                    <a href="#" className='text-black group'>Туры<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                    <a href="#" className='text-black group'>Галерея<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                </nav>

                <button
                    onClick={() => setBurgerOpen(!burgerOpen)}
                    className=" md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <line
                            x1="2"
                            y1="6"
                            x2="25"
                            y2="6"
                            className={`stroke-black stroke-[2] transition-all duration-300 origin-center ${burgerOpen ? "translate-y-1 -translate-x-2 rotate-45" : ""
                                }`}
                        />
                        <line
                            x1="4"
                            y1="12"
                            x2="22"
                            y2="12"
                            className={`stroke-black stroke-[2] transition-all duration-300 ${burgerOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <line
                            x1="2"
                            y1="18"
                            x2="25"
                            y2="18"
                            className={`stroke-black stroke-[2] transition-all duration-300 origin-center ${burgerOpen ? "-translate-y-0.5 -translate-x-2 -rotate-45" : ""
                                }`}
                        />
                    </svg>
                </button>


                <div className={`flex flex-col justify-between md:hidden text-end gap-4 absolute top-full left-0 bg-white w-full overflow-hidden transition-all duration-300 rounded-4xl  px-4 ${burgerOpen ? 'h-screen pt-10 pb-20' : 'h-[0px] '} `}>
                    <nav className='flex flex-col gap-4 border-b-1 border-black pb-4'>
                        <a href="#" className='text-black group'>О нас<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                        <a href="#" className='text-black group'>Контакты<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                        <a href="#" className='text-black group'>Туры<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                        <a href="#" className='text-black group'>Галерея<div className='h-[1px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full'></div></a>
                    </nav>

                    <div className='w-1/2 mx-auto'>
                        <img src="/images/qr-dapsy.png" alt="qr code" className='w-full h-full object-cover'/>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <TelegramIcon width={48} height={48}/>
                        <WhatsappIcon width={48} height={48}/>
                        <InstagrammIcon width={48} height={48}/>
                        <TikTokIcon width={48} height={48}/>
                        <YouTubeIcon width={48} height={48}/>
                    </div>
                    <button className=" px-8 py-4 bg-[#1E3A85] rounded z-10 text-[white] w-full text-xl ">
                        Забронировать тур
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header