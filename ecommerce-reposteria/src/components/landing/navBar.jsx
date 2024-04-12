"use client";
import Link from "next/link";
import { useState } from "react";

// SVG ICONS
import { TablerMenu2 } from "../svg/tabler-menu";
import { RadixIconsCross2 } from "../svg/cancel"

const MyNavbar= () => {
  let [showMenu, setShowMenu] = useState(false);
 

  return (
    <nav className="flex relative z-100 justify-between items-center w-[100%] px-4 mx-auto bg-secondary">
      {/* LOGO */}
      <div>
        <p className="text-2xl text-tertiary py-4">Logo</p>
      </div>

      <div
        className={`md:static absolute md:min-h-fit left-0 ${
          showMenu ? "top-[100%]" : "top-[-300%]"
        } md:w-auto w-full flex items-center px-5 bg-violet-600 transition-all duration-500 ease-in-out z-[-10] md:z-0 md:bg-transparent py-4`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <Link className="hover:text-gray-300" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" href="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          className="bg-pink-300 py-2 px-4 rounded text-white hover:bg-pink-200"
        >
          Sign in
        </button>
        <button
          // onClick={() => {setShowMenu(!showMenu)}}
          onClick={()=>setShowMenu(!showMenu)}
          className="text-3xl md:hidden"
        >
          {showMenu ? <RadixIconsCross2/> : <TablerMenu2/> }
        </button>
      </div>
    </nav>
  );
}
export default MyNavbar;