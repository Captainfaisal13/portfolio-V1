"use client";
import React, { useEffect, useState } from "react";
import ToggleButton from "./toggleButton";
import NavButtons from "./navButtons";

const Navbar = () => {
  //   const [isScrolled, setIsScrolled] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", stickNavbar);

  //     return () => {
  //       window.removeEventListener("scroll", stickNavbar);
  //     };
  //   }, []);

  //   const stickNavbar = () => {
  //     if (window !== undefined) {
  //       let windowHeight = window.scrollY;
  //       //   windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
  //       console.log("windowHeight", windowHeight);
  //       if (windowHeight > 0) {
  //         setIsScrolled(true);
  //       } else {
  //         setIsScrolled(false);
  //       }
  //     }
  //   };

  return (
    <div
      className={`md:my-8 md:mx-8 sticky z-10 top-0 bg-white dark:bg-[#060912] bg-opacity-40`}
      style={{ backdropFilter: "saturate(180%) blur(20px)" }}
    >
      <nav
        className={`flex justify-between mx-auto rounded-md max-w-4xl p-8`}
        style={{ alignItems: "center" }}
      >
        <ToggleButton />
        <NavButtons />
      </nav>
    </div>
  );
};

export default Navbar;
