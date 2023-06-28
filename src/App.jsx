
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/router'
import Navber from './Navber/Navber'

function App() {
  

  return (
    <div>
      <Navber/>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
