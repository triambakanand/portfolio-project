import Navbar from "./Components/Navbar";
import "./css/style.css";

const PortFolioHome: React.FC<{}> = ({ ...props }) => {
  return (
    <div className="master-div">
      <Navbar />
    </div>
  );
};

export default PortFolioHome;
