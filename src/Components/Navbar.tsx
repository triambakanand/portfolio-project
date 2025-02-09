import "../css/style.css";
import nationalEmblem from "../Assets/national-emblem.png";
import indiaFlag from "../Assets/flag.png";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="nav-navbar">
          <a className="nav-navbar__details" href="/portfolio-project">
            Home
          </a>
          <a className="nav-navbar__details" href="/portfolio-learning">
            Learning
          </a>
          <a className="nav-navbar__details" href="/portfolio-trending">
            Trending
          </a>
          <a className="nav-navbar__details" href="/portfolio-contact">
            Contact
          </a>
        </nav>
      </div>
      <div className="ind-container">
        <nav className="ind-nav-navbar">
          <img
            className="ind-nav-navbar__details"
            src={nationalEmblem}
            alt="Emblem of India"
          ></img>
          <img
            className="ind-nav-navbar__details"
            src={indiaFlag}
            alt="Flag of India"
          ></img>
          <img
            className="ind-nav-navbar__details"
            src={nationalEmblem}
            alt="Emblem of India"
          ></img>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
