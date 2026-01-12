//import { useState } from 'react'

import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
 

  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Kids</NavLink> |{' '}
          <NavLink to="/toys">Toys </NavLink>|{' '}
          <NavLink to="/toytokid">Toy To Kid</NavLink>  |{' '}
          <NavLink to="/createtoy">Create Toy</NavLink> |{' '}
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
