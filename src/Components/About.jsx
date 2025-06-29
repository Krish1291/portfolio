import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="img" data-aos="fade-up">
            <img src="myImg.jpeg" alt="Krish Dhiman" className="img"></img>
          </div>
          <div className="about-text" data-aos="fade-up">
            <h1 className="about">About Me</h1>
            <p className="info">
              Hi, I'm a frontend development student at Chitkara University,
              currently based in Baddi, Himachal Pradesh. I'm skilled in HTML,
              CSS, JavaScript, React, Bootstrap, and Tailwind CSS, and actively
              learning backend technologies. I enjoy building responsive,
              user-friendly websites and am currently seeking internship
              opportunities to grow and collaborate. Outside coding, I love
              music and exploring tech trends, and I believe in learning by
              doing and staying consistent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
