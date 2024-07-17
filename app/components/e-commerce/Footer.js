import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
              priority={false}
              className="lg:w-12 h-12 xl:w-16 h-16"
            />
          </Link>
          <p>17 B-C Lehel street, 1134 Budapest, Hungary</p>
          <span className="font-semibold">hello@shanashop.com</span>
          <span className="font-semibold">+36 70 123 4567</span>
          <div className="flex gap-6">
            <Image
              src="/facebook.svg"
              alt=""
              width={14}
              height={14}
              className="cursor-pointer"
            />
            <Image
              src="/instagram.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/youtube.svg"
              alt=""
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/pinterest.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/twitter.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className=" hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-10">
            <h1 className="uppercase">Company</h1>
            <div className="flex flex-col justify-between gap-6">
              <Link href="#">About Us</Link>
              <Link href="#">Career</Link>
              <Link href="#">Affiliates</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="uppercase">shop</h1>
            <div className="flex flex-col justify-between gap-6">
              <Link href="#">New Arrivals</Link>
              <Link href="#">Pick-Up Points</Link>
              <Link href="#">Shipments</Link>
              <Link href="#">Return Policy</Link>
              <Link href="#">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="uppercase">help</h1>
            <div className="flex flex-col justify-between gap-6">
              <Link href="#">Customer Service</Link>
              <Link href="#">My Account</Link>
              <Link href="#">Find a Store</Link>
              <Link href="#">Legal & Privacy</Link>
              <Link href="#">Gift Card</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg uppercase">subscribe</h1>
          <p>
            Be the first to get the latest news about trends, promotion and much
            more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-shana text-dart uppercase">join</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className=" flex justify-between">
            <Image src="/mastercard.png" alt="" width={48} height={48} />
            <Image src="/visa.png" alt="" width={48} height={48} />
            <Image src="/americaexpress.png" alt="" width={48} height={48} />
            <Image src="/discover.png" alt="" width={48} height={48} />
            <Image src="/dinersclub.png" alt="" width={48} height={48} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2024 Shana Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className=""></div>
          <span className="text-gray-500 mr-4">Language</span>
          <span className="font-medium">Hungary | English</span>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
