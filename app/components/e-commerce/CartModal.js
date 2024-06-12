import React from "react";
import Image from "next/image";

const CartModal = () => {
  // TEMPORARY
  const cartItems = true;

  return (
    <div
      className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        bg-dart top-12 right-0 flex flex-col gap-6 z-20"
    >
      <h2 className="text-xl">Shopping Cart</h2>
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            <div className="">
              <div className="flex gap-4">
                <Image
                  src="https://i.guim.co.uk/img/media/f151a31819430ddf387331a8a3df8201f95d4449/0_324_5616_3370/master/5616.jpg?width=1200&quality=85&auto=format&fit=max&s=7557d7972a41cf757dd2719b9129fa23"
                  alt=""
                  width={72}
                  height={72}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Guava</h3>
                      <div className="p-1 bg-yellow-50 rounded-sm">$5.59</div>
                    </div>
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <Image
                  src="https://media.npr.org/assets/img/2011/08/19/istock_000017061174small-29488d97c3dd983c6130405fcee3df11a4d624c1.jpg"
                  alt=""
                  width={72}
                  height={72}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Banana</h3>
                      <div className="p-1 bg-yellow-50 rounded-sm">$3.59</div>
                    </div>
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="bg-yellow-50">$28.35</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-dart">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
