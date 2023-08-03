"use client";
import React, { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
export const MyContext = createContext({});
const GlobalContext = ({ children }: any) => {
  const pathName = usePathname();
  console.log("path name", pathName);

  const [lightModeOn, setLightModeOn] = useState(
    localStorage.getItem("theme") === null ? true : false
  );

  const [currentNav, setCurrentNav] = useState(
    (pathName === "/about" && 1) || (pathName === "/contact" && 2) || 0
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathName]);

  useEffect(() => {
    if (!lightModeOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
    // console.log("theme", localStorage.getItem("theme"));
  }, [lightModeOn]);

  return (
    <MyContext.Provider
      value={{ lightModeOn, setLightModeOn, currentNav, setCurrentNav }}
    >
      <div className="">{children}</div>
    </MyContext.Provider>
  );
};

export default GlobalContext;
