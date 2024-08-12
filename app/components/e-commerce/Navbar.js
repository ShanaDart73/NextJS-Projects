import Link from "next/link";
import Menu from "/app/components/e-commerce/Menu";
import SearchBar from "/app/components/e-commerce/SearchBar";
import NavIcons from "/app/components/e-commerce/NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 md:px-8 lg:px-18 xl:px-22 2xl:px-36 relative">
      <div className="h-full p-4 flex items-center justify-between md:gap-8 xl:pt-8 xl:pb-8">
        <div className="md:w-1/2 md:flex md:items-center md:gap-4 lg:gap-12 xl:gap-20">
          <Link href="../../pages/e-commerce" className="">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
          </Link>
          <div className="hidden md:flex gap-4 lg:text-xl xl:text-2xl xl:gap-8">
            <Link href="/">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Deals</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
        <Menu />
        <div className="hidden md:w-1/2 md:flex items-center justify-between gap-4 lg:gap-12">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
