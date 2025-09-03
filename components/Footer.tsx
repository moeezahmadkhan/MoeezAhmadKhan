'use client'

import React from 'react'
import { HiCode } from 'react-icons/hi'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="text-white/60 mb-2">
              © 2025 Moeez Ahmad Khan. All rights reserved.
            </div>
            <div className="text-primary font-medium">
              MERN Stack Web Developer
            </div>
            <div className="text-white/40 text-sm mt-1">
              AWS Cloud ENgineer
            </div>
          </div>
        </div>

        
        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className="text-white/40 text-sm">
            <span>Portfolio: </span>
            <a href="https://moeezkhan.vercel.app" className="text-primary hover:text-primary/80 transition-colors duration-300">
              www.moeezkhan.vercel.app
            </a>
          </div>
          <div className="text-white/30 text-xs mt-2">
            Specializing in MERN Stack • React.js • Python GenAI Applications • AWS
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
