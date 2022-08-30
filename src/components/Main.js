import React from "react";
import image from "../images/Ech.jpg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <main>
      <div class="Header-container">
        <img src={image} alt="developer" />
      </div>
      <div class="Main-container">
        <h1>Tom Weniger</h1>
        <h4>Frontend Developer</h4>
        <a href="mailto:tom-weniger@hotmail.com">
          <FaEnvelope class="Main-icon" /> Email
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
