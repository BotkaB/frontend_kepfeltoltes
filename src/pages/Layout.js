import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="App">
      <header className="p-2 text-center">
        <h1>Képfeltöltés React - Laravel</h1>
      </header>
      <nav className='navbar navbar-expand-sm bg-light'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Kezdőlap</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kepfeltoltes">Képek</Link>
          </li>
          
        </ul>
      </nav>
      <article>
      <Outlet />
      </article>
      <footer></footer>
    </div>
  )
}

export default Layout