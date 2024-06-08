import Link from "next/link";
import Image from "next/image";
import Menu from "/app/components/e-commerce/Menu";
import "/app/styles/e-commerce/style.css";

const Navbar = () => {
  return (
    <div className="e-com-navbar">
      <Link href="/" className="">
        <Image src="/logo.svg" width={60} height={60} alt="logo" />
      </Link>
      <Menu />
    </div>
  );
};

export default Navbar;
