import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <h1 className="title" id="Skills">
        Skills
      </h1>
      <div className="container">
        <div className="Html" data-aos="zoom-out-up">
          <img src="Html.png" alt="HTML" />
        </div>

        <div className="Css" data-aos="zoom-out-up" data-aos-delay="100">
          <img src="Css.png" alt="CSS" />
        </div>
        <div className="Js" data-aos="zoom-out-up" data-aos-delay="200">
          <img src="Js.png" alt="JavaScript" />
        </div>
        <div className="Boot" data-aos="zoom-out-up" data-aos-delay="300">
          <img src="Bootstrap.png" alt="Bootstrap" />
        </div>
        <div className="Tail" data-aos="zoom-out-up" data-aos-delay="400">
          <img src="Tailwind.png" alt="Tailwind" />
        </div>
      </div>
    </>
  );
};

export default Skills;
