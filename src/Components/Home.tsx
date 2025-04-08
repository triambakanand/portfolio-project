import "../css/style.css";
import jsImg from "../Assets/javascript.png";
import reactImg from "../Assets/react.png";
import esLintImg from "../Assets/eslint.png";
import gitImg from "../Assets/git.png";
import nodejsImg from "../Assets/nodejs.png";
import axiosImg from "../Assets/axios.png";
import prettierImg from "../Assets/prettier.png";
import tsImg from "../Assets/typescript.png";
import jwtImg from "../Assets/jwt.png";
import webpackImg from "../Assets/webpack.png";
import expressImg from "../Assets/expressjs.png";
import mongdoDbImg from "../Assets/mongodb.png";
import jestImg from "../Assets/jest.png";
import npmnpxImg from "../Assets/npm_npx.png";
import reduxImg from "../Assets/redux.png";
import stackhawkImg from "../Assets/stackhawk.png";
import sonarqubeImg from "../Assets/sonarqube.png";
import html5Img from "../Assets/html5.jpg";
import css3Img from "../Assets/css3.png";
import vscodeImg from "../Assets/vscode.png";
import babelImg from "../Assets/babel.png";
import otelImg from "../Assets/otel.png";
import mongooseImg from "../Assets/mongoose.png";
import outh2Img from "../Assets/oauth2.png";
import azuredevopsImg from "../Assets/azure devops.png";
import elasticImg from "../Assets/elasticapm.png";
import rtlImg from "../Assets/rtl.png";
import muiImg from "../Assets/materialui.png";
import aquaImg from "../Assets/aqua.png";
import accImg from "../Assets/accImg.png";
import infImg from "../Assets/infImg.png";
import inImg from "../Assets/inImg.png";
import persiImg from "../Assets/Persistent_Systems_Logo.svg";

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
                    &#8901; React-Testing-library &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Jest &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Elastic-APM &#8901;
                  </div>
                </div>
                <div>
                  <div className="sec-tech__skill sec-tech__skill--gap">
                    &#8901; Open-Telemetry &#8901;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="sec-expe">
          <div className="sec-expe__div">
            <span className="sec-expe__expeSkills">
              <hr />
              Work Experience
              <hr />
            </span>
          </div>
          <div className="sec-expe__container">
            <div className="sec-expe__grid1">
              <div className="sec-expe__content">
                <img
                  src={accImg}
                  alt="Accenture logo"
                  className="sec-expe__companyLogo--1"
                />
                <div className="sec-expe__content__cw">
                  Currently Working - Since Sept 2024
                </div>
                <div className="sec-expe__content__details">
                  <b style={{ color: "#000" }}>Position:</b> Custom Software
                  Engineering Senior Analyst
                </div>
                <div className="sec-expe__content__details sec-expe__content__details--1">
                  <b style={{ color: "#000" }}>Role:</b> Frontend Team Lead and
                  Engineer
                </div>
                <div className="sec-expe__content__details">
                  <b style={{ color: "#000" }}>Project:</b> METROLINX
                </div>
                <div className="sec-expe__content__details">
                  <b style={{ color: "#000" }}>Project Description:</b>{" "}
                  Developed integrated Frontend application which brings various
                  types of PRESTO applications into a central hub for better
                  accessbility and reach. Main components handled from frontend
                  side are REACT, Azure B2B SSO Login, Azure COSMOS DB, Azure
                  Web App Services and Azure DevOps for deployment
                </div>
                <div className="sec-expe__content__details sec-expe__content__details--2">
                  <b style={{ color: "#000" }}>Key Points</b>
                </div>
                <div className="sec-expe__content__details sec-expe__content__details--3">
                  <ul>
                    <li className="sec-expe__content__details__bulletPoint">
                      Converted wireframes into highly responsive UI.
                    </li>
                    <li className="sec-expe__content__details__bulletPoint">
                      Provided Client efficient architectural flow.
                    </li>
                    <li className="sec-expe__content__details__bulletPoint">
                      Implemented business solutions to provide maximum
                      throughput
                    </li>
                    <li className="sec-expe__content__details__bulletPoint">
                      Implemented Azure B2B SSO feature for Login and Session
                      Management.
                    </li>
                    <li className="sec-expe__content__details__bulletPoint">
                      Made UI AODA/WCAG compliant.
                    </li>
                    <li className="sec-expe__content__details__bulletPoint">
                      Achieved 100% in both branch and line coverage of Unit
                      Test Cases.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sec-expe__grid2"></div>
            <div className="sec-expe__box"></div>
          </div>

          {/* Sample Code Below*/}
          <div className="sec-expe__container">
            <div className="sec-expe__grid1">
              <div className="sec-expe__content">
                <img
                  src={inImg}
                  alt="Infy logo"
                  className="sec-expe__companyLogo--2"
                />
              </div>
            </div>
            <div className="sec-expe__grid2"></div>
            <div className="sec-expe__box"></div>
          </div>

          <div className="sec-expe__container">
            <div className="sec-expe__grid1">
              <div className="sec-expe__content">
                <img
                  src={persiImg}
                  alt="Persi logo"
                  className="sec-expe__companyLogo--3"
                />
              </div>
            </div>
            <div className="sec-expe__grid2"></div>
            <div className="sec-expe__box"></div>
          </div>
        </section>

        <section className="gallery-container">
          <section className="gallery">
            <figure className="gallery__item gallery__item--1">
              <img
                src={reduxImg}
                alt="Gallery img 1"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--2">
              <img src={jsImg} alt="Gallery img 2" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--3">
              <img
                src={esLintImg}
                alt="Gallery img 3"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--4">
              <img src={gitImg} alt="Gallery img 4" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--5">
              <img
                src={reactImg}
                alt="Gallery img 5"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--6">
              <img
                src={axiosImg}
                alt="Gallery img 6"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--7">
              <img
                src={prettierImg}
                alt="Gallery img 7"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--8">
              <img src={tsImg} alt="Gallery img 8" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--9">
              <img
                src={webpackImg}
                alt="Gallery img 9"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--10">
              <img src={jwtImg} alt="Gallery img 10" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--11">
              <img
                src={mongdoDbImg}
                alt="Gallery img 11"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--12">
              <img
                src={expressImg}
                alt="Gallery img 12"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--13">
              <img
                src={nodejsImg}
                alt="Gallery img 13"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--14">
              <img
                src={jestImg}
                alt="Gallery img 14"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--15">
              <img
                src={npmnpxImg}
                alt="Gallery img 15"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--16">
              <img
                src={sonarqubeImg}
                alt="Gallery img 16"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--17">
              <img
                src={html5Img}
                alt="Gallery img 17"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--18">
              <img
                src={stackhawkImg}
                alt="Gallery img 18"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--19">
              <img
                src={babelImg}
                alt="Gallery img 19"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--20">
              <img
                src={outh2Img}
                alt="Gallery img 20"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--21">
              <img
                src={vscodeImg}
                alt="Gallery img 21"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--22">
              <img
                src={otelImg}
                alt="Gallery img 22"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--23">
              <img
                src={css3Img}
                alt="Gallery img 23"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--24">
              <img
                src={mongooseImg}
                alt="Gallery img 24"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--25">
              <img
                src={azuredevopsImg}
                alt="Gallery img 25"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--26">
              <img
                src={aquaImg}
                alt="Gallery img 26"
                className="gallery__img"
              />
            </figure>

            <figure className="gallery__item gallery__item--27">
              <img
                src={elasticImg}
                alt="Gallery img 27"
                className="gallery__img"
              />
            </figure>
            <figure className="gallery__item gallery__item--28">
              <img src={rtlImg} alt="Gallery img 28" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--29">
              <img src={muiImg} alt="Gallery img 29" className="gallery__img" />
            </figure>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
