// About Me page fetches profile data from the API
import { useState, useEffect } from "react";
import AboutMeCard from "../components/AboutMeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchAboutMe } from "../services/api";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAboutMe = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchAboutMe();
        setAboutMe(data);
      } catch (err) {
        console.error("Failed to fetch About Me data:", err);
        setError(
          "Sorry, we couldn't load the About Me information right now. Please make sure the backend server is running and try again."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadAboutMe();
  }, []);

  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">About Me</h1>

        {isLoading && <LoadingSpinner />}

        {!isLoading && error && (
          <div className="error-box">
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && aboutMe && <AboutMeCard aboutMe={aboutMe} />}
      </div>
    </main>
  );
};

export default AboutMe;
