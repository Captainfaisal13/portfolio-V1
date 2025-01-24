"use client";
import React, { useContext } from "react";
import Project from "./content.mdx";
import { MyContext } from "@/app/components/globalContext";
const Page = () => {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto min-h-screen pb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-4 dark:text-white">
        EchoSphere: Let Your Voice Resonate Across the Infinite Sphere.{" "}
      </h2>
      <p className="dark:text-white">
        EchoSphere is a social media platform designed for users to express
        their thoughts and experiences through text, images, and videos. Whether
        it&apos;s a fleeting thought or a lasting memory, EchoSphere enables
        seamless interaction through likes, replies, reposts (reEcho), and
        shares. With personalized feeds, media-specific categories, and
        real-time updates, it redefines how people connect and engage with their
        community.
      </p>
      <div className="flex gap-4  mb-12 mt-2">
        <a
          className="p-2 text-blue-500 bg-blue-100 rounded-md font-medium"
          href="https://github.com/Captainfaisal13/EchoSphere-Frontend"
          target="_blank"
        >
          Github Repo
        </a>
        <a
          href="https://echosphere-frontend.vercel.app"
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
