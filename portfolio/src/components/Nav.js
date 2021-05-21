import React from "react";
import { Link } from "react-router-dom";


function Nav() {

return(
<div className="cover-container d-flex w-100 h-100 p-3 mx-0 flex-column">
  <header className="mb-auto">
    <div>
      <h1 className="float-md-start mb-0"><Link className="nav-link active" aria-current="page" to="/">MARK LLOYD</Link></h1>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        <Link className="nav-link active" to="/portfolio">Portfolio</Link>
        <Link className="nav-link active" to="/Contact">Contact</Link>
      </nav>
    </div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mark Lloyd</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact" aria-disabled="false">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="https://github.com/m-llo" className="navbar-brand" target="_blank"><i class="fab fa-github"></i></Link>
      <Link to="https://www.linkedin.com/in/mark-lloyd-27b7217/" className="navbar-brand" target="_blank"><img
          src="../assets/linkedIn.jpg" height="30" width="30" alt="linkedin Icon"></img></Link>
      <Link to="../assets/Mark Lloyd Resume_21_ wd.pdf" className="navbar-brand" download="resume">My Resume</Link>
    </nav>
  </header>
</div>
)
}

export default Nav;