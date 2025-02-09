import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./css/style.css";
import Home from "./Components/Home";

const PortFolioHome: React.FC<{}> = ({ ...props }) => {
  return (
    <div className="master-div">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* For multiple route paths - useRoutes */}
          {["/", "/portfolio-project"].map((path) => (
            <Route path={path} element={<Home />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PortFolioHome;
