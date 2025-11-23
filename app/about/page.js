import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <main className="bg-purple-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-purple-100 p-8 rounded-lg mb-8">
          <h1 className="font-bold text-4xl mb-4">About BitLinks</h1>
          <p className="text-lg mb-4">
            BitLinks is a free, fast, and simple URL shortener that helps you create short, memorable links from long URLs. 
            Whether you&apos;re sharing links on social media, in emails, or anywhere else, BitLinks makes it easy to create 
            clean, shareable links in seconds.
          </p>
          <p className="text-lg">
            Our mission is to provide a straightforward URL shortening service without the hassle of registration, 
            ads, or hidden fees. Just paste your URL, choose your preferred short link, and you&apos;re done!
          </p>
        </div>

        <div className="bg-purple-100 p-8 rounded-lg mb-8">
          <h2 className="font-bold text-2xl mb-4">How It Works</h2>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-bold">1. Enter Your URL</p>
              <p className="text-lg">Paste your long URL into the input field.</p>
            </div>
            <div>
              <p className="text-lg font-bold">2. Choose Your Short Link</p>
              <p className="text-lg">Enter your preferred custom short URL.</p>
            </div>
            <div>
              <p className="text-lg font-bold">3. Share Your Link</p>
              <p className="text-lg">Copy and share your new short link anywhere you need it.</p>
            </div>
          </div>
        </div>

        <div className="text-center flex flex-col gap-4 items-center">
          <Link 
            href='/shorten' 
            className='bg-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-700 transition-colors inline-block'
          >
            Try Now
          </Link>
          <div className="text-lg font-bold">
            <span>View on </span>
            <Link 
              href='https://github.com/dhananjay1801/bit-links.git' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-purple-700 hover:text-purple-800 underline'
            >
              GitHub
            </Link>
            <span> - Contributions welcomed!</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About