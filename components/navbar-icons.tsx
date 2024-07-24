"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cart from "./cart";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) router.push("/login");
    setIsProfileOpen((perv) => !perv);
  };
  return (
    <div className="flex items-center gap-4  xl:gap-6 relative">
      <Image
        alt="profile"
        className="cursor-pointer"
        width={22}
        height={22}
        src="/profile.png"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-10 -left-12 text-sm flex flex-col gap-2 shadow-[0_3px_10px_rgb(0,0,0,2)] z-10">
          <Link href="/">Profile</Link>
          <Link href="/">Logout</Link>
        </div>
      )}
      <Image
        alt="notification"
        className="cursor-pointer"
        width={22}
        height={22}
        src="/notification.png"
      />
      <div className="relative">
        <Image
          alt="cart"
          className="cursor-pointer"
          width={22}
          height={22}
          src="/cart.png"
          onClick={() => setIsCartOpen((perv) => !perv)}
        />
        <div className="absolute -top-4 -right-4 h-6 w-6 text-center text-white bg-badgeColor rounded-full">
          1
        </div>
      </div>

      {isCartOpen && <Cart />}
    </div>
  );
};

export default NavbarIcons;
