import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-purple-700 text-white mt-auto border-t border-purple-600 shadow-lg'>
      <div className='max-w-7xl mx-auto py-1 px-6 md:px-8'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <p className='text-base font-semibold'>
            Developed by{' '}
            <Link 
              href='https://dhananjay-tailor.vercel.app/' 
              target='_blank' 
              rel='noopener noreferrer'
              className='hover:text-purple-200 transition-colors font-bold underline decoration-2 underline-offset-2'
            >
              Dhananjay Tailor
            </Link>
          </p>
          <p className='text-sm text-purple-200'>&copy; {new Date().getFullYear()} BitLinks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer