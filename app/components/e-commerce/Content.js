import "/app/styles/e-commerce/style.css";

const Content = () => {
  return (
    <div className="e-com-content">
      <div>
        <div className="promo">
          <p>Sale! Up to 50% off</p>
          <h1>Delicious fruit</h1>
          <h2>from Africa</h2>
        </div>
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
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Content;
