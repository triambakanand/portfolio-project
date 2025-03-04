import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./css/style.css";
import Home from "./Components/Home";
import Learning from "./Components/Learning";
import Trending from "./Components/Trending";
import Contact from "./Components/Contact";

const PortFolioHome: React.FC<{}> = ({ ...props }) => {
  return (
    <div className="master-div">
      <Navbar />
      <HashRouter>
        <Routes>
          {/* For multiple route paths - useRoutes */}
          {["/", "/portfolio-project"].map((path, key) => (
            <Route key={key} path={path} element={<Home />} />
          ))}
          <Route path={"/portfolio-learning"} element={<Learning />} />
          <Route path={"/portfolio-trending"} element={<Trending />} />
          <Route path={"/portfolio-contact"} element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default PortFolioHome;
