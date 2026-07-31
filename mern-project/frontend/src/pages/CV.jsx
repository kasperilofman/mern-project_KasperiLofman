// CV page, static content for now, could be moved to the API later
const education = [
  {
    id: 1,
    school: "Lappeenranta-Lahti University of Technology",
    degree: "B.Sc. in Software Engineering",
    period: "2021 — 2026 (Expected)",
    details: "Studies include: Data Structures, Algorithms, Web Development, Databases.",
  },
];

const experience = [
  {
    id: 1,
    role: "Fair Market Cashier",
    company: "[Redacted]",
    period: "Summer 2016-2019",
    details:
      "Customer service tasks, such as sales and advising customers. Additionally, purchasing and displaying merchandise.",
  },
  {
    id: 2,
    role: "Driver",
    company: "[Redacted]",
    period: "2023 — Present",
    details:
      "The logistics sector encompasses a wide range of areas, including warehouse management, the transport of goods by truck and van, the installation of home appliances, and customer service roles. ",
  },
];

const projects = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description:
      "A full-stack MERN portfolio site featuring a REST API, MongoDB database, and a responsive React frontend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    name: "Movie App",
    description:
      "An app created with Android Studio, that retrieved XML data from Finnkino's API and showed different showings, filtering through date, time, and location of the movie.",
    tech: ["Java", "Android Studio"],
  },
];

const CV = () => {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">Curriculum Vitae</h1>

        <div className="cv-download-wrapper">
          <a
            href="/resume-placeholder.pdf"
            download="Kasperi_Lofman_Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          {education.map((item) => (
            <div key={item.id} className="cv-card card">
              <div className="cv-card-header">
                <h3>{item.degree}</h3>
                <span className="cv-period">{item.period}</span>
              </div>
              <p className="cv-subtitle">{item.school}</p>
              <p>{item.details}</p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Experience</h2>
          {experience.map((item) => (
            <div key={item.id} className="cv-card card">
              <div className="cv-card-header">
                <h3>{item.role}</h3>
                <span className="cv-period">{item.period}</span>
              </div>
              <p className="cv-subtitle">{item.company}</p>
              <p>{item.details}</p>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Projects</h2>
          {projects.map((item) => (
            <div key={item.id} className="cv-card card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="badge-list">
                {item.tech.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default CV;
