import FeaturedList from "/app/components/e-commerce/FeaturedList";
import Link from "next/link";

const sales = "Sale! Up to 50% off";
const salesProduct = "Delicious fruit from Kenya";

const Content = () => {
  return (
    <div className="grow">
      <div className="w-screen flex flex-col xl:flex-row">
        <div className="h-1/2 xl:w-1/2 flex flex-col items-center py-14 bg-sales gap-8 xl:gap-10">
          <p className="text-4xl xl:text-5xl">{sales}</p>
          <h1 className="max-w-xs text-center text-5xl xl:text-6xl max-w-md">
            {salesProduct}
          </h1>
          <Link href="#" className="">
            <button className="rounded-md bg-black text-dart py-3 px-4">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="h-1/2 xl:w-1/2 relative">
          <video
            src={require("../../../public/africaFruit.mp4")}
            autoPlay
            muted
            loop
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
      </div>
      <div>
        <div>
          <h2>Featured Products</h2>
          <FeaturedList />
        </div>
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
