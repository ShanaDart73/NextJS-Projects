import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="my-10 px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://www.rootsplants.co.uk/cdn/shop/products/dukeofyorkpeach-1.jpg?v=1684426956"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://cdn.mos.cms.futurecdn.net/RZpjoB2ryfQmiYzJdE7RCe-1200-80.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://www.greenheartuae.com/wp-content/uploads/2022/10/organicpapaya.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://backyardcitrustrees.com/cdn/shop/products/Page_Orange_Tree-100_500x500.jpg?v=1578543160"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://www.rootsplants.co.uk/cdn/shop/products/dukeofyorkpeach-1.jpg?v=1684426956"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://cdn.mos.cms.futurecdn.net/RZpjoB2ryfQmiYzJdE7RCe-1200-80.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://www.greenheartuae.com/wp-content/uploads/2022/10/organicpapaya.jpg"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/e-commerce/list?cat=test"
          className="flex-shrink-0 w-full
          sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://backyardcitrustrees.com/cdn/shop/products/Page_Orange_Tree-100_500x500.jpg?v=1578543160"
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-clip tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
