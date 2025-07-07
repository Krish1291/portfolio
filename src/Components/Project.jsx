// Project.js
import "./Project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Slider from "react-slick";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="Projects">
      <div className="container1">
        <h2 className="section-title" data-aos="fade-up">
          My Projects
        </h2>

        <div className="project-card" data-aos="fade-up">
          <div className="carousel-wrapper">
            <Slider {...settings}>
              <img
                src="/home.PNG"
                alt="Resume Page 1"
                className="project-image"
              />
              <img
                src="/form.PNG"
                alt="Resume Page 2"
                className="project-image"
              />
              <img
                src="/template.PNG"
                alt="Resume Page 3"
                className="project-image"
              />
              <img
                src="/template2.PNG"
                alt="Resume Page 3"
                className="project-image"
              />
              <img
                src="/Template3.PNG"
                alt="Resume Page 3"
                className="project-image"
              />
              <img
                src="/Template4.PNG"
                alt="Resume Page 3"
                className="project-image"
              />
            </Slider>
          </div>

          <div className="project-info">
            <h3>Resume Builder</h3>
            <p>
              A dynamic resume builder web app that allows users to input their
              details and generate a professional resume in real-time.
            </p>
            <p id="stack">
              <strong>Tech Stack:</strong> React, CSS, JavaScript, HTML
              ,Tailwind
            </p>
            <br></br>
            <div className="project-links">
              <a
                href="https://quick-cv-builder.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Krish1291/QuickCV-"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
