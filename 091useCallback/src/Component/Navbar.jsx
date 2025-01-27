import React from 'react'
import { memo } from 'react';

const Navbar = (props) => {
    console.log("Navber is Rendered");
  return (
    <div>
      I am a {props.adjective} Navbar
    </div>
  )
}

export default memo(Navbar)
