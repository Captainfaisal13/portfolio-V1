import React from "react";

const ProjectButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="currentColor"
      viewBox="0 0 256 256"
      className="black"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
      <path
        d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
    </svg>
  );
};

export default ProjectButton;
