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
              Working under Associate Professor Zubaira Naz • General Manager at Tribal Folks
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-6">
            <a 
              href="#" 
              rel="noreferrer" 
              target="_blank"
              className="group"
            >
              <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <HiCode size={24} />
              </div>
            </a>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="group"
            >
              <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <AiOutlineLinkedin size={24} />
              </div>
            </a>
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
            Specializing in MERN Stack • React.js • Python GenAI Applications
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
