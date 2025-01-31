import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 font-bold text-xl bg-blue-800 h-10 items-center sticky w-full top-0'>
          <span>Facebook</span>
          <ul className='flex gap-4'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
          </ul>
    </div>
  )
}

export default Navbar
