import CvCardComponent from "./components/cv-card";
import { educations, experiences } from "./data";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <a href="#" className="navbar-brand">
          Portfolio
        </a>
      </nav>
      <main id="main-container" className="cv-container">
        <section className="section section-head">
          <div className="avatar-container">
            <img
              className="avatar"
              src={require("./assets/images/avatar.jpg")}
            />
          </div>
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
          <div className="section-head-line">
            Mahmoud Hboubati
            <small>Software Engineer</small>
          </div>
        </section>
        <section className="section section-body">
          <div className="side">
            <div className="side-header">Education</div>
            <CvCardComponent card={educations[0]}></CvCardComponent>
            <CvCardComponent card={educations[1]}></CvCardComponent>
            <div className="side-header">Experience</div>
            <CvCardComponent card={experiences[0]}></CvCardComponent>
          </div>
          <div className="side side-small">
            <div className="side-header">Skills</div>
            <div className="cv-card">
              <div className="cv-card-header">Coding</div>
              <div className="cv-card-body">
                <div className="progress-container">
                  <div className="progress-title">Javascript</div>
                  <div className="progress progress-primary">
                    <span className="progress-indicator" data-value="80"></span>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-title">C#</div>
                  <div className="progress progress-success">
                    <span className="progress-indicator" data-value="89"></span>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-title">CSS</div>
                  <div className="progress progress-default">
                    <span className="progress-indicator" data-value="75"></span>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-title">Typescript</div>
                  <div className="progress progress-secondary">
                    <span className="progress-indicator" data-value="65"></span>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="progress-title">Angular</div>
                  <div className="progress progress-danger">
                    <span className="progress-indicator" data-value="70"></span>
                  </div>
                </div>
              </div>
              <div className="cv-card-separator"></div>
              <div className="cv-card-header">Technologies & Patterns</div>
              <div className="cv-card-body">
                <div className="cv-badge-container">
                  <div className="cv-badge cv-badge-golden">Microservices</div>

                  <div className="cv-badge">.Net Core</div>
                  <div className="cv-badge">Design Patterns</div>
                  <div className="cv-badge">Entity Framework</div>
                  <div className="cv-badge">SOLID Principles</div>
                  <div className="cv-badge">Clean Architecture</div>
                  <div className="cv-badge">Repository Pattern</div>

                  <div className="cv-badge">Docker & Kubernetes</div>
                  <div className="cv-badge">Heroku Cloud</div>
                  <div className="cv-badge">Responsive Design</div>
                  <div className="cv-badge">jQuery</div>
                  <div className="cv-badge">CircleCI</div>
                  <div className="cv-badge">Jenkins</div>
                </div>
              </div>

              <div className="cv-card-separator"></div>
              <div className="cv-card-header">Interests</div>
              <div className="cv-card-body">
                <div className="cv-badge-container gap-1">
                  <div className="cv-badge cv-badge-primary cv-badge-underlined">
                    Machine Learning
                  </div>
                  <div className="cv-badge cv-badge-primary cv-badge-underlined">
                    Artificial Intelligence
                  </div>
                  <div className="cv-badge cv-badge-primary cv-badge-underlined">
                    Java
                  </div>
                  <div className="cv-badge cv-badge-primary cv-badge-underlined">
                    Python
                  </div>
                  <div className="cv-badge cv-badge-primary cv-badge-underlined">
                    Cloud
                  </div>
                </div>
              </div>

              <div className="cv-card-separator"></div>
              <div className="cv-card-header">Languages</div>

              <div className="cv-card-body">
                <div className="detail fd-column align-items-start">
                  <div className="detail-title">Arabic</div>
                  <div className="detail-value color-faded">
                    Native Arabic speaker
                  </div>
                </div>
                <div className="detail fd-column align-items-start">
                  <div className="detail-title">English</div>
                  <div className="detail-value color-faded">
                    Good speaking, writing, reading
                  </div>
                </div>
                <div className="detail fd-column align-items-start">
                  <div className="detail-title">German</div>
                  <div className="detail-value color-faded">Beginner</div>
                </div>
              </div>
            </div>
            <div className="side-header">My Projects</div>
            <div className="cv-card">
              <div className="cv-card-header">School Dictionary</div>
              <div className="cv-card-body">
                Search for school in UAE by name, gender, teaching levels, the
                goal is to find a nearby and suitable school for those who come
                to UAE and start searching for a school, also socialize school
                communications like students, teacher, parent public pages and
                interactions.
              </div>
              <div className="cv-card-separator"></div>
              <div className="cv-card-header">Salary Project</div>
              <div className="cv-card-body">
                The goal is to allow users to calculate salaries with the
                ability to change the equation, saving salaries, and printing
                reports, Deductions, Compensations, Missions compensations
                regarding less weather items will be deducted or added, user
                also can create custom reports called the Dynamic Reports which
                allow users to specify dynamic fields calculated by his own
                criteria.
              </div>
              <div className="cv-card-separator"></div>
              <div className="cv-card-header">This Resume</div>
              <div className="cv-card-body">
                💪
                <a
                  href="https://github.com/MahmoudHboubati/portfolio"
                  target="_blank"
                >
                  github repository
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="side-header">Contact Me</div>
            <div className="cv-card card-side-border">
              <div className="cv-card-header">Mahmoud Hboubati</div>
              <div className="cv-card-body">
                <div className="detail gap-1">
                  <div className="detail-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="detail-value">+971566573923</div>
                </div>
                <div className="detail gap-1">
                  <div className="detail-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="detail-value">mhmoud.21830@gmail.com</div>
                </div>
                <div className="detail color-linkedin gap-1">
                  <div className="detail-icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="detail-value">
                    <a
                      href="https://www.linkedin.com/in/mahmoudhbobati/"
                      target="_blank"
                    >
                      Linkedin mahmoudhbobati
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
                <div className="detail gap-1">
                  <div className="detail-icon">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div className="detail-value">
                    <a href="https://github.com/MahmoudHboubati">
                      github MahmoudHboubati
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
                <div className="detail gap-1">
                  <div className="detail-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="detail-value">Dubai, UAE</div>
                </div>
                <div className="detail color-stackoverflow gap-1">
                  <div className="detail-icon">
                    <i className="fa-brands fa-stack-overflow"></i>
                  </div>
                  <div className="detail-value">
                    <a href="https://stackoverflow.com/users/2808137/mahmoud-hboubati">
                      stack<b>overflow</b> MahmoudHboubati
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;