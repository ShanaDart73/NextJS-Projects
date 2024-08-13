"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const guavaDescription =
  "These tasty-looking guavas from Mexico, cultivated with natural nutrition, in addition of full sun that gives flavour and sweetness to the guavas.";
const peachDescription =
  "These yummy peaches from Japan, cultivated with natural nutrition, in addition of full sun that gives flavour and sweetness to the peaches.";
const orangeDescription =
  "These juicy oranges from Congo, cultivated with natural nutrition, in addition of full sun that gives flavour and sweetness to the oranges.";
const papayaDescription =
  "These delicious-looking papayas from India, cultivated with natural nutrition, in addition of full sun that gives flavour and sweetness to the papayas.";

const FeaturedList = () => {
  const router = useRouter();

  return (
    <div className="my-10 flex gap-x-1 gap-y-16 justify-around flex-wrap">
      <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div onClick={() => router.push("e-commerce/1")}>
          <div className="relative w-full h-80">
            <Image
              src="https://i.guim.co.uk/img/media/f151a31819430ddf387331a8a3df8201f95d4449/0_324_5616_3370/master/5616.jpg?width=1200&quality=85&auto=format&fit=max&s=7557d7972a41cf757dd2719b9129fa23"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://cdn.mos.cms.futurecdn.net/RZpjoB2ryfQmiYzJdE7RCe-1200-80.jpg"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Guava</span>
          <span className="font-medium text-lg xl:text-2xl">$5.59</span>
        </div>
        <div className="text-lg text-gray-500 px-4 lg:h-48 xl:text-2xl">
          {guavaDescription}
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
        <div onClick={() => router.push("e-commerce/2")}>
          <div className="relative w-full h-80">
            <Image
              src="https://blog.sakura.co/wp-content/uploads/2022/03/shutterstock_675217411-1.png"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://www.rootsplants.co.uk/cdn/shop/products/dukeofyorkpeach-1.jpg?v=1684426956"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Peach</span>
          <span className="font-medium text-lg xl:text-2xl">$3.99</span>
        </div>
        <div className="text-lg text-gray-500 px-4 lg:h-48 xl:text-2xl">
          {peachDescription}
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
        <div onClick={() => router.push("e-commerce/3")}>
          <div className="relative w-full h-80">
            <Image
              src="https://thefreshandnatural.com/wp-content/uploads/2020/05/ORANGE-READY-TO-EAT-KG.jpg"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://backyardcitrustrees.com/cdn/shop/products/Page_Orange_Tree-100_500x500.jpg?v=1578543160"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Orange</span>
          <span className="font-medium text-lg xl:text-2xl">$4.99</span>
        </div>
        <div className="text-lg text-gray-500 px-4 lg:h-48 xl:text-2xl">
          {orangeDescription}
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
        <div onClick={() => router.push("e-commerce/4")}>
          <div className="relative w-full h-80">
            <Image
              src="https://carlssfoodcity.com/wp-content/uploads/2023/03/cut-papaya.jpg"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://www.greenheartuae.com/wp-content/uploads/2022/10/organicpapaya.jpg"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-between px-4">
          <span className="font-medium text-lg xl:text-2xl">Papaya</span>
          <span className="font-medium text-lg xl:text-2xl">$6.59</span>
        </div>
        <div className="text-lg text-gray-500 px-4 lg:h-48 xl:text-2xl">
          {papayaDescription}
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

export default FeaturedList;
