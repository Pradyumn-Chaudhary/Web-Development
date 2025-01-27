import React,{ useCallback, useState } from 'react'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("top")

  // const getAdjective = () => { setadjective("new" + count) }
  const getAdjective = useCallback(() => {setadjective("new" + count)},[],)
  // const getAdjective = useCallback(() => {setadjective("new" + count)},[count],)

  return (
    <>
      <Navbar adjective={adjective} getAdjective={ getAdjective} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
      <br />
        <button onClick={getAdjective}>Get Adjective</button>
    </>
  )
}

export default App
