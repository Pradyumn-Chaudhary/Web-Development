import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex pt-10 flex-col items-center'>
      <h2 className='text-3xl font-bold'>Page Not Found</h2>
      <p>could not find resource</p>
      <Link href="/" className='text-xs text-blue-500'>Return to Home</Link>
    </div>
  )
}