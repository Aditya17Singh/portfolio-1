import React from "react";
import data from "../data";
function Hero() {
  return (
    <>
      <section
        className="hero flex"
        style={{ backgroundImage: "url('./assets/portfolio-image-hero.png')" }}
        id="home"
      >
        <div class="hero-text">
          <h1>Hi I'm Aditya.</h1>
          <span className="nav-footer">
            <ul class="nav-footer flex justify-content">
              {data.map(
                (d) =>
                  d .liveLink && (
                    <span className="nav-bar">
                      <a href={d.liveLink} target="_blank" rel="noreferrer">
                        <i class="fab fa-github nav-bar"></i>
                      </a>
                      <a href={d.liveTwitter} target="_blank" rel="noreferrer">
                        <i class="fab fa-twitter-square nav-bar"></i>
                      </a>
                      <a href={d.liveLinkedin} target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin nav-bar"></i>
                      </a>
                    </span>
                  )
              )}
            </ul>
          </span>
          <button class="circle">
            <a href="#flexor">
              <i class="fas fa-arrow-down"></i>
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
