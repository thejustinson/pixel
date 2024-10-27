"use client";
import { RiMenu3Line, RiMoonLine } from "@remixicon/react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="px-5 lg:px-10 py-5 flex text-lg justify-between items-center bg-white">
      <p className="font-extrabold text-xl cursor-pointer select-none">
        <Link href={"/"}>
          <Image src="/images/pixel-logo.png" alt="" width={150} height={100} className="w-[50px] md:w-[80px]"/>
        </Link>
      </p>
      <div></div>

      <div className="gap-x-5 font-semibold hidden lg:flex items-center">
        <Link href={"/about-us"}>
          <div className="hover:text-gray-500 cursor-pointer">About Us</div>
        </Link>
        <Link href={"/#our-work"}>
          <div className="hover:text-gray-500 cursor-pointer">Our Work</div>
        </Link>
        <Link href={"/#the-team"}>
          <div className="hover:text-gray-500 cursor-pointer">The Team</div>
        </Link>
        <Link href={"/#news"}>
          <div className="hover:text-gray-500 cursor-pointer">News</div>
        </Link>
        <Link href={"/#contact-us"}>
          <div className="hover:text-gray-500 cursor-pointer">Contact Us</div>
        </Link>
        <Link href={"/#we-are-hiring"}>
          <div className="hover:text-gray-500 cursor-pointer">We're Hiring</div>
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => {
            setIsMobileNavOpen(true);
          }}
        >
          <RiMenu3Line />
        </button>
      </div>

      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </nav>
  );
};

export default NavBar;
