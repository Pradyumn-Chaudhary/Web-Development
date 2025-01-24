import { useState } from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'

function App() {
  return (
    <>
      <div className="nav"><Navbar /></div>
      <Cards/>
    </>
  )
}

export default App
