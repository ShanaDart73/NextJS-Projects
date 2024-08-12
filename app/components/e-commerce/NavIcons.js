"use client";

import Image from "next/image";
import { useState } from "react";
import CartModal from "./CartModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // TEMPORARY
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      //router.push("/pages/e-commerce/login");
    }
    setIsProfileOpen((open) => !open);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/user.svg"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div
          className="absolute p-4 rounded-md top-12 left-0 text-sm
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20"
        >
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/bell.svg"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((open) => !open)}
      >
        <Image src="/cart.svg" alt="" width={24} height={24} />
        <div
          className="absolute -top-4 -right-4 w-6 bg-shana rounded-full
                text-dart text-sm flex items-center justify-center"
        >
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
