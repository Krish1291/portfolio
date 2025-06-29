import "./Connect.css";
import { SiGmail, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Connect = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="connect-container" id="connect1" data-aos="fade-in">
      <h2 className="connect-title">Let's Connect</h2>

      <div className="social-icons">
        <a
          href="mailto:dhimankrish663@gmail.com"
          title="Gmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/krish-dhiman-594491371/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/Krish1291"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://wa.me/918427180259"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp />
        </a>
      </div>

      <form
        action="https://formspree.io/f/xeokvnzp"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows="4"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Connect;
