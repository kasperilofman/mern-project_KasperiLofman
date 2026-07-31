// Hero section shown on the Home page
import { useNavigate } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <section className="hero">
      <div className="hero-container fade-in">
        <img
          src={profileImage}
          alt="Profile picture of Kasperi Löfman"
          className="hero-profile-img"
        />

        <h1 className="hero-heading">
          Hello! I'm <span className="text-accent">Kasperi Löfman</span>
        </h1>

        <p className="hero-subtitle">Software Engineering Student</p>

        <p className="hero-description">
          I make websites using the MERN stack. Welcome to my page!
        </p>

        <button className="btn btn-primary btn-icon" onClick={handleAboutClick}>
          About Me
          <BsArrowRightCircle className="btn-icon-svg" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
