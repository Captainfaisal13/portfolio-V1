"use client";
import React, { useContext } from "react";
import Project from "./content.mdx";
import { MyContext } from "@/app/components/globalContext";
const Page = () => {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto min-h-screen pb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        CoinTrace: Your Ultimate Crypto Market Tracker{" "}
      </h2>
      <p className="dark:text-white">
        CoinTrace is a cutting-edge web application designed to provide you with
        real-time insights into the dynamic world of cryptocurrency markets.
        With a user-friendly interface and powerful features, CoinTrace empowers
        you to stay ahead of the curve by delivering the top 50 trending
        cryptocurrencies and their comprehensive descriptions, all in one place.
      </p>
      <div className="flex gap-4  mb-12 mt-2">
        <a
          className="p-2 text-blue-500 bg-blue-100 rounded-md font-medium"
          href="https://github.com/Captainfaisal13/CoinTracer"
          target="_blank"
        >
          Github Repo
        </a>
        <a
          href="https://coin-tracer.vercel.app/"
          target="_blank"
          className="p-2 text-blue-500 bg-blue-100 rounded-md font-medium"
        >
          Live Link
        </a>
      </div>
      <Project />
    </main>
  );
};

export default Page;
