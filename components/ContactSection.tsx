'use client'

import React, { useState } from 'react'

const HiMail = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 0 0 .394 1.255 3 3 0 0 0 1.255.394H21a3 3 0 0 0 1.255-.394 3 3 0 0 0 .394-1.255V8.67l-8.577 6.432c-1.385 1.039-3.321 1.039-4.706 0L1.5 8.67Z" />
    <path d="M22.5 6.556V6.75a3 3 0 0 0-.394-1.255 3 3 0 0 0-1.255-.394H3a3 3 0 0 0-1.255.394A3 3 0 0 0 1.5 6.75v-.194a3 3 0 0 1 .394-1.255A3 3 0 0 1 3 5.101H21a3 3 0 0 1 1.255.394A3 3 0 0 1 22.5 6.556Z" />
  </svg>
);

const HiPhone = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.5 21a2 2 0 0 0 2-2.5h-2a2 2 0 0 0 2 2.5zM12 2a1 1 0 0 0-1 1v1h2V3a1 1 0 0 0-1-1zm-3 4h6a1 1 0 0 1 1 1v2h-8V7a1 1 0 0 1 1-1z" />
    <path d="M19 13.5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h6zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-10 1h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
  </svg>
);

const HiLocationMarker = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="m11.54 22.351.07.07.05.044.061.041.056.035.05.029.049.029.045.021.05.021.049.018.046.014.045.013.04.01.04.008.038.006.035.004.032.002.029.002.022.001.021 0 .017-.002a2.25 2.25 0 0 0-.002-.022v-.006l.003-.01.006-.024.01-.039.016-.062.024-.092.032-.122.04-.15.048-.18.056-.208.064-.236.072-.27.078-.301.087-.341.096-.381.102-.422.108-.465.115-.505c.1-.42.203-.846.311-1.275a13.902 13.902 0 0 1 .425-1.424C12.835 15.65 14.288 12 16.5 12c3.122 0 5.625-3.033 5.625-6.75S19.622 0 16.5 0c-2.827 0-4.708 2.023-5.32 3.869-1.27 3.737-5.353 9.878-5.353 9.878V22.35l.007.018Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M11.54 22.351.07.07.05.044.061.041.056.035.05.029.049.029.045.021.05.021.049.018.046.014.045.013.04.01.04.008.038.006.035.004.032.002.029.002.022.001.021 0 .017-.002a2.25 2.25 0 0 0-.002-.022v-.006l.003-.01.006-.024.01-.039.016-.062.024-.092.032-.122.04-.15.048-.18.056-.208.064-.236.072-.27.078-.301.087-.341.096-.381.102-.422.108-.465.115-.505c.1-.42.203-.846.311-1.275a13.902 13.902 0 0 1 .425-1.424C12.835 15.65 14.288 12 16.5 12c3.122 0 5.625-3.033 5.625-6.75S19.622 0 16.5 0c-2.827 0-4.708 2.023-5.32 3.869-1.27 3.737-5.353 9.878-5.353 9.878V22.35l.007.018Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 21a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5ZM17.25 10.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
  </svg>
);

const HiAcademicCap = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 8.67v8.58a3 3 0 0 0 .394 1.255 3 3 0 0 0 1.255.394H21a3 3 0 0 0 1.255-.394 3 3 0 0 0 .394-1.255V8.67l-8.577 6.432c-1.385 1.039-3.321 1.039-4.706 0L1.5 8.67Z" />
    <path d="M22.5 6.556V6.75a3 3 0 0 0-.394-1.255 3 3 0 0 0-1.255-.394H3a3 3 0 0 0-1.255.394A3 3 0 0 0 1.5 6.75v-.194a3 3 0 0 1 .394-1.255A3 3 0 0 1 3 5.101H21a3 3 0 0 1 1.255.394A3 3 0 0 1 22.5 6.556Z" />
  </svg>
);

const GiTrophy = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 13.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12.5 2C8.91 2 6 4.91 6 8.5v3.6c0 .5-.2.9-.6.9H5c-1.1 0-2 .9-2 2s.9 2 2 2h1.5a1.5 1.5 0 0 1 0 3h12a1.5 1.5 0 0 1 0-3H19c1.1 0 2-.9 2-2s-.9-2-2-2h-1.4c-.4 0-.6-.4-.6-.9V8.5C18 4.91 15.09 2 12.5 2zM12.5 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const FaLinkedin = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.17 20.89H3.7V9.12h3.47v11.77zM5.44 7.68c-1.15 0-2.09-.94-2.09-2.09 0-1.15.94-2.09 2.09-2.09 1.15 0 2.09.94 2.09 2.09 0 1.15-.94 2.09-2.09 2.09zM20.89 20.89h-3.47v-5.61c0-1.34-1.07-2.42-2.4-2.42-.5 0-1.02.16-1.42.48l-.05-.05c-.24.2-.38.46-.46.75-.08.29-.12.59-.12.9v5.96H9.17s.05-10.7 0-11.77h3.47v1.54c.46-.78 1.48-1.73 3.12-1.73 2.15 0 3.73 1.58 3.73 4.92v6.94z" />
  </svg>
);

const FaGithub = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.542-1.368-1.325-1.734-1.325-1.734-1.087-.745.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.836 2.809 1.305 3.49-.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.652 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.22 0 4.61-2.807 5.624-5.479 5.92-.42.365-.818 1.09-.818 2.203 0 1.597-.015 2.887-.015 3.28 0 .319.215.69.825.577C20.565 21.802 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const FaInstagram = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c2.71 0 3.05.01 4.12.06 1.07.05 1.77.21 2.42.46.67.26 1.27.63 1.84 1.21.58.57.95 1.17 1.21 1.84.25.65.41 1.35.46 2.42.05 1.07.06 1.41.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.21 1.77-.46 2.42-.26.67-.63 1.27-1.21 1.84-.57.58-1.17.95-1.84 1.21-.65.25-1.35.41-2.42.46-1.07.05-1.41.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.77-.21-2.42-.46-.67-.26-1.27-.63-1.84-1.21-.58-.57-.95-1.17-1.21-1.84-.25-.65-.41-1.35-.46-2.42-.05-1.07-.06-1.41-.06-4.12s.01-3.05.06-4.12c.05-1.07.21-1.77.46-2.42.26-.67.63-1.27 1.21-1.84.57-.58 1.17-.95 1.84-1.21.65-.25 1.35-.41 2.42-.46C8.95 2.01 9.29 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm4-12c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm-4 4c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z" />
  </svg>
);

const FaWhatsapp = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.52 3.44 1.52 4.9L2 22l5.24-1.38c1.42.78 3 1.2 4.8 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 20.91c-1.66 0-3.23-.45-4.57-1.23l-.32-.19-3.75.99.99-3.65-.21-.33c-.87-1.47-1.34-3.17-1.34-4.99 0-4.61 3.75-8.36 8.36-8.36 2.23 0 4.3.87 5.86 2.43 1.56 1.56 2.43 3.63 2.43 5.86-.01 4.61-3.76 8.35-8.37 8.35zm4.01-5.44c-.22-.11-.5-.18-.78-.32-.29-.14-1.7-.83-1.96-.92-.26-.09-.45-.14-.64.14-.19.29-.73.92-.89 1.11-.16.19-.32.21-.59.08-.26-.13-1.1-.41-2.09-1.29-.77-.66-1.29-1.47-1.44-1.72-.15-.25-.01-.39.14-.54.12-.12.29-.29.4-.44.11-.14.14-.25.22-.44s.04-.36-.02-.51c-.06-.14-.5-.14-.7-.14s-.5.01-.76.04c-.26.03-.68.12-1.03.49-.36.37-.96.9-.96 2.19s.98 2.54 1.12 2.72c.15.18 1.96 3 4.75 4.22 2.5.99 2.92.79 3.45.74.52-.05 1.4-.58 1.6-1.15.2-.56.2-.95.14-1.07-.06-.12-.22-.18-.46-.3z" />
  </svg>
);


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [result, setResult] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult("Sending...")

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // IMPORTANT: Replace this with your Web3forms Access Key from your dashboard
    data.append("access_key", "81cd9768-b258-493b-a0ae-f4fb939fcae5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const apiResult = await response.json();

      if (apiResult.success) {
        setResult("Form submitted successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
      } else {
        console.error("Error submitting form:", apiResult.message);
        setResult(`Error: ${apiResult.message}`);
      }
    } catch (error) {
      console.error("Failed to connect to the API:", error);
      setResult("Failed to submit. Please try again.");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-gray-900 min-h-screen">
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
                      href="tel:+923035772640" 
                      className="text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      +92 303 5772640
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-primary">39B Faisal Garden, JT Lahore, Pakistan</p>
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
                    <label htmlFor="email" className="block text-white font-white font-medium mb-2">
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

                {result && (
                  <div className="text-center text-primary font-semibold">
                    {result}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-4 px-8 rounded-lg shadow-2xl hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 text-lg"
                  disabled={result === "Sending..."}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href="https://www.linkedin.com/in/moeez-ahmad-khan-68a403364/" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.17 20.89H3.7V9.12h3.47v11.77zM5.44 7.68c-1.15 0-2.09-.94-2.09-2.09 0-1.15.94-2.09 2.09-2.09 1.15 0 2.09.94 2.09 2.09 0 1.15-.94 2.09-2.09 2.09zM20.89 20.89h-3.47v-5.61c0-1.34-1.07-2.42-2.4-2.42-.5 0-1.02.16-1.42.48l-.05-.05c-.24.2-.38.46-.46.75-.08.29-.12.59-.12.9v5.96H9.17s.05-10.7 0-11.77h3.47v1.54c.46-.78 1.48-1.73 3.12-1.73 2.15 0 3.73 1.58 3.73 4.92v6.94z" />
              </svg>
            </a>
            <a 
              href="https://github.com/moeezahmadkhan" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.542-1.368-1.325-1.734-1.325-1.734-1.087-.745.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.836 2.809 1.305 3.49-.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.652 1.652.241 2.873.118 3.176.77.838 1.233 1.911 1.233 3.22 0 4.61-2.807 5.624-5.479 5.92-.42.365-.818 1.09-.818 2.203 0 1.597-.015 2.887-.015 3.28 0 .319.215.69.825.577C20.565 21.802 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/moozisthebest" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2c2.71 0 3.05.01 4.12.06 1.07.05 1.77.21 2.42.46.67.26 1.27.63 1.84 1.21.58.57.95 1.17 1.21 1.84.25.65.41 1.35.46 2.42.05 1.07.06 1.41.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.21 1.77-.46 2.42-.26.67-.63 1.27-1.21 1.84-.57.58-1.17.95-1.84 1.21-.65.25-1.35.41-2.42.46-1.07.05-1.41.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.77-.21-2.42-.46-.67-.26-1.27-.63-1.84-1.21-.58-.57-.95-1.17-1.21-1.84-.25-.65-.41-1.35-.46-2.42-.05-1.07-.06-1.41-.06-4.12s.01-3.05.06-4.12c.05-1.07.21-1.77.46-2.42.26-.67.63-1.27 1.21-1.84.57-.58 1.17-.95 1.84-1.21.65-.25 1.35-.41 2.42-.46C8.95 2.01 9.29 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm4-12c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2-1.2.5-1.2 1.2.5 1.2 1.2 1.2zm-4 4c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3z" />
              </svg>
            </a>
            <a 
              href="https://wa.me/923035772640" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.52 3.44 1.52 4.9L2 22l5.24-1.38c1.42.78 3 1.2 4.8 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 20.91c-1.66 0-3.23-.45-4.57-1.23l-.32-.19-3.75.99.99-3.65-.21-.33c-.87-1.47-1.34-3.17-1.34-4.99 0-4.61 3.75-8.36 8.36-8.36 2.23 0 4.3.87 5.86 2.43 1.56 1.56 2.43 3.63 2.43 5.86-.01 4.61-3.76 8.35-8.37 8.35zm4.01-5.44c-.22-.11-.5-.18-.78-.32-.29-.14-1.7-.83-1.96-.92-.26-.09-.45-.14-.64.14-.19.29-.73.92-.89 1.11-.16.19-.32.21-.59.08-.26-.13-1.1-.41-2.09-1.29-.77-.66-1.29-1.47-1.44-1.72-.15-.25-.01-.39.14-.54.12-.12.29-.29.4-.44.11-.14.14-.25.22-.44s.04-.36-.02-.51c-.06-.14-.5-.14-.7-.14s-.5.01-.76.04c-.26.03-.68.12-1.03.49-.36.37-.96.9-.96 2.19s.98 2.54 1.12 2.72c.15.18 1.96 3 4.75 4.22 2.5.99 2.92.79 3.45.74.52-.05 1.4-.58 1.6-1.15.2-.56.2-.95.14-1.07-.06-.12-.22-.18-.46-.3z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            © 2025 Moeez Ahmad Khan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ContactSection
