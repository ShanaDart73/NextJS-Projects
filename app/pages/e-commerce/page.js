import "../../styles/e-commerce/style.css";
import Navbar from "/app/components/e-commerce/Navbar";
import Content from "/app/components/e-commerce/Content";
import Footer from "/app/components/e-commerce/Footer";

const Homepage = () => {
  return (
    <div className="e-com-container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Homepage;
