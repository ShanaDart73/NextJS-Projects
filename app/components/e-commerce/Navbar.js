import Link from "next/link";
import Image from "next/image";
import Menu from "/app/components/e-commerce/Menu";
import "/app/styles/e-commerce/style.css";

const Navbar = () => {
  return (
    <div className="e-com-navbar">
      <Link href="/" className="">
        <Image
          src="/logo.svg"
          width={50}
          height={50}
          alt="logo"
          priority={false}
        />
      </Link>
      <Menu />
    </div>
  );
};

export default Navbar;
