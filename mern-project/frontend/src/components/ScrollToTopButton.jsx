// Floating button that scrolls the page back to the top
import { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <BsChevronUp className="btn-icon-svg" aria-hidden="true" />
      
    </button>
  );
};

export default ScrollToTopButton;
