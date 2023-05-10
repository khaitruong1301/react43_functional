import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Header() {
    //bs5-navbar-background
  return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="/usestate">UseState</NavLink>

          <NavLink className="dropdown-item" to="/useeffect">Use Effect</NavLink>

          <NavLink className="dropdown-item" to="/usecallback">Use callback</NavLink>

          <NavLink className="dropdown-item" to="/usememo">Use memo</NavLink>
          <NavLink className="dropdown-item" to="/useref">Use ref</NavLink>
          <NavLink className="dropdown-item" to="/demo-chat">Redux - demochat</NavLink>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  )
}
