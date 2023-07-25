"use client";

import React from "react";
import LightModeLogo from "../assets/lightModeLogo";
import DarkModeLogo from "../assets/darkModeLogo";
import { useState } from "react";

const ToggleButton = () => {
  const [lightModeOn, setLightModeOn] = useState(true);
  return (
    <button
      className={`p-3 bg-${
        lightModeOn ? "gray-200" : "[#1f2937d9]"
      } rounded-md`}
      onClick={() => setLightModeOn(!lightModeOn)}
    >
      {(lightModeOn && <LightModeLogo />) || <DarkModeLogo />}
      {/* <LightModeLogo /> */}
      {/* rgba(229,231,235) */}
      {/* <DarkModeLogo /> */}
      {/* rgba(31,41,55) */}
    </button>
  );
};

export default ToggleButton;
