import Link from "next/link";
import Image from "next/image";
import Menu from "/app/components/e-commerce/Menu";
import SearchBar from "/app/components/e-commerce/SearchBar";
import NavIcons from "/app/components/e-commerce/NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 md:px-8 lg:px-16 xl:px-20 2xl:px-36 relative">
      <div className="h-full p-4 flex items-center justify-between md:hidden">
        <Link href="/" className="">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="logo"
            priority={false}
          />
        </Link>
        <Menu />
      </div>
      <div className="hidden pt-4 pb-2 md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/2 xl:w-1/3 flex items-center gap-4 lg:gap-12">
          <Link href="/" className="">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
              priority={false}
            />
          </Link>
          <div className="md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="w-1/2 xl:w-2/3 flex items-center justify-between gap-4 lg:gap-12">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
