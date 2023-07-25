"use client";
import React from "react";
import { useState } from "react";

const NavButtons = () => {
  const [currentNav, setCurrentNav] = useState(0);
  return (
    <div>
      <ul className="flex">
        <li
          className={`py-2 px-4 ${currentNav === 0 && "font-bold"}`}
          onClick={() => setCurrentNav(0)}
        >
          <button>home</button>
        </li>
        <li
          className={`py-2 px-4 ${currentNav === 1 && "font-bold"}`}
          onClick={() => setCurrentNav(1)}
        >
          <button>about</button>
        </li>
        <li
          className={`py-2 px-4 ${currentNav === 2 && "font-bold"}`}
          onClick={() => setCurrentNav(2)}
        >
          <button>blog</button>
        </li>
      </ul>
    </div>
  );
};

export default NavButtons;
