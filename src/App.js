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
            <div className="cv-card">
              <div className="cv-card-header">emaratech</div>
              <div className="cv-card-header">Sr. Software Engineer</div>
              <div className="cv-badge card-cv-badge">
                09/2017 - 06/2021, Dubai, UAE
              </div>
              <div className="cv-card-body">
                <div className="cv-card-brief">
                  Serve software and automation process for GDRFA (Dubai
                  Immigration Authority) and citizen passport and citizen
                  systems Achievements/Tasks
                </div>
                <ul className="list">
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">Smart Channels</span>
                    built on Outsystems and its about applying all Dubai visa
                    types, from one channel, so audience is quite big
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        CSS
                        <div className="cv-badge-extend">10%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        jQuery
                        <div className="cv-badge-extend">20%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Outsystems
                        <div className="cv-badge-extend">50%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Automation Testing
                        <div className="cv-badge-extend">20%</div>
                      </div>
                      <div className="cv-badge cv-badge-small">JIRA</div>
                      <div className="cv-badge cv-badge-small">
                        Dashboard Design
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Unified Channel & EAP
                    </span>
                    built on microservices, very configurable, big distributed
                    system, the project also serves all Dubai visa types
                    submitting, in addition to the passport and other judicial
                    services
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-small cv-badge-golden">
                        Microservices
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Angular
                        <div className="cv-badge-extend">50%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        WCF
                        <div className="cv-badge-extend">35%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Oracle
                        <div className="cv-badge-extend">5%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Jenkins
                        <div className="cv-badge-extend">5%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        gitlab
                        <div className="cv-badge-extend">5%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Integrated Systems
                    </span>
                    There were integrations with other system, managed by other
                    teams in emaratech, like Noqudi payment gateway, application
                    that is used for initial approvals called IQCS, also one
                    more which called Vision Core where final approvals are
                    implemented for the internal officers
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-small">
                        Payment Gateway
                      </div>
                      <div className="cv-badge cv-badge-small">
                        Roles Engine
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Integration Testing
                    </span>
                    the project target is to get more confident on releases,
                    specflow with .net got evaluated in my team, I was
                    responsible to write the useful APIs of the platforms in
                    order to make it easier to other developers to use
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-small">specflow</div>
                      <div className="cv-badge cv-badge-small">
                        Integration Testing
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Government Entities Integrations
                    </span>
                    implemented the UAE Pass integration in the main Smart
                    Channels portal
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-small">oauth</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-card">
              <div className="cv-card-header">
                Dubai Municipality <small>Out sourced from REACH Group</small>
              </div>
              <div className="cv-card-header">Sr. Software Engineer</div>
              <div className="cv-badge card-cv-badge">
                07/2015 - 08/2017, Dubai, UAE
              </div>
              <div className="cv-card-body">
                <div className="cv-card-brief">Achievements/Tasks</div>
                <ul className="list">
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Service Catalogue
                    </span>
                    which is a part of the portal system of the Municipality web
                    portal, where customers find the services, launching a
                    service on the portal had a long process business workflow
                    where the service view and prerequisite need to pass through
                    many officers in order to get displayed officially
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        ASP Forms
                        <div className="cv-badge-extend">65%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">35%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">Waste Management</span>
                    a system was implemented to consume APIs to dump
                    construction waste and it uses RFID hardware integration
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        ASP MVC
                        <div className="cv-badge-extend">85%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">15%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">Service Adoption</span>
                    measures the KPI of the services with the integration in big
                    data, also the project has dashboard for officers to
                    navigate through some diagrams and meters about the service
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        MeteorJS
                        <div className="cv-badge-extend">80%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        MongoDB
                        <div className="cv-badge-extend">20%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Drawing Stamping System
                    </span>
                    this belongs to the building department a service which
                    generates reports from database with a specific status, I
                    had to tune the to meet the required
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        VB.Net
                        <div className="cv-badge-extend">90%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Crystal Reports
                        <div className="cv-badge-extend">90%</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-card">
              <div className="cv-card-header">NAGA Architects</div>
              <div className="cv-card-header">IT Programmer</div>
              <div className="cv-badge card-cv-badge">
                01/2013 - 05/2015, Dubai, UAE
              </div>
              <div className="cv-card-body">
                <div className="cv-card-brief">
                  consultant company, had an automation system to manage
                  process, workflow and archive actions and communications
                </div>
                <ul className="list">
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">NAGA BIM</span>
                    the goal of the project is to socialize Naga System by
                    adding chatting for employee conversations, and make it more
                    user friendly and give it good UX, besides socializing it
                    also integrates with Revit Server Autodesk to allow
                    architects to view and write notes in the project modules.
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        ASP MVC
                        <div className="cv-badge-extend">70%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">25%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Bootstrap
                        <div className="cv-badge-extend">5%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">Naga System WEB</span>
                    the goal of the project is to move from Naga System Windows
                    based applications into web based applications.
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        ASP MVC
                        <div className="cv-badge-extend">50%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">25%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        JQuery
                        <div className="cv-badge-extend">20%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        DevExpress MVC
                        <div className="cv-badge-extend">5%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Naga System WINDOWS
                    </span>
                    a windows application allows engineers, planners to follow
                    up, manage, monitor, document the process of project status
                    with clients and other parties (providers, suppliers,
                    constructors and municipalities)
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Delphi
                        <div className="cv-badge-extend">70%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">25%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        DevExpress Windows
                        <div className="cv-badge-extend">5%</div>
                      </div>
                    </div>
                  </li>
                  <li className="cv-list-item">
                    <span className="cv-list-item-title">
                      Daily Time Record{" "}
                    </span>
                    a windows applications run on all NAGA employees where they
                    can record the daily tasks and sort it by project which
                    allows the system to generate reports about the project
                    cost, the application is integrated with fingerprint
                    machines for employees to punch once they arrive and leave
                    the office
                    <div className="cv-badge-container">
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        Delphi
                        <div className="cv-badge-extend">70%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        SQL Server
                        <div className="cv-badge-extend">25%</div>
                      </div>
                      <div className="cv-badge cv-badge-has-extend cv-badge-small">
                        DevExpress Windows
                        <div className="cv-badge-extend">5%</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-card">
              <div className="cv-card-header">SIT</div>
              <div className="cv-card-header">IT Programmer</div>
              <div className="cv-badge card-cv-badge">
                07/2007 - 12/2012, Damascus, Syria
              </div>
              <div className="cv-card-body">
                <div className="cv-card-brief">
                  Serves Syrian government sector including ministries and sub
                  organizations, the applications delivered to clients was
                  across the country, ERP for Government Organizations
                </div>
                <ul className="list">
                  <li className="cv-list-item">Ministry of Food Industries</li>
                  <li className="cv-list-item">
                    Earlier Projects (In Syria) The general corporation of land
                    reclamation
                  </li>
                  <li className="cv-list-item">
                    General Authority for Remote Sensing
                  </li>
                  <li className="cv-list-item">
                    General Authority for Television and Radio station
                  </li>
                  <li className="cv-list-item">Petroleum Institute in Homs</li>
                  <li className="cv-list-item">
                    Electricity Company of Deir Al-Zour
                  </li>
                  <li className="cv-list-item">
                    Electricity Company of Al-Konitra
                  </li>
                  <li className="cv-list-item">
                    Directorate of Training and Rehabilitation
                  </li>
                  <li className="cv-list-item">Ministry of Transport</li>
                  <li className="cv-list-item">
                    General Organization for Civil Aviation
                  </li>
                  <li className="cv-list-item">
                    General Organization for Food Industries
                  </li>
                  <li className="cv-list-item">
                    General Organization for Cement and Building Materials -
                    Hama cement factory
                  </li>
                </ul>
                <div className="cv-badge-container">
                  <div className="cv-badge cv-badge-has-extend cv-badge-small">
                    Delphi
                    <div className="cv-badge-extend">40%</div>
                  </div>
                  <div className="cv-badge cv-badge-has-extend cv-badge-small">
                    Oracle 10
                    <div className="cv-badge-extend">55%</div>
                  </div>
                  <div className="cv-badge cv-badge-has-extend cv-badge-small">
                    PL/SQL
                    <div className="cv-badge-extend">5%</div>
                  </div>
                </div>
              </div>
            </div>
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
