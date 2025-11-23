import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-14 bg-purple-700 flex justify-between items-center px-6 md:px-8 text-white shadow-md'>
            <div className="logo font-bold text-xl">
                <Link href='/' className='hover:text-purple-200 transition-colors'>BitLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-6'>
                <li>
                    <Link href='/' className='hover:text-purple-200 transition-colors font-semibold'>Home</Link>
                </li>
                <li>
                    <Link href='/shorten' className='hover:text-purple-200 transition-colors font-semibold'>Shorten</Link>
                </li>
                <li>
                    <Link href='/about' className='hover:text-purple-200 transition-colors font-semibold'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar