import React,{useContext} from 'react'
import Card from './Card'
import { countContext } from '../context/Context'

const Button = () => {
    const value = useContext(countContext)
  return (
    <div>
    <button onClick={value.handleCount}><span><Card/></span>Button</button>
    </div>
  )
}

export default Button
