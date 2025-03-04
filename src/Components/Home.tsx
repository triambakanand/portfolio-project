import "../css/style.css";

const Home: React.FC = () => {
  return (
    <>
      <header className="header"></header>

      <main>
        <section className="section-intro">
          <div className="section-intro--div">
            <span className="section-intro--intro">
              <hr />
              Introduction
              <hr />
            </span>
          </div>
          <div className="section-intro--summary">
            <p>
              Passionate
              <span className="section-intro--summary__text-class-style">
                {" "}
                FrontEnd Developer
              </span>{" "}
              with more than
              <span className="section-intro--summary__text-class-style">
                {" "}
                4.5 years
              </span>{" "}
              of experience in the IT Industry with proficient skills in
              developing highly responsive user interfaces using React.js and
              Redux workflows with hands-on experience of converting wireframes
              into high quality code.
            </p>
            <p>
              Interacting with clients and providing them efficient business
              solutions.
            </p>
            <p>
              Handled a team of 4-5 members and guided them to provide industry
              standard output.
            </p>
          </div>
        </section>

        <section className="section-keyskills">
          <div className="section-keyskills--div">
            <span className="section-keyskills--keyskills">
              <hr />
              Key Skills
              <hr />
            </span>
          </div>
          <div className="section-keyskills--skills">
            <div className="section-keyskills--skill">
              Front-end Architecture
            </div>
            <div className="section-keyskills--skill">
              Responsive Wireframe & UX Design
            </div>
            <div className="section-keyskills--skill">RESTful APIs</div>
            <div className="section-keyskills--skill">
              API Authorization & JWT Authentication
            </div>
            <div className="section-keyskills--skill">
              Performance Improvement
            </div>
            <div className="section-keyskills--skill">
              Unit Testing & Localization
            </div>
            <div className="section-keyskills--skill">
              Agile Project Methodology
            </div>
          </div>
          {/* <div className="section-keyskills--skills">
            <div className="section-keyskills--skill">
              Front-end Architecture
            </div>
            <div className="section-keyskills--skill">
              Responsive Wireframe & UX Design
            </div>
            <div className="section-keyskills--skill">RESTful APIs</div>
            <div className="section-keyskills--skill">
              API Authorization & Authentication JWT
            </div>
            <div className="section-keyskills--skill">
              Performance Improvement
            </div>
            <div className="section-keyskills--skill">
              Unit Testing & Localization
            </div>
            <div className="section-keyskills--skill">
              Agile Project Methodology
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
};

export default Home;
