import Error from '@/app/error'
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
          { params.slug}
    </div>
  )
}

export default page
