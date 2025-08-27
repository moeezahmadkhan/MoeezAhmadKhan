'use client'

import React from 'react'
import Image from 'next/image'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    name: "Python GenAI Applications & RAG Systems",
    description:
      "Comprehensive assignments and projects under Associate Professor Zubaira Naz (2024-Present). Developed Python applications for GenAI, including APIs, prompt engineering, command-line chatbots with conversation memory, and Retrieval-Augmented Generation (RAG) systems using LangChain.",
    image: "/fyp.png",
    github: "#",
    link: "#",
    tech: ["Python", "LangChain", "ChromaDB", "FAISS", "APIs", "Prompt Engineering", "RAG Systems"]
  },
  {
    name: "Query Sphere: Flutter Community App",
    description: "Developed a community and chat-based mobile application using Flutter for the front-end. Implemented the back-end using Firebase and Supabase for real-time chat functionality and data management.",
    image: "/foundenuer.png", 
    github: "#",
    link: "#",
    tech: ["Flutter", "Firebase", "Supabase", "Real-time Chat", "Mobile Development"]
  },
  {
    name: "Airbnb Replica: Full-Stack Project",
    description: "Developed a full-stack replica of the Airbnb platform, focusing on property listings, search functionality, and responsive layouts. Utilized React.js for component-based architecture and MongoDB with Express.js for the back-end.",
    image: "/Meter.png",
    github: "#",
    link: "#",
    tech: ["React.js", "MongoDB", "Express.js", "Tailwind CSS", "Full-Stack Development"]
  },
  {
    name: "Tribal Folks Management",
    description: "Served as General Manager at Tribal Folks, managing operations and projects with a focus on timely delivery and quality control. Oversaw project lifecycles and ensured operational excellence.",
    image: "/Eagles.png",
    github: "#",
    link: "#",
    tech: ["Project Management", "Operations", "Quality Control", "Team Leadership"]
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => {
            return (
              <div key={idx} className="group bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">View Project</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 flex items-center gap-2"
                    >
                      <HiCode size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 border border-primary/30 text-primary p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 flex items-center gap-2"
                    >
                      <HiExternalLink size={20} />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-20">
          <p className="text-white/60 text-lg mb-6">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-primary text-black font-bold px-8 py-4 rounded-lg shadow-2xl hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
