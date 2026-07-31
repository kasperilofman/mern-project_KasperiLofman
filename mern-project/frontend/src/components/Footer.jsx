// Site footer with social links, shown on every page
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon"
          >
            <BsGithub size={22} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
          >
            <BsLinkedin size={22} />
          </a>

          <a href="mailto:kasperi.lofman@gmail.com" aria-label="Email" className="social-icon">
            <BsEnvelope size={22} />
          </a>
        </div>

        <p className="footer-text">
          {currentYear} Kasperi Löfman
        </p>
      </div>
    </footer>
  );
};

export default Footer;
