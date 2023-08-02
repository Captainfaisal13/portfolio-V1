"use client";
import React, { useContext, useState } from "react";
import Twitter from "../assets/twitter";
import Github from "../assets/github";
import LinkedIn from "../assets/linkedIn";
import Leetcode from "../assets/leetcode";
import Gmail from "../assets/gmail";
import { MyContext } from "./globalContext";

const Footer = () => {
  const { lightModeOn }: any = useContext(MyContext);
  const [currentColor, setCurrentColor] = useState("rgb(107 114 128)");
  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="flex justify-center gap-4 text-[#6d6868] dark:text-gray-500">
        <a
          href="https://twitter.com/shaikhfaisal13_"
          target="_blank"
          className="hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
        >
          <Twitter />
        </a>
        <a
          href="https://github.com/Captainfaisal13"
          target="_blank"
          className="hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/shaikhfaisal13/"
          target="_blank"
          className="hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
        >
          <LinkedIn />
        </a>
        <a
          href="https://leetcode.com/captainFaisal/"
          target="_blank"
          className="hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
          onMouseOver={() =>
            setCurrentColor(!lightModeOn ? "#0cf2b2" : "#0097e6d9")
          }
          onMouseLeave={() => setCurrentColor("rgb(107 114 128)")}
        >
          <Leetcode currentColor={currentColor} />
        </a>
        <a
          href="mailto:shaikhfaisal3412@gmail.com"
          target="_blank"
          className="hover:text-[#0097e6d9] hover:dark:text-[#0cf2b2]"
        >
          <Gmail />
        </a>
      </div>
      <div className="text-[#6d6868] dark:text-gray-500 text-center font-bold">
        2023 - @Faisal Shaikh
      </div>
    </div>
  );
};

export default Footer;
