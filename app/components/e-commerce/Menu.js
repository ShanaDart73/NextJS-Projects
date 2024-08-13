"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {!open ? (
        <div>
          <img
            src="/menu.svg"
            alt=""
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen((menu) => !menu)}
          />
        </div>
      ) : (
        <button
          className="fixed top-5 right-4 w-6 h-6 fill-current"
          onClick={() => setOpen((menu) => !menu)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      )}
      <div
        className={`fixed bg-black text-dart right-0 top-16 w-1/2 h-[calc(100vh-80px)]
              flex flex-col items-left justify-start pl-16 pt-8 gap-8 text-2xl z-20 ${open ? "translate-x-0" : "translate-x-full"} ease-in-out duration-1000`}
      >
        <Link href="/">Home</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Deals</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Logout</Link>
        <Link href="#">Cart</Link>
      </div>
    </div>
  );
};

export default Menu;
