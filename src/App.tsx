import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink> |{' '}
        </nav>
      </div>
    </>
  )
}

export default App
