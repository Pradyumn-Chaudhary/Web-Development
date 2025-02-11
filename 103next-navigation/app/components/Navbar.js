"use client"
import React, { use } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
          Navbar
          <div>you are in { pathname}</div>
    </div>
  )
}

export default Navbar
