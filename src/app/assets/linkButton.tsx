import React from "react";

const LinkButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="#059669"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="64 88 16 128 64 168"
        fill="none"
        stroke="#059669"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></polyline>
      <polyline
        points="192 88 240 128 192 168"
        fill="none"
        stroke="#059669"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></polyline>
      <line
        x1="160"
        y1="40"
        x2="96"
        y2="216"
        fill="none"
        stroke="#059669"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
    </svg>
  );
};

export default LinkButton;
