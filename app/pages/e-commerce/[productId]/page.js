import React from "react";
import Link from "next/link";

const ProductPage = () => {
  return (
    <>
      <Link href="../e-commerce" className="">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        />
      </Link>
      <div className="text-black">Product Details</div>
    </>
  );
};

export default ProductPage;
