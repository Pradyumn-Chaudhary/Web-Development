import React from 'react'
import Card from './Card'

const Button = ({count}) => {
  return (
    <div>
    <button><span><Card count={count}/></span>Button</button>
    </div>
  )
}

export default Button
