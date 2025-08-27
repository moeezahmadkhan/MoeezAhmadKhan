'use client'

import React from 'react'
import Image from 'next/image'
import { HiArrowDown } from 'react-icons/hi'

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Creative label */}
        <div className="mb-8 animate-fade-in">
          <span className="text-primary text-xl sm:text-2xl font-light italic tracking-wider">
            Full Stack Dev and AI Enthusiast
          </span>
        </div>
        
        {/* Large PORTFOLIO text */}
        <div className="relative mb-28">
          <h1 className="text-6xl sm:text-4xl lg:text-8xl font-black text-white tracking-tight leading-none animate-fade-in">
            SOFTWARE ENGINEER
          </h1>
          
          {/* Profile image positioned over the text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-20 rounded-full border-b-8 border-primary">
            <div className="relative">
              <Image
                src="/hero-img.png"
                alt="Moeez Ahmad Khan Profile"
                width={200}
                height={200}
                className="rounded-full p-1"
              />
            </div>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="mt-52 animate-fade-in">
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            A highly motivated and detail-oriented{" "}
            <span className="font-semibold text-primary">
              MERN Stack Web Developer
            </span>{" "}
            with strong command of modern front-end and back-end technologies. 
            Eager to leverage problem-solving skills and creativity to build robust, intuitive, and responsive web applications.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="mt-5 animate-fade-in">
          <button
            onClick={() => {
              const element = document.querySelector('#projects')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-primary text-black font-bold px-4 py-2 rounded-lg shadow-2xl hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            View My Work
          </button>
        </div>
        
        {/* Bottom info */}
        
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  )
}

export default HeroSection
