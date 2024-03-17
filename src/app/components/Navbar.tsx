import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/../public/vercel.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex mt-12 ml-72 mb-9 font-semibold ">
        <span className="text-4xl font-bold">
          Umer<span className=" text-orange-600 mr-56 ">.</span>
        </span>
        <nav className=" flex gap-10">
          <NavItem>Home</NavItem>
          <NavItem>Project</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Services</NavItem>
        </nav>
        <button className=" border border-black absolute p-2  px-6 hover:bg-black hover:text-white ml-[825px] -mt-3 transition duration-300">
          Let&apos;s Chat
        </button>
      </div>
      <hr className="mx-72"></hr>
    </>
  );
};

export interface navType {
  children: React.ReactNode;
}

const NavItem = ({ children }: navType) => {
  return (
    <Link className="group transition-all duration-300 ease-in-out" href="#">
      <span className="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {children}
      </span>
    </Link>
  );
};

export default Navbar;
