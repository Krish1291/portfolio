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
              Hi, I'm a Software Developer and student at Chitkara University,
              based in Baddi, Himachal Pradesh. I have hands-on experience with
              HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS, along
              with backend technologies like Node.js, Express, and MongoDB. I
              enjoy building responsive, user-friendly web applications . Beyond
              coding, I’m passionate about exploring the latest tech trends, and
              I believe in learning by doing and staying consistent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
