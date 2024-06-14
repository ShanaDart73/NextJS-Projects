import FeaturedList from "/app/components/e-commerce/FeaturedList";
import Link from "next/link";

const sales = "Sale! Up to 50% off";
const salesProduct = "Delicious fruit from Kenya";

const Content = () => {
  return (
    <div className="grow">
      <div className="w-screen flex flex-col">
        <div className="h-1/2">
          <video
            src={require("../../../public/africaFruit.mp4")}
            autoPlay
            muted
            loop
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div className="h-1/2 flex flex-col items-center py-8 bg-sales gap-8 xl:gap-10">
          <p className="text-4xl xl:text-5xl">{sales}</p>
          <h1 className="text-center text-5xl xl:text-6xl">{salesProduct}</h1>
          <Link href="#" className="">
            <button className="rounded-xl bg-green-600 text-dart py-3 px-4">
              SHOP NOW
            </button>
          </Link>
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
