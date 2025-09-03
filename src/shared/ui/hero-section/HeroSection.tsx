
import React from 'react';

export default function HeroSection() {
    return (
        <section className="min-h-screen mx-auto container_ ">
            <div className='relative'>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/photo_video-preview.jpg"
                    className="w-full h-[50vh] object-cover"
                >
                    <source src="/videos/hero-section-2160p.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#090979] to-[#00000000] from-0%" />
            </div>


            <div
                className="flex flex-col px-2 md:px-20  items-start justify-center h-[50vh] w-full bg-no-repeat bg-cover bg-center relative bg-fixed"
                style={{
                    backgroundImage: 'url(/images/forest-v3.jpeg)',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b z-9 from-[#090979] to-[#00000000] from-0%"/>
                {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50" /> */}
                <div className='z-10'>
                    <p className="text-5xl lg:text-8xl lg:w-9/12 font-bold uppercase z-10 text-shadow-2xs text-shadow-black">
                        ИССЛЕДУЙТЕ АЛМАТЫ СО МНОЙ
                    </p>
                    <p className='text-xl mb-5 text-shadow-2sm'>Уникальные авторские туры по горам и ущельям Алматы</p>
                </div>
                <button className="hidden md:block animate-bounce px-8 py-4 bg-[white] rounded z-10 text-[#1E3A85] hover:animate-none text-xl hover:bg-[#1E3A85] hover:text-white transition-all active:scale-100 duration-300 cursor-pointer">
                    Забронировать тур
                </button>
                <button className='p-1 z-10 absolute bottom-0 left-1/2 -translate-x-1/2 duration-300  transition-all cursor-pointer hover:-translate-y-1/3 group hover:bg-[#1E3A85] background-opacity-30 rounded-full '>
                    <svg width="48" height="48" className='animate-bounce group-hover:animate-none' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='animate-pulse group-hover:animate-none group-hover:fill-white fill-white' d="M34.5858 9.58579C35.3668 8.80474 36.6332 8.80474 37.4142 9.58579C38.1953 10.3668 38.1953 11.6332 37.4142 12.4142L25.4142 24.4142C24.6571 25.1714 23.4379 25.1979 22.6486 24.4743L10.6486 13.4743C9.83431 12.7279 9.77931 11.4628 10.5257 10.6486C11.2721 9.83431 12.5372 9.77931 13.3514 10.5257L23.9398 20.2317L34.5858 9.58579Z" />
                        <path className='animate-pulse group-hover:animate-none group-hover:fill-white fill-white' d="M34.5858 23.5858C35.3668 22.8047 36.6332 22.8047 37.4142 23.5858C38.1953 24.3668 38.1953 25.6332 37.4142 26.4142L25.4142 38.4142C24.6571 39.1714 23.4379 39.1979 22.6486 38.4743L10.6486 27.4743C9.83431 26.7279 9.77931 25.4628 10.5257 24.6485C11.2721 23.8343 12.5372 23.7793 13.3514 24.5257L23.9398 34.2317L34.5858 23.5858Z" />
                    </svg>
                </button>
            </div>

        </section>
    );
}
