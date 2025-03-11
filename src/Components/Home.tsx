import "../css/style.css";

const Home: React.FC = () => {
  return (
    <>
      <header className="header"></header>

      <main>
        <section className="sec-main">
          <div className="sec-main--div">
            <span className="sec-main--intro">Welcome To My Portfolio</span>
          </div>
          <section className="sec-main--details">
            <div className="sec-main--border">
              <span className="sec-main--goldText sec-main--fullName">
                Triambak Anand
              </span>
              <div style={{ display: "grid", justifyContent: "center" }}>
                <span className="sec-main--goldText sec-main--role">
                  CSE Senior Analyst
                  <hr className="sec-main--hrGold" />
                </span>
              </div>
              <span className="sec-main--goldText gap">
                <i className="fa-solid fa-envelope"></i>
                &nbsp;triambakanand@gmail.com
              </span>
              <span className="sec-main--goldText gap">
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
              <span className="sec-main--goldText gap">
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
              <span className="sec-main--goldText gap">
                <i className="fa-solid fa-phone"></i> &nbsp;91-9588665698
              </span>
              <span className="sec-main--goldText gap">
                <i className="fa-solid fa-location-dot"></i> &nbsp;Pune, India
              </span>
            </div>
          </section>
        </section>
        <section className="sec-intro">
          <div className="sec-intro--div">
            <span className="sec-intro--intro">
              <hr />
              Introduction
              <hr />
            </span>
          </div>
          <div className="sec-intro--summary">
            <p>
              Passionate
              <span
                className="sec-intro--summary__text-className-style"
                style={{ color: "#28b485" }}
              >
                {" "}
                FrontEnd Developer
              </span>{" "}
              with more than
              <span
                className="sec-intro--summary__text-className-style"
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
                className="sec-intro--summary__text-className-style"
                style={{ color: "#28b485" }}
              >
                efficient business solutions
              </span>
              .
            </p>
            <p>
              Handled a{" "}
              <span
                className="sec-intro--summary__text-className-style"
                style={{ color: "#28b485" }}
              >
                team of 4-5 members
              </span>{" "}
              and guided them to provide industry standard output.
            </p>
          </div>
        </section>

        <section className="sec-keyskills">
          <div className="sec-keyskills--div">
            <span className="sec-keyskills--keyskills">
              <hr />
              Key Skills
              <hr />
            </span>
          </div>
          <div className="sec-keyskills--skills">
            <div className="sec-keyskills--skill">Front-end Architecture</div>
            <div className="sec-keyskills--skill">
              Responsive Wireframe & UX Design
            </div>
            <div className="sec-keyskills--skill">RESTful APIs</div>
            <div className="sec-keyskills--skill">
              OAuth & JWT Authentication
            </div>
            <div className="sec-keyskills--skill">API Authorization</div>
            <div className="sec-keyskills--skill">Performance Improvement</div>
            <div className="sec-keyskills--skill">
              Unit Testing & Localization
            </div>
            <div className="sec-keyskills--skill">
              Agile Project Methodology
            </div>
          </div>
        </section>

        <section className="sec-tech">
          <div className="sec-tech--div">
            <span className="sec-tech--techSkills">
              <hr />
              Technical Skills
              <hr />
            </span>
          </div>
          {/* <div className="sec-tech--skills">
            <div className="sec-tech--skill">React.js</div>
            <div className="sec-tech--skill">Redux</div>
            <div className="sec-tech--skill">React-Testing-Library</div>
            <div className="sec-tech--skill">Material UI & UI Core</div>
            <div className="sec-tech--skill">Visual Studio Code</div>
            <div className="sec-tech--skill">Webpack</div>
            <div className="sec-tech--skill">Eslint</div>
            <div className="sec-tech--skill">Axios</div>
            <div className="sec-tech--skill">Babel</div>
            <div className="sec-tech--skill">Git</div>
            <div className="sec-tech--skill">Npm/Npx</div>
            <div className="sec-tech--skill">Prettier</div>
            <div className="sec-tech--skill">ESLint</div>
            <div className="sec-tech--skill">GitLab</div>
            <div className="sec-tech--skill">GitHub</div>
            
          </div> */}
          <div className="sec-tech--card">
            <div className="sec-tech--card__1">
              <div className="sec-tech--heading">
                &#8284;Technologies&#8284;
                <hr style={{ border: "1px solid #f9bc61" }} />
              </div>
              <div className="sec-tech--skills">
                <div>
                  <div className="sec-tech--skill">
                    &#8901; Javascript &#8901;
                  </div>
                  <div className="sec-tech--star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech--skill">
                    &#8901; React.js &#8901;
                  </div>
                  <div className="sec-tech--star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech--skill">
                    &#8901; Typescript &#8901;
                  </div>
                  <div className="sec-tech--star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>

                <div>
                  <div className="sec-tech--skill">&#8901; Redux &#8901;</div>
                  <div className="sec-tech--star">
                    &#9733;&#9733;&#9733;&#9733;&#9734;
                  </div>
                </div>
              </div>

              {/* <div className="sec-tech--skill__star"></div> */}
            </div>
            <div className="sec-tech--card__2">
              <div className="sec-tech--heading">
                &#8280;Dev Tools&#8280;
                <hr style={{ border: "1px solid #f9bc61" }} />
              </div>
              <div className="sec-tech--skills">
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; StackHawk &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Aqua &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; VS Code &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Webpack &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Eslint &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; SonarQube &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Axios &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Babel &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; GIT &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Npm/Npx &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Azure DevOps &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Prettier &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Material UI &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; UI Core &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; JWT &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; OAuth 2.0 &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; React-Testing-Library &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech--skill sec-tech--skill__gap">
                    &#8901; Jest &#8901;
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="sec-tech--heading">Dev Tools</div> */}
          </div>

          {/* <div className="container">
            <div className="box">
              <div className="shadow"></div>
              <div className="content">
                <div
                  className="percent"
                  data-text="HTML"
                  style={{ "--num": 85 } as React.CSSProperties}
                >
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                </div>
                <div className="number">
                  <h2>
                    85<span>%</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="shadow"></div>
              <div className="content">
                <div
                  className="percent"
                  data-text="CSS"
                  style={{ "--num": 57 } as React.CSSProperties}
                >
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                </div>
                <div className="number">
                  <h2>
                    57<span>%</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="shadow"></div>
              <div className="content">
                <div
                  className="percent"
                  data-text="JS"
                  style={{ "--num": 30 } as React.CSSProperties}
                >
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                </div>
                <div className="number">
                  <h2>
                    30<span>%</span>
                  </h2>
                </div>
              </div>
            </div>
          </div> */}

          {/* Example */}
          {/* <div className="container">
            <div
              className="percent"
              data-text="HTML"
              style={{ "--num": 85 } as React.CSSProperties}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
          </div> */}
          <div className="container">
            <div
              className="percent"
              data-text="HTML"
              style={{ "--num": 85 } as React.CSSProperties}
            >
              <div className="dot"></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
