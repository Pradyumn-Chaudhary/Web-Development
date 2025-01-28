// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux#:~:text=Reducer%20is%20usually%20in%20the,then%20the%20re%2Drendering%20occurs.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar/>
      <button  onClick={() => dispatch(decrement())}>-</button>
        <span >
          count is {count}
      </span> 
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default App
