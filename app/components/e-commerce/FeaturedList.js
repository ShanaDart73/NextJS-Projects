import Link from "next/link";
import Image from "next/image";

const guavaDescription =
  "This tasty-looking guavas from Mexico, cultivated with natural nutrition, in addition of full sun that gives flavour and sweetness to the guavas.";

const FeaturedList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="#"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
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
        <div className="flex justify-between">
          <span className="font-medium">Guava</span>
          <span className="font-medium">$5.59</span>
        </div>
        <div className="text-sm text-gray-500">{guavaDescription}</div>
        <button className="rounded-2xl ring-1 ring-shana text-shana w-max py-2 px-4 text-xs hover:bg-shana hover:text-dart">
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default FeaturedList;
