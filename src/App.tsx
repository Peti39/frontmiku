//import { useState } from 'react'

import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Mikulas</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Kids</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/toys" className="nav-link">Toys</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/toytokid" className="nav-link">Connections</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/createtoy" className="nav-link">Create Toy</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container-lg mt-5">
        <Outlet />
      </main>
    </>
  )
}

export default App
