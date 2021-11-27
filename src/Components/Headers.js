import React from "react";

function Headers(props) {
  return (
    <>
      <header className="header header-fixed flex container">
        <div className="profile">
          <strong className="strong">
            <span href="#">Aditya Narayan Singh</span>
          </strong>
        </div>
        <nav>
          <ul className="flex nav-menu">
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
            <li className="btn-5 home">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
        
    </>
  );
}
export default Headers;
