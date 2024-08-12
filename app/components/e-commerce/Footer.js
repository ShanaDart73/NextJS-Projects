import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-10 px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-32 bg-gray-100 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16"
            />
          </Link>
          <p className="text-lg">17 B-C Lehel street, 1134 Budapest, Hungary</p>
          <span className="text-lg font-semibold">hello@shanashop.com</span>
          <span className="text-lg font-semibold">+36 70 123 4567</span>
          <div className="flex gap-6">
            <img
              src="/facebook.svg"
              alt=""
              className="w-3.5 h-6 cursor-pointer"
            />
            <img
              src="/instagram.svg"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <img src="/youtube.svg" alt="" className="w-8 h-6 cursor-pointer" />
            <img
              src="/pinterest.svg"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <img src="/twitter.svg" alt="" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className=" hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-10">
            <h1 className="text-xl text-center uppercase">Company</h1>
            <div className="flex flex-col justify-between gap-6 text-lg">
              <Link href="#">About Us</Link>
              <Link href="#">Career</Link>
              <Link href="#">Affiliates</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-xl text-center uppercase">shop</h1>
            <div className="flex flex-col justify-between gap-6 text-lg">
              <Link href="#">New Arrivals</Link>
              <Link href="#">Pick-Up Points</Link>
              <Link href="#">Shipments</Link>
              <Link href="#">Return Policy</Link>
              <Link href="#">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-xl text-center uppercase">help</h1>
            <div className="flex flex-col justify-between gap-6 text-lg">
              <Link href="#">Customer Service</Link>
              <Link href="#">My Account</Link>
              <Link href="#">Find a Store</Link>
              <Link href="#">Legal & Privacy</Link>
              <Link href="#">Gift Card</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-xl uppercase">subscribe</h1>
          <p className="text-lg">
            Be the first to get the latest news about trends, promotion and much
            more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 text-lg"
            />
            <button className="w-1/4 bg-shana text-dart uppercase text-xl">
              join
            </button>
          </div>
          <span className="font-semibold text-xl">Secure Payments</span>
          <div className=" flex justify-between">
            <img
              className="w-14 h-8 lg:w-10 xl:w-14"
              src="/mastercard.png"
              alt=""
            />
            <img className="w-14 h-8 lg:w-10 xl:w-14" src="/visa.png" alt="" />
            <img
              className="w-14 h-8 lg:w-10 xl:w-14"
              src="/americaexpress.png"
              alt=""
            />
            <img
              className="w-14 h-8 lg:w-10 xl:w-14"
              src="/discover.png"
              alt=""
            />
            <img
              className="w-14 h-8 lg:w-10 xl:w-14"
              src="/dinersclub.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="text-lg">&copy; 2024 Shana Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex text-lg">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Hungary | English</span>
          </div>
          <div className="flex text-lg">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">Ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
