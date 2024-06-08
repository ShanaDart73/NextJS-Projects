"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "/app/styles/e-commerce/style.css";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.svg"
        alt=""
        width={28}
        height={28}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen((menu) => !menu)}
      />
      {open && (
        <div className="e-com-menu">
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
