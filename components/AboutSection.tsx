'use client'

import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: "MongoDB" },
  { skill: "Express.js" },
  { skill: "React.js" },
  { skill: "Node.js" },
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "Python" },
  { skill: "C++" },
  { skill: "C#" },
  { skill: "Flutter" },
  { skill: "Firebase" },
  { skill: "Supabase" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get to know me!
            </h2>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                I am a{" "}
                <span className="font-bold text-primary">highly motivated and detail-oriented MERN Stack Web Developer</span>{" "}
                with a strong command of modern front-end and back-end technologies.
              </p>
              <p>
                Currently working under{" "}
                <span className="font-bold text-primary">Associate Professor Zubaira Naz</span>{" "}
                (2024-Present), where I completed comprehensive assignments and projects over a 4-week period, 
                developing a strong foundation in Python for GenAI applications.
              </p>
              <p>
                My experience includes working with{" "}
                <span className="font-bold text-primary">APIs, prompt engineering, and building command-line chatbots</span>{" "}
                with conversation memory. I&apos;ve also built and optimized Retrieval-Augmented Generation (RAG) systems 
                using LangChain, including document processing, text splitting, and vector database integration.
              </p>
              <p>
                I have experience with{" "}
                <span className="font-bold text-primary">
                  AI agents, workflow automation, function calling, and computer vision with CNNs
                </span>. 
                I&apos;ve also served as a{" "}
                <span className="font-bold text-primary">General Manager at Tribal Folks</span>{" "}
                managing operations and projects with a focus on timely delivery and quality control.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((item, idx) => {
                  return (
                    <span
                      key={idx}
                      className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {item.skill}
                    </span>
                  )
                })}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/hero-image.png"
                alt="Hero Image"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl border border-primary/20"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
