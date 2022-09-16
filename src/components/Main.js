import React from "react";
import image from "../images/Ech.jpg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Main() {
  const [lightMode, setDarkMode] = React.useState(false);

  function toggleLightMode() {
    setDarkMode((prevState) => !prevState);
  }

  if (lightMode) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }

  return (
    <main className={lightMode ? "light" : ""}>
      <nav className={lightMode ? "light" : ""}>
        <div className="toggler">
          <p className="toggler--light">Dark</p>
          <div className="toggler--slider" onClick={toggleLightMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--light">Light</p>
        </div>
      </nav>
      <div className="Header-container">
        <img src={image} alt="developer" />
      </div>
      <div className="Main-container">
        <h1>Tom Weniger</h1>
        <h4>Frontend Developer</h4>
        <a href="mailto:tom-weniger@hotmail.com">
          <FaEnvelope className="Main-icon" /> Email
        </a>
        <p>
          <span>
            About
            <br />
          </span>
          I am passionate about Web Development and problem solving. I love to
          create something from scratch and I believe in lifelong learning, as
          for me it is crucial to be up to date on technologies.
        </p>
        <p>
          <span>
            Interests
            <br />
          </span>
          Meditation, Sport, Gaming, Outgoing, Movies, Cooking.
        </p>
        <footer>
          <a
            className="icons"
            href="https://www.linkedin.com/in/tom-weniger-b91b30216/"
          >
            <FaLinkedin />
          </a>
          <a className="icons" href="https://github.com/TomWeniger">
            <FaGithub />
          </a>
        </footer>
      </div>
    </main>
  );
}
