import "../css/style.css";

const Home: React.FC = () => {
  return (
    <>
      <header className="header"></header>

      <main>
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
                className="sec-intro--summary__text-class-style"
                style={{ color: "#28b485" }}
              >
                {" "}
                FrontEnd Developer
              </span>{" "}
              with more than
              <span
                className="sec-intro--summary__text-class-style"
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
                className="sec-intro--summary__text-class-style"
                style={{ color: "#28b485" }}
              >
                efficient business solutions
              </span>
              .
            </p>
            <p>
              Handled a{" "}
              <span
                className="sec-intro--summary__text-class-style"
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
          <div className="sec-tech--skills">
            <div className="sec-tech--skill">React.js</div>
            <div className="sec-tech--skill">Redux</div>
            <div className="sec-tech--skill">
              Enzyme & React-Testing-Library
            </div>
            <div className="sec-tech--skill">Material UI & UI Core</div>
            <div className="sec-tech--skill">Visual Studio Code, Webpack</div>
            <div className="sec-tech--skill">Eslint</div>
            <div className="sec-tech--skill">Axios</div>
            <div className="sec-tech--skill">Babel</div>
            <div className="sec-tech--skill">Git</div>
            <div className="sec-tech--skill">Npm/Npx</div>
            <div className="sec-tech--skill">Prettier</div>
            <div className="sec-tech--skill">ESLint</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

// React and Development Tools:
//   React.js
//   Redux
//   Enzyme & React-Testing-Library
//   Material UI & UI Core
//   Visual Studio Code, Webpack
//   Eslint, Axios, Babel, Git, Npm
//   Prettier
