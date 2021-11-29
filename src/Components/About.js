import React from "react";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiSass } from "react-icons/di";

function About(props) {
  return (
    <>
      <section className="about">
        <div className="container" id="about">
          <span>
            <li>{props.dark}</li>
          </span>
          <div>
            <h2 className="project about-line">About Me</h2>
            <span className="name-text">Hi I'm Aditya Narayan Singh</span>
          </div>
          <div>
            <ul className="flex wrap aboutme ">
              <li className="flex-26">
                Email:{" "}
                <a
                  href="mailto:adiyasngh14@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  adiyasngh14@gmail.com
                </a>
              </li>
              <li className="flex-26">
                Resume:{" "}
                <a href="file:///C:/Users/aditya%20singh/Downloads/Aditya-Resume.pdf">
                  Click Me
                </a>
              </li>
              <li className="flex-26">Education: B.Tech(Mechanical)</li>
              <li className="flex-26">Mobile: 8375004856</li>
              <li className="flex-26">City: Siwan (Bihar), India</li>
              <li className="flex-26">Current-City: Dharamshala, India</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about" id="skills">
        <div className="container">
          <h3 className="project skills">Skills</h3>
        </div>
        <ul className="container flex wrap bottom">
          <li className="flex-20 react-logo">
            <i class="fab fa-react"></i>
            <div className="text-react">React</div>
          </li>
          <li className="flex-20 react-logo">
            <i class="fab fa-node-js"></i>
            <div className="text-react">Node</div>
          </li>
          <li className="flex-20 react-logo">
            <i class="fab fa-html5"></i>
            <div className="text-react">HTML</div>
          </li>
          <li className="flex-20 react-logo">
            <i class="fab fa-css3-alt"></i>
            <div className="text-react">CSS</div>
          </li>
          <li className="flex-20 react-logo">
            <i class="fab fa-js"></i>
            <div className="text-react">JavaScript</div>
          </li>
          <li className="flex-20 react-logo">
            <SiRedux />
            <div className="text-react">Redux</div>
          </li>
          <li className="flex-20 react-logo">
            <SiTailwindcss />
            <div className="text-react">Talwind CSS</div>
          </li>
          <li className="flex-20 react-logo">
            <DiMongodb />
            <div className="text-react">Mongodb</div>
          </li>
          <li className="flex-20 react-logo">
            <DiSass />
            <div className="text-react">SCSS/SAAS</div>
          </li>
          <li className="flex-20 react-logo">
            <i class="fab fa-git-alt"></i>
            <div className="text-react">git</div>
          </li>
        </ul>
      </section>
      <section id="projects">
        <h4 className="container project">Projects</h4>
        <div className="wrap flex container relative align-stretch">
          <div className="container-image" id="flexor">
            <article className="image-article">
              <h2 className="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/Flexor.png"
                    alt="hello"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/checkpoint-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        href="https://aditya17singh.github.io/checkpoint-4/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                Flexor
              </h2>
              <p className="para-project">
                This is a simple responsive page made by HTML and CSS.
              </p>
            </article>
          </div>
          <div className="container-image" id="flexor">
            <article className="image-article">
              <h2 className="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/got.png"
                    alt="got"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/TA-JS-DOM-and-Events-TJaaaf/tree/block-BJaaew/block-BJaaew"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        href="https://aditya17singh.github.io/peopleOfGot/code/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                People Of GOT
              </h2>
              <p className="para-project">
                A simple App to understand the basic concepts of Java Script and
                DOM.
              </p>
            </article>
          </div>
          <div className="container-image" id="flexor">
            <article className="image-article">
              <h2 className="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/space.png"
                    alt="hi"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/spaceflight"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        href="https://aditya17singh.github.io/spaceflight/code/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                Space News Everywhere
              </h2>
              <p className="para-project">
                A simple app to understand the working of fetch api and promises
                in javascript
              </p>
            </article>
          </div>
        </div>
        <div className="wrap flex container relative align-stretch">
          <div class="container-image" id="flexor">
            <article className="image-article">
              <h2 className="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/battle.png"
                    alt="hi"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/Github-battle"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        href="https://mine-github-battle-aditya17singh.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                <h4 className="battle">Github Battle App</h4>
              </h2>
              <p className="para-project">
                This is github battle app .User can enter two github usernames
                and view the battle result.
              </p>
            </article>
          </div>
          <div className="container-image" id="flexor">
            <article className="image-article">
              <h2 classNameName="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/expense.png"
                    alt="hi"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/TA-AC-BACKEND-express-with-authentication-checkpoint-03-TNaaan/tree/block-BNaafu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    {/* <li className="text-center">
                      <a href="#" target="_blank" rel="noreferrer">
                        <i class="fas fa-eye"></i>
                      </a>
                    </li> */}
                  </ul>
                </nav>
                Expense Tracker
              </h2>
              <p className="para-project">
                This is a Express expense tracker user can track there expenses
                by the help of this application.
              </p>
            </article>
          </div>
          <div class="container-image" id="flexor">
            <article class="image-article">
              <h2 class="image-heading ">
                <div className="image-hover">
                  <img
                    className="width-full"
                    src="./assets/blog.png"
                    alt="hi"
                  />
                </div>
                <nav className="nav-absolute">
                  <ul className="flex">
                    <li className="text-center">
                      <a
                        href="https://github.com/Aditya17Singh/blog-app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        href="https://blog-application-og59a4foo-aditya17singh.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-eye"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                Blog App
              </h2>
              <p className="para-project">
                This is a react blog app application user can create read filter
                blogs.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* <section id="contact">
        <div className="container">
          <h4 className="contact-text">Contact</h4>
          <form className="form-control-1">
            <input
              className="input-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="input-control"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="text-area"
              type="text"
              placeholder="Your Message"
            />
            <button className="btn">Send Message</button>
            <button>
              <a
                href="mailto:adiyasngh14@gmail.com?Subject=Hello%20again"
                target="_blank"
                rel="noreferrer"
              >
                Send Mail
              </a>
            </button>
          </form>
        </div>
      </section> */}
      <footer className="footer">
        <small>Thank You</small>
      </footer>
    </>
  );
}

export default About;
