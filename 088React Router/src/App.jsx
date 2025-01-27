import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Home from './Components/Home'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/profile/:userName",
      element:<><Navbar /><Profile/></>
    },
    {
      path: "/",
      element:<><Navbar /><Home/></>
    },
    {
      path:"/Form",
      element: <><Navbar /><Form/></>
    }, 
  ])
  return (
    <>
      <RouterProvider router={ router} />
    </>
  )
}

export default App
