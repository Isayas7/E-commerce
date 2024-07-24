import Image from "next/image";
import React from "react";

const Cart = () => {
  const cartItems = true;
  return (
    <div className=" w-max absolute top-10 right-0 p-4 bg-white  rounded-md shadow-[0_3px_10px_rgb(0,0,0,2)] flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/*  LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEMS */}
            <div className="flex gap-4">
              <Image
                alt="product"
                width={72}
                height={96}
                src="https://www.pexels.com/photo/illuminated-high-rise-building-under-a-black-sky-11256255/"
                className="object-cover rounded-md"
              />
              <div className="fle flex-col justify-between w-full">
                {/* TOP */}
                <div className="flex flex-col">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 rounded-sm bg-gray-50">49 ETB</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Lorem ipsum</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">quty. 2</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                alt="product"
                width={72}
                height={96}
                src="https://www.pexels.com/photo/illuminated-high-rise-building-under-a-black-sky-11256255/"
                className="object-cover rounded-md"
              />
              <div className="fle flex-col justify-between w-full">
                {/* TOP */}
                <div className="flex flex-col">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 rounded-sm bg-gray-50">49 ETB</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Lorem ipsum</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">quty. 2</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex justify-between items-center font-semibold">
            <span>SubTotal</span>
            <span>49ETB</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">
            Shipping and taxes are calculted at checkout.
          </p>
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
              View cart
            </button>
            <button className="rounded-md py-3 px-4 bg-black text-white">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
