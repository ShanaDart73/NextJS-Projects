import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewProductList = () => {
  return (
    <div className="my-10 flex gap-x-1 gap-y-16 justify-around flex-wrap">
      <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Link href="#">
          <div className="relative w-full h-80">
            <Image
              src="https://gartencenter.li/73/ananas.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Pineapple</span>
          <span className="font-medium text-lg xl:text-2xl">$5.99</span>
        </div>
        <div className="text-lg xl:text-2xl text-gray-500 px-4">
          My description
        </div>
        <div className="px-4">
          <button
            className="rounded-3xl ring-1 ring-shana text-shana w-max
            py-2 px-4 text-lg hover:bg-shana hover:text-dart xl:text-2xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Link href="#">
          <div className="relative w-full h-80">
            <Image
              src="https://exoticfruits.co.uk/cdn/shop/products/dragon-fruit-pitaya-white-exoticfruitscouk-988200.jpg?v=1645489225"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Dragon Fruit</span>
          <span className="font-medium text-lg xl:text-2xl">$4.99</span>
        </div>
        <div className="text-lg xl:text-2xl text-gray-500 px-4">
          My description
        </div>
        <div className="px-4">
          <button
            className="rounded-3xl ring-1 ring-shana text-shana w-max
            py-2 px-4 text-lg hover:bg-shana hover:text-dart xl:text-2xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Link href="#">
          <div className="relative w-full h-80">
            <Image
              src="https://www.flushinghospital.org/newsletter/wp-content/uploads/2021/06/mangopic.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Mango</span>
          <span className="font-medium text-lg xl:text-2xl">$3.99</span>
        </div>
        <div className="text-lg xl:text-2xl text-gray-500 px-4">
          My description
        </div>
        <div className="px-4">
          <button
            className="rounded-3xl ring-1 ring-shana text-shana w-max
            py-2 px-4 text-lg hover:bg-shana hover:text-dart xl:text-2xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <Link href="#">
          <div className="relative w-full h-80">
            <Image
              src="https://cdn.britannica.com/72/170772-050-D52BF8C2/Avocado-fruits.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Avocado</span>
          <span className="font-medium text-lg xl:text-2xl">$5.49</span>
        </div>
        <div className="text-lg xl:text-2xl text-gray-500 px-4">
          My description
        </div>
        <div className="px-4">
          <button
            className="rounded-3xl ring-1 ring-shana text-shana w-max
            py-2 px-4 text-lg hover:bg-shana hover:text-dart xl:text-2xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductList;
