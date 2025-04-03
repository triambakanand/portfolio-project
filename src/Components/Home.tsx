import "../css/style.css";

const Home: React.FC = () => {
  return (
    <>
      <header className="header"></header>

      <main>
        <section className="sec-main">
          <div className="sec-main__div">
            <span className="sec-main__intro">Welcome To My Portfolio</span>
          </div>
          <section className="sec-main__details">
            <div className="sec-main__border">
              <span className="sec-main__goldText sec-main__fullName">
                Triambak Anand
              </span>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <span className="sec-main__goldText sec-main__role">
                  CSE Senior Analyst
                  <hr className="sec-main__hrGold" />
                </span>
              </div>
              <span className="sec-main__goldText gap">
                <i className="fa-solid fa-envelope"></i>
                &nbsp;triambakanand@gmail.com
              </span>
              <span className="sec-main__goldText gap">
                <i className="fa-brands fa-linkedin"></i>
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/triambakanand"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/triambakanand
                </a>
              </span>
              <span className="sec-main__goldText gap">
                <i className="fa-brands fa-github"></i>
                &nbsp;
                <a
                  href="https://github.com/triambakanand"
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/triambakanand
                </a>
              </span>
              {/* <span className="sec-main--goldText gap">
                <i className="fa-solid fa-phone"></i> &nbsp;
              </span> */}
              <span className="sec-main__goldText gap">
                <i className="fa-solid fa-location-dot"></i> &nbsp;Pune, India
              </span>
            </div>
          </section>
        </section>
        <section className="sec-intro">
          <div className="sec-intro__div">
            <span className="sec-intro__intro">
              <hr />
              Introduction
              <hr />
            </span>
          </div>
          <div className="sec-intro__summary">
            <p>
              Passionate
              <span
                className="sec-intro__summary--text-class-style"
                style={{ color: "#28b485" }}
              >
                {" "}
                FrontEnd Developer
              </span>{" "}
              with more than
              <span
                className="sec-intro__summary--text-class-style"
                style={{ color: "#28b485" }}
              >
                {" "}
                4.5 years
              </span>{" "}
              of experience in the IT Industry with proficient skills in
              developing highly responsive user interfaces using React.js and
              Redux workflows with hands-on experience of converting wireframes
              into high quality code.
            </p>
            <p>
              Interacting with clients and providing them{" "}
              <span
                className="sec-intro__summary--text-class-style"
                style={{ color: "#28b485" }}
              >
                efficient business solutions
              </span>
              .
            </p>
            <p>
              Handled a{" "}
              <span
                className="sec-intro__summary--text-class-style"
                style={{ color: "#28b485" }}
              >
                team of 4-5 members
              </span>{" "}
              and guided them to provide industry standard output.
            </p>
            <p>
              Currently learning Backend technologies, Databases and DevOps to
              become Full Stack Developer
            </p>
          </div>
        </section>

        <section className="sec-keyskills">
          <div className="sec-keyskills__div">
            <span className="sec-keyskills__keyskills">
              <hr />
              Key Skills
              <hr />
            </span>
          </div>
          <div className="td-div">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  Front-end Architecture
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  Front-end architecture is the structure and design of a
                  website's user interface (UI). It includes the layout,
                  components, and how they interact with each other and backend
                  services.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  Responsive Wireframe & UX Design
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  Sets of wireframes and how with different layouts for the same
                  design that: Show how web content adapts to different grid
                  widths
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">RESTful APIs</div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  APIs that follow the principles of Representational State
                  Transfer (REST), using standard HTTP methods like GET, POST,
                  PUT, and DELETE to interact with resources over a web URL,
                  making data accessible in a structured way.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  OAuth & JWT Authentication
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  OAuth is a framework for authorization, allowing third-party
                  apps to access user data without sharing passwords, while JWT
                  is a token format for securely transmitting information, often
                  used for authentication and authorizations.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">API Authorization</div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  Determines if a user or client has the necessary permissions
                  to access specific resources or functions in an API, ensuring
                  only authorized users gain access to sensitive data and
                  functionality.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  Performance Improvement
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  Performance improvement is measuring the output of a
                  particular business process or procedure, then modifying the
                  process or procedure to increase the output, increase
                  efficiency, or increase the effectiveness of the process or
                  procedure.
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  Unit Testing & Localization
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  "Unit testing" refers to testing individual, small units of
                  code in isolation to verify their functionality, while
                  "localization" means adapting a software product to a specific
                  region or culture, including language, currency, date formats,
                  and cultural nuances
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__side--front-text">
                  Agile Project Methodology
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <span className="card__side--back-descp">
                  Agile methodology is a project management approach emphasizing
                  iterative development, flexibility, collaboration, and
                  continuous improvement, breaking down projects into smaller,
                  manageable cycles called sprints to deliver incremental value
                  and adapt to changes quickly.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="sec-tech">
          <div className="sec-tech__div">
            <span className="sec-tech__techSkills">
              <hr />
              Technical Skills
              <hr />
            </span>
          </div>

          <div className="sec-tech__card">
            <div className="sec-tech__card--1">
              <div className="sec-tech__heading">
                &#8284;Technologies&#8284;
                <hr style={{ border: "1px solid #f9bc61" }} />
              </div>
              <div className="sec-tech__skills">
                <div>
                  <div className="sec-tech__skill">
                    &#8901; Javascript &#8901;
                  </div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">
                    &#8901; React.js &#8901;
                  </div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">
                    &#8901; Typescript &#8901;
                  </div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">&#8901; Redux &#8901;</div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">&#8901; HTML5 &#8901;</div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">&#8901; CSS3 &#8901;</div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">&#8901; NodeJs &#8901;</div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9734;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">
                    &#8901; ExpressJs &#8901;
                  </div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9733;&#9734;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">&#8901; MongoDB &#8901;</div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9734;&#9734;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech__skill">
                    &#8901; Mongoose &#8901;
                  </div>
                  <div className="sec-tech__star">
                    &#9733;&#9733;&#9734;&#9734;&#9734;
                  </div>
                </div>
              </div>
            </div>

            <div className="sec-tech__card--2">
              <div className="sec-tech__heading">
                &#8280;Dev Tools&#8280;
                <hr style={{ border: "1px solid #f9bc61" }} />
              </div>
              <div className="sec-tech__skills">
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; StackHawk &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Aqua &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; VS Code &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Webpack &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Eslint &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; SonarQube &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Axios &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Babel &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; GIT &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Npm/Npx &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Azure DevOps &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Prettier &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Material UI &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; UI Core &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; JWT &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; OAuth 2.0 &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; React-Testing-Library &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Jest &#8901;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        {/* <section className="sec-expe">
          <div className="sec-expe--div">
            <span className="sec-expe--expeSkills">
              <hr />
              Work Experience
              <hr />
            </span>
          </div>
          <div className="sec-expe--card">
            <div className="sec-expe--card__1">asd</div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
