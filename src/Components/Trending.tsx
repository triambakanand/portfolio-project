import "../css/style.css";

const Trending: React.FC<{}> = ({ ...props }) => {
  return (
    <>
      <div className="main-div">
        <span
          style={{
            color: "#ae8337",
            fontSize: "2rem",
            backgroundColor: "#f7f7f7",
          }}
        >
          Trending - Coming Soon!
        </span>
      </div>
    </>
  );
};

export default Trending;
