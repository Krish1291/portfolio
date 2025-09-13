import "./Home.css";

import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiGithub } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="Home">
        <nav
          className="navbar bg-dark border-bottom border-body navbar-expand-lg"
          data-bs-theme="dark"
          id="nav"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#" id="Portfolio">
              <h2> Portfolio</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active "
                    id="home"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about" id="features">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Skills" id="skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Projects" id="features">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#connect1" id="connect">
                    Connect
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="introduction">
          <div className="intro-text">
            <h1>Hi, I'm Krish Dhiman</h1>
            <h2 className="name">Software Developer</h2>
            <p className="para">
              I'm a passionate software developer with a strong focus <br></br>
              on building efficient, scalable, and user-friendly<br></br> web
              applications. Skilled in both frontend and backend development,
              <br></br> I enjoy turning ideas into real-world products using
              modern technologies<br></br> like React, JavaScript,
              Node.js,Express,MongoDB and CSS.<br></br> Always eager to learn
              and improve, I strive to write clean,<br></br> maintainable code
              and deliver seamless user experiences.
            </p>
          </div>
          <div className="image">
            <img src="myImg.jpeg" alt="Krish Dhiman" />
          </div>
        </div>
        <a href="#connect1" className="btn">
          Contact Me
        </a>
        <div className="icons">
          <a
            href="https://github.com/Krish1291"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="git">
              {" "}
              <SiGithub />
            </h4>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhimankrish663@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="contact gmail">
              <SiGmail />
            </h4>
          </a>
          <a href="https://www.linkedin.com/in/krish-dhiman-594491371/">
            <h4 className="contact LinkedIn">
              <FaLinkedin />
            </h4>
          </a>
          <h4 className="contact whatsapp">
            <a
              href="https://wa.me/8427180259"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FaWhatsappSquare />
            </a>
          </h4>
        </div>
      </div>
    </>
  );
};
export default Home;
