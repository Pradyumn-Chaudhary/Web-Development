import React,{useContext} from 'react'
import { countContext } from '../context/Context'

const Card = () => {
    const value = useContext(countContext);
  return (
    <div>
      Card: {value.count}
    </div>
  )
}

export default Card
