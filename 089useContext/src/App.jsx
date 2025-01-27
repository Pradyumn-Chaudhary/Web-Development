import React,{useState} from 'react'
import Navbar from './Component/Navbar'
import { countContext } from './context/Context';

const App = () => {
  const [count, setcount] = useState(0);
  const handleCount = () => {
    setcount(count + 1);
  }
  return (
    <div>
      <countContext.Provider value={{count,handleCount}}>
      <Navbar />
      </countContext.Provider>
    </div>
  )
}

export default App
