// Displays the fetched AboutMe data
const AboutMeCard = ({ aboutMe }) => {
  const {
    name,
    title,
    bio,
    email,
    skills,
    education,
    github,
    linkedin,
    profileImage,
  } = aboutMe;

  return (
    <div className="about-card card fade-in">
      <div className="about-card-header">
        {profileImage && (
          <img
            src={profileImage}
            alt={`Profile picture of ${name}`}
            className="about-card-img"
          />
        )}
        <div>
          <h2 className="about-card-name">{name}</h2>
          <p className="about-card-title">{title}</p>
        </div>
      </div>

      <p className="about-card-bio">{bio}</p>

      <div className="about-card-section">
        <h3>Skills</h3>
        <div className="badge-list">
          {skills && skills.length > 0 ? (
            skills.map((skill) => (
              <span key={skill} className="badge">
                {skill}
              </span>
            ))
          ) : (
            <p>No skills listed yet.</p>
          )}
        </div>
      </div>

      <div className="about-card-section">
        <h3>Education</h3>
        <p>{education}</p>
      </div>

      <div className="about-card-section">
        <h3>Contact</h3>
        <p>
          <a href={`mailto:${email}`} className="about-card-link">
            {email}
          </a>
        </p>

        <div className="about-card-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
