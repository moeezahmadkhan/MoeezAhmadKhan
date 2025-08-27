import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moeez Ahmad Khan - Creative Portfolio',
  description: 'MERN Stack Web Developer with expertise in modern front-end and back-end technologies. Creative portfolio showcasing innovative projects and skills.',
  keywords: ['portfolio', 'web development', 'Moeez Ahmad Khan', 'MERN Stack', 'React.js', 'Node.js', 'Python GenAI'],
  authors: [{ name: 'Moeez Ahmad Khan' }],
  openGraph: {
    title: 'Moeez Ahmad Khan - Creative Portfolio',
    description: 'MERN Stack Web Developer with expertise in modern web technologies',
    type: 'website',
    url: 'moeezahmadkhan.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}  bg-gradient-to-br from-black via-gray-900 to-black bg-fixed text-white antialiased bg-repeat`}>
        {children}
      </body>
    </html>
  )
}
