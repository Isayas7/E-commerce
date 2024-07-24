import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Image from "next/image";
import SearchBar from "./search-bar";
import NavbarIcons from "./navbar-icons";

const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-8 lg:16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex justify-between items-center md:hidden">
        <Link href="">
          <div className="text-2xl tracking-wide"> E-COM</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="h-full hidden md:flex items-center justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex  items-center gap-12">
          <Link href="" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={28} height={28} />
            <div className="text-2xl tracking-wide"> E-COM</div>
          </Link>
          <div className="hidden xl:flex gap-4 items-center">
            <Link href="">Home</Link>
            <Link href="">Shop</Link>
            <Link href="">Deals</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        {/* RIGHET */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
