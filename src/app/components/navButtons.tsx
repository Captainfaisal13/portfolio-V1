"use client";
import React from "react";
import { useContext } from "react";
import { MyContext } from "./globalContext";
import Link from "next/link";

const NavButtons = () => {
  const { currentNav, setCurrentNav }: any = useContext(MyContext);
  return (
    <div className="text-[#060912d9] dark:text-white">
      <ul className="flex my-auto">
        <Link href={"/"} scroll={false}>
          <li
            className={`py-2 px-2 md:px-4 ${
              currentNav === 0 && "font-semibold"
            }`}
            onClick={() => setCurrentNav(0)}
          >
            <button>home</button>
          </li>
        </Link>
        <Link href={"/about"} scroll={false}>
          <li
            className={`py-2 px-2 md:px-4 ${
              currentNav === 1 && "font-semibold"
            }`}
            onClick={() => setCurrentNav(1)}
          >
            <button>about</button>
          </li>
        </Link>
        <Link href={"/contact"} scroll={false}>
          <li
            className={`py-2 px-2 md:px-4 ${
              currentNav === 2 && "font-semibold"
            }`}
            onClick={() => setCurrentNav(2)}
          >
            <button>contact</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavButtons;
