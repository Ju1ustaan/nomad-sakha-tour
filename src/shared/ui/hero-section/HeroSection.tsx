'use client';

import React from 'react';

export default function HeroSection() {
    return (
        <section className="min-h-screen mx-auto container_">
            <div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/photo_video-preview.jpg"
                    className="w-full h-[50vh] object-cover"
                >
                    <source src="/videos/nomad.webm" type="video/webm" />
                    <source src="/videos/nomad.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>


            <div
                className="flex flex-col px-2 md:px-20  items-start justify-center h-[50vh] w-full bg-no-repeat bg-cover bg-center relative bg-fixed"
                style={{
                    backgroundImage: 'url(/images/forest.jpeg)',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50" />
                <p className="text-5xl lg:text-8xl lg:w-9/12 mb-5 font-bold uppercase z-10">
                    ИССЛЕДУЙТЕ АЛМАТЫ СО МНОЙ
                </p>
                <button className="px-8 py-4 bg-[#1E3A85] rounded z-10 text-white text-xl hover:opacity-70 transition-opacity duration-300 cursor-pointer">
                    Забронировать тур
                </button>
            </div>

        </section>
    );
}
