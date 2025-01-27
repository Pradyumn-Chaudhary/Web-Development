import React,{useState} from 'react'
import Navbar from './Component/Navbar'

const App = () => {
  const [count, setcount] = useState(0);
  const handleCount = () => {
    setcount(count + 1);
  }
  return (
    <div>
      <Navbar count={count}/>
      <button onClick={handleCount}>Count is: {count}</button>
    </div>
  )
}

export default App
