"use client";

import Image from "next/image";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/user.svg"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
      />
      <Image
        src="/bell.svg"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
      />
      <Image
        src="/cart.svg"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
      />
    </div>
  );
};

export default NavIcons;
