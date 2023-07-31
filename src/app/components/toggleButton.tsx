"use client";

import React from "react";
import LightModeLogo from "../assets/lightModeLogo";
import DarkModeLogo from "../assets/darkModeLogo";
import { useContext } from "react";
import { MyContext } from "./globalContext";

const ToggleButton = () => {
  const { lightModeOn, setLightModeOn }: any = useContext(MyContext);
  return (
    <button
      className={`h-10 w-10 rounded-md ${
        lightModeOn ? "bg-gray-200" : "bg-gray-800"
      }`}
      onClick={() => {
        setLightModeOn(!lightModeOn);
      }}
    >
      {(lightModeOn && <LightModeLogo />) || <DarkModeLogo />}
    </button>
  );
};

export default ToggleButton;
