import Navbar from "/app/components/e-commerce/Navbar";
import Content from "/app/components/e-commerce/Content";
import Footer from "/app/components/e-commerce/Footer";

const Homepage = () => {
  return (
    <div className="h-screen text-black bg-dart flex flex-col">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Homepage;
