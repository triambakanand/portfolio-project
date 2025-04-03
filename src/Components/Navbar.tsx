import "../css/style.css";
import nationalEmblem from "../Assets/national-emblem.png";
import indiaFlag from "../Assets/flag.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="nav-navbar">
          {/* check later */}
          <Link className="nav-navbar__details" to="/portfolio-project">
            Home
          </Link>
          <Link className="nav-navbar__details" to="/portfolio-learning">
            Learning
          </Link>
          <Link className="nav-navbar__details" to="/portfolio-trending">
            Trending
          </Link>
          <Link className="nav-navbar__details" to="/portfolio-contact">
            Contact
          </Link>
        </nav>
      </div>
      <div className="ind-container">
        <nav className="ind-nav-navbar">
          {/* <img
            className="ind-nav-navbar__details"
            src={nationalEmblem}
            alt="Emblem of India"
          ></img> */}
          <img
            className="ind-nav-navbar__details"
            src={indiaFlag}
            alt="Flag of India"
          ></img>
          {/* <img
            className="ind-nav-navbar__details"
            src={nationalEmblem}
            alt="Emblem of India"
          ></img> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
