import React from "react";

function Headers(props) {
  return (
    <>
      <header className="header padding header-fixed flex container">
        <div className="profile">
          <strong className="strong">
            <span href="#">Aditya Narayan Singh</span>
          </strong>
        </div>
        <label class="bars" for="toggle">
          <i class="fas fa-bars"></i>
        </label>
        <input id="toggle" className="toggel-bar" type="checkbox"/>
        <nav className="nav-menu">
          <ul className="flex  column-1">
            <li className="btn-5 home">
              <a href="#home">Home</a>
            </li>
            <li className="btn-5 home">
              <a href="#about">About</a>
            </li>
            <li className="btn-5 home">
              <a href="#skills">Skills</a>
            </li>
            <li className="btn-5 home">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Headers;
