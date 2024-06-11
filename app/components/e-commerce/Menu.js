"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.svg"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((menu) => !menu)}
      />
      {open && (
        <div
          className="absolute bg-black text-dart left-0 top-20 w-full h-[calc(100vh-80px)]
            flex flex-col items-center justify-start pt-8 gap-8 text-2xl z-20"
        >
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
