'use client'

import React, { useState, useEffect } from 'react'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-primary tracking-wider hover:text-primary/80 transition-colors"
            >
              MOEEZ AHMAD KHAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                {isOpen ? (
                  <HiX className="h-6 w-6 text-white" />
                ) : (
                  <HiMenu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
