import "/app/styles/e-commerce/style.css";

const Content = () => {
  return (
    <div className="e-com-content">
      <h1>Content goes here</h1>
      <di>
        <video
          src={require("../../../public/africaFruit.mp4")}
          autoPlay
          muted
          loop
          style={{ width: "100vw" }}
        />
      </di>
    </div>
  );
};

export default Content;
