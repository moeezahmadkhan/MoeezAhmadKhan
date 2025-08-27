'use client'

import React, { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiCode, HiAcademicCap } from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'
// import nodemailer from 'nodemailer'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    // setFormData({
    //   name: '',
    //   email: '',
    //   subject: '',
    //   message: ''
    // })

    console.log('Form submitted:', formData)
    // You can add email service integration here
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'muhammadahmad15170301@gmail.com',
    //     pass: 'muhammadahmad15170301'
    //   }
    // })
    
    // const mailOptions = {
    //   from: formData.email,
    //   to: 'muhammadahmad15170301@gmail.com',
    //   subject: formData.subject,
    //   text: formData.message
    // }
    // transporter.sendMail(mailOptions, (error: any, info: any) => {
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     console.log('Email sent: ' + info.response)
    //   }
    // })

    alert('Form submitted successfully')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Let&apos;s work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <HiMail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <a 
                    href="mailto:kmoeez2018@gmail.com" 
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    kmoeez2018@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <HiPhone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a 
                    href="tel:+923436925716" 
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    +92 343 6925716
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <HiLocationMarker size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-primary">398 Faisal Garden, JT Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <HiAcademicCap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Education</h3>
                  <p className="text-primary">Bachelor&apos;s in Computer Science (BSCS) 2021-2025</p>
                  <p className="text-white/60 text-sm">FSc Engineering: 887/1100 • Matriculation: 948/1100</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="pt-6">
              <h3 className="text-white font-semibold mb-4">Achievements & Certifications</h3>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <GiTrophy className="text-primary" size={20} />
                  <span className="text-primary font-medium">Current Projects & Experience</span>
                </div>
                <p className="text-white/80 text-sm">
                  Working under Associate Professor Zubaira Naz on Python GenAI applications, 
                  RAG systems, and AI agents. General Manager at Tribal Folks managing operations and projects.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <HiCode size={24} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <span className="text-primary font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-primary text-black font-bold py-4 px-8 rounded-lg shadow-2xl hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
