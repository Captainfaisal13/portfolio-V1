import React from "react";
import Project from "./content.mdx";
const Page = () => {
  return (
    <main className="md:px-0 px-8 max-w-2xl m-auto min-h-screen pb-20">
      <h2 className="font-bold text-3xl pt-2 md:text-5xl tracking-tight mb-6 dark:text-white">
        Rokket Binge: Your Cinema Home
      </h2>
      <p className="dark:text-white">
        Rokket Binge is an innovative web application designed to elevate your
        entertainment experience by providing a comprehensive platform for
        discovering and exploring the latest trending movies and series. With
        its intuitive interface and powerful features, Rokket Binge lets you
        dive into a world of cinematic wonders, all at your fingertips.
      </p>
      <div className="flex gap-4  mb-12 mt-2">
        <a
          href="https://github.com/Captainfaisal13/RokketBinge"
          target="_blank"
          className="p-2 text-blue-500 bg-blue-100 rounded-md font-medium"
        >
          Github Repo
        </a>
        <a
          href="https://rokketbinge.netlify.app/"
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
