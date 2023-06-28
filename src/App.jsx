
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router'
import Navber from './Navber/Navber'

function App() {
  

  return (
    <div>
      <Navber/>
      <RouterProvider router={router} />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
